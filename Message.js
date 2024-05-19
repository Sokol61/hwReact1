import React from 'react';
import './Message.css'; // Подключаем файл со стилями

const Message = (props) => {
  return (
    <div className="message">
      {props.text}
    </div>
  );
};

export default Message;