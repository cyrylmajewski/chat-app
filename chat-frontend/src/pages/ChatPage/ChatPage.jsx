import styles from './ChatPage.module.scss';

import { useState, useEffect, useCallback } from 'react';
import { Input, Button } from '@mui/material';
import useWebSocket from 'react-use-websocket';

export const ChatPage = () => {
    const [messageHistory, setMessageHistory] = useState([]);

    const socketUrl = `${import.meta.env.VITE_CHAT_HOST}/ws/chat/`;

    const { sendJsonMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
        onError: () => console.log('error'),
        onOpen: () => console.log('Welcome to the chat'),
        shouldReconnect: (closeEvent) => true,
    });

    useEffect(() => {
        if (lastMessage !== null) {
            setMessageHistory((prev) => prev.concat(lastMessage));
        }
    }, [lastMessage, setMessageHistory]);

    const handleClickSendMessage = useCallback((e) => {
        e.preventDefault();
        const message = e.target.elements.message.value;

        sendJsonMessage({ message });
        
        e.target.elements.message.value = '';
    }, []);
    
    return (
        <div className={styles.ChatPage}>
            <aside className={styles.Sidebar}>
                <div className={styles.SidebarUser}>
                    <div className={styles.SidebarUserImage}>JK</div>
                    <div className={styles.SidebarUserContent}>
                        <span className={styles.SidebarUserName}>Jan Kowalczuk</span>
                    </div>
                </div>
                <div className={styles.SidebarUser}>
                    <div className={styles.SidebarUserImage}>JK</div>
                    <div className={styles.SidebarUserContent}>
                        <span className={styles.SidebarUserName}>Jan Kowalczuk</span>
                    </div>
                </div>
            </aside>
            <div className={styles.ChatPageContainer}>
                <div className={styles.ChatPageHeader}>
                    <span className={styles.ChatPageHeaderName}>Room</span>
                    <span className={styles.ChatPageHeaderCount}>2 people</span>
                </div>
                <ul className={styles.ChatPageMessages}>
                    {messageHistory.map((message, idx) => (
                        <li key={idx} className={styles.ChatPageMessagesItem}>
                            <p className={styles.ChatPageMessagesText}>{message ? JSON.parse(message.data).message : null}</p>
                        </li>
                    ))}
                </ul>
                <form onSubmit={handleClickSendMessage} className={styles.ChatPageBottom}>
                    <Input id="message" variant="standard" className={styles.ChatPageBottomInput} placeholder='Message' />
                    <Button type="submit" className={styles.ChatPageBottomButton} variant='contained'>Send</Button>
                </form>
            </div>
        </div>
    )
};