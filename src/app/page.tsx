import { Suspense } from "react";
import Loader from "./loading";
import HomePage from "./(pages)/_home/page";

export default function Home() {
    return (
        <Suspense fallback={<Loader />}>
            <HomePage />
        </Suspense>
    );
}
