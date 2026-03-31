"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import DotLoader from 'react-spinners/DotLoader';

const solutions = [
  {
    name: 'Productos',
    description: 'Measure actions your users take',
    href: '/productos',
  },
  {
    name: 'Servicios',
    description: 'Create your own targeted content',
    href: '/servicios',
  },
  {
    name: 'Nosotros',
    description: 'Keep track of your growth',
    href: '/nosotros',
  },
  {
    name: 'Trabajos',
    description: 'Keep track of your growth',
    href: '/trabajos',
  },
  {
    name: 'Blog',
    description: 'Keep track of your growth',
    href: '/blog',
  },
  {
    name: 'Contacto',
    description: 'Keep track of your growth',
    href: '/contacto',
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1320) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      id='navbar' 
      className={`w-full py-3 md:py-4 top-0 transition duration-300 ease-in-out z-50 fixed pb-4 md:pb-6 ${
        isScrolled 
          ? 'shadow-navbar bg-white' 
          : 'bg-slate-900 bg-opacity-90'
      }`}
    >
      <div className="px-4 sm:px-6">
        <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          <Link href='/' className={`ml-4 mt-2 logo-danit sm:text-2xl lg:pr-8 text-xl ${isScrolled ? 'text-black' : 'text-white'}`}> 
            Control Modular MX
          </Link>
          <div id='menu' className={`ml-4 mt-2 flex-shrink-0 ${isScrolled ? 'text-black' : 'text-white'}`}>
            {solutions.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="text-lg inline-flex font-medium leading-6 border-b-2 border-transparent hover:border-indigo-500 transition duration-300 ease-in-out mx-4"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contacto"
              className="inline-flex ml-12 items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-900 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
            >
              Solicitar
              <DotLoader className="ml-3 -mr-1 h-5 w-5" loading={loading} size={20} color="#f2f2f2" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="-ml-4 -mt-2 lg:hidden flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          <Link href='/' className="ml-4 mt-2">
            <span className={`logo-danit text-xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>Control Modular MX</span>
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className="focus:ring-none focus:outline-none">
                    <span className={isScrolled ? 'text-black' : 'text-white'}>
                      {open ? (
                        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      ) : (
                        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                      )}
                    </span>
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute -left-32 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-8 bg-white p-7">
                          {solutions.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none"
                            >
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">{item.name}</p>
                                <p className="text-sm text-gray-500">{item.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
      </div>
    </nav>
  );
}
