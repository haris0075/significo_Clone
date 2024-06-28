import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import TeamComp from './TeamComp'

function Team() {

  return (
    <div data-color="white" data-scroll data-scroll-section className='section min-h-screen pt-[30vh] font-["PP_Neue_Machina_Inktrap_Medium"] px-5 md:px-7 lg:px-14 pb-36'>
        <div className='flex justify-center items-center mb-20'>
            <h1 className='capitalize text-[12vw] sm:text-[8vw]'>
                our team
            </h1>
        </div>
        <TeamComp no="01" name="Dr. Rick McCartney" designation="CEO" img={'https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d3483259_Rick%20McCartney%20.webp'}/>
        <TeamComp no="02" name="Chris Koha" designation="COO" img={'https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d34832ae_655d505c9d551c9c11dd3613_Chris20Koha.webp'}/>
        <TeamComp no="03" name="Caroline Nieto" designation="Chief Product Officer" img={'https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/65cd134a7ece047ea2260d5b_Caroline%20Nieto.webp'}/>
        <TeamComp no="04" name="Víctor Albertos" designation="CTO" img={'https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d34832e6_655d504bfd0e67e20640dbbd_ViCC81ctor20Albertos.webp'}/>
        <TeamComp no="05" name="Dr. Jana Schmidt" designation="Chief Innovation Officer" img={'https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d348325a_655d4fbc461dbfc3c7e1914e_Dr.20Jana20Hapfelmeier.webp'}/>
        <TeamComp no="06" name="Adrián Rubio" designation="VP of Engineering" img={'https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d348325c_655d50b27e70d440e4404528_AdriaCC81n20Rubio.webp'}/>
        <TeamComp no="07" name="Cy Serrano" designation="VP of Product" img={'https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d34832c7_655d4fcd461dbfc3c7e19739_Cy20Serrano.webp'}/>
        <TeamComp no="08" name="Lenya McGrath" designation="VP of Partnership" img={'https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/65e0bbf51f50ea7c26f413f5_Lenya%20McGrath.webp'}/>
        {/* <TeamComp/> */}

        {/* //Button */}
        
    </div>
  )
}

export default Team