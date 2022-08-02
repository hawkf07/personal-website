import React from 'react'
import {FaArrowDown} from 'react-icons/fa'

export function Introduction() {
	return(
	<section className="flex items-center justify-center flex-col overflow-hidden h-[100vh] " name="introduction">
    <div className="">
		<h1 className='text-center text-4xl my-3' > HI I am <span className="text-blue-400"> Fikri Fadillah </span>|<span className="text-blue-400">   Front End Web Developer </span> </h1>
    
    <h2 className="text-3xl text-center"> I Love To <span className="text-blue-400"> Learn</span> and <span className="text-blue-400"> Explore </span>  New Things</h2>
    </div>
    <section className="mt-3 flex flex-col justify-center items-center">
    <h1 className="text-3xl my-2">Check More About Me</h1>
    <div className="animate-arrow">
    <FaArrowDown size="3em"/>
    </div>
    </section>
	</section>
	)
}
