import Image from 'next/image'
import chips from '../../public/dirtyChips.jpg'
import eatfit from '../../public/eatfit.png'

export default function Board1() {
  return (
    <main className="flex min-h-screen min-w-screen bg-white">
      {/* first section with add ons */}
      <div className='w-1/3 h-screen shadow-md z-50'>
        <div className='flex flex-col w-full h-full'>
            <div className='flex flex-col items-center justify-center w-full h-[35%] bg-tacoorange text-black'>
                <h2 className='text-3xl h-[20%] py-2'>Add Toppings</h2>
                <div className='flex w-full h-[80%]'>
                    <div className='flex flex-col justify-center w-[60%] h-full py-2 pl-4 text-[.8rem]'>
                        <h3>Black Bean and Corn Salsa</h3>
                        <h3>Vegetarian Black Beans</h3>
                        <h3>Vegetarian Refried Beans</h3>
                        <h3>Fresh or Pickled Jalapenos</h3>
                        <h3>Caramelized Onions</h3>
                        <h3>Shredded Cheddar</h3>

                    </div>
                    <div className='flex flex-col justify-center w-1/3 h-full py-2 pl-1 text-[.8rem]'>
                        <h3>Pico de Gallo</h3>
                        <h3>Diced Tomatoes</h3>
                        <h3>Green Chile Rice</h3>
                        <h3>Crispy Apples</h3>
                        <h3>Cilantro</h3>
                        <h3>Lettuce</h3>

                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center w-full h-[30%] bg-tacogreen text-black'>
                <h2 className='text-3xl h-[20%] pt-2'>Add Sauces</h2>
                <div className='flex w-full h-[80%]'>
                    <div className='flex flex-col justify-center w-[60%] h-full pl-4 text-[.8rem]'>
                        <h3>Sisters Secret Sauce</h3>
                        <h3>Cha Cha Churri</h3>
                        <h3>Freetown Fire</h3>
                        <h3>Soy Ginger</h3>   
                    </div>
                    <div className='flex flex-col justify-center w-1/3 h-full py-2 pl-1 text-[.8rem]'>
                        <h3>Jalapeno Ranch</h3>
                        <h3>Chipotle</h3>
                        <h3>Salsa Verde</h3>
                        <h3>Sour Cream</h3>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center w-full h-[35%] bg-tacoblue text-black'>
                <h2 className='text-3xl h-[20%] py-2'>Add Extras</h2>
                <div className='flex w-full h-[80%]'>
                    <div className='flex flex-col justify-center items-end w-[70%] h-full py-2 pr-4 text-[.8rem]'>
                        <h3>Elote</h3>
                        <h3>Toasted Quinoa</h3>
                        <h3>Fresh Avocado or Guacamole</h3>
                        <h3>Glazed Portobello Mushroom</h3>
                        <h3>Queso Fresco</h3>
                        <h3>Queso Blanco (on the side)</h3>

                    </div>
                    <div className='flex flex-col justify-center w-[30%] h-full py-2 pl-1 text-[.8rem]'>
                        <h3>$1.05</h3>
                        <h3>MP</h3>
                        <h3>MP</h3>
                        <h3>$1.60</h3>
                        <h3>$0.65</h3>
                        <h3>$2.00</h3>

                    </div>
                </div>
            </div>

        </div>
          
      </div>
      {/* second section with Tasty Tidbits */}
      <div className='flex flex-col w-1/3 h-screen  text-black z-40 shadow-md '>
        <h2 className='text-2xl mt-2 mb-2 bg-tacoorange pl-4'>TASTY TIDBITS</h2>
        <div className='flex items-center justify-between bg-gray-200' >
            <h3 className=' pl-4 text-[.8rem] font-bold'>BANDITO <span className='text-[.55rem] italic'>Think mini burrito!</span></h3>
            <h3 className='pr-4 text-[.8rem]'>$3.65</h3>
        </div>
        <div>
            <p className='text-[.6rem] pl-6 '>Rice, Cheese, Sisters Sauce and Pico de Gallo with choice of Ground Beef, Pork or Chicken</p>
        </div>

        <div className='flex justify-between bg-gray-200' >
            <h3 className=' pl-4 text-[.8rem] font-bold '>BEAN BURRITO <span className='text-[.55rem] italic'>with Cheese and Green Onions</span></h3>
            <h3 className='pr-4 text-[.8rem]'>$6.20</h3>
        </div>

        <div className='flex items-center justify-between bg-gray-200 mt-2' >
            <h3 className=' pl-4 text-[.8rem] font-bold'>ELOTE <span className='text-[.55rem] italic'>Grilled corn tossed with Spices</span></h3>
            <div className='flex gap-2'>
            <Image src={eatfit} alt='Eat Fit Logo' className='h-[18px] w-auto ' />
            <h3 className='pr-4 text-[.8rem]'>$6.20</h3>
            </div>
        </div>
        <div>
            <p className='text-[.6rem] pl-6 '>Queso Fresco and Cilantro. Served with Chips</p>
        </div>

        <div className='flex items-center justify-between bg-gray-200' >
            <h3 className=' pl-4 text-[.8rem] font-bold'>REFRIED BEANS <span className='text-[.55rem] italic'>with Cheese and Chipotle Sauce</span></h3>
            <h3 className='pr-4 text-[.8rem]'>$3.20</h3>
        </div>

        <div className='flex items-center justify-between bg-gray-200 mt-2' >
            <h3 className=' pl-4 text-[.8rem] font-bold'>RICE & BEANS <span className='text-[.55rem] italic'>with Cheese and Pico de Gallo</span></h3>
            <h3 className='pr-4 text-[.8rem]'>$3.20</h3>
        </div>

        <div className='flex items-center justify-between bg-gray-200 mt-2' >
            <h3 className=' pl-4 text-[.8rem] font-bold'>BLACK BEANS <span className='text-[.55rem] italic'>with Cheese and Green Onions</span></h3>
            <h3 className='pr-4 text-[.8rem]'>$3.65</h3>
        </div>

        <div className='flex items-center justify-between bg-gray-200 mt-2' >
            <h3 className=' pl-4 text-[.8rem] font-bold'>CHICKEN CHILI <span className='text-[.55rem] italic'></span></h3>
            <Image src={eatfit} alt='Eat Fit Logo' className='h-[18px] w-auto' />
            <h3 className='pr-4 text-[.8rem]'><span className='text-[.55rem] italic'>8 oz</span> $4.65  <span className='text-[.55rem] italic'>16 oz</span> $8.25</h3>
        </div>
        <div>
            <p className='text-[.6rem] pl-6 '>with Cheese and Green Onions</p>
        </div>

        <div className='flex items-center justify-between bg-gray-200 mt-2' >
            <h3 className=' pl-4 text-[.8rem] font-bold'>SIDE SALAD  <span className='text-[.55rem] italic'></span></h3>
            <div className='flex gap-2'>
            <Image src={eatfit} alt='Eat Fit Logo' className='h-[18px] w-auto ' />
            <h3 className='pr-4 text-[.8rem]'>$3.15</h3>
            </div>
        </div>

        <div className='flex items-center justify-between bg-gray-200 mt-2' >
            <h3 className=' pl-4 text-[.8rem] font-bold'>FIESTA SUMMER SALAD <span className='text-[.55rem] italic'>Seasonal</span></h3>
            <div className='flex gap-2'>
            <Image src={eatfit} alt='Eat Fit Logo' className='h-[18px] w-auto ' />
            <h3 className='pr-4 text-[.8rem]'>$7.25</h3>
            </div>
        </div>

        <div className='flex items-center justify-between bg-gray-200 mt-2' >
            <h3 className=' pl-4 text-[.8rem] font-bold'>QUESO BLANCO <span className='text-[.55rem] italic'></span></h3>
            <h3 className='pr-4 text-[.8rem]'><span className='text-[.55rem] italic'>4 oz</span> $5.10 <span className='text-[.55rem] italic'>8 oz </span> $8.80</h3>
        </div>
        <div>
            <p className='text-[.6rem] pl-6 '>with Chips and Pico de Gallo</p>
        </div>

        <div className='flex items-center justify-between bg-gray-200' >
            <h3 className=' pl-4 text-[.8rem] font-bold'>GUACAMOLE <span className='text-[.55rem] italic'></span></h3>
            <h3 className='pr-4 text-[.8rem]'> $10.50</h3>
        </div>
        <div>
            <p className='text-[.6rem] pl-6 '>with Chips and Pico de Gallo</p>
        </div>

        <div className='flex items-center justify-between bg-gray-200' >
            <h3 className=' pl-4 text-[.8rem] font-bold'>SMOKED TOMATO SALSA <span className='text-[.55rem] italic'></span></h3>
            <h3 className='pr-4 text-[.8rem]'><span className='text-[.55rem] italic'>2 oz </span> $2.00 <span className='text-[.55rem] italic'>8 oz </span> $8.50</h3>
        </div>
        <div>
            <p className='text-[.6rem] pl-6 '>with Chips</p>
        </div>

        <div className='flex items-center justify-between bg-gray-200 ' >
            <h3 className=' pl-4 text-[.8rem] font-bold'>EXTRA SAUCE OR DRESSING <span className='text-[.55rem] italic'></span></h3>
            <h3 className='pr-4 text-[.8rem]'>$0.85</h3>
        </div>

        <div className='flex items-center justify-between bg-gray-200 mt-2' >
            <h3 className=' pl-4 text-[.8rem] font-bold'>GOURMET CHIPS <span className='text-[.55rem] italic'></span></h3>
            <h3 className='pr-4 text-[.8rem]'>$2.00</h3>
        </div>
        <div className='flex items-center h-[50px] w-full pl-6'>
            <Image src={chips} alt='Dirty Chips Logo' className='h-[40px] w-auto pt-1'/>
            <ul className='text-[.6rem] w-[40%] ml-2 leading-3 self-start pt-1'>
                <li>Funky Fusion Tangy BBQ</li>
                <li>Salt & Vinegar</li>
                <li>Jalepeno</li>
                <li>White Corn Tortilla</li>
            </ul>
            <ul className='text-[.6rem] w-[40%] ml-2 leading-3 self-start pt-1'>
                <li>Sea Salt</li>
                <li>Cracked Pepper</li>
                <li>Maui Onion</li>
                <li></li>
            </ul>
        </div>
          
      </div>
        

      {/* third section with drinks and desserts */}
      <div className='w-1/3 h-screen text-black'>
            <h2 className='text-2xl mt-2 mb-2 bg-tacoblue pl-4'>HOUSE-MADE DRINKS</h2>
            <div className='flex items-center justify-between bg-gray-200 mt-2' >
                <h3 className=' pl-4 text-[.8rem] font-bold'>Fresh Squeezed Lemonade</h3>
                <h3 className='pr-4 text-[.8rem]'>$3.50</h3>
            </div>
            <div className='flex items-center justify-between bg-gray-200 mt-2' >
                <h3 className=' pl-4 text-[.8rem] font-bold'>Basil-Ginger Lemonade</h3>
                <h3 className='pr-4 text-[.8rem]'>$3.50</h3>
            </div>
            <div className='flex items-center justify-between bg-gray-200 mt-2' >
                <h3 className=' pl-4 text-[.8rem] font-bold'>Cherry Limeade</h3>
                <h3 className='pr-4 text-[.8rem]'>$3.50</h3>
            </div>
            <div className='flex items-center justify-between bg-gray-200 mt-2' >
                <h3 className=' pl-4 text-[.8rem] font-bold'>Citrus Palmer</h3>
                <h3 className='pr-4 text-[.8rem]'>$3.50</h3>
            </div>
            <div className='flex items-center justify-between bg-gray-200 mt-2' >
                <h3 className=' pl-4 text-[.8rem] font-bold'>Iced Tea</h3>
                <h3 className='pr-4 text-[.8rem]'>$3.00</h3>
            </div>
            <div className='flex items-center justify-between bg-gray-200 mt-2' >
                <h3 className=' pl-4 text-[.8rem] font-bold'>Green Tea with Honey</h3>
                <h3 className='pr-4 text-[.8rem]'>$3.50</h3>
            </div>
            <div className='flex items-center justify-between bg-gray-200 mt-2' >
                <h3 className=' pl-4 text-[.8rem] font-bold'>Hibiscus Tea</h3>
                <h3 className='pr-4 text-[.8rem]'>$3.50</h3>
            </div>

            <h2 className='text-2xl mt-6 mb-2 bg-tacogreen pl-4'>COLD DRINKS</h2>
            <div className='flex items-center justify-between bg-gray-200 mt-2' >
                <h3 className=' pl-4 text-[.8rem] font-bold'>Coconut Water</h3>
                <h3 className='pr-4 text-[.8rem]'>$3.80</h3>
            </div>
            <div className='flex items-center justify-between bg-gray-200 mt-2' >
                <h3 className=' pl-4 text-[.8rem] font-bold'>Water</h3>
                <h3 className='pr-4 text-[.8rem]'>$3.00</h3>
            </div>
            <div className='flex items-center justify-between bg-gray-200 mt-2' >
                <h3 className=' pl-4 text-[.8rem] font-bold'>Bottled Coke, Diet Coke</h3>
                <h3 className='pr-4 text-[.8rem]'>$3.00</h3>
            </div>
            <div className='flex items-center justify-between bg-gray-200 mt-2' >
                <h3 className=' pl-4 text-[.8rem] font-bold'>Fountain Drinks</h3>
                <h3 className='pr-4 text-[.8rem]'>$3.00</h3>
            </div>
            <div>
                <p className='text-[.6rem] pl-6 '>Mug Root Beer, Dr. Pepper, Diet Dr. Pepper, Pepsi, 7UP</p>
            </div>
            
            <h2 className='text-2xl mt-6 mb-2 bg-tacopink pl-4'>DESSERTS</h2>
            <div className='flex items-center justify-between bg-gray-200 mt-2' >
                <h3 className=' pl-4 text-[.8rem] font-bold'>House-Made Pops</h3>
                <h3 className='pr-4 text-[.8rem]'>$3.15</h3>
            </div>
            <div className='flex items-center justify-between bg-gray-200 mt-2' >
                <h3 className=' pl-4 text-[.8rem] font-bold'>Cookies</h3>
                <h3 className='pr-4 text-[.8rem]'>$3.15</h3>
            </div>
      </div>
    </main>
  )
}
