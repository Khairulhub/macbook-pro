
function updateMenu(menu,cost,oftionUpdate){
    const extraMemoryCost = document.getElementById(menu +'-cost');
    let extraMemoryCostText = extraMemoryCost.innerText ;
    if(oftionUpdate){
       extraMemoryCost.innerText = parseFloat(cost);
    //    parseInt(extraMemoryCostText); //===========================>
       
    }
    else{
        extraMemoryCost.innerText = parseFloat(cost);
        // parseInt(extraMemoryCostText);   //==============================>
    }
    
   
}
document.getElementById('memory-increase').addEventListener('click',function(){
    // const extraMemoryCost = document.getElementById('memory-cost');
    // const extraMemoryCostText = extraMemoryCost.innerText ;
    updateMenu('memory',180,true);
    totalCalculator();
           
});
document.getElementById('memory-fixed').addEventListener('click',function(){
            // const extraMemoryCost = document.getElementById('memory-cost');
            // const extraMemoryCostText = extraMemoryCost.innerText ;
            updateMenu('memory',0,false);
            totalCalculator();
            
});
// document.getElementById('storage-fixed').addEventListener('click',function(){
//     memory(false);   //=========================================>
// })


/* function 2 */

document.getElementById('storage-fixed').addEventListener('click',function(){
                // const extraStrogeCost = document.getElementById('storage-cost');
                // const extraStrogeCostText = extraStrogeCost.innerText ;

                
    updateMenu('storage',0,true);
    totalCalculator();

    
   
});
document.getElementById('storage-increase-1').addEventListener('click',function(){
                // const extraStrogeCost = document.getElementById('storage-cost');
                // extraStrogeCost.innerText = 100;
               
    updateMenu('storage',100,true);
    totalCalculator();
    
});
document.getElementById('storage-increase-2').addEventListener('click',function(){
                // const extraStrogeCost = document.getElementById('storage-cost');
                // extraStrogeCost.innerText = 180;
                
    updateMenu('storage',180,false);
    totalCalculator();
});

/* function 3 */
                             

document.getElementById('delivery-fixed').addEventListener('click',function(){
                // const deliveryCost = document.getElementById('delivery-cost');
                // const deliveryCostText = deliveryCost.innerText;
                // deliveryCost.innerText = 0;
                // parseInt(deliveryCostText);
                // deliveryUpdate(true);
    updateMenu('delivery',0,true);
    totalCalculator();
});
document.getElementById('delivery-increase').addEventListener('click',function(){
                        // const deliveryCost = document.getElementById('delivery-cost');
                        // const deliveryCostText = deliveryCost.innerText;
                        // deliveryCost.innerText = 20;
                        // parseInt(deliveryCostText);
                        // deliveryUpdate(false);
    updateMenu('delivery',20,false);
    totalCalculator();
});
//====================================================================================================


/* step 4 total function */

function totalCalculator(){
    const bestPriceText =  document.getElementById('best-price');
    const bestPrice = parseFloat(bestPriceText.innerText);
    const memoryCostText = document.getElementById('memory-cost');
    const memoryCost = parseFloat(memoryCostText.innerText);
    const storageCostText = document.getElementById('storage-cost');
    const storageCost = parseFloat(storageCostText.innerText);
    const deliveryCostText = document.getElementById('delivery-cost');
    const deliveryCost = parseFloat(deliveryCostText.innerText);
    // const totalPrice =  bestPrice + memoryCost + storageCost + deliveryCost;
    
  
    const subTotal  = document.getElementById('total-cost');
    const mainTotalText = document.getElementById('main-total-price');
     subTotal.innerText = bestPrice + memoryCost + storageCost + deliveryCost;
     mainTotalText.innerText = subTotal.innerText;

   
}


/* step 6 */
                            // function getTotalPrice(){
                            //     const bestPriceText =  document.getElementById('best-price');
                            //     const bestPrice = parseFloat(bestPriceText.innerText);
                            //     const memoryCostText = document.getElementById('memory-cost');
                            //     const memoryCost = parseFloat(memoryCostText.innerText);
                            //     const storageCostText = document.getElementById('storage-cost');
                            //     const storageCost = parseFloat(storageCostText.innerText);
                            //     const deliveryCostText = document.getElementById('delivery-cost');
                            //     const deliveryCost = parseFloat(deliveryCostText.innerText);
                            //     const totalPrice =  bestPrice + memoryCost + storageCost + deliveryCost;
                            //     return  totalPrice;
                            // }
document.getElementById('promo-btn').addEventListener('click',function(){
    const promoInput = document.getElementById('promo-input').value;
    
    const promoCode = 'stevekaku';
    if(promoInput === promoCode){
        // const subtotal = getTotalPrice();
        // const subtotal = totalCalculator();
        // const subTotal = parseFloat(subtotal) * .2 ;
        const totalCostValueText= document.getElementById('total-cost');
        const totalCostValue = totalCostValueText.innerText;
        const subTotalDom = document.getElementById('main-total-price');
        // const subTotalCost = subTotalDom.innerText;

        subTotalDom.innerText = totalCostValue - (totalCostValue*.2);
        // subTotalDom.innerText = subtotal - subTotal;
    }
    document.getElementById('promo-input').value = '';
    
});






// const memoryCost = document.getElementById('memory-cost').innerText;

// const memoryCostValue = parseInt(memoryCost);
// // console.log(memoryCostText);

// const storageCost = document.getElementById('storage-cost').innerText;
// const storageCostValue = parseInt(storageCost)
// // const storageCostText = parseInt(storageCost.innerText);
// const deliveryCost = document.getElementById('delivery-cost').innerText;
// deliveryCostValue = parseInt(deliveryCost)
// // const deliveryCostText = parseInt(deliveryCost.innerText);



// // let total = totalPriceText + memoryCostText + storageCostText + deliveryCostText;
// const total = totalPriceText + memoryCostValue + storageCostValue + deliveryCost;
// console.log(total);
