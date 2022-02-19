const phonePrice = 1123;
const casePrice = 80;

function initialItemPrice(product, price) {
    const productTotal = document.getElementById(product+'-total');
    const productInput = document.getElementById(product+'-number');
    const productNumber =parseInt (productInput.value);
    productTotal.innerHTML = productNumber * price;
}
initialItemPrice('case', 80);
initialItemPrice('phone', 1123);
function updateProductNumber(product,price,isIncrease) {
    const productInput = document.getElementById(product+'-number');
    let productNumber = productInput.value;
    if (isIncrease) {
        
        productNumber = parseInt(productNumber) + 1;
    }
    else if (parseInt(productNumber) > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    //
    const productTotal = document.getElementById(product+'-total');
    productTotal.value = productNumber * price;
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone')*phonePrice;
    const caseTotal = getInputValue('case') * casePrice;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    //update on th html

    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = totalPrice;



}
calculateTotal();
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', phonePrice, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1123, false);
});
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case',80,true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case',80,false);
});