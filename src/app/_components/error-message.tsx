import { FC } from "react";

interface ErrorMessageProps {
    message?: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
    if (!message) return null;

    return <p className="text-red-400 text-sm ml-3">{message}</p>;
};

export default ErrorMessage;
