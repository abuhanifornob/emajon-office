import { getLocatDataDb } from "../utilities/fakedb";

export const productAndCartLoaders=async()=>{

    // we get load data
   const loadProduct=await fetch('products.json');
   const products=await loadProduct.json();

   // we get cart
   const saveCart=getLocatDataDb();
   let previousCart=[];

   for(const id in saveCart){
        const findSotredCart=products.find(product=> product.id===id);
        if(findSotredCart){
           const quantity=saveCart[id];
           findSotredCart.quantity=quantity;
           previousCart.push(findSotredCart);
        }
  
   }

   return {products,previousCart}


}