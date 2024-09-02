
import Service from '@/components/services/service';
import Wrapper from '@/layout/Wrapper'; 

export const metadata = {
  title: "General Dentist in Milpitas, CA",
};



const index = () => {
  return (
    <Wrapper>
      <Service />      
    </Wrapper>
  );
};

export default index;