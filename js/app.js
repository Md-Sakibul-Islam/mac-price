// function to get total price
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

// function for set total amount
function setPrice(totalAmount) {
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = totalAmount;

    const total = document.getElementById('total');
    total.innerText = totalAmount;
}

//function for set product cost 
function setCost(ProductId, price) {
    const productCost = document.getElementById(ProductId);
    productCost.innerText = price;
}

// 8GB button click handler 
document.getElementById('bntEight').addEventListener('click', function () {

    setCost('memory', 0);
    const total = getTotalPrice();
    setPrice(total);
});
// 16GB button click handler 
document.getElementById('btnSixteen').addEventListener('click', function () {
    setCost('memory', 180);
    const total = getTotalPrice();
    setPrice(total);
});
// 256GB storage button click handler 
document.getElementById('btnStorageOne').addEventListener('click', function () {
    setCost('storage', 0);
    const total = getTotalPrice();
    setPrice(total);
});

// 512GB storage button click handler 
document.getElementById('btnStorageTwo').addEventListener('click', function () {
    setCost('storage', 100);
    const total = getTotalPrice();
    setPrice(total);
});
// 1TB storage button click handler 
document.getElementById('btnStorageThree').addEventListener('click', function () {
    setCost('storage', 180);
    const total = getTotalPrice();
    setPrice(total);
});
// Free delivery button click handler
document.getElementById('btnFreeCharge').addEventListener('click', function () {
    setCost('deliveryCost', 0);
    const total = getTotalPrice();
    setPrice(total);
});
//  delivery charge button click handler
document.getElementById('btnCharge').addEventListener('click', function () {
    setCost('deliveryCost', 20);
    const total = getTotalPrice();
    setPrice(total);
});

// apply button click handler 
document.getElementById('apply').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-code').value;
    const totalAmount = document.getElementById('total');
    if (promoCode == 'stevekaku') {
        const total = getTotalPrice() * 0.8;
        totalAmount.innerText = total;
    }
    document.getElementById('promo-code').value = '';
});