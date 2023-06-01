let btn = document.getElementById('btn');
let mainContainer = document.getElementById('main_container');

// class ShopingCard{
//     constructor (id){
//         this.id=id;
//     };
//     getPropertys  (){
//         let order = async ()=>{
//             const response = await fetch("https://dummyjson.com/carts");
//             const orderPropertys = await response.json();
//             return orderPropertys;
//         };
//        return order();
//     };
// };

// btn.addEventListener('click', (ev)=>{
//     let scId= document.getElementById('SC-id');
//     const ShopingCardObj = new ShopingCard(scId.value);
//     let prop = ShopingCardObj.getPropertys();
//     console.log(prop);
// });

btn.addEventListener('click', (ev) => {
    let scId = document.getElementById('SC-id');
    let orderDiv = document.getElementById('order-propertys');

    let orderInfo = async () => {  
        const response = await fetch("https://dummyjson.com/carts");
        const orderPropertys = await response.json();
        console.log(orderPropertys);
        console.log(orderPropertys.carts[scId.value - 1].products);
        orderPropertys.carts[scId.value - 1].products.forEach(inf => {
            let p = document.createElement('p');
            orderDiv.appendChild(p);
            p.innerHTML = `product id: ${inf.id}, name: ${inf.title}, price: ${inf.price}, quantity: ${inf.quantity}, <br>
            total: ${inf.total}, discountPrcentage: ${inf.discountPercentage}, discounted price: ${inf.discountedPrice}`;
        });
        let p = document.createElement('p');
            orderDiv.appendChild(p);
            p.innerHTML = `total: ${orderPropertys.carts[scId.value - 1].total}, discounted total: ${orderPropertys.carts[scId.value - 1].discountedTotal}
            total products: ${orderPropertys.carts[scId.value - 1].totalProducts}, total quantity: ${orderPropertys.carts[scId.value - 1].totalQuantity}`;
        return orderPropertys;
    };
    orderInfo();
});
