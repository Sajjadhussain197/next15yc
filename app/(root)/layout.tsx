import NavBar from "../components/NavBar";


export default function Layout({children}: Readonly<{ childern: React.ReactNode }>){
    return(
        <main className="font-work-sans">
            <NavBar />
            {children}
        </main>
    )

}