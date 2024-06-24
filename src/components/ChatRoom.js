import React, { useEffect } from 'react';
import axios from 'axios';
import { BaseUrl } from '../Consistent';

function ChatRoom() {
    const [chatroom, setChatRoom] = React.useState([]);   

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: BaseUrl, //'https://message-olive-eight.vercel.app/chat/chatroom/',
            headers: {
                'Cookie': '_vercel_sso_nonce=Bfh7ENCMXkrVKfXq0h5DfOsg'
            }
        };

        axios.request(config)
            .then((response) => {
                setChatRoom(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div>
            <h1>Chat Room Test</h1>
            <url>
                {
                    chatroom.map((chatrooms) => {
                        return <li key={chatrooms.id}>{chatrooms.name}</li>;
                }
                )};
            </url>
        </div>
    );

};

export default ChatRoom;