import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import { ReactComponent as CrwnLogo } from '../../Assets/crown.svg';
import CartIcon from '../../Components/cart-icon/cart-icon';
import CartDropdown from '../../Components/cart-dropdown/cart-dropdown';

import { signOutUser } from '../../Utils/firebase/firebase';

import { UserContext } from '../../Contexts/user.context';
import { CartContext } from '../../Contexts/cart.context';

import './navigation.scss'

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>
                            {' '}
                                SIGN OUT
                            {' '}
                        </span>
                    ) : (
                        <Link className='nav-link' to='/auth'>
                            SIGN IN
                        </Link>
                    )}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet />
        </Fragment>
    )
};

export default Navigation;