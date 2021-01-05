import Head from "next/head"
import LayoutBasic from "../components/layout/LayoutBasic";
import LayoutPagina from "../components/layout/LayoutPagina"

export default function Detalles() {

    const info = {
        titulo: "DETALLES",
        descripcion: "Esta aplicacion esta desarrollada por mi JesusEMH, a continuacion se mostraran las las tecnologias utilizadas"
    }

    const estilos = {
        p: "flex justify-center items-center tex-2xl"
    }
    return (
        <>
            <Head>
                <title>Detalles</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
            </Head>
            <LayoutBasic>
                <LayoutPagina titulo={info.titulo} descripcion={info.descripcion}>
                    <div className="bg-gray-100 py-8 px-8 ">
                        <div className="detalles bg-gray-700">
                            <h2 className="flex justify-center items-center text-xl text-gray-100">Stack de desarrollo</h2>
                            <div className="justify-center items-end bg-gray-200 detalles__tecnologias px-4 py-4 border border-gray-300">
                                <div>
                                    <div>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png" />
                                    </div>
                                    <p className={estilos.p}>NextJs</p>
                                </div>

                                <div>
                                    <div>
                                        <img src="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png" />
                                    </div>
                                    <p className={estilos.p}>React (hooks)</p>
                                </div>

                                <div>
                                    <div>
                                        <img src="https://assets.stickpng.com/images/5847fb26cef1014c0b5e48d4.png" />
                                    </div>
                                    <p className={estilos.p}>Graphql</p>
                                </div>

                                <div>
                                    <div>
                                        <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" />
                                    </div>
                                    <p className={estilos.p}>NodeJs</p>
                                </div>

                                <div>
                                    <div>
                                        <img src="https://img.icons8.com/color/452/mongodb.png" />
                                    </div>
                                    <p className={estilos.p}>mongoDB</p>
                                </div>


                            </div>
                        </div>
                    </div>

                </LayoutPagina>

            </LayoutBasic>
        </>

    )
}