import Titulo from "../reutilizables/Titulo"
import Descripcion from "../reutilizables/Descripcion"

export default function LayoutPagina(props) {
    const { titulo, descripcion, children } = props;
    return (
        <>
            <Titulo texto={titulo} />
            <Descripcion texto={descripcion} />
            {children}
        </>
    )
}

