
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import HeaderOne from '@/layout/headers/HeaderOne';
import React from 'react';
import ServiceAboutArea from './ServiceAboutArea';
import ServiceComprehensive from './ServiceComprehensive';
import ServiceBenefits from './ServiceBenefits';
import FooterThree from '@/layout/footers/FooterThree';
import FooterOne from '@/layout/footers/FooterOne';
import ScheduleAppointment from './ScheduleAppointment';
import "../../../../public/assets/css/service.css";


const Service = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb sub_title='' title='General Dentist in Milpitas, CA' page='Services' />
        <ServiceAboutArea />
        <ServiceComprehensive />
        <ServiceBenefits />
        <ScheduleAppointment />
    
      </main>
      <FooterOne />
    </>
  );
};

export default Service 