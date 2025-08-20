import React from 'react';
import HeaderSection from '../components/HeaderSection';
import AboutSection from '../components/AboutSection';
import CourseLayout from '../components/CourseLayout';
import InstructorSection from '../components/InstructorSection';
import Video from '../components/Video';

const CourseDetail = () => {
  return (
    <div className="bg-[#F5F9FC] min-h-screen p-4 md:p-10">
      <div className="max-w-5xl mx-auto">
        <HeaderSection
          title="Business Marketing - Technology Focus"
          instructor="Prof. Jayanta Chatterjee | IIT Kanpur"
        />

        <AboutSection description="Starting from a recap of basic marketing concepts, this course will guide you across the B2B marketing domain while highlighting the inter-organizational marketing and tech marketing issues and the complexities introduced by volatility and rapid evolutions." />

        <Video videoUrl="https://www.youtube.com/embed/example_video_id" />

        <CourseLayout
          weeks={[
            "Week 1: Introduction to B2B Marketing and Tech Marketing",
            "Week 2: Technology Life Cycle, Platforms, Organization Markets",
            "Week 3: Researching Business Markets, Innovation",
            "Week 4: Market Segments, PLC, TALC, Crossing the Chasm",
            "Week 5: B2B Brands, Pricing Concepts",
            "Week 6: Sales, Supply Chain, Digital Tools",
            "Week 7: Marketing as Strategy",
            "Week 8: Live Session, Sample Questions"
          ]}
        />

        <InstructorSection
          name="Prof. Jayanta Chatterjee"
          bio="Prof. Jayanta Chatterjee is an Adjunct Senior Professor at IIT Kanpur, with 30+ years of experience in management, marketing, and entrepreneurship. He has worked with multinational companies and mentored numerous startups. His NPTEL courses are widely popular."
          imgUrl="https://via.placeholder.com/120"
        />
      </div>
    </div>
  );
};

export default CourseDetail;
