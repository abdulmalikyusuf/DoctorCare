import React from 'react'

import { ReactComponent as CheckMark } from "../assets/svg/CheckMark.svg";
import cards from "../data/cards";
import numbers from "../data/numbers";


function Servicos() {
  return (
    <div className="bg-brand-green-light-02 w-full px-6 md:px-16 lg:px-124 pb-[100px] md:pb-40">
        <div className="flex flex-col md:flex-row space-y-[60px] md:space-y-0 md:justify-between md:divide-x divide-brand-green border border-brand-green-light bg-brand-beige rounded-md py-10 md:p-4 lg:py-60 lg:px-120 transform -translate-y-1/2">
            {numbers.map(({title, text}) => (
                <div key={title} className="flex flex-col md:space-y-1 w-full md:items-center text-center">
                    <h1 className="font-bold text-5xl leading-extra-snug">
                        {title}
                    </h1>
                    <p className="leading-normal text-brand-green">
                        {text}
                    </p>
                </div>

            ))}
        </div>
        <div className="md:w-[497px] mx-auto text-center space-y-4">
            <p className="uppercase font-bold text-sm leading-normal tracking-custom text-brand-green">SERVIÇOS</p>
            <h2 className="text-gray-headline font-bold text-3xl lg:text-40 leading-10 lg:leading-52">Como podemos ajudá-lo a se sentir melhor?</h2>
        </div>
        <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-[60px] md:mt-16">
            {cards.map(({title, text}) => (
                <div key={title} className="p-6 space-y-4 bg-white border border-brand-green-light rounded-md">
                    <CheckMark/>
                    <h6 className="text-2xl leading-8 font-bold text-gray-headline">{title}</h6>
                    <p className="leading-normal text-gray-paragraph">{text}</p>
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default Servicos