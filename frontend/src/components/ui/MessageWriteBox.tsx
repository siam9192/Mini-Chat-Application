import { useState } from "react";

interface MessageWriteBoxProps {
  onSend?: (message: string) => void;
}

function MessageWriteBox({ onSend }: MessageWriteBoxProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() === "") return;
    if (onSend) onSend(message);
    setMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-3 border-t border-base-300 bg-base-200 flex items-center gap-2">
      {/* Input box */}
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 input input-bordered input-sm rounded-lg"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
      />

      {/* Send button */}
      <button className="btn btn-primary btn-sm" onClick={handleSend}>
        Send
      </button>
    </div>
  );
}

export default MessageWriteBox;
