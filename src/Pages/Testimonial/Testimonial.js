import React from 'react'
import SectionLayout from '../../Common/SectionLayout/SectionLayout'
import { Carousel } from 'react-responsive-carousel'
import ReactElasticCarousel from 'react-elastic-carousel'
import python from "../../images/python.jpg"
import java from "../../images/java.png"
import travel from "../../images/travel.jpg"

export default function Testimonial() {
  const breakPoints = [
    {width:500, itemsToShow:2},
    {width:768, itemsToShow:2},
    {width:1200, itemsToShow:2},
    {width:1500, itemsToShow:2}
  ]
  
  return (
    <div>
        <SectionLayout heading="TESTIMONIAL" topic="Professionals Speak" bgColor="#ffffff">
        <ReactElasticCarousel breakPoints={breakPoints}>
          <div>
            <img src={python} height="300px" alt='python'/>
          </div>
          <div>
          <img src={java} height="300px" alt='java'/>
          </div>
          <div>
          <img src={travel} height="300px" alt='tarvel'/>
          </div>

        </ReactElasticCarousel>
        </SectionLayout>
    </div>
  )
}
