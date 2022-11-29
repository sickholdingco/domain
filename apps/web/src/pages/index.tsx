import Head from "next/head";
import { Footer } from "../components/Footer";
import Home from "./Home/Home";

export default function Web() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>domain generator</title>
      </Head>

      <main className="flex flex-col items-center h-full min-h-screen">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
