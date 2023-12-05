import Image from 'next/image'
import logo from '../../public/logo.png'
import eatfit from '../../public/eatfit.png'

export default function Board1() {
  return (
    <main className="flex min-h-screen min-w-screen bg-white">
      {/* first section with logo and types of items */}
      <div className='w-1/3 h-screen '>
        <div className='flex flex-col w-full h-1/4 '>
            <div className='flex h-full items-center'><Image src={logo} className='w-1/2 pl-4' /></div>
        </div>
        <div className='flex flex-col w-full h-3/4'>
          <div className='flex w-full h-1/5  items-center'>
              <div className='flex h-full items-center w-1/2'><h2 className='pl-12 text-7xl text-tacoblue'>Taco</h2></div>
              <div className='flex h-1/2 w-1/2  items-center pt-6'><h2 className='bg-tacopurple w-full py-4 text-2xl text-white text-center'>Choose Tortilla</h2></div>
          </div>

          <div className='flex w-full h-1/5 '>
              <div className='flex w-1/2 h-full items-center'><h2 className='pl-12 text-7xl text-tacopink text-center'>Burrito</h2></div>
              <div className='flex flex-col h-full w-1/2 justify-center items-center pb-4 '>
                <h2 className='w-full text-2xl text-tacopurple text-center'>Flour</h2>
                <h2 className='w-full text-2xl text-tacopurple text-center'>Whole Wheat</h2>
                <h2 className='w-full text-2xl text-tacopurple text-center'>Gluten Free</h2>
              </div>
          </div>

          <div className='flex  w-full h-1/5 '>
              <div className='flex w-1/2 h-full items-center '><h2 className='pl-12 text-7xl text-tacogreen'>Salad</h2></div>
              <div className='flex flex-col h-full w-1/2 justify-center items-center  '>
                <h2 className='w-full text-2xl text-tacogreen text-center'>Taco Sisters Lettuce</h2>
                <h2 className='w-full text-2xl text-tacogreen text-center'>Mix of Spring Greens</h2>
                <h2 className='w-full text-2xl text-tacogreen text-center'>Crisp Apples, Carrots</h2>
                <h2 className='w-full text-2xl text-tacogreen text-center'>and Purple Cabbage</h2>
              </div>
          </div>

          <div className='flex w-full h-1/5 '>
              <div className='flex w-1/2 h-full items-center'><h2 className='pl-12 text-7xl text-tacoorange'>Bowl</h2></div>
              <div className='flex flex-col h-full w-1/2 justify-center items-center pb-4 '>
                <h2 className='w-full text-2xl text-tacoorange text-center'>Loaded with your</h2>
                <h2 className='w-full text-2xl text-tacoorange text-center'>choice of toppings</h2>
              </div>
          </div>

          <div className='flex items-center w-[110%] h-1/5  bg-tacopink '>
              <div className='flex h-full w-8/12 items-center'><h2 className='pl-12 text-5xl text-white'>Little Sisters</h2></div>
              <div className='flex h-full w-1/2 items-center z-50'><h2 className='text-lg text-white text-center'>Kid-sized scoop of meat, cheese and a plain, soft tortilla designed for your little one to roll on their own. Or make it a taco</h2></div>
          </div>
        </div>
      </div>
      {/* second section with protein options and prices */}
      <div className='flex flex-col w-1/3  h-screen '>
        <div className='flex w-full h-1/4 items-center justify-center'>
          <div className=' w-1/2 h-full '>
            <div className='flex flex-col w-full h-full '>
                <div className='flex flex-col h-full items-center justify-center'>
                  <h2 className='w-full text-4xl text-tacopurple text-center'>Smoked Chicken,</h2>
                  <h2 className='w-full text-4xl text-tacopurple text-center'>Smoked Pork,</h2>
                  <h2 className='w-full text-4xl text-tacopurple text-center'>Ground Beef,</h2>
                  <h2 className='w-full text-4xl text-tacopurple text-center'>Very Veggie*</h2>
                </div>
            </div>
          </div>

          <div className='w-1/2 h-full '>
            <div className='flex flex-col w-full h-full '>
                  <div className='flex flex-col h-full items-center justify-center'>
                    <h2 className='w-full text-4xl text-tacopurple text-center'>Smokin' Fish,</h2>
                    <h2 className='w-full text-4xl text-tacopurple text-center'>Smoked Shrimp,</h2>
                    <h2 className='w-full text-4xl text-tacopurple text-center'>Ribeye +$2,</h2>
                    <h2 className='w-full text-4xl text-tacopurple text-center'>Brisket</h2>
                  </div>
              </div>
          </div>
          
        </div>
        <div className='flex flex-col w-full h-3/4'>
          <div className='flex w-full h-1/5  items-center'>
              <div className='flex h-full items-center justify-center w-1/2'><h2 className=' text-6xl text-tacoblue'>$6.20</h2></div>
              <div className='flex h-1/2 w-1/2  items-center justify-center'><h2 className=' w-full  text-6xl text-tacoblue text-center'>$7.25</h2></div>
          </div>

          <div className='flex w-full h-1/5 '>
            <div className='flex h-full items-center justify-center w-1/2'><h2 className=' text-6xl text-tacopink'>$10.00</h2></div>
            <div className='flex h-full items-center justify-center w-1/2'><h2 className=' text-6xl text-tacopink'>$11.50</h2></div>
          </div>

          <div className='flex flex-col w-full h-1/5 '>
            <div className='flex h-1/2 items-center justify-center w-full '>
              <h2 className='w-[40%] pl-12 text-6xl text-center text-tacogreen '>$11.40</h2>
              <span className='w-2/12 text-2xl text-center text-tacogreen'>Whole</span>
              <h2 className='w-5/12 pr-12 text-6xl text-center text-tacogreen '>$12.45</h2>
            </div>
            <div className='flex h-1/2 items-center justify-center w-full '>
              <h2 className='w-[40%] pl-12 text-6xl text-center text-tacogreen '>$8.90</h2>
              <span className='w-2/12 text-2xl text-center text-tacogreen'>Half</span>
              <h2 className='w-5/12 pr-12 text-6xl text-center text-tacogreen '>$9.95</h2>
            </div>
            
          </div>

          <div className='flex w-full h-1/5 '>
            <div className='flex h-full items-center justify-center w-1/2'><h2 className=' text-6xl text-tacoorange'>$11.35</h2></div>
            <div className='flex h-full items-center justify-center w-1/2'><h2 className=' text-6xl text-tacoorange'>$12.40</h2></div>
          </div>

          <div className='flex flex-col justify-center w-full h-1/5 bg-tacopink '>
            <div className='flex my-2 items-center justify-center w-full ml-12 '>
              <h2 className='w-[70%] pl-12 text-2xl  text-white '>Fish, Shrimp, Brisket</h2>
              <h2 className='w-[30%] pr-12 text-2xl text-center text-white '>$5.70</h2>
            </div>

            <div className='flex  items-center justify-center w-full ml-12 '>
              <h2 className='w-[70%] pl-12 text-2xl text-white '>Chicken, Pork, Beef, Veggie</h2>
              <h2 className='w-[30%] pr-12 text-2xl text-center text-white '>$4.65</h2>
            </div>
          </div>
        </div>
        
      </div>

      {/* third section with Eat Fit options, choices and toppings */}
      <div className='h-screen w-1/3'>
        <div className='w-full h-1/4 flex flex-col items-center justify center '>
          <div className='w-full h-2/3 flex items-center justify-center'>
            <Image className='ml-6 h-2/3 w-auto' src={eatfit} />
            <div className='w-5/6 h-full flex items-center px-6'><h4 className='text-2xl text-tacopurple'><span className='font-bold'>TACO or HALF SALAD:</span> Smokin' Fish, Smoked Shrimp, Ribeye, Smoked Chicken, Brisket, Very Veggie*</h4></div>
          </div>
          <div className='w-full h-1/3 flex items-center justify-center'>
            <div className='w-1/2 h-full flex items-center justify-center'><h4 className='bg-tacopurple text-2xl text-white text-center w-3/4'>Choose One</h4></div>
            
            <div className='w-1/2 h-full flex items-center justify-center'><h4 className='bg-tacopurple text-2xl text-white text-center w-3/4'>Comes With</h4></div>
          </div>
        </div>
        <div className='flex flex-col w-full h-3/4 '>
          <div className='flex w-full h-1/5'>
            <div className='flex flex-col items-center justify-center w-1/2 h-full '>
                <div className='flex w-full  justify-center'><h2 className=' text-2xl font-bold text-tacoblue'>Pico de Gallo or</h2></div>
                <div className='flex w-full   justify-center'><h2 className='text-2xl font-bold text-tacoblue'>Diced Tomatoes</h2></div>
            </div>
            <div className='flex flex-col items-center justify-center w-1/2 h-full '>
                <div className='flex w-full  justify-center'><h2 className=' text-2xl font-bold text-tacoblue'>Sisters Secret Sauce &</h2></div>
                <div className='flex w-full   justify-center'><h2 className='text-2xl font-bold text-tacoblue'>Taco Sisters Lettuce Mix</h2></div>
            </div>
          </div>

          <div className='flex w-full h-1/5'>
            <div className='flex flex-col items-center justify-center w-1/2 h-full '>
                <div className='flex w-full  justify-center'><h2 className=' text-2xl font-bold text-tacopink'>Refried Beans</h2></div>
                <div className='flex w-full   justify-center'><h2 className='text-2xl font-bold text-tacopink '>or Black Beans</h2></div>
            </div>
            <div className='flex flex-col items-center justify-center w-1/2 h-full '>
                <div className='flex w-full  justify-center'><h2 className=' text-2xl font-bold text-tacopink'>Cheese and</h2></div>
                <div className='flex w-full   justify-center'><h2 className='text-2xl font-bold text-tacopink'>Green Onions</h2></div>
            </div>
          </div>

          <div className='flex w-full h-1/5'>
            <div className='flex flex-col items-center justify-center w-1/2 h-full '>
                <div className='flex w-full  justify-center'><h2 className=' text-2xl font-bold text-tacogreen'>Soy Ginger</h2></div>
                <div className='flex w-full   justify-center'><h2 className='text-2xl font-bold text-tacogreen '>Jalepeno Ranch</h2></div>
                <div className='flex w-full   justify-center'><h2 className='text-2xl font-bold text-tacogreen '>Vinaigrette</h2></div>
                <div className='flex w-full   justify-center'><h2 className='text-2xl font-bold text-tacogreen '>or Blue Cheese</h2></div>
            </div>
            <div className='flex flex-col items-center justify-center w-1/2 h-full '>
                <div className='flex w-full  justify-center'><h2 className=' text-2xl font-bold text-tacogreen'>Avocado, Black Olives,</h2></div>
                <div className='flex w-full   justify-center'><h2 className='text-2xl font-bold text-tacogreen'>Italian Cheese Mix,</h2></div>
                <div className='flex w-full   justify-center'><h2 className='text-2xl font-bold text-tacogreen'>Roma Tomatoes,</h2></div>
                <div className='flex w-full   justify-center'><h2 className='text-2xl font-bold text-tacogreen'>and Green Onions</h2></div>
            </div>
          </div>
          
          

          <div className='flex w-full h-1/5'>
            <div className='flex flex-col items-center justify-center w-1/2 h-full '>
                <div className='flex w-full  justify-center'><h2 className=' text-2xl font-bold text-tacoorange'>Refried Beans</h2></div>
                <div className='flex w-full   justify-center'><h2 className='text-2xl font-bold text-tacoorange '>or Black Beans</h2></div>
            </div>
            <div className='flex flex-col items-center justify-center w-1/2 h-full '>
                <div className='flex w-full  justify-center'><h2 className=' text-2xl font-bold text-tacoorange'>Green Chile Rice,</h2></div>
                <div className='flex w-full   justify-center'><h2 className='text-2xl font-bold text-tacoorange'>Green Onions</h2></div>
                <div className='flex w-full   justify-center'><h2 className='text-2xl font-bold text-tacoorange'>and Cheese</h2></div>
            </div>
          </div>

          <div className='flex justify-center items-center w-full h-1/5  '>
              <div className='flex h-full w-3/4 items-center text-xl text-tacopurple text-center'><h4><span className='font-bold'>*Very Veggie:</span> Avocado, Pico de Gallo, Black Olives and Taco Sisters Lettuce Mix</h4></div>
          </div>
        </div>
      </div>
    </main>
  )
}
