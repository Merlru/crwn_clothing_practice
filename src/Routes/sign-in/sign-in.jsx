import { signInWithGooglePopup } from "../../Utils/firebase/firebase";
import { createUserDocumentFromAuth } from "../../Utils/firebase/firebase";

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        createUserDocumentFromAuth(response);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>
    );
};

export default SignIn;