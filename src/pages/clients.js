import Logo from "../../public/assets/svg/darklogo.svg";
import Image from "next/image";
import brands from "../../public/assets/img/brands.png";
import Head from "next/head";

function Portfolio() {
  return (
    <div>
      <Head>
        <title>Clients - MKStudio</title>
        <meta
          name="description"
          content="MKStudio is
        a creative studio based in Nairobi, Kenya. We are a team of creative minds who are passionate about telling stories through images and videos. This is the clients page of MKStudio. Here you will find all our previous and current clients.

        "
        />
        <meta
          property="og:title"
          content="MKStudio - The best creative studio in Nairobi Kenya "
        />
        <meta
          property="og:url"
          content={`https://www.mkstudioke.com/clients`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/mklogo.svg" />
      </Head>
      <div className="bg-[#ECE7DC] px-8 lg:px-16 -mt-4 pb-8 min-h-screen">
        {/* Logo */}
        <Image  src={Logo} alt="clients" className="w-auto h-auto" />
        <main>
          <p className="lg:text-5xl text-4xl text-center font-medium mt-8 lg:-mt-[20px] text-neutral-900">
            Clients
          </p>
          {/* Clients */}
          <div className="w-full grid place-content-center mt-20">
            <Image quality={30} priority src={brands} alt="brands" />{" "}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Portfolio;
