import { JOURNEY } from "./journey";
import { PERSONAL } from "./personal";
import { EXPERIENCE } from "./experience";
import { GOALS } from "./goals";
import { SKILLS } from "./skills";

import PersonModal from "../../components/PersonModal";
import ExperienceModal from "../../components/ExperienceModal";
import Carousel from "../../components/Carousel";
import ContactUs from "../../components/ContactUs";

export const COMPONENTS = 
  [
    { Component: PersonModal, props: { PERSONAL } },
    { Component: ExperienceModal, props: { JOURNEY } },
    { Component: ExperienceModal, props: { EXPERIENCE } },
    { Component: PersonModal, props: { GOALS } },
    { Component: PersonModal, props: { SKILLS } },
    { Component: Carousel, props: {} },
    { Component: ContactUs, props: {} },
  ];
  