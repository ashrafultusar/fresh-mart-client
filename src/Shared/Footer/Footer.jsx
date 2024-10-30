import logo from "../../assets/images/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
          <img src={logo} alt="" />

                  <div className="flex mt-4 justify-around gap-6 ">
                      <Link className="border py-2 px-3 text-lg rounded-md bg-[#ffffff]"><FaFacebookF /></Link>
                      <Link className="border py-2 px-3 text-lg rounded-md bg-[#ffffff]"><FaInstagram /></Link>
                      <Link className="border py-2 px-3 text-lg rounded-md bg-[#ffffff]">  <FaYoutube /></Link>
                      <Link className="border py-2 px-3 text-lg rounded-md bg-[#ffffff]"> <FaTwitter /></Link>
          </div>
        </aside>

        <nav>
          <h6 className="footer-title">Organic</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Conditions</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Customer Service</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;