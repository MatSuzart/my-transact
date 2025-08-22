"use client"

import { DialogTitle } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader} from "../ui/dialog";
import { useAuth } from "@/app/stores/auth";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

type Steps = "EMAIL" | "SIGNUP" | "SIGNIN";

export const LoginAreaDialog = ()=>{
    const auth = useAuth();

    const [ step, setStep] = useState<Steps>("EMAIL");

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
                    {step === 'EMAIL' && <div>E-mail</div>}
                    {step === 'SIGNIN' && <div>Login</div>}
                    {step === 'SIGNUP' && <div>SIGNUP</div>}
                </div>
            </DialogContent>
        </Dialog>
    )
}