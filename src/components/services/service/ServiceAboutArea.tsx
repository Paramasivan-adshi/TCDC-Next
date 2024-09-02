import React from 'react';
import Image from 'next/image';
import about_right from "@/assets/img/services/Generaldentistabtimg.png";
import servcies_data from '@/data/ServiceData';
import Link from 'next/link';


type DataType = {
  sub_title: string;
  title: string;
  sm_des: string;
  sm_desc1: string;
}
const service_content: DataType = {
  sub_title: "health care facility",
  title: "Would you rather stay at home than go into a health care facility?",
  sm_des: "At Town Center Dental Care, we're committed to providing exceptional dental care for patients of all ages. Dr. Cesar Simon has been serving the Milpitas community for nearly 30 years, and our friendly and professional team is dedicated to ensuring your dental experience is comfortable and positive.",
  sm_desc1: "We understand that visiting the dentist can cause anxiety for some people. That's why we create a welcoming and relaxed atmosphere in our modern office. We take the time to listen to your concerns and answer all your questions thoroughly."
}
const { sub_title, title, sm_des, sm_desc1 } = service_content

const ServiceAboutArea = ({ service_2 }: any) => {
  return (
    <>
      <section className="about-area pt-60 pb-0">
        <div className="container">
          <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="facalty-text mb-50">
                <p>{sm_des}</p>
                <p>{sm_desc1}</p>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12  pt-30" style={{ height: '412px' }}>
              <div className="section-title section-title-m-0 pos-rel mb-50 text-end">
                <div className="section-icon">
            <Image src={about_right} height={300} width={693} alt="General Dentistry About" />
                </div>
              </div>
            </div>
       
          </div>
          {/* {!service_2 &&
            <div className="row">
              {servcies_data.map((item, i) =>
                <>
                  {item.service &&
                    <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                      <div className="service-box service-box-border text-center mb-30">
                        <div className="service-thumb">
                          <Image src={item.img} alt="theme-pure" />
                        </div>
                        <div className="service-content">
                          <h3><a href="#">{item.title}</a></h3>
                          <p>{item.sm_des}</p>
                          <Link className="service-link" href="/service-details">Read More</Link>
                        </div>
                      </div>
                    </div>
                  }
                </>
              )}
            </div>
          } */}
        </div>
      </section >
    </>
  );
};

export default ServiceAboutArea;