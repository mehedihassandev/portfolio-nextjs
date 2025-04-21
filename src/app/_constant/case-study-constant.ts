import { LINKS } from '../_navigation/route-constant';

export const caseStudies = [
  {
    title: 'Vojbari Food Delivery App',
    description: 'Designing for User Engagement and Retention',
    imageUrl: '/assets/case1.png',
    link: '#',
  },
  {
    title: 'TimepieceX — A UX Case Study',
    description: 'Redesigning smart Watch User Experience',
    imageUrl: '/assets/case2.png',
    link: '#',
  },
  {
    title: 'MyCare App',
    description: 'Wallet app for offers, bills, & more',
    imageUrl: '/assets/case3.png',
    link: '#',
  },
];

export const images = [
  {
    src: '/assets/case-study/daraz.png',
    alt: 'case-study-1',
    link: 'https://www.behance.net/gallery/210918825/Daraz-Case-Study-Bulk-Deletion-UX-Enhancement',
    header: 'UX Case Study',
    title: 'Daraz App - e-commerce',
    subtitle: 'Streamline UX with Bulk Delete',
  },
  {
    src: '/assets/case-study/vojbari.png',
    alt: 'case-study-2',
    link: 'https://www.behance.net/gallery/199124685/Vojbari-Food-Delivery-App',
    header: 'UX Case Study',
    title: 'Vojbari Food Delivery App',
    subtitle: 'Designing for User Engagement and Retention',
  },
  {
    src: '/assets/case-study/MyCare.png',
    alt: 'case-study-3',
    link: LINKS.CASE_STUDY,
    header: 'UX Case Study',
    title: 'MyCare App',
    subtitle: 'Wallet app for offers, bills, & more',
  },
];

export const problemSolutionData = [
  {
    text: 'From the survey we found user struggles, which are customized plans, inconvenience of visiting multiple Apps for unavailable plans, and missing pay Bills option.',
    image: '/assets/case-study/problemSolution/problem.png',
    reverse: false, // Text on the left, image on the right
  },
  {
    text: 'We designed a reliable Wallet system to boost Top-up Plans, accurate Plans descriptions, shop updates, and user-selected their customized plans so that users can find this app more reliable for purchases.',
    image: '/assets/case-study/problemSolution/solution.png',
    reverse: true, // Image on the left, text on the right
  },
];

export const steps = [
  {
    number: '1',
    title: 'Research',
    description:
      'In the research phase, we comprehensively study user needs, behaviors, and pain points through methods like interviews and data analysis to inform the design process effectively.',
  },
  {
    number: '2',
    title: 'Design',
    description:
      'During the design phase, we create wireframes and prototypes, visually conceptualizing solutions. These serve as blueprints for the user interfaces structure, layout, and functionality.',
  },
  {
    number: '3',
    title: 'Testing',
    description:
      'In the testing phase, we gather user feedback on prototypes, assess usability, and refine designs. This iterative process ensures the final product meets user expectations and needs.',
  },
  {
    number: '4',
    title: 'Implementation',
    description:
      'In the implementation phase, we focus on translating the designed user interface into a functional product, adhering to the established design guidelines and aesthetics. - implementation',
  },
  {
    number: '5',
    title: 'Iteration',
    description:
      'During the iteration phase, we revisit and refine the design and functionality based on feedback and insights gathered from user testing and evaluation, ensuring continuous improvement',
  },
];

export const projectDetails = [
  { title: 'Client', content: 'cwseychelles' },
  { title: 'CATEGORY', content: 'Fintech' },
  {
    title: 'LIVE View',
    content: 'Visit Playstore/AppStore',
    underline: true,
    link: 'https://www.figma.com/proto/Qa2j4u8aqPefkkSIDeOBQ5/MyCare-App_EXOS-System?page-id=1%3A5600&node-id=1897-6317&starting-point-node-id=1897%3A7267&t=kDMgdg4ld5Kbti3W-1',
  },
  { title: 'TIMELINES', content: '6 Months' },
  {
    title: 'Service we provide',
    content: ['User Research', 'UI Design', 'Development', 'Maintenance'],
  },
];
