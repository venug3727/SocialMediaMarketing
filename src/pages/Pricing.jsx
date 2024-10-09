import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import PricingCard from '../component/PricingCard'

function Pricing() {
  return (
<>
<Header />
<div className="flex flex-col p-[50px] gap-[30px] text-center">
    <h1 className="font-bold text-3xl sm:text-4xl capitalize">Choose your pricing plans</h1>
    <p className="font-semibold text-slate-600 text-[15px] ">Choose your favourit package for your awesome project </p>
    <div className="flex justify-around flex-wrap ">
        <PricingCard name="Bronze" price="$450" valid="24 hour service"  tool1="Marketing tools" tool2="Analytics tools" service="1 month Services" />
        <PricingCard name="Silver" price="$800" valid="Weekly meeting"  tool1="Everything in bronze" tool2="24/7 services" service="2 month Services" />
        <PricingCard name="Gold" price="$1500" valid="Monthly Integration"  tool1="Everything in silver" tool2="Landing Page Design " service="6 month Services" />
    </div>
</div>
<Footer />
</>
  )
}

export default Pricing