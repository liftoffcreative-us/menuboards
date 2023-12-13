import Image from 'next/image'
import board2 from '../public/board2.png'
import board1 from '../public/board1.png'
import ezmenu from '../public/ezmenu.png'
import { FaUserCircle } from "react-icons/fa"
import Link from 'next/link'


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen min-w-screen bg-gray-200">
      <div className='flex items-center justify-between w-full h-[10vh]  pl-6 '>
        <Image src={ezmenu} alt="ezmenuboard logo" className='h-5/6 w-auto' />
        <div className='flex items-center gap-2 text-2xl mx-6 text-ezblue'>
          <h1 >Taco Sisters</h1>
          <FaUserCircle/>
        </div>
        
      </div>
      <div className='flex w-full h-[90vh] '>
        <div className='flex w-full h-full'>
          <div className='flex items-center justify-center gap-6  w-full h-2/3 '>
              <div className='flex flex-col w-1/3 shadow-md  items-center justify-center bg-white rounded-md px-6 py-6  text-gray-600'>
                <Link href="/board1" className='mb-4 border border-gray-300 rounded-xl overflow-hidden'><Image src={board1} alt="Menu Board 1"   /> </Link>
                <h2 className='text-2xl'>Menu Board 1</h2>
              </div>
              <div className='flex flex-col w-1/3 shadow-md  items-center justify-center bg-white rounded-md px-6 py-6 text-gray-600'>
                <Link href="/board2" className='mb-4 border border-gray-300 rounded-xl overflow-hidden'><Image src={board2} alt="Menu Board 2"   /> </Link>
                <h2 className='text-2xl'>Menu Board 2</h2>
              </div>
          </div>
          
        </div>
      </div>
      
      
    </main>
  )
}
