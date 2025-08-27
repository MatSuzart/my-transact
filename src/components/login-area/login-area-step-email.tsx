"use client"

import { use, useState } from "react";
import { CustomInput } from "../layout/custom-input";
import { Button } from "../ui/button";
import z from 'zod';
import { api } from "@/lib/axios";

const schema = z.object({
    email: z.string().email('Please enter a valid email address')
});


type Props ={
    onValidate: (hasEmail: boolean, email: string) =>void;
}   

export const LoginAreaStepEmail = ({onValidate}:Props)=>{
    const [loading, setLoading] = useState(false);
    const [erros,setErros] = useState<any>(null);
    const [emailField, setEmailField] = useState('')

    const handleButton = async () =>{
        setErros(null);
        const validData = schema.safeParse({
            email: emailField
        });
        if(!validData.success){
            setErros(validData.error.flatten().fieldErros);
            return false;
        }

        try{
            setLoading(true);
            const emailReq = await api.post('/auth/validate_email/',{
                email: validData.data.email
            }); 
            setLoading(false);
                onValidate(
                emailReq.data.exists ? true : false,
                validData.data.email
            );
        }catch(err) {
            setLoading(false);
        }
    }

    return (
        <>
        <div>
            <p className="mb-2">Enter Your E-mail</p>
            <CustomInput 
                name="email"
                erros={erros}
                disabled={loading}
                type="email"
                value={emailField}
                onChange={e=> setEmailField(e.target.value)}
            />
        </div>
        <Button 
        disabled={loading}
        onClick={handleButton}
        > Continue</Button>
        </>
    );
}