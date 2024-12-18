function MessageBoard({ children }: { children: JSX.Element }) {
    return (
        <div className="messageBoard">
            {children}
        </div>
    );
}

export default MessageBoard;
