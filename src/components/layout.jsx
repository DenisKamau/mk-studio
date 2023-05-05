import dynamic from "next/dynamic";

const Footer = dynamic(() => import("./footer"));
const Navbar = dynamic(() => import("./navbar"));

export default function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className=" min-h-screen ">{children}</main>
      <Footer className=" mt-auto" />
    </div>
  );
}
