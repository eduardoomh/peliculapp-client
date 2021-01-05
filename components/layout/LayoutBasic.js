import Menu from "./Menu";

export default function LayoutBasic(props){
    const {children} = props;

    return(
        <div>
            <Menu/>
            <div>
               {children} 
            </div>
            <footer className="bg-gray-700 flex justify-center items-center h-16 text-gray-200 font-bold">
                <p>App creada por JesusEMH - 2021</p>
            </footer>
            
        </div>
    )
}