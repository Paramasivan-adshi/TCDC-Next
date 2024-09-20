import Link from "next/link";

type CtaContentType = {
  bg_img: string;
  title: string;
  sm_info: string;
};
const cta_content: CtaContentType = {
  bg_img: "/assets/img/slider/slider-bg-1.jpg",
  title: "",
  sm_info:
    "We invite you to contact Town Center Dental Care today to schedule an appointment. We look forward to meeting you and helping you achieve optimal oral health!",
};
const { bg_img, title, sm_info } = cta_content;

const ScheduleAppointment = () => {
  return (
    <>
      <section
        className="cta-area pos-rel pt-60 pb-30"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-10 offset-xl-1 col-md-12">
              <div className="section-button section-button-center text-center">
                <Link
                  data-animation="fadeInLeft"
                  data-delay=".6s"
                  href="/appoinment"
                  className="btn btn-icon btn-icon-green ml-0"
                >
                  <span>+</span>Schedule an Appointment Today!
                </Link>
              </div>
              <div className="cta-text text-center">
                <div className="section-title appointmentDesc pos-rel pt-50 mb-50">
                  <div className="section-text section-text-white pos-rel">
                    <h1 className="white-color">{sm_info}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white pt-60 pb-100 pr-40 d-none d-md-block">
        <div className="mk-call-btn f-right mb-30">
          <Link
            data-animation="fadeInLeft"
            data-delay=".6s"
            href="/contact"
            className="btn btn-icon btn-icon-green ml-0"
          >
            <span>
              <i className="fas fa-phone"></i>
            </span>
            make call
          </Link>
        </div>
      </section>
      <section className="d-block d-md-none">
        <div className="bg-white p-1"></div>
      </section>
    </>
  );
};

export default ScheduleAppointment;
