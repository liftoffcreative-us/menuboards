import Image from 'next/image'
import ezLogo from '../public/ezLogo.png'
import board1 from '../public/board1.png'
import Link from 'next/link'


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen min-w-screen bg-gray-200">
      <div className='flex items-center w-full h-[10vh] py-2 pl-6 '>
        <h1 className='text-4xl text-gray-700'>Select Which Menu Board to Load</h1>
      </div>
      <div className='flex w-full h-[90vh] '>
        <div className='flex w-full h-full'>
          <div className='flex items-center justify-center gap-6  w-full h-2/3 '>
              <div className='flex flex-col w-1/3 shadow-md  items-center justify-center bg-white rounded-md px-6 py-6  text-gray-600'>
                <Link href="/board1" className='mb-4 border border-gray-300 rounded-xl overflow-hidden'><Image src={board1} alt="Menu Board 1"   /> </Link>
                <h2 className='text-2xl'>Menu Board 1</h2>
              </div>
              <div className='flex flex-col w-1/3 shadow-md  items-center justify-center bg-white rounded-md px-6 py-6 text-gray-600'>
                <Link href="/board2" className='mb-4 border border-gray-300 rounded-xl overflow-hidden'><Image src={board1} alt="Menu Board 1"   /> </Link>
                <h2 className='text-2xl'>Menu Board 2</h2>
              </div>
          </div>
          
        </div>
      </div>
      
      
    </main>
  )
}
