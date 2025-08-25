import { Prisma } from "@/generated/prisma"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const decimalToMoney = (price:string | number | Prisma.Decimal)=>{
  return parseFloat(price.toString())
  .toLocaleString('pt-BR',{
    style:'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits:2
  })
}

export const checkFieldError = (fieldName:string, erros:any) =>{
  if(erros === null) return false;
  if(!erros[fieldName]) return false;
  return erros[fieldName][0];
}