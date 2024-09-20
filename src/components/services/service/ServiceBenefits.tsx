import React from "react";
import hiring_img_1 from "@/assets/img/hire/hire1.jpg";
import hiring_img_2 from "@/assets/img/hire/hire2.jpg";
import Image from "next/image";
import Link from "next/link";
import Rectangle_5 from "@/assets/img/services/Rectangle-5.png";
import Rectangle_6 from "@/assets/img/services/Rectangle-6.png";


const Benefits_content = {
  titlemain: "Benefits of Choosing Town Center Dental Care",
  benefits: [
    {
      title: "Experienced and Caring Dentist",
      description:
        "Dr. Simon has extensive experience in general dentistry and is passionate about providing high-quality care.",
      image: "/assets/img/services/quality.png",
    },
    {
      title: "Gentle and Compassionate Staff",
      description:
        "Our team is dedicated to making your dental visit as comfortable as possible.",
      image: "/assets/img/services/dentist.png",
    },
    {
      title: "Modern Technology",
      description:
        "We utilize the latest dental technology to ensure accurate diagnosis and effective treatment.",
      image: "/assets/img/services/dentist-chair.png",
    },
    {
      title: "Convenient Location",
      description:
        "Our office is conveniently located in Milpitas, with easy access to parking.",
      image: "/assets/img/services/location-pin.png",
    },
  ],
};
const { benefits, titlemain } = Benefits_content;

const ServiceBenefits = () => {
  return (
    <>
      <section className="benefits-area py-5">
        <div className="container">
          <div className="row">
            <h2 className="text-center mb-2">{Benefits_content.titlemain}</h2>
            <div className="d-flex justify-content-center mb-4">
              <Image src={Rectangle_5} alt="Image" height={22} width={200} className="card-img-top w-50 p-2" />
            </div>
            {Benefits_content.benefits.map((benefit, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card h-100 border-0 py-3 bg-service-box">
                  <div className="container">
                    <div className="row align-items-start">
                      <div className="col-2">
                        <img
                          src={benefit.image}
                          alt={benefit.title}
                          className="card-img-top w-100"
                        />
                      </div>
                      <div className="col-10 pr-0 pl-0">
                        <div className="card-body">
                          <h2 className="card-title h4">{benefit.title}</h2>
                          <div>
                          <Image
                          src={Rectangle_6}
                          alt="Image"
                          height={21} width={100}
                          className="card-img-top p-2" style={{width:'180px'}}
                        />
                          </div>
                          <p className="card-text text-muted">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceBenefits;
