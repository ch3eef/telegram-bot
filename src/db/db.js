import pizzaImg from '../images/pizza.png';
import burgerImg from '../images/burger.png';
import colaImg from '../images/coca.png';
import saladImg from '../images/salad.png';
import waterImg from '../images/water.png';
import icecreamImg from '../images/icecream.png';
import kebabImg from '../images/kebab.png';

export function getData() {
    return [
        { title: "Pizza", price: 17.99, Image: pizzaImg },
        { title: "Burger", price: 15, Image: burgerImg },
        { title: "Cola", price: 3.5, Image: colaImg },
        { title: "Salad", price: 12.99, Image: saladImg },
        { title: "Bottle of Water", price: 6, Image: waterImg },
        { title: "Ice Cream", price: 8.90, Image: icecreamImg },
        { title: "Kebab", price: 17.99, Image: kebabImg },
    ]
}
