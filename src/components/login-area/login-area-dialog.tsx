"use client"

import { DialogTitle } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader} from "../ui/dialog";
import { useAuth } from "@/app/stores/auth";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { LoginAreaStepEmail } from "./login-area-step-email";
import { getCookie } from "cookies-next/client";

type Steps = "EMAIL" | "SIGNUP" | "SIGNIN";

export const LoginAreaDialog = ()=>{
    const auth = useAuth();

    const [ step, setStep] = useState<Steps>("EMAIL");
    const [emailField,setEmailField] = useState('');

    useEffect(()=>{
        const token = getCookie('token');
        if(token) auth.setToken(token) 
    }, [])

    const handleStepEmail = (hasEmail:boolean, email:string) =>{
        setEmailField(email);
        if(hasEmail){
            setStep('SIGNIN');
        }else{
            setStep('SIGNUP');
        }
    }

    return (
        <Dialog
        open={auth.open}
        onOpenChange={open=>auth.setOpen(open)}
        >
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        {step !== 'EMAIL' &&
                            <Button 
                                variant="ghost"
                                size="icon"
                                onClick={()=>setStep('EMAIL')}
                            />
                        }
                        {step==='EMAIL' && "Login / Sign Up"}
                        {step==='SIGNUP' && "Sign Up"}
                        {step ==='SIGNIN' && "Login"}
                    </DialogTitle>
                </DialogHeader>

                <div className="flex flex-col gap-4">
                    {step === 'EMAIL' && <div><LoginAreaStepEmail onValidate={handleStepEmail}/>
                    </div>}
                    {step === 'SIGNIN' && <div>Login</div>}
                    {step === 'SIGNUP' && <div>SIGNUP</div>}
                </div>
            </DialogContent>
        </Dialog>
    )
}