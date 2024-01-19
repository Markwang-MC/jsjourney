import Link from "next/link"
// import { useEffect,useState } from 'react';
// import {WOW} from 'wowjs';
import 'wowjs/css/libs/animate.css';
import useWow from "../../libs/usewow"
export default function Display({photo,children,description,link,direction}){
  const a = useWow()
  const b = useWow()
  return (
    <div className={`py-5 mx-[25px] md:flex ${direction?"md:flex-row-reverse":""} bg-white md:bg-transparent`}>

      <div ref={a} data-wow-offset="400" className="wow fadeInLeft md:flex-1">
        <Description {...{title:children,description,link}}/>
      </div>
      <div ref={b} data-wow-offset="400" className="wow fadeInRight md:flex-1">
        <Photo {...{direction,photo}}/>
      </div>
    </div>
  )
}

function Description({title,description,link,direction}) {
  return(
    <div className={`text-center md:text-left md:px-[20%] font-mono`}>
      <div className="text-[18px] md:text-[30px] mb-5 md:mb-20">{title}</div>
      <div className="mb-5 text-sm font-serif">{description}</div>
      <div>
        <Link className="bg-black text-white py-[10px] px-[20px] text-[16px] transition hover:bg-blue-400" href={link}>Open Source</Link></div>
      </div>

  )
}

function Photo({direction,photo,link}) {
  return(
    <div className={`mt-5 md:mt-0 text-center overflow-x-hidden`}>
      <img width="100%" className={`inline-block md:w-[80%]`} src={photo} />
    </div>
  )
}
