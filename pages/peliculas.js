import Head from "next/head"
import { useQuery } from "@apollo/client"
import { PELICULAS } from "../graphql/querys/peliculas"
import LayoutBasic from "../components/layout/LayoutBasic"
import LayoutPagina from "../components/layout/LayoutPagina"
import CardPelicula from "../components/reutilizables/CardPelicula"

export default function Peliculas() {

    const { data, loading} = useQuery(PELICULAS, {
        variables: {
            input: {
                cantidad: 15,
                pagina: 1
            }
        }
    });

    if (!loading) {
        console.log(data.getPeliculas)
    }


    const info = {
        titulo: "PELICULAS",
        descripcion: "Tenemos una lista de peliculas que vi, me gustaron y que recomiendo ver a todas las personas, agregando puntos a favor, en contra y un veredicto final"
    }

    const estilos = {
        div: "grid grid-cols-3 grid-rows-1 pt-8 px-40 pb-16 bg-gray-50 min-h-full gap-8 justify-center peliculas" 
    }

    return (
        <>
            <Head>
                <title>Peliculas</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
            </Head>
            <LayoutBasic>
                <LayoutPagina titulo={info.titulo} descripcion={info.descripcion}>
                    <div className={estilos.div}>
                        {
                            !loading && data.getPeliculas.map(
                                card => <CardPelicula 
                                            key={card.id} 
                                            titulo={card.titulo} 
                                            descripcion={card.descripcion}
                                            imagen={card.imagen} 
                                            id={card.id}
                                        />
                            )
                        }

                    </div>
                </LayoutPagina>
            </LayoutBasic>
        </>
    )
}