import { addToCart, cart, loadFromStorage } from "../Scripts/cart.js";

describe('addToCart', () => 
{
    beforeEach(() => 
    {
        // Clear localStorage and reset the cart before each test
        localStorage.clear();
        cart.length = 0;
    });

    it('should add an item to the cart', () => 
    {
        spyOn(localStorage, 'setItem').and.callFake(() => JSON.stringify([]));
        spyOn(localStorage, 'getItem').and.callFake(() => JSON.stringify([]));
        loadFromStorage();
        addToCart('1');
        expect(cart.length).toEqual(1);
        expect(cart[0].id).toEqual('1');
        expect(cart[0].quantity).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalled();
    });

    it('should increment the quantity of an item if it is already in the cart', () => 
    {
        spyOn(localStorage, 'setItem').and.callFake(() => JSON.stringify([]));

        spyOn(localStorage, 'getItem').and.callFake(() => JSON.stringify([{ id: '1', quantity: 1 }]));
        loadFromStorage();
        addToCart('1');
        expect(cart.length).toEqual(1);
        expect(cart[0].quantity).toEqual(2);
        expect(localStorage.setItem).toHaveBeenCalled();

    });

    it('should add a new item to the cart if it is not already in the cart', () => 
    {
        spyOn(localStorage, 'setItem').and.callFake(() => JSON.stringify([]));

        spyOn(localStorage, 'getItem').and.callFake(() => JSON.stringify([{ id: '1', quantity: 1 }]));
        loadFromStorage();
        addToCart('2');
        expect(cart.length).toEqual(2);
        expect(cart[1].id).toEqual('2');
        expect(cart[1].quantity).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalled();

    });
});