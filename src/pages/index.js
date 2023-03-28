import Head from "next/head";
import Image from "next/image";
import Logo from "../../public/assets/svg/mklogo.svg";
import image1 from "../../public/assets/img/image1.png";
import image2 from "../../public/assets/img/image2.png";
import image3 from "../../public/assets/img/image3.png";
import image4 from "../../public/assets/img/image4.png";
import image5 from "../../public/assets/img/image5.png";
import image6 from "../../public/assets/img/image6.png";
import image7 from "../../public/assets/img/image7.png";
import image8 from "../../public/assets/img/image8.png";
import image9 from "../../public/assets/img/image9.png";
import jamesonBg from "../../public/assets/img/jameson.png";
import outdoor from "../../public/assets/img/outdoor.png";
import studio from "../../public/assets/img/studioshoots.png";
import videos from "../../public/assets/img/videos.png";
import printMedia from "../../public/assets/img/jamesons.png";
import { useState, useEffect } from "react";

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <title>MK-Studio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mklogo.svg" />
      </Head>
      <div className="grid grid-cols-12 gap-[55px] items-start">
        {/* Left part */}
        <div className="col-span-6 pl-16">
          {/* Logo */}
          <Image src={Logo} />
          <div className="mt-[146px]">
            <div className="relative">
              <div className="pl-[132px]">
                <div className="w-52 h-40  absolute -z-10 bg-stone-600"></div>
              </div>
              <div className="flex">
                <p className="text-5xl font-medium max-w-[538px] text-white pt-[25px] leading-[58px]">
                  The heart and mind are the true lens of the camera.
                </p>
                <div className="w-1.5 h-24 mt-[100px] ml-[25px] bg-stone-200"></div>
              </div>
              <div className="w-1.5 h-24 mt-[80px] bg-stone-200"></div>
            </div>
          </div>
        </div>

        {/* Right Part */}
        <div className="col-span-6">
          <div className="flex gap-6 items-start">
            <div className="space-y-6 mt-[152px]">
              <Image src={image1} width="220" />
              <Image src={image2} width="220" />
              <Image src={image3} width="220" />
            </div>
            <div className="space-y-6 mt-20">
              <Image src={image4} width="220" />
              <Image src={image5} width="220" />
              <Image src={image6} width="220" />
            </div>
            <div className="space-y-6 -mt-[100px]">
              <Image src={image7} width="220" />
              <Image src={image8} width="220" />
              <Image src={image9} width="220" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center -mt-[280px] min-h-[987px]">
        <Image
          src={jamesonBg}
          loading="lazy"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="absolute z-10"
        />
        <div className="z-20 mt-[290px] w-full mx-16">
          <div className="bg-neutral-900 flex justify-center  py-10 px-[140px] bg-opacity-70">
            <p className="text-3xl font-medium text-center max-w-[1077px] leading-[39px] text-white">
              We shoot because we see differently. A Team of dedicated creatives
              who offer visual solutions. With an experience of over 5yrs we
              have worked with big brands to implement and bring their ideas to
              life. Our turnover time is incredible and we exist to connect you
              with the target market.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 items-start">
        {/* Outdoor shoots */}
        <div className="relative flex justify-end items-end  min-h-[987px]">
          <Image
            src={outdoor}
            loading="lazy"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="absolute z-10"
          />
          <div className="z-20 relative flex flex-col  w-full mx-16">
            <p className="text-4xl font-medium text-white pb-8">
              Outdoor shoots
            </p>
            <div className="w-1.5 h-[97px]  absolute bottom-[-80px] bg-stone-200"></div>
          </div>
        </div>

        {/* Studio shoots */}
        <div className="relative flex justify-end items-end  min-h-[987px]">
          <Image
            src={studio}
            loading="lazy"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="absolute z-10"
          />
          <div className="z-20  w-full mx-16">
            <p className="text-4xl font-medium text-white pb-8">
              Studio shoots
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 items-start bg-[#D9D9D9] pb-20">
        <div className="pl-[82px] pt-[115px]">
          <div className="w-52 h-4 mb-5 bg-stone-600"></div>
          <p className="text-5xl mb-6 font-medium text-stone-600">
            Photography / Videography
          </p>
          <ul className="max-w-[480px] list-disc pl-8">
            <li className="text-2xl leading-[29px] font-medium text-stone-600">
              Full day and half day shoots
            </li>
            <li className="text-2xl leading-[29px] font-medium text-stone-600">
              Single shooter and multi shooters options
            </li>
            <li className="text-2xl leading-[29px] font-medium text-stone-600">
              Photo editing ,colour correction and retouching
            </li>
            <li className="text-2xl leading-[29px] font-medium text-stone-600">
              Photo library hosting
            </li>
            <li className="text-2xl leading-[29px] font-medium text-stone-600">
              Corporate team photography, commercial photography, event
              photography, lifestyle photography
            </li>
          </ul>
        </div>
        <div className="pl-[70px] pt-[115px]">
          <div className="w-52 h-4 mb-5 bg-stone-600"></div>
          <p className="text-5xl mb-6 font-medium text-stone-600">Livestream</p>
          <ul className="max-w-[480px] list-disc pl-8">
            <li className="text-2xl leading-[29px] font-medium text-stone-600">
              Recorded footage of the livestream
            </li>
            <li className="text-2xl leading-[29px] font-medium text-stone-600">
              Edited trailer of the livestream
            </li>
            <li className="text-2xl leading-[29px] font-medium text-stone-600">
              Sound and mics for the event
            </li>
            <li className="text-2xl leading-[29px] font-medium text-stone-600">
              Screens for presentation
            </li>
            <li className="text-2xl leading-[29px] font-medium text-stone-600">
              Lower thirds and graphics design
            </li>
          </ul>
        </div>
      </div>

      {/* Video */}
      <div className="relative  justify-end items-end  min-h-screen">
        <video autoPlay muted loop id="myVideo" className="min-h-screen">
          <source src="/1.mp4" type="video/mp4"  />
        </video>

        <div className="z-20 absolute  bottom-1  w-full mx-16">
          <p className="text-4xl hidden font-medium text-white pb-8">Videos</p>
        </div>
      </div>

      <div className="grid grid-cols-2 items-start">
        {/* Events */}
        <div className="relative flex justify-end items-end  min-h-[900px]">
          <Image
            src={videos}
            loading="lazy"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="absolute z-10"
          />
          <div className="z-20 relative flex flex-col  w-full mx-16">
            <p className="text-4xl font-medium text-white pb-8">Events</p>
          </div>
        </div>

        {/* Print Media */}
        <div className="relative flex justify-end items-end  min-h-[900px]">
          <Image
            src={printMedia}
            loading="lazy"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="absolute z-10"
          />
          <div className="z-20  w-full mx-16">
            <p className="text-4xl font-medium text-white pb-8">Print media</p>
          </div>
        </div>
      </div>
    </>
  );
}
