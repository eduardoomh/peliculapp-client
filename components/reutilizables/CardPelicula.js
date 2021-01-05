import {useRouter} from "next/router"
import {Film} from "heroicons-react";

export default function CardPelicula(props) {
    const { titulo, descripcion, imagen, id } = props;

    const router = useRouter();

    const estilos = {
        article: {
            root: "h-80 w-72 rounded-md p-4  transition duration-500 ease-in-out bg-gray-800 hover:bg-gray-900 transform hover:-translate-y-1 hover:scale-110 card-pelicula shadow-2xl",
            imagen: "bg-gray-300 rounded-md",
            titulo: "card-pelicula__titulo bg-yellow-300 text-red-500 font-bold text-xl flex items-center ",
            descripcion: "card-pelicula__descripcion text-white"
        }
    }

    const detallePelicula = () => {
        router.push(`/peliculas/${id}`)
    }

    return (
        <article className={estilos.article.root} onClick={() => detallePelicula()}>
            <img
                src={imagen}
                alt="Picture of the author"
                width={318}
                height={366}
                className={estilos.article.imagen}
            />
            <div className={estilos.article.titulo}>
                <div className="px-2">
                    <Film size={24} className="text-gray-800" />
                </div>
                <h2>{titulo}</h2>
            </div>
            <div className={estilos.article.descripcion}>
                {descripcion.substring(0,60)}{descripcion.length>60 && "..."}
            </div>
        </article>
    )
}