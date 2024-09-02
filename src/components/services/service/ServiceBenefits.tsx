
import React from 'react';
import hiring_img_1 from "@/assets/img/hire/hire1.jpg";
import hiring_img_2 from "@/assets/img/hire/hire2.jpg"
import Image from 'next/image';
import Link from 'next/link';

const Benefits_content = {
  titlemain: "Benefits of Choosing Town Center Dental Care",
  benefits: [
    {
      title: "Experienced and Caring Dentist",
      description: "Dr. Simon has extensive experience in general dentistry and is passionate about providing high-quality care.",
      image: "path/to/experienced-caring-dentist-image.jpg" // Replace with the actual image path
    },
    {
      title: "Gentle and Compassionate Staff",
      description: "Our team is dedicated to making your dental visit as comfortable as possible.",
      image: "path/to/gentle-compassionate-staff-image.jpg" // Replace with the actual image path
    },
    {
      title: "Modern Technology",
      description: "We utilize the latest dental technology to ensure accurate diagnosis and effective treatment.",
      image: "path/to/modern-technology-image.jpg" // Replace with the actual image path
    },
    {
      title: "Convenient Location",
      description: "Our office is conveniently located in Milpitas, with easy access to parking.",
      image: "path/to/convenient-location-image.jpg" // Replace with the actual image path
    }
  ]
}
const { benefits, titlemain} = Benefits_content

const ServiceBenefits = () => {
  return (
    <>
      <section className="benefits-area pt-50 pb-50">
      <div className="container">
        <div className="row comprehensive-text">
          <h1>{Benefits_content.titlemain}</h1>
          {Benefits_content.benefits.map((benefit, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="benefit-item card">
                <img src={benefit.image} alt={benefit.title} className="benefit-image card-img-top" />
                <div className="card-body">
                  <h2 className="card-title">{benefit.title}</h2>
                  <p className="card-text">{benefit.description}</p>
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