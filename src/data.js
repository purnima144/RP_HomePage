// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import AboutImg from '../src/assets/img/medicine.png';
import Feature1Img from '../src/assets/img/features/feature1.png';
import Feature2Img from '../src/assets/img/features/feature2.png';
import Feature3Img from '../src/assets/img/features/feature3.png';
import Feature4Img from '../src/assets/img/features/feature4.png';
import Avatar1Img from '../src/assets/img/testimonials/avatar1.png';
import Avatar2Img from '../src/assets/img/testimonials/avatar2.png';
import Avatar3Img from '../src/assets/img/testimonials/avatar3.png';
import Logo from '../src/assets/img/logo1.png';
import HeroImage from '../src/assets/img/heroImg.png';
import Feature1BgImg from '../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../src/assets/img/features/feature4_bg.png';
import purnimaImg from '../src/assets/img/team/purnima_pic.jpg'
import shanImg from '../src/assets/img/team/shanpic.jpg'
import gouravImg from '../src/assets/img/team/Gourav.jpg'
import pramodImg from '../src/assets/img/team/pramod.jpg'

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
  title: `Drug Name Generator`,
  subtitle:
    'Generate brandable drug names using artificial intelligence.',
  btnText: 'Get started',
  btnText1: 'View recent suggestions',
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: '"Know a little more Pharmark" ',
  subtitle:
    'An LSTM model that accepts strings as input parameters from the End users, generates and  displays a list of derived names which are filtered names based on the viability and authenticity of the generated names through the provided rules. ',
};

export const featuresData = {
  title: 'Our Team',
  subtitle:
    'Together, we believe that our skills and experiences make us strong and well-rounded team that is capable of tackling any challenge that comes our way!!',
  list: [
    {
      image: gouravImg,
      bgImage: Feature1BgImg,
      title: 'Gourav Mohanty',
      description:
        'Team Leader, Backend Developer',
      delay: '400',
    },
    {
      image: shanImg,
      bgImage: Feature2BgImg,
      title: 'Sayantan Chatterjee',
      description:
        'Teammate, Backend Developer',
      delay: '700',
    },
    {
      image:pramodImg ,
      bgImage: Feature3BgImg,
      title: 'Pramod Goyal',
      description:
        'Teammate, ML and Dev-ops',
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
  address: 'Product: Brand Name Generator, 769008 Sector 1 NIT Rourkela',
  email: 'goyalpramod1729@gmail.com',
  phone: '9031599049',
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
  text: ' Pharmark © 2022. All rights reserved. Company Registration Number: 09833888.',
};
