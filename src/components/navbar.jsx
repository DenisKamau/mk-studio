import { useRouter } from "next/router";
import Link from "next/link";

function Navbar() {
  const { asPath } = useRouter();
  const path = asPath.split("#")[0].split("?")[0];

  console.log(path);

  return (
    <div>
      <main
        className={
          "grid w-full place-content-center py-4 " +
          (path !== "/" ? "bg-[#ECE7DC] " : "bg-transparent")
        }>
        <ul className="flex gap-x-9 text-lg font-medium items-center list-none">
          <li className={path === "/" ? "text-[#FFFFFF]" : "text-[#949494]"}>
            <Link href="/">About</Link>
          </li>
          <li
            className={path === "/portfolio" ? "text-black" : "text-[#949494]"}>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className={path === "/clients" ? "text-black" : "text-[#949494]"}>
            <Link href="/clients">Clients</Link>
          </li>
          {/* <li className={path === "/shop" ? "text-black" : "text-[#949494]"}>
            <Link href="/shop">Shop</Link>
          </li>
          <li className={path === "/contact" ? "text-black" : "text-[#949494]"}>
            <Link href="/contact">Contact</Link>
          </li> */}
        </ul>
      </main>
    </div>
  );
}

export default Navbar;
