// import { useEffect } from 'react';
// import {WOW} from 'wowjs';
import 'wowjs/css/libs/animate.css';
import useWow from "../../libs/usewow"
export default function Photos() {
  const markdown = useWow()
  const array = useWow()
  const nodejs = useWow()
  const string = useWow()
  const react = useWow()
  const hexo = useWow()
  const express = useWow()
  const nextjs = useWow()
  const promise = useWow()

  return(
    <div className="flex space-x-10">
      <div className="flex-1">
        <div className="pb-[150%] lg:pb-[100%] relative">
          <div className="absolute inset-0">
            <img ref={markdown} src="/images/markdown.png"  data-wow-offset="10"   className="wow fadeInLeft w-[70%] lg:w-[35%] absolute top-0 left-0 lg:left-[20%]"/>
            <img ref={array} src="/images/array.png"  data-wow-offset="150"   className="wow fadeInLeft w-[65%] lg:w-[50%] absolute top-[35%] lg:top-[15%] right-0"/>
            <img ref={nodejs} src="/images/nodejs.png"  data-wow-offset="400"   className="wow fadeInLeft w-[70%] lg:w-[50%] absolute bottom-0 left-0"/>
            <img ref={string} src="/images/string.png"  data-wow-offset="500"   className="wow fadeInLeft w-[65%] lg:w-[50%] absolute lg:bottom-[35%] lg:left-[20%] bottom-[20%] left-[40%]"/>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="pb-[150%] lg:pb-[100%] relative overflow-hidden">
          <img ref={react} src="/images/react.png" width="50%"  data-wow-offset="160"   className="wow fadeInRight z-[2] w-[65%] lg:w-[50%] absolute top-[30%] lg:top-[20%] lg:left-[5%]"/>
          <img ref={hexo} src="/images/hexo.png" width="50%"  data-wow-offset="560"   className="wow fadeInRight z-[1] w-[65%] lg:w-[50%] absolute top-0 right-0"/>
          <img ref={express} src="/images/express.png" width="50%"  data-wow-offset="450"   className="wow fadeInRight z-[2] w-[65%] lg:w-[50%] absolute top-[50%] left-[30%] lg:top-[40%] lg:left-[20%]"/>
          <img ref={nextjs} src="/images/nextjs.png" width="35%"  data-wow-offset="240"   className="wow fadeInRight z-[0] w-[50%] lg:w-[35%] absolute bottom-[10%] lg:bottom-0 left-0"/>
          <img ref={promise} src="/images/promise.png" width="50%"  data-wow-offset="600"   className="wow fadeInRight z-[3] w-[65%] lg:w-[50%] absolute bottom-0 right-0"/>
        </div>
      </div>
    </div>
  )
}
