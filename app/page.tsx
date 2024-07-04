import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col   bg-red-100 text-purple-500 font-extrabold group">
            <input type="text" className="border border-black" />
            <span className="hidden group-focus-within:block">hidden</span>
            <button>submit</button>

            <div className="size-4 m-auto p-10 border border-blue-300">size</div>
        </div>
    );
}
