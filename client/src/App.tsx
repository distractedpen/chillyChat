import React, { FormEventHandler } from "react";
import "./App.css";
import MessageBoard from "./components/MessageBoard";
import MessageContainer from "./components/MessageContainer";
import { Message, MessageForm } from "./types.ts";
import UserInput from "./components/UserInput.tsx";

function App() {
  const [messages, setMessages] = React.useState<Message[]>([]);

  React.useEffect(() => {
    setMessages([
      {
        username: "Bob",
        text: "Hello",
      },
      {
        username: "Alice",
        text: "Hi!",
      },
    ]);
  }, []);

  function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const target = e.target as typeof e.target & MessageForm;
    const message: Message = {
      username: target.username.value,
      text: target.text.value,
    };
    console.log(message);
  }

  return (
    <>
      <h1>Chilly Chat</h1>
      <MessageBoard>
        <>
          {messages.map((message, index) => {
            return <MessageContainer key={index} message={message} />;
          })}
        </>
      </MessageBoard>
      <UserInput handleSubmit={(e) => sendMessage(e)} />
    </>
  );
}

export default App;
