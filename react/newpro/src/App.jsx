import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1  className='text-black bg-green-50 p-4'>
        test the tailwind css 
      </h1>
      <div class="flex p-6 font-mono">
  <div class="flex-none w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400">
    <img src="https://images.pexels.com/photos/17244623/pexels-photo-17244623/free-photo-of-a-woman-in-a-crop-top-and-leggings-poses-on-a-pole.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="absolute z-10 inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
  </div>
  <form class="flex-auto pl-6">
    <div class="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
      <h1 class="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
        Retro Shoe
      </h1>
      <div class="relative text-lg text-white">
        $100.00
      </div>
      <div class="relative uppercase text-teal-400 ml-3">
        In stock
      </div>
    </div>
    <div class="flex items-baseline my-6">
      <div class="space-x-3 flex text-sm font-medium">
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xs" checked />
          <div class="relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
            XS
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="s" />
          <div class="relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
            S
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="m" />
          <div class="relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
            M
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="l" />
          <div class="relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
            L
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xl" />
          <div class="relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
            XL
          </div>
        </label>
      </div>
    </div>
    <div class="flex space-x-2 mb-4 text-sm font-medium">
      <div class="flex space-x-4">
        <button class="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black" type="submit">
          Buy now
        </button>
        <button class="px-6 h-12 uppercase font-semibold tracking-wider border border-slate-200 text-slate-900" type="button">
          Add to bag
        </button>
      </div>
      <button class="flex-none flex items-center justify-center w-12 h-12 text-black" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p class="text-xs leading-6 text-slate-500">
      Free shipping on all continental US orders.
    </p>
  
  
    </form>
</div>
<div className="flex flex-col rounded-xl  p-4"
          style={{
            border: '0.88px solid',
    
            backdropFilter: 'saturate(180%) blur(14px)',
            background: ' #ffffff0d',
          }}
        >
          <div>
            <img
              src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
              alt="nft-gif"
              width="400"
              height="400"
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col  rounded-b-xl py-4 ">
            <div className="flex justify-between">
              <h1 className="font-RubikBold ">Bored ape nft accidental</h1>
              <h1 className="font-bold font-RubikBold">Price</h1>
            </div>
            <div className="flex  justify-between font-mono">
              <p>#345</p>
              <p>0.01</p>
            </div>
          </div>
        </div>
      
      
     
    </>
  )
}

export default App
