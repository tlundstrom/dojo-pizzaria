function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {}
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;

    return pizza;
}

pizzaOven("deep dish", "traditional", ["mozzerella"], ["pepperoni", "sausage"]);

pizzaOven("hand tossed", "marinara", ["mozzerella", "feta"], ["mushrooms", "olives", "onions"]);

pizzaOven("brooklyn style", "traditional", ["mozzerella"], ["pepperoni", "sausage", "peppers", "olives"]);

pizzaOven("cauliflower", "buffalo white sauce", ["mozzerella", "bleu"], ["shredded chicken"]);

