import { checkFieldError } from "@/lib/utils";
import { Input } from "../ui/input";
import { Component, ComponentProps } from "react"

type Props = ComponentProps<"input"> & {
    name: string;
    erros: any;
}
export const CustomInput = (props: Props)=>{
    const error = checkFieldError(props.name,props.erros);

    return (
        <>
            <Input
                {...props}
                className="{`${error ? 'border border-red-8000' : ''}`}"
            />
            {error &&
                <div className="mt-1 text-sm text-red-8000">{error}</div>
            }
        </>
    );
}