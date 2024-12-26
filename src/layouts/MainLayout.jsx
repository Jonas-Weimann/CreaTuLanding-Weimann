import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const MainLayout = ({children})=>{
    return(
        <>
            <Header currentMode='dark'/>
            <main className="main">{children}</main>
            <Footer/>
        </>
    )
}