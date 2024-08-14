import React, { useState } from "react";

interface ChatInputProps {
  onSubmit: (prompt: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSubmit }) => {
  const [inputPrompt, setInputPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(inputPrompt);
    setInputPrompt('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={inputPrompt}
        onChange={(e) => setInputPrompt(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Type your prompt here..."
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default ChatInput;
