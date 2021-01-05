export default function Descripcion(props){
    const {texto} = props;

    return(
        <div className="flex justify-center items-center min-w-full h-24 border-b border-gray-300 bg-gray-50">
            <p className="text-2xl pl-36 pr-36 text-center">{texto}</p>
        </div>
    )
}