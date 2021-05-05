
const list = document.querySelector('.list');
const iceCreams = {

    55: {
        "name": 'Blue',
        "price": '2.99'
    },
    56: {
        "name": 'Chocolate',
        "price": '1.99'
    },
    57: {
        "name": 'Vanilla',
        "price": '1.99'
    },
    59: {
        "name": 'Trio',
        "price": '3.99'
    }
}
let item = [];
let cost = [];

function addToCart(x) {
    const span = `<span class="price">$${iceCreams[x].price}</span>`
    const result = iceCreams[x].name + " " + span;
    if (item.includes(iceCreams[x]) === false) item.push(result);
    cost.push(iceCreams[x].price);

}

function cart() {
    list.innerHTML = "";
    for (let i = 0; i < item.length; i++) {
        let text = item[i];
        let listItem = document.createElement("LI");
        listItem.innerHTML = text;
        list.appendChild(listItem);
        listItem.style.textAlign = 'left';
    }
    const btn = document.querySelector('.bill');
    const total = cost.reduce(add);

    function add(accumulator, a) {
        return parseInt(accumulator) + parseInt(a);
    }
    console.log(total);
    btn.innerHTML = `Total: $${total}`;
}