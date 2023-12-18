import React from "react";
import FakeStoreapi from "./components/FakeStoreapi";
import Omdbapi from "./components/Omdbapi";
import FormDisplay from "./components/FormDisplay";

import FormValidation from "./components/CustomFormValidation/FormValidation";
import HookForm from "./components/ReactHookForm/HookForm";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import FormObject from "./components/FormdisplayObject.jsx/FormObject";
import FaqAccordion from "./components/FaqAccordion/FaqAccordion";
import Field from "./components/FormFieldSearch/Field";
import CrudRoutes from "./components/CrudApi/CrudRoutes.jsx";
import AccordianFaq from "./components/FaqAccordion/AccordianFaq.jsx";

const App = () => {
  return (
    <div>
      <Omdbapi />
    </div>
  );
};

export default App;
