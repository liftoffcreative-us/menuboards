import Image from 'next/image'
import logo from '../public/logo.png'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen min-w-screen bg-white">
      <div className='w-full h-[30vh] flex'>
        <div className='w-1/3 flex items-center'><Image src={logo} className='pl-16 w-2/3'/></div>
        <div className=' w-2/12 flex flex-col text-tacoblue pt-24 items-center'>
          <h2 className='text-7xl mb-4'>TACO</h2>
          <h3 className='text-3xl text-center'>Flour, Whole Wheat or Gluten Free Tortilla?</h3>
        </div>
        <div className=' w-3/12 flex flex-col text-tacopink pt-24 items-center'>
          <h2 className='text-7xl mb-4'>BURRITO</h2>
          <h3 className='text-3xl text-center'>Flour, Whole Wheat or Gluten Free Tortilla</h3>
        </div>
        <div className='w-3/12 flex flex-col text-tacogreen pt-24 items-center'>
          <h2 className='text-7xl mb-4'>SALAD</h2>
          <h3 className='text-3xl text-center'>Taco Sisters Lettuce Mix of Spring Greens, Crisp Apples, Carrots and Purple Cabbage</h3>
        </div>
      </div>
      <div className='w-full h-[40vh] border border-gray-50 flex flex-col'>
        <div className='bg-gray-200 w-full h-[14.3%] flex items-center'>
          <h4 className='pl-12 text-tacopurple text-4xl w-4/12 font-bold'>SMOKED TUNA</h4>
          <h4 className='text-tacoblue text-4xl w-2/12 font-bold text-center'>$6.95</h4>
          <h4 className='text-tacopink text-4xl w-3/12 font-bold text-center'>$7.95</h4>
          <div className='w-3/12 flex text-tacogreen items-center justify-center'>
            <h4 className=' text-4xl w-1/3 font-bold text-center'>$10.55</h4>  
            <h4 className='text-4xl text-center font-bold'><span className='pl-12 pr-2 text-3xl font-normal'>Half</span>$8.55</h4>
          </div>
        </div>
        <div className='w-full h-[14.3%] flex items-center'>
          <h4 className='pl-12 text-tacopurple text-4xl w-4/12 font-bold'>SMOKED TUNA</h4>
          <h4 className='text-tacoblue text-4xl w-2/12 font-bold text-center'>$6.95</h4>
          <h4 className='text-tacopink text-4xl w-3/12 font-bold text-center'>$7.95</h4>
          <div className='w-3/12 flex text-tacogreen items-center justify-center'>
            <h4 className=' text-4xl w-1/3 font-bold text-center'>$10.55</h4>  
            <h4 className='text-4xl text-center font-bold'><span className='pl-12 pr-2 text-3xl font-normal'>Half</span>$8.55</h4>
          </div>
        </div>
        <div className='bg-gray-200 w-full h-[14.3%] flex items-center'>
          <h4 className='pl-12 text-tacopurple text-4xl w-4/12 font-bold'>SMOTHERED BRISKET</h4>
          <h4 className='text-tacoblue text-4xl w-2/12 font-bold text-center'>$6.20</h4>
          <h4 className='text-tacopink text-4xl w-3/12 font-bold text-center'>$7.20</h4>
          <div className='w-3/12 flex text-tacogreen items-center justify-center'>
            <h4 className=' text-4xl w-1/3 font-bold text-center'>$10.55</h4>  
            <h4 className='text-4xl text-center font-bold'><span className='pl-12 pr-2 text-3xl font-normal'>Half</span>$8.55</h4>
          </div>
        </div>
        <div className='w-full h-[14.3%] flex items-center'>
          <h4 className='pl-12 text-tacopurple text-4xl w-4/12 font-bold'>SMOKED TUNA</h4>
          <h4 className='text-tacoblue text-4xl w-2/12 font-bold text-center'>$6.95</h4>
          <h4 className='text-tacopink text-4xl w-1/4 font-bold text-center'>$7.95</h4>
          <div className='w-3/12 flex text-tacogreen items-center justify-center'>
            <h4 className=' text-4xl w-1/3 font-bold text-center'>$10.55</h4>  
            <h4 className='text-4xl text-center font-bold'><span className='pl-12 pr-2 text-3xl font-normal'>Half</span>$8.55</h4>
          </div>
        </div>
        <div className='bg-gray-200 w-full h-[14.3%] flex items-center'>
          <h4 className='pl-12 text-tacopurple text-4xl w-4/12 font-bold'>GROUND BEEF</h4>
          <h4 className='text-tacoblue text-4xl w-2/12 font-bold text-center'>$5.50</h4>
          <h4 className='text-tacopink text-4xl w-1/4 font-bold text-center'>$6.50</h4>
          <div className='w-3/12 flex text-tacogreen items-center justify-center'>
            <h4 className=' text-4xl w-1/3 font-bold text-center'>$10.55</h4>  
            <h4 className='text-4xl text-center font-bold'><span className='pl-12 pr-2 text-3xl font-normal'>Half</span>$8.55</h4>
          </div>
        </div>
        <div className='w-full h-[14.3%] flex items-center'>
          <h4 className='pl-12 text-tacopurple text-4xl w-1/3 font-bold'>SMOKED TUNA</h4>
          <h4 className='text-tacoblue text-4xl w-1/6 font-bold text-center'>$6.95</h4>
          <h4 className='text-tacopink text-4xl w-1/4 font-bold text-center'>$7.95</h4>
          <div className='w-3/12 flex text-tacogreen items-center justify-center'>
            <h4 className=' text-4xl w-1/3 font-bold text-center'>$10.55</h4>  
            <h4 className='text-4xl text-center font-bold'><span className='pl-12 pr-2 text-3xl font-normal'>Half</span>$8.55</h4>
          </div>
        </div>
        <div className='bg-gray-200 w-full h-[14.3%] flex items-center '>
          <div className='w-1/3 flex items-center '><h4 className='pl-12 text-tacopurple text-4xl w-1/2 font-bold'>VERY VEGGIE</h4><span className=' text-sm w-1/2 font-bold text-tacopurple'>Avocado, Pico de Gallo, Black Olives, Taco Sisters Lettuce Mix</span></div>
          <h4 className='text-tacoblue text-4xl w-1/6 font-bold text-center'>$5.50</h4>
          <h4 className='text-tacopink text-4xl w-1/4 font-bold text-center'>$6.50</h4>
          <div className='w-3/12 flex text-tacogreen items-center justify-center'>
            <h4 className=' text-4xl w-1/3 font-bold text-center'>$10.55</h4>  
            <h4 className='text-4xl text-center font-bold'><span className='pl-12 pr-2 text-3xl font-normal'>Half</span>$8.55</h4>
          </div>
        </div>

      </div>
    </main>
  )
}
