import React from 'react';

function ChatPage() {
    return (
        <div className='chat-div'>
            <ChatBar />
            <div className='chat-container'>
                <ChatBody />
                <ChatFooter />
            </div>
        </div>
    );
}

export default ChatPage;
