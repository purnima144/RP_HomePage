// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import AboutImg from '../src/assets/img/About1.png';
import Avatar1Img from '../src/assets/img/testimonials/avatar1.png';
import Avatar2Img from '../src/assets/img/testimonials/avatar2.png';
import Avatar3Img from '../src/assets/img/testimonials/avatar3.png';
import Logo from '../src/assets/img/vlab-logo.png';
import HeroImage from '../src/assets/img/Image-1.png';
import Feature3BgImg from '../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../src/assets/img/features/feature4_bg.png';
import purnimaImg from '../src/assets/img/team/purnima_pic.jpg'
import pramodImg from '../src/assets/img/team/Ashish_sirrrrrrrrrrrrrr.jpeg'

export const navigationData = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'Generator',
    href: '#',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Team',
    href: '#team',
  },
];

export const heroData = {
  title: `Remote IoT Laboratory`,
  subtitle:
    'Generate brandable drug names using artificial intelligence.',
  btnText: 'Get started',
  btnText1: 'Prerequisites',
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: '"Know a little more Remote IoT Lab" ',
  subtitle:
    'Remote laboratories have emerged as a viable solution for students to gain practical experience with specialized equipment and instruments from any location. With the COVID-19 epidemic limiting traditional offline labs, the need for online virtual labs has grown, particularly in teaching programmes. The growing interest in the Internet of Things (IoT) has amplified the demand for adaptable architectural designs to connect diverse IoT devices and systems. This product has the ability to provide the infrastructure for remotely performing Arduino experiments with real hardware in real-time.'
};

export const featuresData = {
  title: 'Our Team',
  subtitle:
    'We believe that our skills and experiences make us strong and well-rounded team that is capable of tackling any challenge that comes our way!!',
  list: [
    {
      image:pramodImg ,
      bgImage: Feature3BgImg,
      title: 'Ashish Saini',
      description:
        'Teammate, FullStack Developer',
      delay: '1000',
    },
    {
      image: purnimaImg ,
      bgImage: Feature4BgImg,
      title: 'Purnima Sah',
      description:
        'Teammate, Frontend Developer',
      delay: '1300',
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: 'Serena',
    web: 'rena.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '300',
  },
  {
    image: Avatar2Img,
    name: 'Natalia',
    web: 'nataliya.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '600',
  },
  {
    image: Avatar3Img,
    name: 'Vebin',
    web: 'vebin.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '900',
  },
];

export const ctaData = {
  title: 'Contact Us From Here',
  subtitle: 'Get limited 1 week free try our features!',
  btnText1: 'Learn more',

};

export const footerData = {
  logo: Logo,
  address: 'Product: Remote IoT Lab, 769008 Sector 1 NIT Rourkela',
  email: 'ashish786sde@gmail.com',
  phone: '111111111',
  socialList: [
    {
      icon: <FaYoutube />,
      href: '#',
    },
    {
      icon: <FaInstagram />,
      href: '#',
    },
    {
      icon: <FaGithub />,
      href: '#',
    },
  ],
};

export const copyrightData = {
  text: ' Remote IoT Lab © 2024. All rights reserved. Company Registration Number: 0000011111.',
};
