import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { ReactComponent as Logo } from "../assets/svg/Logo.svg";
import { ReactComponent as LogoPopover } from "../assets/svg/LogoPopover.svg";
import { ReactComponent as Instagram } from "../assets/svg/instagram.svg";
import { ReactComponent as Facebook } from "../assets/svg/facebook.svg";
import { ReactComponent as Youtube } from "../assets/svg/youtube.svg";


function HeaderMenu() {
	return (
		<Popover>
            <header className="flex justify-between items-center bg-transparent py-4">
				<Logo />
				<Popover.Button className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
					<span className="sr-only">
						Open main menu
					</span>
					<Bars3BottomRightIcon className="h-10 w-10 text-brand-green" aria-hidden="true"/>
				</Popover.Button>
				<nav className="hidden md:flex flex-row-reverse space-x-reverse space-x-8 text-brand-green opacity-70">
					<Link to="/">Depoimentos</Link>
					<Link to="/">Serviços</Link>
					<Link to="/">Sobre</Link>
					<Link to="/" className="font-bold border-b-2 border-brand-green border-spacing-8">
						Início
					</Link>
				</nav>
				<button type="button" className="hidden lg:flex btn-secondary">
					Agendar consulta
				</button>
            </header>

            <Transition
                as={Fragment}
                enter="duration-75 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-75 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Popover.Panel static className="fixed z-10 top-0 inset-x-0 p-2 h-screen transition transform origin-top-right md:hidden"								>
                    <div className="rounded-lg bg-brand-green px-6 py-4 h-full overflow-hidden space-y-[60px]">
                        <div className="flex items-center justify-between">
                            <LogoPopover/>
							<Popover.Button className="text-white focus:outline-none focus:ring-0">
								<span className="sr-only">Close main menu</span>
								<XMarkIcon className="h-10 w-10" aria-hidden="true"/>
							</Popover.Button>
                        </div>
						<nav className="flex flex-col-reverse space-y-reverse space-y-12 text-2xl text-brand-beige font-bold text-center">
							<Popover.Button as={Link} to="/">Depoimentos</Popover.Button >
							<Popover.Button as={Link} to="/">Serviços</Popover.Button >
							<Popover.Button as={Link} to="/">Sobre</Popover.Button >
							<Popover.Button as={Link} to="/" className="font-bold border-b-2 border-brand-green border-spacing-8">
								Início
							</Popover.Button >
						</nav>
						<div className=" flex flex-col items-center space-y-20 mt-12">
							<Popover.Button type="button" className="btn-primary text-brand-green bg-white w-fit">Agende sua consulta</Popover.Button>
							<div className="flex space-x-8">
								<Instagram/>
								<Facebook/>
								<Youtube/>
							</div>
						</div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
		
	);
}

export default HeaderMenu;
<div className="hidden md:flex justify-between bg-transparent py-4">
						<Logo />
						<nav className="flex flex-row-reverse space-x-reverse space-x-8 text-brand-green opacity-70">
							<Link to="/">Depoimentos</Link>
							<Link to="/">Serviços</Link>
							<Link to="/">Sobre</Link>
							<Link
								to="/"
								className="font-bold border-b-2 border-brand-green border-spacing-8"
							>
								Início
							</Link>
						</nav>
						<button type="button" className="btn-secondary">
							Agendar consulta
						</button>
					</div>