import Link from "next/link";
import Login from "./Login";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../pages/api/auth/[...nextauth]"
import Logged from "./Logged";

export default async function Nav() {
    const session = await getServerSession(authOptions)
    console.log(session)
    return(
        <nav>
            <Link href={"/"}>
            </Link>
            <ul>
                {!session?.user && <Login/>}
                {session?.user && <Logged/>}
                <Login/>
            </ul>
        </nav>
    )
}