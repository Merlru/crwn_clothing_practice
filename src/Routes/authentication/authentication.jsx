import SignUpForm from "../../Components/sign-up-form/sign-up-form";
import SignInForm from "../../Components/sign-in-form/sign-in-form";

import './authentication.scss'

const Authentication = () => {
    return (
        <div className='authentication-container'>
            <SignInForm/>
            <SignUpForm/>
        </div>
    );
};

export default Authentication;