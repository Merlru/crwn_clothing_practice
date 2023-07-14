import { useContext } from 'react'

import { CartContext } from '../../Contexts/cart.context'

import './checkout-item.scss'

const CheckoutItem = ({cartItem}) => {
    const { clearItemToCart, addItemToCart, removeItemToCart } = useContext(CartContext)
    const { name, imageUrl, price, quantity } = cartItem

    const increseHandler = () => addItemToCart(cartItem)
    const decreaseHandler = () => removeItemToCart(cartItem)
    const clearHandler = () => clearItemToCart(cartItem)

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={decreaseHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={increseHandler}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem