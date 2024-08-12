'use client'
import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import backIcon from "@/assets/img/section/Dental-background.png";
import titleLine from "@/assets/img/shape/section-title-line.png";

import blog_thumb_1 from "@/assets/img/blog/Top-Near-Me-1.jpg";
import blog_thumb_2 from "@/assets/img/blog/Routine-1.jpg";

// Data type
interface LatestContentDataType {
  sub_title: string;
  title: string;
  latest_news_data: {
      id: number;
      img: StaticImageData;
      tag_1: string;
      tag_2: string;
      title: string;
      sm_des: string;
  }[];
  singl_news: {
      id: number;
      title: string;
      time: string;
      comments: number;
  }[];
}
// latest content 
const latest_content: LatestContentDataType = {
  sub_title: "",
  title: "Our Blogs",
  latest_news_data: [
    {
      id: 1,
      img: blog_thumb_1,
      tag_1: "Dentist",
      tag_2: "",
      title: "Top Rated Dentist Near Me, Milpitas",
      sm_des: "In the quest for a healthy, beautiful smile, the choice of a dental provider is paramount. Our residents have the privilege of accessing top-rated dental care, where the focus transcends basic treatment to encompass a holistic approach to patient well-being.These distinguished practices excel in offering a blend of advanced dental techniques and a nurturing environment, ensuring every visit contributes positively to both oral health and personal comfort.",
    },
    {
      id: 2,
      img: blog_thumb_2,
      tag_1: "Dental",
      tag_2: "",
      title: "Routine Dental Care in Milpitas",
      sm_des: "Achieving a beautiful smile and maintaining the health of your teeth are goals that resonate with many. Beyond the aesthetic appeal, a healthy mouth plays a vital role in your overall well-being. Routine dental care treatments are foundational to this pursuit, offering preventive measures and solutions that ensure your oral health is always at its best. In our practice, families have access to top-tier dental care that addresses the needs of individuals.",
    },
  ],

  singl_news: [
    {
      id: 1,
      title: "Teeth Cleaning Near Me in Milpitas",
      time: "25 August 2023",
      comments: 22,
    },
    {
      id: 2,
      title: "Dental Exam and Cleaning Near Me in Milpitas",
      time: "26 August 2023",
      comments: 33,
    },
    {
      id: 3,
      title: "Teeth Whitening Treatment in Milpitas",
      time: "27 August 2023",
      comments: 44,
    },
    {
      id: 3,
      title: "Teeth Cleaning Near Me in Milpitas",
      time: "27 August 2023",
      comments: 4422,
    },
  ]
}
const { sub_title, title, latest_news_data, singl_news } = latest_content

type DataType = {
  style?: any;
}
const LatestNewsAreaHomeOne = ({style}: DataType) => {
  return (
    <>
      <section className="latest-news-area pt-100 pb-20">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7">
              <div className="section-title pos-rel mb-75">
                <div className="section-icon">
                  <Image className="section-back-icon back-icon-left" src={backIcon} alt="theme-pure" />
                </div>
                <div className="section-text pos-rel">
                  <h5>{sub_title}</h5>
                  <h1>{title}</h1>
                </div>
                {/* <div className="section-line pos-rel">
                  <Image src={titleLine} alt="theme-pure" />
                </div> */}
              </div>
            </div>
            {/* <div className="col-xl-6 col-lg-5 d-none d-lg-block">
              <div className="section-button text-end pt-80">
                <Link data-animation="fadeInLeft" data-delay=".6s" href="/blog" className="btn btn-icon ml-0">
                  <span>+</span>our blog
                </Link>
              </div>
            </div> */}
          </div>
 

 

          <div className="row">
            {latest_news_data.map((item, i) =>
              <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                <div className="latest-news-box mb-30">
                  <div className="latest-news-thumb mb-35">
                    <Image src={item.img} style={{ width: "100%" }} alt="theme-pure" />
                  </div>
                  <div className="latest-news-content">
                    <div className="news-meta mb-10">
                      <span><a href="#" className="news-tag">{item.tag_1}</a></span>
                      <span><a href="#" className="news-tag">{item.tag_2}</a></span>
                    </div>
                    <h3><Link href="/news-details">{item.title}</Link></h3>
                    <p>{item.sm_des}</p>
                  </div>
                </div>
              </div>
            )}
            <div className="col-xl-4 col-lg-12 col-md-12">
              <div className="recent-news-list mb-60">
                {singl_news.map((news, index) =>
                  <div key={index} className={`latest-news-content singl-news  ${index === 0 || index === 1 || index === 2 ? "news-border-bottom" : ""}`}>
                    <h3><Link href="/news-details">{news.title}</Link></h3>
                    <span className="meta-date"><i className="far fa-calendar"></i>{news.time}</span>
                    {/* <span className="meta-date"><Link href="#"><i className="far fa-comments"></i>{news.comments} Comments</Link></span> */}
                  </div>
                )}
              </div>
              {!style && 
              <div className="mk-call-btn f-right mb-30">
                <Link data-animation="fadeInLeft" data-delay=".6s" href="/contact" className="btn btn-icon btn-icon-green ml-0">
                  <span><i className="fas fa-phone"></i></span>make call
                </Link>
              </div>              
              }
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default LatestNewsAreaHomeOne;