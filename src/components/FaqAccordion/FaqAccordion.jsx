import React from "react";
import USERS from "../../userdata";
import Accordion from "../../css/FaqAccordion.module.css";
const FaqAccordion = () => {
  return (
    <div className={Accordion.faqcard}>
      <div>
        {USERS.map(({ id, sname, description }) => {
          return (
            <div className={Accordion.uidatastyle} key={id}>
              <h1>{sname}</h1>
              <span>+</span>
              <div className={Accordion.content}>
                {" "}
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqAccordion;
