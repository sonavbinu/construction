import {
  PencilRuler,
  Calculator,
  FileCheck2,
  Handshake,
  Compass,
  Paintbrush,
  LayoutGrid,
  Construction,
} from 'lucide-react';
import type { Service, NavItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'plan',
    title: 'Buiding Plan',
    description:
      'Expert architectiral drafting and detailed 2D/3D visualizations tailored to your vision.',
    icon: <PencilRuler className="w-8 h-8" />,
  },
  {
    id: 'estimate',
    title: 'Detailed Estimate',
    description:
      'Precise cost calculations and material take-offs to help you budget effectively',
    icon: <Calculator className="w-8 h-8" />,
  },
  {
    id: 'ksmart',
    title: 'K-Smart Permission',
    description:
      'Seamless handling of all local body approvals and regulatory documentation',
    icon: <FileCheck2 className="w-8 h-8" />,
  },
  {
    id: 'contract',
    title: 'Civil Contract',
    description:
      'End-to-end construction management witha focus on quality,speed,and integrity',
    icon: <Handshake className="w-8 h-8" />,
  },
  {
    id: 'vaasthu',
    title: 'Vaasthu Consulting',
    description:
      'Integrating abciebt architectural wisdom with modern design for harmonious living ',
    icon: <Compass className="w-8 h-8" />,
  },
  {
    id: 'interior',
    title: 'Interior Designing',
    description:
      'Integrating ancient architectural wisdom with modern design for harmonious living.',
    icon: <Paintbrush className="w-8 h-8" />,
  },
  {
    id: 'paving',
    title: 'Paving Tiles',
    description:
      'Premium exterior flooring slutions for walkways,driveways ,and courtways',
    icon: <LayoutGrid className="w-8 h-8" />,
  },
  {
    id: 'steel',
    title: 'Steel Fabrication',
    description:
      'High-quality structural and decorative steel work for safety and style.',
    icon: <Construction className="w-8 h-8" />,
  },
];

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'Process',
    href: '#process',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const CONTACT_INFO = {
  email: 'vaastukalabuilders@gmail.com',
  phone: '9744948567',
  whatsappurl: 'https://wa.me/919744948567',
  founder: 'Mr .Binu V T',
};
