
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
                    // function storage(storageupdate){
                    //     const extraStrogeCost = document.getElementById('storage-cost');
                    //     const extraStrogeCostText = extraStrogeCost.innerText ;
                    //     if(storageupdate == true){
                    //         extraStrogeCost.innerText = 0;
                    //         parseInt(extraStrogeCostText);
                    //     }
                    //     else if(storageupdate==true || storageupdate!=false){
                    //         extraStrogeCost.innerText = 100; //==============================>
                    //         parseInt(extraStrogeCostText);
                    //     }
                    //     else{
                    //         extraStrogeCost.innerText = 180;
                    //         parseInt(extraStrogeCostText);
                    //     }
                    // }

document.getElementById('storage-fixed').addEventListener('click',function(){
                // const extraStrogeCost = document.getElementById('storage-cost');
                // const extraStrogeCostText = extraStrogeCost.innerText ;

                // storage(true);
    updateMenu('storage',0,true);
    totalCalculator();

    
   
});
document.getElementById('storage-increase-1').addEventListener('click',function(){
                // const extraStrogeCost = document.getElementById('storage-cost');
                // extraStrogeCost.innerText = 100;
                // storage();
    updateMenu('storage',100,true);
    totalCalculator();
    
});
document.getElementById('storage-increase-2').addEventListener('click',function(){
                // const extraStrogeCost = document.getElementById('storage-cost');
                // extraStrogeCost.innerText = 180;
                // storage(false);
    updateMenu('storage',180,false);
    totalCalculator();
});

/* function 3 */
                                // function deliveryUpdate(delivery){
                                //     const deliveryCost = document.getElementById('delivery-cost');
                                //     const deliveryCostText = deliveryCost.innerText;
                                //     if(delivery){
                                //         deliveryCost.innerText = 0;
                                //         parseInt(deliveryCostText);
                                //     }
                                //     else{
                                //         deliveryCost.innerText = 20;
                                //         parseInt(deliveryCostText);
                                //     }
                                // }

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

// function getInputPriceValue(menu){
//     const totalPrice = document.getElementById(menu+'-cost');
//     const totalPriceText = parseFloat(totalPrice.innerText);
//     return totalPriceText;
// }


function totalCalculator(){
    const bestPriceText =  document.getElementById('best-price');
    const bestPrice = parseFloat(bestPriceText.innerText);
    const memoryCostText = document.getElementById('memory-cost');
    const memoryCost = parseFloat(memoryCostText.innerText);
    const storageCostText = document.getElementById('storage-cost');
    const storageCost = parseFloat(storageCostText.innerText);
    const deliveryCostText = document.getElementById('delivery-cost');
    const deliveryCost = parseFloat(deliveryCostText.innerText);
    const totalPrice =  bestPrice + memoryCost + storageCost + deliveryCost;
  
    const subTotal  = document.getElementById('total-cost');
    return subTotal.innerText = totalPrice;

   
}


const mainTotalText = document.getElementById('main-total-price');
const mainTotal = mainTotalText.innerText;

const updateMainTotal = totalCalculator();



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
