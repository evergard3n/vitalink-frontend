'use client'
import { createContext, useContext, useEffect, useState } from "react";
import { Chat } from "./definitions";

interface WebSocketContextType {
  socket: WebSocket | null;
  messages: Chat[] | undefined;
  sendMessage: (message: string) => void;
}

const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined);

export const WebSocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<Chat[]>([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5001/api/chat");

    ws.onopen = () => console.log("🟢 WebSocket đã kết nối!");
    ws.onclose = () => console.log("🔴 WebSocket mất kết nối!");
    ws.onerror = (error) => console.error("⚠️ WebSocket error:", error);

    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      const newMessage:Chat = {
        id: Date.now().toString(),
        message: response.reply,
        sender: "BOT",
        timestamp: new Date().toISOString(),
      }
      setMessages((prev) => [...prev, newMessage]); // Lưu tin nhắn mới
    };

    setSocket(ws);

    return () => {
      ws.close(); // Đóng kết nối khi unmount
    };
  }, []);
  function sendMessage(message: string) {
    if (socket && socket.readyState === WebSocket.OPEN) {
      const chatMessage: Chat = {
        id: Date.now().toString(),
        sender: "User",
        message: message,
        timestamp: new Date().toISOString(),
      };

      socket.send(JSON.stringify(chatMessage));
      setMessages((prev) => [...prev, chatMessage]);
    } else {
      console.warn("⚠️ WebSocket chưa sẵn sàng!");
    }
  }

  return (
    <WebSocketContext.Provider value={{ socket, messages, sendMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => useContext(WebSocketContext);
