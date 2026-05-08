import {
  BriefcaseBusiness,
  Home,
  Palette,
  UserRoundSearch,
} from 'lucide-react';

export const menus = [
  {
    name: `It's Me`,
    href: '#home',
    icon: Home,
  },
  {
    name: 'What I Do',
    href: '#experience',
    icon: UserRoundSearch,
  },
  {
    name: `Stuff I've Built`,
    href: '#projects',
    icon: BriefcaseBusiness,
  },
  {
    name: 'Get in Touch',
    href: '#contact',
    icon: Palette,
  },
];
