import { useState } from 'react';
import '../css/LogIn.scss';
import netflixLogo from '../images/Netflix_Logo_RGB.png';
import {login, signup} from '../firebase/firebase';

const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Sign in handle
    const [signInState, setSignInState] = useState('Sign In');

    const userAuth = async (e) => {
        e.preventDefault();
        if(signInState === 'Sign In'){
            await login(email, password);
        } else {
            await signup(email, password);
        }
    }

    // Form handle
    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
    };

    return(
        <>
            <section className="log-in-page">
                <img src={netflixLogo} alt="Netflix logo" className='logo' />
                <div className='log-in-container'>
                    <h2>{signInState}</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className='input-type' placeholder='Insert your email' />
                        <input type="password" name="password" className='input-type' id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Insert your password' />
                        <button onClick={userAuth} type='submit' className='button-three'>{signInState}</button>
                        <div className="under-button-content">
                            <input type="checkbox" name="remember" id="remember" />
                            <label htmlFor="remember">Remember me</label>
                            <span>Need help?</span>
                        </div>
                    </form>
                    {signInState === 'Sign In' ? <div className='account-text-gray'>New to netflix? <span onClick={() => setSignInState('Sign Up')}>Sign up now</span></div> : <div className='account-text-gray'>Already have an account? <span onClick={() => setSignInState('Sign In')}>Sign in now</span></div>}  
                </div>
            </section>
        </>
    );
};

export default LogIn;