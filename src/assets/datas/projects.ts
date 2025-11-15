import FmsImage from '@/assets/images/projects/fms-project.png';
import RangkulImage from '@/assets/images/projects/rangkul-grosir-project.png';
import PmapImage from '@/assets/images/projects/pmap-project.png';
import ReactJsIcon from '@/assets/svg/react.svg';
import Css3Icon from '@/assets/svg/css3.svg';
import NuxtJsIcon from '@/assets/svg/nuxt-js.svg';
import NextJsIcon from '@/assets/svg/next-js.svg';
import TypescriptIcon from '@/assets/svg/typescript.svg';
import TailwindCssIcon from '@/assets/svg/tailwindcss.svg';
import JavascriptIcon from '@/assets/svg/javascript.svg';

export const projects = [
  {
    id: 0,
    name: 'Fuel Management System',
    time: 'May 2025 to Present',
    role: 'Frontend Developer',
    image: FmsImage,
    summarize:
      'A web application for monitoring and managing the distribution, usage, intake, and borrowing of diesel fuel',
    type: 'Work Project',
    tech: [
      {
        id: 0,
        label: 'Nuxt JS',
        icon: NuxtJsIcon,
      },
      {
        id: 1,
        label: 'Typescript',
        icon: TypescriptIcon,
      },
      {
        id: 2,
        label: 'Tailwind CSS',
        icon: TailwindCssIcon,
      },
      //   {
      //     id: 3,
      //     label: 'Highcharts',
      //     icon: NuxtJsIcon,
      //   },
      //   {
      //     id: 4,
      //     label: 'Pinia',
      //     icon: NuxtJsIcon,
      //   },
      //   {
      //     id: 5,
      //     label: 'Axios',
      //     icon: NuxtJsIcon,
      //   },
      //   {
      //     id: 6,
      //     label: 'REST API',
      //     icon: NuxtJsIcon,
      //   },
      //   {
      //     id: 7,
      //     label: 'Figma',
      //     icon: NuxtJsIcon,
      //   },
    ],
    jobdesc: [
      {
        id: 0,
        label:
          'Analyzed system requirements and built the application framework in collaboration with the Product Manager and UI/UX team',
      },
      {
        id: 1,
        label:
          'Developed reusable components and implemented a responsive and user friendly interface based on designs from Figma',
      },
      {
        id: 2,
        label:
          'Integrated REST APIs to handle CRUD operations for data presentation and management',
      },
    ],
  },
  {
    id: 1,
    name: 'P-MAP',
    time: 'May 2025 to Present',
    role: 'Frontend Developer',
    image: PmapImage,
    summarize:
      'This application is designed to monitor the quality and condition of pipeline network used in the distribution of crude oil',
    type: 'Work Project',
    tech: [
      {
        id: 0,
        label: 'Next JS',
        icon: NextJsIcon,
      },
      {
        id: 1,
        label: 'Typescript',
        icon: TypescriptIcon,
      },
      {
        id: 2,
        label: 'Tailwind CSS',
        icon: TailwindCssIcon,
      },
    ],
    jobdesc: [
      {
        id: 0,
        label:
          'Developed the mobile app based on user needs to support the end-to-end wholesale transaction process',
      },
      {
        id: 1,
        label:
          'Developed reusable components and implemented Figma designs into responsive and user friendly interface',
      },
      {
        id: 2,
        label:
          'Integrated REST APIs to support data display and management, including product listings, transactions, and user profiles',
      },
    ],
  },
  {
    id: 2,
    name: 'Rangkul Grosir',
    time: 'May 2024 to Oct 2025',
    role: 'Frontend Developer',
    image: RangkulImage,
    summarize:
      'A android application designed to facilitate wholesale buying and selling of various products, aimed at connecting suppliers and resellers through a streamlined digital platform',
    type: 'Work Project',
    tech: [
      {
        id: 0,
        label: 'React Native',
        icon: ReactJsIcon,
      },
      {
        id: 1,
        label: 'Javascript',
        icon: JavascriptIcon,
      },
      {
        id: 2,
        label: 'CSS',
        icon: Css3Icon,
      },
    ],
    jobdesc: [
      {
        id: 0,
        label:
          'Developed the mobile app based on user needs to support the end-to-end wholesale transaction process',
      },
      {
        id: 1,
        label:
          'Developed reusable components and implemented Figma designs into responsive and user friendly interface',
      },
      {
        id: 2,
        label:
          'Integrated REST APIs to support data display and management, including product listings, transactions, and user profiles',
      },
    ],
  },
];
