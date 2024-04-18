"use client";

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'

const navigation = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact Me', href: '#contact' },
]

const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className='fixed bg-wheat_semi backdrop-blur-sm md:rounded-br-xl w-full z-50'>
            <nav className="bg-gray-800 px-3 md:px-10 lg:px-20 py-6 md:pt-12">
                <div className="container md:w-fit mx-auto md:me-auto md:ms-0 flex items-center justify-between md:gap-10 lg:gap-32">
                <a href="#">
                    <div className="text-darkgrey font-semibold text-l lg:text-xl">shashank <span className="text-wheat bg-darkgrey">(deep)</span></div>
                </a>
                <div className="flex md:hidden">
                    {/* Hamburger icon for mobile */}
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                        >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden md:block w-24">
                    <hr />
                </div>
                <ul className="hidden md:flex gap-8 text-l lg:text-xl">
                    {navigation.map((item) => (
                        <li key={item.name}>
                            <a href={item.href} className="text-white">{item.name}</a>
                        </li>
                    ))}
                </ul>
                </div>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-darkgrey px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <div className="text-wheat font-semibold text-l lg:text-xl">shashank <span className="text-darkgrey bg-wheat">(deep)</span></div>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-wheat"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        </div>
                        <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                            <hr className='w-full text-wheat'/>
                            {navigation.map((item) => (
                                <a
                                key={item.name}
                                href={item.href}
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-wheat hover:bg-gray-50"
                                >
                                {item.name}
                                </a>
                            ))}
                            </div>
                        </div>
                        </div>
                    </Dialog.Panel>
                    </Dialog>
            </nav>
        </header>
    );
};
  
export default Navbar;  