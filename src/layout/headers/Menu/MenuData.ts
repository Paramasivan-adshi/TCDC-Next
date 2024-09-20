
interface MenuDataType {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus: {
      link: string;
      title: string;
  }[];
}[]

const MenuData: MenuDataType[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false, 
    sub_menus: [
    ],
  },
  {
    id: 2,
    title: "Services+",
    link: "#",
    has_dropdown: true, 
    sub_menus: [
      { link: "/service/general-dentistry", title: "General Dentistry" },
      { link: "https://www.tcdc-cesarsimon.com/services/orthodontics/", title: "Orthodontics" },
      { link: "https://www.tcdc-cesarsimon.com/services/cosmetic-dentistry/", title: "Cosmetic Dentistry" },
      { link: "https://www.tcdc-cesarsimon.com/services/dental-implants/", title: "Dental Implants" },
      { link: "https://www.tcdc-cesarsimon.com/services/root-canal/", title: "Root Canal" },
    ],
  },
  {
    id: 3,
    title: "About us+",
    link: "#",
    has_dropdown: true, 
    sub_menus: [
      { link: "/doctor",                      title: "Our Practice",},  
      { link: "/doctor-2",                    title: "Meet the doctor",},  
      { link: "/doctor-details",              title: "Our Blogs",},  
    ],
  }, 
  {
    id: 4,
    title: "Before&after",
    link: "#",
    has_dropdown: true, 
    sub_menus: [
    ],
  },
  {
    id: 5,
    title: "Special Offers",
    link: "#",
    has_dropdown: true, 
    sub_menus: [
    ],
  }, 
  {
    id: 6,
    title: "New Patients",
    link: "#",
    has_dropdown: true, 
    sub_menus: [   
    ],
  }, 
  {
    id: 7,
    title: "Blogs",
    link: "#",
    has_dropdown: true, 
    sub_menus: [
    ],
  },
  {
    id: 8,
    title: "Reviews",
    link: "#",
    has_dropdown: true, 
    sub_menus: [
    ],
  }, 
  {
    id: 9,
    title: "Contact us",
    link: "#",
    has_dropdown: true, 
    sub_menus: [
    ],
  }, 
];
export default MenuData;
