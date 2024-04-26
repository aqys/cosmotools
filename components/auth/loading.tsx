import Image from "next/image";

export const Loading = () => {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <Image
                src="/logo.png"
                alt="Logo"
                width={200}
                height={200}
                className="animate-pulse 1s infinite"
            />
        </div>
    );
}; 