import { Suspense } from 'react';
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav';
import PricingOptions from './components/PricingOptions/pricingOptions';
import ResultChart from './components/ResultChart/ResultChart';


const pricingPromise = fetch('pricingData.json')
  .then(res => res.json());

function App() {

  return (
    <>
      <header className='w-11/12 mx-auto mb-3'>
        <DaisyNav></DaisyNav>
      </header>

      <main className='w-11/12 mx-auto'>
        <Suspense fallback = {<span className="loading loading-spinner loading-xl"></span>}>
          <PricingOptions pricingPromise = {pricingPromise}></PricingOptions>
        </Suspense>

        <ResultChart></ResultChart>
      </main>

    </>
  )
}

export default App