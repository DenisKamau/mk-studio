import Logo from "../../public/assets/svg/darklogo.svg";
import Image from "next/image";
import Head from "next/head";
import Product from "@/components/Product";
import { Products } from "public/data/products";

function Shop() {
  return (
    <div>
      <Head>
        <title>Shop</title>
        <meta
          name="description"
          content="MK Studio shop with all products we offer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mklogo.svg" />
      </Head>
      <div className="bg-[#ECE7DC] h-full px-8 lg:px-16 -mt-4 pb-8">
        {/* Logo */}
        <Image src={Logo} priority="eager" alt="logo" width={71} height={166} />
        <main className="pb-14">
          <p className="lg:text-5xl text-4xl text-center font-medium mt-8 lg:-mt-[20px] text-neutral-900">
            Shop
          </p>
          <div className="mt-20 grid sm:grid-cols-2 md:grid-cols-2 gap-6 xl:grid-cols-3 2xl:grid-cols-4">
            {Products.map((product, index) => {
              return (
                <Product
                  key={index}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Shop;
