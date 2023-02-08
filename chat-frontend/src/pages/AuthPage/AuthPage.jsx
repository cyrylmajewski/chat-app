import styles from './AuthPage.module.scss';
import AuthLogo from '@/assets/auth-logo.png';
import { Input, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from 'react';
import axios from 'axios';

export const AuthPage = () => {
    const inputRef = useRef(null);
    const navigate = useNavigate();
    const [roomInput, setRoomInput] = useState('');
    const [isLoginForm, setIsLoginForm] = useState(true);

    const openRoom = () => {
        if (roomInput) {
            navigate(`chat`)
            // axios.post(`${import.meta.env.VITE_SERVER_URL}/create-room/${roomInput}`)
            //     .then(res => navigate(`chat`))
            //     .catch(res => console.error(res))
        }
    };

    return (
        <div className={styles.AuthPage}>
            <div className={styles.AuthPageBlock}>
                {isLoginForm ? (
                    <>
                        <div className={styles.AuthPageLogo}>
                            <img src={AuthLogo} alt="auth-logo" />
                        </div>
                        <h1 className={styles.AuthPageHeadline}>Login</h1>
                        <p>Please enter your username</p>
                        <Input type="text" onChange={(e) => setRoomInput(e.target.value)} defaultValue={roomInput} className={styles.Input} placeholder="Login" />
                        <Input type="password" onChange={(e) => setRoomInput(e.target.value)} defaultValue={roomInput} className={styles.Input} placeholder="Password" />
                        <Button onClick={openRoom} variant='contained' color='primary' size='large'>Log In</Button>
                        <p>Don't have an account? <button className={styles.AuthPageRedirect} type="button" onClick={() => setIsLoginForm(false)}>Register</button></p>
                    </>
                ) : (
                    <>
                        <div className={styles.AuthPageLogo}>
                            <img src={AuthLogo} alt="auth-logo" />
                        </div>
                        <h1 className={styles.AuthPageHeadline}>Register</h1>
                        <Input type="text" onChange={(e) => setRoomInput(e.target.value)} defaultValue={roomInput} className={styles.Input} placeholder="Login" />
                        <Input type="password" onChange={(e) => setRoomInput(e.target.value)} defaultValue={roomInput} className={styles.Input} placeholder="Password" />
                        <Button onClick={openRoom} variant='contained' color='primary' size='large'>Log In</Button>
                        <p>Already signed up? <button className={styles.AuthPageRedirect} type="button" onClick={() => setIsLoginForm(true)}>Log in</button></p>
                    </>
                )}
            </div>
        </div>
    )
};