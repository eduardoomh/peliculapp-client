import head from "next/head"
import {useRouter} from "next/router"
import LayoutBasic from "../../components/layout/LayoutBasic";

export default function PeliculaId() {

    const router = useRouter();
    const {id} = router.query;

    return (
        <>
            <head>
                <title>Pelicula</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
            </head>

            <LayoutBasic>
                <h1>{id}</h1>
            </LayoutBasic>
        </>
    )
}