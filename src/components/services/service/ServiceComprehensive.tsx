import React from 'react';
import Image from 'next/image';
import about_right from "@/assets/img/services/Generaldentistabtimg.png";
import servcies_data from '@/data/ServiceData';
import Link from 'next/link';


type DataType = {
  sub_title: string;
  title: string;
  list_items:string[];
}
const service_comprehensive : DataType = {
  sub_title: "We offer a wide range of general dentistry services including",
  title: "Comprehensive General Dentistry Services",
  list_items: [
    "Dental cleaning",
    "Dental examinations",
    "Dental X-rays",
    "Deep cleaning",
    "Root scaling and planing",
    "And more!",
  ],
}
const { sub_title, title, list_items } = service_comprehensive

const ServiceComprehensive = ({ service_2 }: any) => {
  return (
    <>
      <section className="about-area abt-bg pt-50 pb-0">
        <div className="container">
          <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="comprehensive-text mb-50">
                <h1>{title}</h1>
                <h2>{sub_title}</h2>
                <div className='row'>
                <ul className="listbox mt-20">
                    {list_items.map((list, index)=>(
      <div className='col-6 d-flex p-2'><li key={index}>
        {list}
      </li>  </div>
              ))}
               </ul>
               <p className='pt-40 text-center routinecheck'>Whether you need a routine checkup, a teeth cleaning, or treatment for a specific dental concern, we're here to help. We offer personalized treatment plans to address your unique needs and goals</p>
                </div>
           
              </div> 
          </div>   
          </div>
        </div>
      </section >
    </>
  );
};

export default ServiceComprehensive;