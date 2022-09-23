import React from 'react'

import { ReactComponent as LogoFooter } from "../assets/svg/LogoFooter.svg";
import { ReactComponent as Instagram } from "../assets/svg/instagram.svg";
import { ReactComponent as Facebook } from "../assets/svg/facebook.svg";
import { ReactComponent as Youtube } from "../assets/svg/youtube.svg";


function Footer() {
    return (
        <div className="bg-brand-green w-full px-[26px] md:px-124 py-[60px] md:py-20">
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:justify-between md:items-center">
                <div className="space-y-6 md:space-y-6">
                    <LogoFooter/>
                    <div>
                        <p className="text-brand-beige text-sm">©2022 - DoctorCare.</p>
                        <p className="text-brand-beige text-sm">Todos os direitos reservados.</p>
                    </div>
                </div>
                <div className="flex space-x-8">
                    <Instagram/>
                    <Facebook/>
                    <Youtube/>
                </div>
            </div>
        </div>
    )
}

export default Footer