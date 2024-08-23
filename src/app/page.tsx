import "./page.scss";

import { DownloadExtension } from "./components/DownloadExtension";
import { Entry } from "./components/Entry";
import { Faq } from "./components/Faq";
import { Features } from "./components/Features";

export default function Home() {
    return (
        <main>
            <div className="ContainerPage">
                <Entry />
                <Features />
                <DownloadExtension />
                <Faq />
            </div>
        </main>
    );
}
