import styles from './ChatPage.module.scss';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Input, Button } from '@mui/material';
import clsx from 'clsx';
import useWebSocket from 'react-use-websocket';

export const ChatPage = () => {
    const [messageHistory, setMessageHistory] = useState([]);
    // const [message, setMessage] = useState('');

    const socketUrl = `${import.meta.env.VITE_CHAT_HOST}/ws/chat/`;

    const { sendJsonMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
        onError: () => console.log('error'),
        onOpen: () => console.log('Hello guys'),
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
                            <div className={styles.ChatPageMessagesImage}>JK</div>
                            <p className={styles.ChatPageMessagesText}>{message ? JSON.parse(message.data).message : null}</p>
                        </li>
                    ))}
                    {/* <li className={styles.ChatPageMessagesItem}>
                        <div className={styles.ChatPageMessagesImage}>JK</div>
                        <p className={styles.ChatPageMessagesText}>Message</p>
                    </li>
                    <li className={styles.ChatPageMessagesItem}>
                        <div className={clsx(styles.ChatPageMessagesImage, styles.Invisible)}>ИЯ</div>
                        <p className={styles.ChatPageMessagesText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsa corrupti enim exercitationem facere odit pariatur debitis aperiam ad quam iure error, voluptatibus nostrum. Sunt obcaecati officia ratione corrupti doloribus.</p>
                    </li>
                    <li className={clsx(styles.ChatPageMessagesItem, styles.Self)}>
                        <p className={styles.ChatPageMessagesText}>Message</p>
                        <div className={styles.ChatPageMessagesImage}>JK</div>
                    </li> */}
                </ul>
                <form onSubmit={handleClickSendMessage} className={styles.ChatPageBottom}>
                    <Input id="message" variant="standard" className={styles.ChatPageBottomInput} placeholder='Message' />
                    <Button type="submit" className={styles.ChatPageBottomButton} variant='contained'>Send</Button>
                </form>
            </div>
        </div>
    )
};