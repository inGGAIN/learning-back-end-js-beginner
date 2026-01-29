import { EventEmitter } from "events";

const myEventEmitter = new EventEmitter();

const makeCoffe = (name) => {
    console.log(`Kopi ${name} telah dibuat`);
};

const makeBill = (price) => {
    console.log(`Bill sebesar ${price} sudah dibuat`);
}

const addTopping = (topping) => {
    console.log(`Toping berupa ${topping} telah ditambahkan`);
}

const onCoffeOrderedListener = ({ name, price, topping }) => {
    makeCoffe(name);
    makeBill(price);
    addTopping(topping);
}

myEventEmitter.on('coffe-order', onCoffeOrderedListener);

myEventEmitter.emit('coffe-order', { name: 'Latte', price: 20000, topping: 'Boba' })