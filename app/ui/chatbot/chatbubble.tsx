'use client'
import { Chat } from "@/app/lib/definitions";
import { chatSequence } from "@/app/lib/placeholder";
import { useEffect, useRef } from "react";
import Markdown from "react-markdown";
function UserBubble({chat}: {chat: Chat}) {
    return (
        <div className="h-fit w-fit max-w-68  bg-zinc-200 py-2 px-4 rounded-full text-black ml-auto">
            {chat.message}
        </div>
    )
}
function BotBubble({chat}: {chat: Chat}) {
    return (
        <div className="h-fit min-w-full text-left self-start">
            <Markdown>{chat.message}</Markdown>
        </div>
    )
}
export default function ChatBubbles() {
    const olRef = useRef<HTMLOListElement>(null)
    useEffect(() => {
        const olElement = olRef.current;
        if (olElement) {
          olElement.scrollTo(0, olElement.scrollHeight);
        }
      });
    const data = chatSequence;
    
    return (
        <div className=" ">
            <ol className="max-h-96 w-full flex flex-col px-4 py-2 gap-4  overflow-y-auto" ref={olRef}>
                {data.map((chat,index) => {
                    if(chat.sender === "BOT") {
                        return (
                            <li key={index}><BotBubble chat = {chat} /></li>
                        )
                    } else {
                        return (
                            <li key={index}><UserBubble chat={chat}/></li>
                        )
                    }
                })}
            </ol>
        </div>
    )
}