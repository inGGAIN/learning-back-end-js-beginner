import {EventEmitter} from 'events';

const myEventListener = new EventEmitter();

const makeCoffe = ({name}) => {
    console.log(`Kopi ${name} telah dibuat`);
};

const makeBill = ({ price }) => {
    console.log(`Bill sebesar ${price} telah dibuat`);
};

const addTopping = ({ topping }) => {
    console.log(`Toping berupa ${topping} telah ditambahkan`);
};

myEventListener.on('coffe-order', makeCoffe);
myEventListener.on('coffe-order', makeBill);
myEventListener.on('coffe-order', addTopping);

myEventListener.emit('coffe-order', {name: 'Tubruk', price: 15000, topping: 'coklat'});