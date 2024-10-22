async function display(){
    let response=await fetch("https://dummyjson.com/products");
    let data= await response.json();
 
 let show=data.products.map((products)=>{
    return products.warrantyInformation
})
console.log(show[29

    
]);

}
display();
