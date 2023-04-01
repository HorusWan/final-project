import { Prisma, PrismaClient } from "@prisma/client";

const client = globalThis.prisma || new PrismaClient()
if(process.env.NODE_ENV !== "production") globalThis.Prisma = client

export default client
