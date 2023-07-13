import { useContext } from 'react';

import { CartContext } from '../../Contexts/cart.context';

import CartItem from '../cart-item/cart-item';
import Button from '../button/button';

import './cart-dropdown.scss';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item}/>
                ))}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;