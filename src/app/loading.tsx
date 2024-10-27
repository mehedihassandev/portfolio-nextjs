"use client";

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export const Loader = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="fixed bg-black bg-opacity-75 h-screen top-0 left-0 w-full flex justify-center items-center z-[9999]">
            <h1 className="text-white text-4xl">Loading...</h1>
        </div>,
        document.body
    );
};

export default Loader;
