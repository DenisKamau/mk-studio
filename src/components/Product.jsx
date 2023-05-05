import Image from "next/image";
import whatsappIcon from "../../public/assets/svg/whatsapp.svg";

function Product({ name, price, image, index }) {
  return (
    <div>
      <main>
        <div className="">
          <div className="overflow-hidden h-[240px] mb-6 w-full sm:w-[338px]">
            <Image
              src={image}
              alt={`${name} image`}
              quality={70}
              className="xl:hover:scale-110 xl:transition-all xl:ease-in-out xl:duration-200"
            />
          </div>

          {/* Details */}
          <div className=" items-start  justify-between  sm:max-w-[338px] w-full">
            <div className="">
              <p className="text-lg font-sans font-medium leading-normal text-gray-900">
                {index + 1}. {name}
              </p>
              <p className="text-2xl mt-2 font-sans font-bold leading-none text-gray-900 hidden">
                Kes {price}
              </p>
            </div>
            {/* Whatsapp button */}
            <a
              href={`https://wa.me/254704945784/?text=Hi, I am interested in the ${name} portrait`}
              className="border  hover:bg-[#2cb742]/10 font-sans flex gap-2 text-gray-500 w-fit mt-4 items-center text-sm  border-[#2cb742] transition-all ease-in-out duration-200 font-medium rounded-md px-4 py-2 ">
              <p>Order</p>
              <Image src={whatsappIcon} alt="logo" width={16} height={16} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Product;
