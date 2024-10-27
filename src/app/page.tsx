import HomePage from "@app/(pages)/_home/page";
import { Suspense } from "react";
import Loader from "./loading";

export default function Home() {
    return (
        <Suspense fallback={<Loader />}>
            <HomePage />
        </Suspense>
    );
}
