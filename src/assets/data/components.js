import { JOURNEY } from "./journey";
import { PERSONAL } from "./personal";
import { EXPERIENCE } from "./experience";
import { GOALS } from "./goals";
import { SKILLS } from "./skills";
import { snapCraftImage, snapCraftVideo } from "./carousel.js";

import PersonModal from "../../components/Personal-Modal/PersonModal";
import ExperienceModal from "../../components/Experience-Modal/ExperienceModal.jsx";
import Carousel from "../../components/Carousel/Carousel.jsx";
import ContactUs from "../../components/Contact-Us/ContactUs.jsx";
import Image from "../../components/Image";

export const COMPONENTS = 
  [
    { Component: PersonModal, props: { PERSONAL } },
    { Component: ExperienceModal, props: { JOURNEY } },
    { Component: ExperienceModal, props: { EXPERIENCE } },
    { Component: PersonModal, props: { GOALS } },
    { Component: PersonModal, props: { SKILLS } },
    { Component: Carousel, props: { snapCraftImage } },
    { Component: Carousel, props: { snapCraftVideo } },
    { Component: ContactUs, props: {} },
    { Component: Image, props: {} },
  ];
  