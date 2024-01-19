import {useState,useEffect,useRef} from "react"
import {useRouter} from 'next/router';
import Link from "next/link"
import Middle from "../components/timeline/middle"
export default function Layout({ children }) {
  const router = useRouter();

  const [nav,setNav] =  useState(false)

  return (
    <div>
        <div onClick={()=>{setNav(!nav)}} className={`z-[40] bg-white opacity-${nav?1:0} ${nav?"":"hidden"}  fixed inset-0 flex flex-col place-content-center place-items-center transition duration-1000 ease-in ease-in-out`}>
            <div className="text-4xl absolute top-[10%] right-[10%]">
              <svg  width="25" height="25" preserveAspectRatio="xMidYMid meet" databbox="25.9 25.9 148.2 148.2" xmlns="http://www.w3.org/2000/svg" viewBox="25.9 25.9 148.2 148.2" role="presentation" >
                <g>
                    <path stroke="red"  d="M171.3 158.4L113 100l58.4-58.4c3.6-3.6 3.6-9.4 0-13s-9.4-3.6-13 0L100 87 41.6 28.7c-3.6-3.6-9.4-3.6-13 0s-3.6 9.4 0 13L87 100l-58.4 58.4c-3.6 3.6-3.6 9.4 0 13s9.4 3.6 13 0L100 113l58.4 58.4c3.6 3.6 9.4 3.6 13 0s3.5-9.5-.1-13z"></path>
                </g>
              </svg>
            </div>
            <Middle><a className="transition hover:text-blue-400" onClick={()=>{
              router.push("/")
            }}>HOME</a></Middle>
            <Middle><a className="transition hover:text-blue-400" onClick={()=>{
              router.push("/about")
            }}>ABOUT</a></Middle>

        </div>

      <div className="lg:m-auto lg:w-[67%] min-h-[100vh] pt-[150px] overflow-x-hidden">
        <div className="bg-white z-[30] fixed inset-x-0 top-0 h-[80px]  px-[25px] lg:px-[18%]  text-3xl flex place-items-center place-content-between">
          <div><Link href="/"><img className="rounded-full" width="50px" height="50px" src="/images/logo.jpg"></img></Link></div>
          <div>
            <svg onClick={()=>{
              setNav(!nav)
            }} className="w-[35px] h-[35px]" preserveAspectRatio="xMidYMid meet" databbox="0 9 50 32" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 9 50 32" role="presentation" aria-hidden="true">
              <g>
                <path d="M50,37 v4 h-50 v-4 h50z" stroke="black"></path>
                <path d="M50,9 v4 h-50 v-4 h50z" stroke="black"></path>
                <path d="M50,23 v4 h-50 v-4 h50z" stroke="black"></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="transition duration-1000 ease-in ease-in-out">
          {children}
        </div>
        </div>
        <footer className="flex place-items-center place-content-center h-[150px] bg-black text-white mt-[50px]">
          JS Journey Of Xuanyu Wang
        </footer>

    </div>
  )
}
