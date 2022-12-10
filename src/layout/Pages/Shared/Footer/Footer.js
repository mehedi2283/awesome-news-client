import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4 bg-light mt-3 footer">
    <div className="container-fluid text-center text-md-left ">
      <div className="row justify-content-around align-items-center">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Awesome News</h5>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className=" text-underline"> Our Socials</h5>
          <hr />
          <div className="list-unstyled d-flex justify-content-evenly">
            <li className=" facebook bg-light  rounded border-0">
              <Link>
                <FaFacebook
                  className="fs-1 "
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Follow us on FaceBook"
                ></FaFacebook>
                <h4 className="">Facebook</h4>
              </Link>
            </li>
            <li className=" twitter  rounded border-0">
              <Link>
                <FaTwitter
                  className="fs-1 "
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Follow us on Twitter"
                ></FaTwitter>
                <h4 className="">Twitter</h4>
              </Link>
            </li>
            <li className=" whatsapp bg-light  rounded border-0">
              <Link>
                <FaWhatsapp
                  className="fs-1 "
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Follow us on Whatsapp"
                ></FaWhatsapp>
                <h4>Whatsapp</h4>
              </Link>
            </li>
            <li className=" twitch bg-light  rounded border-0">
              <Link>
                <FaTwitch
                  className="fs-1 "
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Follow us on Twitch"
                ></FaTwitch>
                <h4 className="">Twitch</h4>
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2022 Copyright:
      <Link to="./home"> Awesome_News.com</Link>
    </div>
  </footer>
);

export default Footer;
