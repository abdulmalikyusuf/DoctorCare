import React from 'react'

import { ReactComponent as MapPin } from "../assets/svg/map-pin.svg";
import { ReactComponent as Mail } from "../assets/svg/mail.svg";
import { ReactComponent as Whatsapp } from "../assets/svg/whatsapp.svg";
import PersonHoldingPhone from "../assets/svg/image.png";


function Contato() {
  return (
    <div className="bg-white w-full px-6 md:px-16 lg:px-124 py-[100px] md:py-40">
        <div className="flex flex-col-reverse md:flex-row-reverse justify-between items-center space-y-reverse space-y-[60px] md:space-y-0 md:space-x-reverse">
		{/* md:space-x-4 lg:space-x-36 */}
			<img src={PersonHoldingPhone} alt="man-using-modern-smartphone-device-while-on-couch-at-home" className="object-contain md:max-w-xs lg:min-w-fit"/>
            <div className="space-y-8 md:space-y-10">
                <h4 className="text-3xl lg:text-40 leading-10 lg:leading-52 font-bold text-gray-headline">Entre em contato com a gente!</h4>
				<div className="space-y-4">
					<p className="flex space-x-2 leading-normal text-gray-paragraph">
						<MapPin/>
						<span>R. Amauri Souza, 346</span>
					</p>
					<p className="flex space-x-2 leading-normal text-gray-paragraph">
						<Mail/>
						<span>contato@doctorcare.com</span>
					</p>
				</div>
				<button type="button" className="btn-primary">
					<Whatsapp />
					<span>Agende sua consulta</span>
				</button>
                
            </div>
        </div>
    </div>
  )
}

export default Contato;