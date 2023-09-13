import React from "react";
import SectionLayout from "../../Common/SectionLayout/SectionLayout";
import ReactElasticCarousel from "react-elastic-carousel";
import RecommendationCard from "../../Common/RecommendationCard/RecommendationCard";
import yasindu from "../../images/yasindu.jpg";
import sachi from "../../images/sachi.jpg";
import chami from "../../images/chami.jpg";
import { Typography } from "@mui/material";
import "./style.css";

export default function Testimonial() {
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },
    { width: 1500, itemsToShow: 2 },
  ];

  const textStyle = {
    fontWeight: 500,
    fontFamily: "'Poppins',sans-serif",
    lineHeight: "28px",
  };

  return (
    <div>
      <SectionLayout
        heading="TESTIMONIAL"
        topic="Professionals Speak"
        bgColor="#ffffff"
      >
        <ReactElasticCarousel breakPoints={breakPoints} focusOnSelect={true}>
          <RecommendationCard
            image={yasindu}
            name="Yasindu Sathsara"
            post="Senior Software Engineer | Hotcat Technologies (Pvt) Ltd"
          >
            <Typography className="longText" style={textStyle}>
              "Janith is very talented guy against problem solving and every
              programming task. He worked with me some java, php and react
              projects and gave admirable support to success our projects."
            </Typography>
          </RecommendationCard>
          <RecommendationCard
            image={sachi}
            name="Sachini Jayasuriya"
            post="Quality Assuarance Engineer | London Stock Exchange Group"
          >
            <Typography className="longText" style={textStyle}>
              "Janith Ishara is not only a master of coding and software
              development but also possesses a deep understanding of the
              intricate complexities within the IT landscape."
            </Typography>
          </RecommendationCard>
          <RecommendationCard
            image={chami}
            name="Chamikara Ruchiranga"
            post="Senior Software Engineer | Hotcat Technologies (Pvt) Ltd"
          >
            <Typography className="longText" style={textStyle}>
              "I'm glad to add my thoughts about Janith. I have known him last 5
              months. He is a self-motivated, dedicated enthusiast who is
              passionate about software development. Also, he is a hardworking
              and calm person."
            </Typography>
          </RecommendationCard>
        </ReactElasticCarousel>
      </SectionLayout>
    </div>
  );
}
