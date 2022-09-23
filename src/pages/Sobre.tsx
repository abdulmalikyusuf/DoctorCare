import React from 'react'

import Consultation from "../assets/svg/Consultation.png";

function Sobre() {
	return (
		<div className="bg-brand-beige w-full px-6 md:px-16 lg:px-124 py-[100px] md:py-40">
			<div className="flex flex-col-reverse md:flex-row space-y-reverse space-y-[60px] md:space-y-0 md:space-x-16 items-center">
				<img src={Consultation} alt="happy doctor holding a clipboard with patients" className="object-contain md:max-w-xs lg:min-w-fit"/>
				<div>
					<h6 className="uppercase text-sm font-bold leading-normal text-brand-green">SOBRE NÓS</h6>
					<h4 className="text-3xl lg:text-40 leading-10 lg:leading-52 font-bold text-gray-headline mt-4 mb-6 md:my-4 lg:mt-[10px]">Entenda quem somos e por que existimos</h4>
					<p className="leading-normal text-gray-paragraph">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
				</div>
			</div>
		</div>
	)
}

export default Sobre