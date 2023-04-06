import "@/styles/globals.css";
import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Layout>
        <div className="min-h-screen ">
          <Component {...pageProps} />
        </div>
      </Layout>
    </main>
  );
}
