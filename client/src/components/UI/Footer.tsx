import { Link, useNavigate } from "react-router";
import MyButton from "src/components/Buttons/Button-1"

const Footer = () => {
    const navigate = useNavigate()
  return (
    <footer className="flex flex-col">
      <section className="">
        <img src="/car.webp" alt="logo" className="w-full"/>
      </section>
      <section className="">
        <nav className="flex  justify-center items-center gap-5 sm:justify-evenly h-auto">
          <Link to="/dashboard" className="hover:border border-teal-400 p-2">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/cars">Cars</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </section>
      <section className="flex justify-end-safe items-center gap-4">
        <Link to="" rel="noreferrer noopener">Facebook</Link>
        <Link to="" rel="noreferrer noopener">Instagram</Link>
        <Link to="" rel="noreferrer noopener">X</Link>
      </section>
      <section>
        <MyButton message="Get in touch " className="rounded-sm w-38 ml-3" onClick={() => navigate("/contact")} />
      </section>
      <section>
        Copyright message
      </section>
    </footer>
  );
};

export default Footer;
