const cart = document.getElementById('cart');
//console.log(cart[0]);
function updateProductNumber(productInputField,showItemPrice,price, isIncrease) {
    
    let productNumber = productInputField.value;
    if (isIncrease) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (parseInt(productNumber) > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInputField.value = productNumber;
    showItemPrice.innerText = productNumber * price;
}
function updateProductNumberManualy(itemNumber, price, itemPriceShow) {
    const item = parseInt(itemNumber.value);
    if (item > -1) {
        itemPriceShow.innerText = item*price;
    }
    else {
        itemPriceShow.innerText = 0;
    }

    
}
cart.addEventListener('click', function (e) {
    
    const a = e.target;
    //console.log(e);
    if (a.classList.contains('fa-plus')) {
        const parent = getParent(a, true);
        const inputTxt = parent.children[1];
        const showItemPrice = parent.nextElementSibling.children[0];
        const price = getPrice(parent);
        updateProductNumber(inputTxt, showItemPrice, price, true);
    }
    else if (a.classList.contains('fa-minus')) {
        const parent = getParent(a, true);
        const inputTxt = parent.children[1];
        const price = getPrice(parent);
        const showItemPrice = parent.nextElementSibling.children[0];
        updateProductNumber(inputTxt, showItemPrice, price, false);
    }
    else if (a.classList.contains('plus')) {
        const parent = getParent(a, false);
        const price = getPrice(parent);
        const inputTxt = parent.children[1];
        const showItemPrice = parent.nextElementSibling.children[0];
        updateProductNumber(inputTxt, showItemPrice, price, true);
    }
    else if (a.classList.contains('minus')) {
        const parent = getParent(a, false);
        const inputTxt = parent.children[1];
        const price = getPrice(parent);
        const showItemPrice = parent.nextElementSibling.children[0];
        updateProductNumber(inputTxt, showItemPrice, price, false);
    }
    else if (a.classList.contains('input')) {
        a.addEventListener('input', function () {
            
            const parent = getParent(a, false);
            const price = getPrice(parent);
            const priceShow = getPriceShowText(parent);
            updateProductNumberManualy(a, price, priceShow);
            
                
                calcutaleTotal();
            
        });
        a.addEventListener('blur', function () {
            if (a.value == ''||a.value<0||isNaN(parseInt(a.value))) {
                a.value = 0;
            }
        });
        
    }
    calcutaleTotal();
    
    
});

// const ab = document.getElementById('test');
// const b = ab.querySelector('.abc');
// //b.innerHTML = '100';
// console.log(b.innerText);

function getParent(e,twoCase) {
    if (twoCase) {
        return e.parentElement.parentElement;
    }
    else {
        return e.parentElement;
    }
}

function getPrice(p) {
    const price = p.parentElement.parentElement.querySelector('.price').innerText;
    return price;
}
function getPriceShowText(p) {
    const price = p.parentElement.parentElement.querySelector('.item-total');
    return price;
}

function calcutaleTotal() {
    const itemTotalPrice = cart.querySelectorAll('.item-total');
    let subTotal=0;
    for (const e of itemTotalPrice) {
        let inputTxt = getParent(e,true).children[0].children[1].value;
        let price = getPrice(getParent(e, true));
        if (inputTxt > -1) {
            
            subTotal += parseFloat(inputTxt)*price;
        }
    }
    
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    //console.log(subTotal);
    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = totalPrice;
}
calcutaleTotal();

//input event

