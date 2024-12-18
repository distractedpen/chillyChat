import React, { FormEventHandler } from "react";

function UserInput({ handleSubmit }: { handleSubmit: FormEventHandler<HTMLFormElement> }) {
  const [username, setUsername] = React.useState("");
  const [messageText, setMessageText] = React.useState("");

  return (
    <form className="userInput" onSubmit={handleSubmit}>
      <input
        type="text"
        id="usernameInput"
        name="username"
        placeholder="Enter username..."
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="text"
        id="messageInput"
        name="text"
        placeholder="Message..."
        value={messageText}
        onChange={(event) => setMessageText(event.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default UserInput;
