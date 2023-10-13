import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout() {
    return (
        <>
            <Header />
            <main style={{ minHeight: "70vh" }}></main>
            <Footer/>
        </>
    )

}