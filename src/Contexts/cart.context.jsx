import { useEffect } from "react";
import { createContext, useState } from "react";

const addCardItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
    };
    return [...cartItems, {...productToAdd, quantity: 1},];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    };

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    );
};

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemToCart: () => {},
    clearItemToCart: () => {},
    cartCount: 0,
    cartPrice: 0,
    setCartPrice: () => {}, 
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartPrice, setCartPrice] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems])

    useEffect(() => {
        const newCartPrice = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartPrice(newCartPrice);
    }, [cartItems])

    // useEffect(() => {
    //         let defaultPrice = 0;
    //         cartItems.forEach(cartItem => {
    //             const multipied = cartItem.price * cartItem.quantity
    //             defaultPrice += multipied
    //         })
    //         setCartPrice(defaultPrice)
    // }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCardItem(cartItems, productToAdd))
    };

    const removeItemToCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    };

    const clearItemToCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems, productToClear))
    }
    
    const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemToCart, clearItemToCart, cartItems, cartCount, cartPrice };
    
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};