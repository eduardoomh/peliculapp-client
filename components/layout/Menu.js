import {useRouter} from "next/router";
import { Home, Film, Folder, ClipboardList, Collection }  from "heroicons-react";
import Link from "next/link";

export default function Menu(){
    const router = useRouter();
    
    const estilos = {
        header: "menu  bg-yellow-200 min-w-full h-12  pl-8 pr-8 border-b border-gray-300 shadow",
        ul: "flex justify-end gap-4",
        li: "flex justify-center items-center w-20 text-gray-700 font-bold",
        h1: "text-lg flex align-center font-bold text-red-500 py-2"
    }

    return(
        <header className={estilos.header}>
            <div>
                <h1 className={estilos.h1}>Peliculapp</h1>
            </div>
            <ul className={estilos.ul}>
                <li className={router.pathname === "/" ? `${estilos.li} border-b-2 border-red-500 `  : estilos.li}> 
                    <Home size={16} /> 
                    <Link href="/">Inicio</Link>
                </li>
                <li className={router.pathname === "/peliculas" ? `${estilos.li} border-b-2 border-red-500 `  : estilos.li}> 
                    <Film size={16}/>
                    <Link href="/peliculas">Peliculas</Link>
                </li>
                <li className={router.pathname === "/generos" ? `${estilos.li} border-b-2 border-red-500 ` : estilos.li}> 
                    <Collection size={16}/>
                    <Link href="/generos">Generos</Link>
                </li>
                <li className={router.pathname === "/mejoras" ? `${estilos.li} border-b-2 border-red-500 `  : estilos.li}> 
                    <ClipboardList size={16}/>
                    <Link href="/mejoras">Mejoras</Link>
                </li>
                <li className={router.pathname === "/detalles" ? `${estilos.li} border-b-2 border-red-500 `  : estilos.li}> 
                    <Folder size={16}/>
                    <Link href="/detalles">Detalles</Link>
                </li>
            </ul>
        </header>
    )
}