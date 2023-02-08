import styles from './AuthPage.module.scss';
import AuthLogo from '@/assets/auth-logo.png';
import { Input, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const AuthPage = () => {
    const navigate = useNavigate();

    const openRoom = () => {
        navigate(`chat`)
    };

    return (
        <div className={styles.AuthPage}>
            <div className={styles.AuthPageBlock}>
                <div className={styles.AuthPageLogo}>
                    <img src={AuthLogo} alt="auth-logo" />
                </div>
                <h1 className={styles.AuthPageHeadline}>Welcome to the chat</h1>
                <Button onClick={openRoom} variant='contained' color='primary' size='large'>Log in</Button>
            </div>
        </div>
    )
};