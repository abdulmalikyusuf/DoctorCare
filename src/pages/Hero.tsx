import React from 'react'

import { ReactComponent as Whatsapp } from "../assets/svg/whatsapp.svg";
import Woman from "../assets/svg/Woman.png";
import HeaderMenu from '../components/HeaderMenu';


function Hero() {
    return (
        <div className="bg-brand-green-light w-full px-6 md:px-16 lg:px-124 pb-[55px]">
            <HeaderMenu/>
            <div className="flex flex-col md:flex-row items-center space-y-[60px] md:space-y-0 pt-10 md:pt-0">
                <div className="md:w-[605px] text-center md:text-left">
                    <p className="font-bold text-sm text-brand-green leading-normal tracking-[0.08em]">
                        BOAS-VINDAS A DOCTORCARE 👋
                    </p>
                    <h6 className="font-bold text-[34px] lg:text-52 leading-extra-snug text-gray-headline mt-4">
                        Assistência médica simplificada para todos
                    </h6>
                    <p className="lg:text-lg leading-normal text-gray-paragraph my-4 lg:mb-8 lg:mt-6">
                        Os médicos da DoctorCare vão além dos sintomas para
                        tratar a causa raiz de sua doença e proporcionar uma
                        cura a longo prazo.
                    </p>
                    <button type="button" className="btn-primary mx-auto md:mx-0">
                        <Whatsapp />
                        <span>Agende sua consulta</span>
                    </button>
                </div>
                <img src={Woman} alt="Woman" className="object-contain max-w-xs lg:min-w-fit"/>
            </div>
        </div>
    )
}

export default Hero