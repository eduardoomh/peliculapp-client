import Head from "next/head"
import LayoutBasic from "../components/layout/LayoutBasic"
import LayoutPagina from "../components/layout/LayoutPagina"
import { DocumentAdd } from "heroicons-react"

export default function Mejoras() {

    const info = {
        titulo: "MEJORAS",
        descripcion: "Peliculapp esta en desarrollo, esta es una lista detallada de las mejoras que estare agregando periodicamente."
    }

    const estilos = {
        div: "flex justify-center py-8 bg-gray-100",
        ol: "bg-transparent p-4 text-xl rounded-lg h-auto flex flex-col  justify-between gap-4  ",
        li: "text-gray-800 h-16 border-b-2 border-yellow-500 flex items-center bg-yellow-300 rounded px-4",
        icon: "inline-flex text-red-600"

    }
    return (
        <>
            <Head>
                <title>Mejoras</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
            </Head>
            <LayoutBasic>
                <LayoutPagina titulo={info.titulo} descripcion={info.descripcion}>
                    <div className={estilos.div}>
                        <ol className={estilos.ol}>
                            <li className={estilos.li}> 
                                <DocumentAdd size={24} className={estilos.icon}/>
                                 Responsive web design
                            </li>
                            <li className={estilos.li}> 
                                <DocumentAdd size={24} className={estilos.icon}/>
                                Guardar esta lista en la base de datos
                            </li>
                            <li className={estilos.li}> 
                                <DocumentAdd size={24} className={estilos.icon}/>
                                Agregar mas detalles de la pelicula
                            </li>
                            <li className={estilos.li}> 
                                <DocumentAdd size={24} className={estilos.icon}/>
                                Agregar animaciones en las vistas
                            </li>
                            <li className={estilos.li}> 
                                <DocumentAdd size={24} className={estilos.icon}/>
                                Crear sistema de autenticacion para usuarios
                            </li>
                            <li className={estilos.li}>
                                <DocumentAdd size={24} className={estilos.icon}/>
                                crear logotipo
                            </li>
                            <li className={estilos.li}>
                                <DocumentAdd size={24} className={estilos.icon}/>
                                Aplicacion movil con react native
                            </li>
                        </ol>
                    </div>
                </LayoutPagina>
                
            </LayoutBasic>
        </>

    )
}