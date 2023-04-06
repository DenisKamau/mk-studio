import Image from "next/image";
import whatsappIcon from "../../public/assets/svg/whatsapp.svg";

function Product({ name, price, image }) {
  return (
    <div>
      <main>
        <div className="">
          <div className="overflow-hidden h-[240px] mb-12 w-full sm:w-[338px]">
            <Image
              src={image}
              alt="logo"
              priority
              className="hover:scale-110 transition-all ease-in-out duration-200"
            />
          </div>

          {/* Details */}
          <div className="flex items-start justify-between mt-6 sm:max-w-[338px] w-full">
            <div className="">
              <p className="text-xl font-sans font-normal leading-none text-gray-900">
                {name}
              </p>
              <p className="text-2xl mt-2 font-sans font-bold leading-none text-gray-900">
                Kes {price}
              </p>
            </div>
            {/* Whatsapp button */}
            <button className="border hover:bg-[#2cb742]/10 font-sans flex gap-2 text-gray-500 items-center text-sm  border-[#2cb742] font-medium rounded-md px-4 py-2">
              <p>Order</p>
              <Image src={whatsappIcon} alt="logo" width={16} height={16} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Product;
