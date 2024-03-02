
import Image from 'next/image'
import Link from 'next/link'
import Middle from '../components/timeline/middle'
import Display from '../components/timeline/display'
import Photos from '../components/timeline/photos'
import Number from '../components/timeline/number'

export default function Index() {

  return (
      <div className="vertical-line min-h-[100vh] py-24 lg:py-[200px] space-y-24 lg:space-y-[200px]">
          <Middle>
          <div className="font-bold">
              <p>WELCOME TO</p>
              <p>JS JOURNEY</p>
              <p>OF XUANYU WANG</p>
          </div>
          </Middle>
          <Photos />

          <Middle>
            <Number number="13"/>
            <p>Digging Into</p>
            <p>The Base Of JS</p>
            <p className="text-sm font-serif not-italic">

              When I was twelve or thirteen years old, under the guidance of my family, I began my journey of learning JS programming. Growing up in an environment surrounded by experienced programmers, including my parents and older sister, has provided me with a unique advantage in my exposure to coding from a young age.
            </p>
          </Middle>
          <Display {...{
            description:"Rewriting string functions in my own way was my first attempt at simulating the construction principles of basic programming tools. From that point onwards, it became a learning habit for me. ",
            photo:"/images/string_big.png",
            link:"/examples/string",
            direction:0
          }}>
            <p>Rewriting</p>
            <p>String Functions</p>
          </Display>
          <Display {...{
            description:"Rewriting Array member functions to gain a deeper understanding of the implementation principles behind map, filter, sort, reduce, and others.",
            photo:"/images/array_big.png",
            link:"/examples/array",
            direction:1
          }}>
            <p>Rewriting</p>
            <p>Array</p>
          </Display>

          <Middle>
            <Number number="15" />
            <p>Rewriting</p>
            <p>Frameworks</p>
            <p className="text-sm font-sans not-italic">
              At the age of fifteen, I challenged myself by rewriting the Express and Hexo frameworks, and with great enthusiasm, I simulated the construction principles of the Nodejs module loading function (require) and the asynchronous handling method (Promise) with my own code.
            </p>
          </Middle>

          <Display {...{
            description:"I not only rewrite Express but also try to simulate some commonly used Express middleware such as bodyparser, serve-static, multiparty, and cookieparser.",
            photo:"/images/express_big.png",
            link:"/examples/express",
            direction:0
          }}>

            <p>Expressjs</p>
          </Display>
          <Display {...{
            description:"Hexojs is developed using Node.js, and its core concept is to batch convert markdown files with templates into HTML markup.",
            photo:"/images/hexo_big.png",
            link:"/examples/hexo",
            direction:1
          }}>

            <p>Hexojs</p>
          </Display>

          <Display {...{
            description:"As I began learning Node.js, I found the require function to be quite mysterious. However, as my understanding of programming deepened, I finally began to perceive the fundamental principle inside requir",
            photo:"/images/nodejs_big.png",
            link:"/examples/require",
            direction:1
          }}>

            <p>Require Function</p>
            <p>Of Nodejs</p>


          </Display>
          <Middle>
            <Number number="16" />
            <p>Resolving</p><p>Real Problems</p>
            <p>With Nextjs</p>
            <p className="text-sm font-sans not-italic">
              By the age of 16, I had attained a solid mastery of the ReactJS and NextJS frameworks. Leveraging the powerful capabilities of these frameworks, I developed a web application for myself aimed at enhancing English reading skills - a complex and practical product-level development.
            </p>
          </Middle>

          <Display {...{
            description:"Throughout the development of this product, I acquired invaluable experience in software development within real-world environments, including project planning, user experience design, and continuous deployment, among others.",
            photo:"/images/nextjs_big.png",
            link:"/examples/nextjs",
            direction:0
          }}>
            <p>Powerful APP</p>
            <p>to improve</p>
            <p>English listening</p>
          </Display>
          <Middle>
            <Number number="17" />
            <p className="">This website</p>
            <p className="text-sm font-sans lowercase not-italic">
              This website is my latest work, powered by Next.js and React.js, to showcase every stage of my programming learning journey.
            </p>
            <div className="mt-5"><Link href="/examples/latest" className="not-italic bg-black text-white py-[10px] px-[20px] text-[16px] transition hover:bg-blue-400">Open Source</Link></div>
          </Middle>
          <Display {...{
            description:"UTJS was developed with only 31 rows of codes, making it not only easy to use in your developing, but also for you to read its source codes for study or something eles.",
            photo:"/images/YUTJS.png",
            link:"/examples/yutjs",
            direction:1
          }}>
            <p>YUTJS</p>
            <p>Powerful JS template</p>
            <p>similar to EJS</p>
          </Display>
      </div>

  )
}
