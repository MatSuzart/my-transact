"use client"

import { use, useState } from "react";
import { CustomInput } from "../layout/custom-input";
import { Button } from "../ui/button";

type Props ={
    onValidate: (hasEmail: boolean, email: string) =>void;
}   

export const LoginAreaStepEmail = ({onValidate}:Props)=>{
    const [loading, setLoading] = useState(false);
    const [erros,setErros] = useState<any>(null);
    const [emailField, setEmailField] = useState('')

    const handleButton = async () =>{
        
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