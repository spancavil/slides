import Image from 'next/image'
import Burger from '../components/Burger/Burger'
import { Inter, Lato } from 'next/font/google'
import Up from '../components/Up/Up'
import RightArrow from '../components/RIghtArrow/RightArrow'
import Button from '../components/Button/Button'

const inter = Inter({ subsets: ['latin'] })
const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
})

export default function Home() {  
  return (
    <main className="w-full flex flex-col md:flex-row justify-center items-center p-3 gap-7 md:gap-8 md:p-[72px] relative">
      <div className="absolute top-7 right-7 md:right-10">
        <Burger />
      </div>
      <div className="flex flex-col justify-center items-center md:items-start w-full md:w-[593px] text-black text-center md:text-left">
        <h4 className={`${inter.className} text-xs md:text-sm`}>
          A B O U T — P E R S O N A L
        </h4>
        <h2 className={`${inter.className} text-3xl md:text-5xl pt-2`}>
          ¡Hello! <span className="font-semibold">I'm Angela Smith</span>
        </h2>
        <h3 className={`${inter.className} text-base pt-7 font-light md:hidden`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </h3>
        <h3 className={`${inter.className} text-base pt-7 font-light hidden md:block`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </h3>
        <Button hidden={true}>
          <h3 className={`${lato.className} font-bold text-sm`}>Get started</h3>
          <RightArrow />
        </Button>
      </div>
      <div className="w-full h-[309px] md:w-[673px] md:h-[740px] relative">
        <Image
          alt="hero"
          src={'/hero.png'}
          fill
          sizes="100%"
          className="object-contain"
          priority={true}
        />
      </div>
      <Button hiddenMd={true}>
        <h3 className={`${lato.className} font-bold text-sm`}>Get started</h3>
        <RightArrow />
      </Button>
      <div className='md:absolute md:bottom-5 md:right-[50%]'>
        <Up />
      </div>
    </main>
  )
}
