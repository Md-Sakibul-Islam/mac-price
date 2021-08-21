function getTotalPrice() {
    const bestPrice = document.getElementById('bestPrice').innerText;
    const bestPriceNumber = parseInt(bestPrice);

    const memoryPrice = document.getElementById('memory').innerText;
    const memoryPriceNumber = parseInt(memoryPrice);

    const storagePrice = document.getElementById('storage').innerText;
    const storagePriceNumber = parseInt(storagePrice);

    const deliveryPrice = document.getElementById('deliveryCost').innerText;
    const deliveryPriceNumber = parseInt(deliveryPrice);

    const total = bestPriceNumber + memoryPriceNumber + storagePriceNumber + deliveryPriceNumber;
    return total;
}

function setPrice(totalAmount){
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = totalAmount;
  
    const total = document.getElementById('total');
    total.innerText = totalAmount; 
}


function setCost(ProductId,price){
    const memoryPrice = document.getElementById(ProductId);
    memoryPrice.innerText = price;
}

document.getElementById('bntEight').addEventListener('click',function(){
    
    setCost('memory',0);
    const total =  getTotalPrice();
    setPrice(total);
});

document.getElementById('btnSixteen').addEventListener('click',function(){
    setCost('memory',180);
    const total =  getTotalPrice();
    setPrice(total);
});

document.getElementById('btnStorageOne').addEventListener('click',function(){
    setCost('storage',0);
    const total =  getTotalPrice();
    setPrice(total);
});
document.getElementById('btnStorageTwo').addEventListener('click',function(){
    setCost('storage',100);
    const total =  getTotalPrice();
  setPrice(total);
});
document.getElementById('btnStorageThree').addEventListener('click',function(){
    setCost('storage',180);
    const total =  getTotalPrice();
  setPrice(total);
});

document.getElementById('btnFreeCharge').addEventListener('click',function(){
    setCost('deliveryCost',0);
    const total =  getTotalPrice();
    setPrice(total);
});
document.getElementById('btnCharge').addEventListener('click',function(){
    setCost('deliveryCost',20);
    const total =  getTotalPrice();
    setPrice(total);
});
document.getElementById('apply').addEventListener('click',function(){
    const promoCode =  document.getElementById('promo-code').value;
    const totalAmount = document.getElementById('total');
  
  
  
    if(promoCode == 'stevekaku'){
       
    const total = getTotalPrice() * 0.8;
    totalAmount.innerText = total;
        
        
    }
    document.getElementById('promo-code').value='';
  });