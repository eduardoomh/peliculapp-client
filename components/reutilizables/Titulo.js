import {Film} from "heroicons-react"

export default function Titulo(props){
    const {texto, icono} = props;

    return(
        <div className="flex justify-center items-center min-w-full h-24 border-b border-gray-300 bg-gray-50 ">
            <p className="flex items-center">
                <Film size={40} className="text-gray-700"/>
            </p>
            <h1 className="text-5xl text-red-500 font-bold" >{texto}</h1>
        </div>
    )
}