import Head from "next/head";
import LayoutBasic from "../components/layout/LayoutBasic"
import LayoutPagina from "../components/layout/LayoutPagina"

export default function GenerosComponent(){

    const info = {
        titulo: "GENEROS",
        descripcion: "Tenemos una lista de peliculas que vi, me gustaron y que recomiendo ver a todas las personas, agregando puntos a favor, en contra y un veredicto final"
    }

    return(
        <>
        <Head>
            <title>Generos</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
        </Head>

            <LayoutBasic>
                <LayoutPagina titulo={info.titulo} descripcion={info.descripcion}>
                    <p>generos de la pagina</p>
                </LayoutPagina>
            </LayoutBasic>
        </>
        
    )
}