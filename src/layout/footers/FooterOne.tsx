import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import footer_logo from "@/assets/img/logo/MTCDC-Header-Logo.png";
import { CopyRight } from '@/components/common/SocialLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYelp } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS

// Make sure the FontAwesome library is initialized
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

// footer data type
interface FooterContentDatatype {
  number_text: string;
  number: string;
  sm_info: string;
  email: string;
  website: string;
  address: string;
  footer_links: {
    id: number;
    cls: string;
    title: string;
    links: {
      link: string;
      title: string;
      icon?: JSX.Element;
    }[];
  }[];
}

// footer content
const footer_content: FooterContentDatatype = {
  number_text: "Contact number",
  number: "408-262-6608",
  sm_info: "Our friendly and experienced team provides a comfortable and welcoming environment, making dental care a positive experience.",
  email: "",
  website: "examplemedical.com",
  address: "491 E Calaveras Blvd Milpitas, CA 95035-549",
  footer_links: [
    {
      id: 1,
      cls: "col-md-4",
      title: "Services",
      links: [
        { link: "#", title: "General Dentistry" },
        { link: "#", title: "Orthodontics" },
        { link: "#", title: "Cosmetic Dentistry"},
        { link: "#", title: "Dental Implants" },
        { link: "#", title: "Root Canal" },
      ]
    },
    {
      id: 2,
      cls: "d-md-none d-lg-block",
      title: "Social Links",
      links: [
        { link: "https://www.facebook.com/people/Town-Center-Dental-Care/100070301406268/", title: "Facebook", icon: <FontAwesomeIcon icon={faFacebook} /> },
        { link: "#", title: "Instagram", icon: <FontAwesomeIcon icon={faInstagram} /> },
        { link: "https://www.yelp.com/biz/milpitas-town-center-dental-care-milpitas", title: "Yelp", icon: <FontAwesomeIcon icon={faYelp} /> },
        { link: "https://www.google.com/maps/place/Milpitas+Town+Center+Dental+Care/@37.4337776,-121.8998914,17z/data=!3m1!4b1!4m5!3m4!1s0x808fced581584f99:0x9d99996e3858e92b!8m2!3d37.4337776!4d-121.8977027?shorturl=1&shorturl=1", title: "Google map", icon: <FontAwesomeIcon icon={faMapMarkerAlt} /> },
      ]
    },
  ]
}

const { number_text, number, sm_info, email, website, address, footer_links } = footer_content

const FooterOne = () => {
  return (
    <>
      <footer>
        <div className="footer-top primary-bg pt-115 pb-10">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="footer-contact-info mb-30">
                  <div className="emmergency-call fix">
                    <div className="emmergency-call-icon f-left">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="emmergency-call-text f-left">
                      <h6>{number_text}</h6>
                      <span>{number}</span>
                    </div>
                  </div>
                  <div className="footer-logo mb-35">
                    <Link href="#"><Image src={footer_logo} height={120} width={260} alt="theme-pure" /></Link>
                  </div>
                  <div className="footer-contact-content mb-25">
                    <p>{sm_info}</p>
                  </div>
                  <div className="footer-emailing">
                    <ul>
                      <li><i className="far fa-flag"></i>{address}</li>
                    </ul>
                  </div>
                </div>
              </div>
              {footer_links.map((item, i) =>
                <div key={i} className={`col-xl-2 offset-xl-1 col-lg-3 ${item.cls}`}>
                  <div className="footer-widget mb-30">
                    <div className="footer-title">
                      <h3>{item.title}</h3>
                    </div>
                    <div className="footer-menu">
                      <ul>
                        {item.links.map((link, index) =>
                          <li key={index}><Link href={link.link} target="_blank" rel="noopener noreferrer">{link.icon} {link.title}</Link></li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="footer-bottom pt-25 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="footer-copyright text-center">
                  <p className="white-color"><CopyRight /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
