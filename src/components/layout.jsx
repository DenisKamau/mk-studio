import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className=" min-h-screen ">{children}</main>
      <Footer className=" mt-auto" />
    </div>
  );
}
