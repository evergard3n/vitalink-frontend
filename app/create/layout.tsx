import NavBar from "../ui/navbar/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-screen flex flex-col bg-linear-to-b from-white to-zinc-200">
            {children}
        </div>
    );
}