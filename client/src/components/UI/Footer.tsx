import { Link, useNavigate } from "react-router";
import MyButton from "src/components/Buttons/Button-1"

const Footer = () => {
    const navigate = useNavigate()
  return (
    <footer className="flex flex-col bg-indigo-400 text-white">
      <section className="">
        <img src="/car.webp" alt="logo" className="w-48 sm:w-96"/>
      </section>
      <section className="">
        <nav className="flex  justify-center items-center gap-5 sm:justify-evenly h-auto">
          <Link to="/dashboard" className="hover:border border-teal-400 p-2">Home</Link>
          <Link to="/about-us">About us</Link>
          <Link to="/dashboard">Cars</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </section>
      <section className="flex justify-end-safe items-center gap-4">
        <Link to="https://facebook.com" rel="noreferrer noopener">Facebook</Link>
        <Link to="https://instagram.com" rel="noreferrer noopener">Instagram</Link>
        <Link to="https://x.com" rel="noreferrer noopener">X</Link>
      </section>
      <section>
        <MyButton message="Get in touch " className="rounded-sm w-38 ml-3 text-white" onClick={() => navigate("/contact")} />
      </section>
      <section>
        Copyright message
      </section>
    </footer>
  );
};

export default Footer;
