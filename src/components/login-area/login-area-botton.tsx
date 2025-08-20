"use client"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { Link } from "lucide-react";
import { useAuth } from "@/app/stores/auth";

type Props = {
    initialState: boolean;
}

export const LoginAreaBotton = ({ initialState }: Props) =>{
    const auth = useAuth();
    const[authState, setAuthState] = useState<boolean>(initialState);

    useEffect(()=> {
        setAuthState(auth.token? true: false)
    }, [auth]);

    const handleLogout = () => {
        auth.setToken(null);    
    }

    if(authState) {
        return (
            <>
                <Link href="/orders">
                    <Button>My orders</Button>
                </Link>
                <Button onClick={handleLogout}>Logout</Button>
            </>
        );
    }else {
        return (
        <Button onClick={()=> auth.setOpen(true)}>SignUp / Register</Button>
    );
    }
}