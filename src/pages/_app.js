import "@/styles/globals.css";
import Layout from "../components/layout";
import localFont from "@next/font/local";

const BigCaslonFont = localFont({
  src: "../../public/assets/fonts/Big Caslon Medium.ttf",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={BigCaslonFont.className}>
      <Layout>
        <div className="min-h-screen ">
          <Component {...pageProps} />
        </div>
      </Layout>
    </main>
  );
}
