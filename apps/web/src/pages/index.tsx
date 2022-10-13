import Head from "next/head";
import Home from "./Home/Home";

export default function Web() {
  return (
    <div>
      <Head>
        {/** temporary title + icon */}
        <title>domain generator</title>
        {/* <link rel="icon" href="/assets/dog.png" /> */}
      </Head>

      <main>
        <Home />
      </main>
    </div>
  );
}
