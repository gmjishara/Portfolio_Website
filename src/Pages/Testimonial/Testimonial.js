import React from "react";
import SectionLayout from "../../Common/SectionLayout/SectionLayout";
import ReactElasticCarousel from "react-elastic-carousel";
import RecommendationCard from "../../Common/RecommendationCard/RecommendationCard";
import yasindu from "../../images/yasindu.jpg";
import sachi from "../../images/sachi.jpg";
import chami from "../../images/chami.jpg";

export default function Testimonial() {
  const breakPoints = [
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },
    { width: 1500, itemsToShow: 2 },
  ];

  return (
    <div>
      <SectionLayout
        heading="TESTIMONIAL"
        topic="Professionals Speak"
        bgColor="#ffffff"
      >
        <ReactElasticCarousel breakPoints={breakPoints}>
          <RecommendationCard
            image={yasindu}
            name="Yasindu Sathsara"
            post="CEO | Hotcat Technologies (Pvt) Ltd"
          ></RecommendationCard>
          <RecommendationCard
            image={sachi}
            name="Sachini Jayasuriya"
            post="Quality Assuarance Engineer | London Stock Exchange Group"
          ></RecommendationCard>
          <RecommendationCard
            image={chami}
            name="Chamikara Ruchiranga"
            post="Senior Software Engineer | Hotcat Technologies (Pvt) Ltd"
          ></RecommendationCard>
        </ReactElasticCarousel>
      </SectionLayout>
    </div>
  );
}
