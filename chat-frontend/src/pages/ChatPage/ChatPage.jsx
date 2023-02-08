import styles from './ChatPage.module.scss';

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Input, Button } from '@mui/material';
import clsx from 'clsx';
import useWebSocket from 'react-use-websocket';

export const ChatPage = () => {
    const [messageHistory, setMessageHistory] = useState([]);

    const socketUrl = `${import.meta.env.VITE_CHAT_HOST}/ws/chat/`;

    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
        onError: () => console.log('error'),
        onOpen: () => console.log('Hello guys'),
    });
    
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
                    <li className={styles.ChatPageMessagesItem}>
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
                    </li>
                </ul>
                <div className={styles.ChatPageBottom}>
                    <Input variant="standard" className={styles.ChatPageBottomInput} placeholder='Message' />
                    <Button className={styles.ChatPageBottomButton} variant='contained'>Send</Button>
                </div>
            </div>
        </div>
    )
};