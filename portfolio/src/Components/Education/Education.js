import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
import { FcGraduationCap } from "react-icons/fc";

const Education = () => {
  const data = [
    {
      name: "LPNU",
      degree: "Bachelor in Cyber Security",
      year: "2022-now",
      description:
        "I`am studying on a budget form.BIT(безпека інформаційних технологій - information technology security) specialization.",
    },
    {
      name: "School N90",
      degree: "School Diploma",
      year: "2011-2022",
      description:
        "",
    },
  ];

  const colors = [
    "#FF00FF",
    "#000080",
    "#00FFFF",
    "#00FF00",
    "#86105B",
    "#000080",
    "#454545",
  ];

  return (
    <div className="container education" id="education">
      <div className="section-title">
        <h5>Education</h5>
        <span className="line"></span>
      </div>

      <VerticalTimeline lineColor={colors[0]}>
        {data.map((item, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: colors[index], color: "#fff" }}
            contentArrowStyle={{ borderRight: `7px solid  ${colors[index]}` }}
            date={item.year}
            dateClassName="date-year"
            iconStyle={{ background: colors[index], color: "#fff" }}
            icon={<FcGraduationCap />}
            key={index}
          >
            <h3 className="vertical-timeline-element-title">{item.name}</h3>
            <h5 className="vertical-timeline-element-subtitle">
              {item.degree}
            </h5>

            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;