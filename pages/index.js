import Head from 'next/head'
import LayoutBasic from "../components/layout/LayoutBasic";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
      </Head>

      <LayoutBasic>
        <div>
          <div>
            <h1>biblioteca de peliculas</h1>
          </div>
          <div>
            <p>pagina de peliculas</p>
          </div>
        </div>
      </LayoutBasic>

    </>
  )
}
