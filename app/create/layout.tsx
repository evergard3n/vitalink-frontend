import NavBar from "../ui/navbar/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-screen flex flex-col bg-linear-to-l from-white to-zinc-200">
            <NavBar/>
            <div className="w-full h-24 "></div>
            {children}
        </div>
    );
}