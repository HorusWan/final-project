import prisma from "../../../prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    if(req.method === "POST"){
        const session = await getServerSession(req,res,authOptions)
        if(!session) 
        return res.status(401).json

        const title: string = req.body.title

        const prismaUser = await prisma.user.findUnique({
            where: {email: session?.user?.email},
        })

        try{
            const result = await prisma.post.create({
                data:{
                    title,
                    userID: prismaUser.id,
                },
            })
            res.status(200).json(result)
        }catch(err){
            res.status(403).json
        }
    }
}