import Head from "next/head";
import { Footer } from "../components/Footer";
import Home from "./Home/Home";

export default function Web() {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>domain generator</title>
      </Head>

      <main className="flex flex-col items-center h-full">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
