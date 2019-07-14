import Head from "next/head";
import Example from "../components/Example";
import "../styles/main.css";

function IndexPage(props) {
  return (
    <div>
      <Head>
        <title>Blank Page</title>
      </Head>
      <div className="min-h-screen bg-gray-300 font-sans">
        <div className="py-4 container mx-auto">
          <div className="p-4 w-full bg-white rounded shadow">
            <h1>Hello World :)</h1>
            <Example />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
