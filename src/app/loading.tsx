"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Loader: React.FC = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="h-screen bg-white">
            <div className="flex justify-center items-center h-full">
                <Image
                    className="h-16 w-16"
                    src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
                    width={64}
                    height={64}
                    alt="Loading..."
                />
            </div>
        </div>,
        document.body
    );
};

export default Loader;
