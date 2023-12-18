import React, { useState } from "react";
import faqDetails from "../../components/FaqAccordion/faqDetails";

function AccordianFaq() {
  let [selected, setSelected] = useState(null);
  let toggle = (id) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };

  // ? CSS
  let mainCard = {
    border: "2px solid black",
    width: "60%",
    margin: "40px auto",
    padding: "10px 20px",
    position: "relative",
  };
  let paraCard = {
    height: "100px",
    width: "820px",
    padding: "20px",
    marginLeft: "-22px",
    marginTop: "16px",
    color: "black",
  };
  let btn = {
    position: "absolute",
    right: "10px",
    top: "6px",
    padding: "8px",
  };
  return (
    <div>
      {faqDetails.map(({ id, que, ans }) => {
        return (
          <div key={id} style={mainCard}>
            <h2>{que}</h2>
            <button
              style={btn}
              onClick={() => {
                toggle(id);
              }}
            >
              {selected === id ? (
                <i class="fa fa-chevron-up" aria-hidden="true"></i>
              ) : (
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
              )}
            </button>
            {selected === id ? <p style={paraCard}>{ans}</p> : ""}
          </div>
        );
      })}
    </div>
  );
}

export default AccordianFaq;
