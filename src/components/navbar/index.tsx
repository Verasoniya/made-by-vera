'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '../ui/navigation-menu';
import ModeToggle from '../mode-toggle';
import { menus } from '@/assets/datas/menu';
import MolufeiLogo from '@/assets/svg/molufei-logo.svg';
import { useActiveHashStore } from '@/store/use-active-hash-store';

const Navbar = () => {
  const { activeHash, setActiveHash } = useActiveHashStore();

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const sections = menus.map((menu) => document.querySelector(menu.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            setActiveHash(id);
            history.replaceState(null, '', id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.8,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <div className="hidden md:block fixed top-0 z-50 shadow-border w-full">
        <div className="flex items-center justify-between gap-2 px-20 py-3">
          <Link href={'/'} className="flex gap-2 items-center">
            <Image src={MolufeiLogo} alt="vera-logo" className="w-20" />
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4 items-center">
              {menus.map((menu) => {
                const isActive = activeHash == menu.href;
                return (
                  <NavigationMenuItem
                    key={menu.name}
                    className={`px-3 py-1 hover:text-primary dark:hover:text-salmon-pink ${
                      isActive
                        ? 'text-primary font-semibold dark:text-salmon-pink'
                        : 'text-muted-foreground dark:text-white/70'
                    }`}
                  >
                    <Link
                      href={menu.href}
                      className="flex gap-2 items-center text-sm"
                      onClick={() => setActiveHash(menu.href)}
                    >
                      {/* {isActive && (
                        <menu.icon
                          className={`w-4 h-4 ${
                            isActive
                              ? 'text-primary dark:text-primary-foreground'
                              : 'text-muted-foreground'
                          }`}
                        />
                      )} */}
                      {menu.name}
                    </Link>
                  </NavigationMenuItem>
                );
              })}
              <ModeToggle />
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="absolute md:hidden bottom-4 left-2 right-2 z-50 rounded-xl shadow dark:shadow-lg shadow-border bg-background dark:bg-neutral-900">
        <NavigationMenu className="py-2 px-2">
          <div className="!w-[100vw]">
            <NavigationMenuList className="flex justify-around items-center">
              {menus.map((menu) => {
                const isActive = activeHash === menu.href;
                return (
                  <NavigationMenuItem
                    key={menu.name}
                    className={`px-2 py-1 rounded-full ${
                      isActive
                        ? 'bg-primary/20 text-primary dark:bg-primary dark:text-primary-foreground'
                        : 'text-muted-foreground'
                    }`}
                  >
                    <Link
                      href={menu.href}
                      className="flex gap-2 items-center"
                      onClick={() => setActiveHash(menu.href)}
                    >
                      <menu.icon className="w-4 h-4" />
                      {isActive && (
                        <span className="text-sm font-medium">{menu.name}</span>
                      )}
                    </Link>
                  </NavigationMenuItem>
                );
              })}
              <ModeToggle />
            </NavigationMenuList>
          </div>
        </NavigationMenu>
      </div>
    </>
  );
};

export default Navbar;
