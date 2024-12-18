import { Message } from "../types.ts";

function MessageContainer({ message }: { message: Message }) {
  return (
    <div className="messageContainer">
      <p>
        <span id="messageUsername">{message.username}</span>
        <span id="messageText">: {message.text}</span>
      </p>
    </div>
  );
}

export default MessageContainer;
