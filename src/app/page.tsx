import { ProductList } from "@/components/home/product-list";
import { Header } from "@/components/layout/header";
import { api } from "@/lib/axios";

export default async function Page(){
  const productReq = await api.get('/products');
  const products = productReq.data.products ?? [];
  
  return (
    <div>
      <Header />
      <main className="container mx-auto mb-10">
          <ProductList products={products}/>
      </main>
    </div>
  );
}