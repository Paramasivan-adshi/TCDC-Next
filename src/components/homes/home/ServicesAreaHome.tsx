
import Image, { StaticImageData } from "next/image";
import back_icon from "@/assets/img/section/section-back-icon.png";
import title_line from "@/assets/img/shape/section-title-line.png";

import service_icon_1 from "@/assets/img/services/service1.png";
import service_icon_2 from "@/assets/img/services/service2.png";
import service_icon_3 from "@/assets/img/services/service3.png";
import service_icon_4 from "@/assets/img/services/service4.png";
import service_icon_5 from "@/assets/img/services/service5.png";
import service_icon_6 from "@/assets/img/services/service6.png";
import Link from "next/link";

interface service_content_type {
  // sub_title: string;
  title: string;
  service_data: {
      id: number;
      img: StaticImageData;
      title: string;
      sm_des: string;
  }[];
}
const service_content: service_content_type = {
  // sub_title: "Departments",
  title: "Managed Your dental services",
  service_data: [
    {
      id: 1,
      img: service_icon_1,
      title: "General Dentistry",
      sm_des: "Comprehensive general dentistry for all ages, ensuring healthy smiles through routine check-ups, cleanings, and preventive care.",
    },
    {
      id: 2,
      img: service_icon_2,
      title: "Cosmetic Dentistry",
      sm_des: " Enhance your smile with our expert cosmetic dentistry services, including teeth whitening, veneers, and smile makeovers.",
    },
    {
      id: 3,
      img: service_icon_3,
      title: "Orthodontics",
      sm_des: "Straighten your teeth and improve your bite with our advanced orthodontic treatments, including braces and Invisalign.",
    },
    {
      id: 4,
      img: service_icon_4,
      title: "Family Dentistry",
      sm_des: "Quality family dentistry for patients of all ages, providing a comfortable and caring environment for your entire family's dental needs.",
    },
    {
      id: 5,
      img: service_icon_5,
      title: "Root Canal",
      sm_des: "Save your natural teeth with our precise and painless root canal treatments, designed to alleviate pain and restore dental health.",
    },
    {
      id: 6,
      img: service_icon_6,
      title: "Dental Implants",
      sm_des: "Restore your smile and confidence with our durable and natural-looking dental implants, a permanent solution for missing teeth.",
    }
  ],
}
const { title, service_data } = service_content

const ServicesAreaHome = () => {
  return (
    <>
      <section className="servcies-area gray-bg pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
              <div className="section-title text-center pos-rel mb-75">
                <div className="section-icon">
                  <Image className="section-back-icon" src={back_icon} alt="theme-pure" />
                </div>
                <div className="section-text pos-rel">
                  {/* <h5>{sub_title}</h5> */}
                  <h1>{title}</h1>
                </div>
                {/* <div className="section-line pos-rel">
                  <Image src={title_line} alt="theme-pure" />
                </div> */}
              </div>
            </div>
          </div>
          <div className="row">
            {service_data.map((item, i) =>
              <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                <div className="service-box text-center mb-30">
                  <div className="service-thumb">
                    <Image src={item.img} alt="theme-pure" />
                  </div>
                  <div className="service-content">
                    <h3><Link href="#">{item.title}</Link></h3>
                    <p>{item.sm_des}</p>
                    <Link className="service-link" href="/service-details">Read More</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesAreaHome;