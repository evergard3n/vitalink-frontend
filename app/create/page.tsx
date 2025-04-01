import Chatbot from "../ui/chatbot/chatbot";
import Form from "../ui/form/form";

export default function Page() {
    return (
        <div className="relative gap-2 h-full p-2">
            <Form/>
            <Chatbot/>
        </div>
    )
}