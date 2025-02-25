import React, { useContext } from "react";
import { Fade } from "react-reveal";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import StyleContext from "../../contexts/StyleContext";
import { volunteerExperience } from "../../portfolio";
import "./VolunteerExperience.scss";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (volunteerExperience.display) {
    return (
      <div id="volunteer-experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="volunteerExperience">
            <div>
              <h1 className="experience-heading">Volunteer Experience</h1>
              <div className="experience-cards-div">
                {volunteerExperience.volunteerExperience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
