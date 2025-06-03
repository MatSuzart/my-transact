import { Product } from "@/generated/prisma"
import { create } from "zustand";

type Store = {
    stuff: Product[];
    setProducts: (data: Product[])=>void;

}

export const useProducts = create<Store>((set)=>({
    stuff: [],
    setProducts: (data) =>set ({stuff: data})
}));