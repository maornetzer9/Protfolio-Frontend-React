// Using React.lazy to dynamically import components
import React from 'react';
import { JOURNEY } from './journey';
import { PERSONAL } from './personal';
import { EXPERIENCE } from './experience';
import { GOALS } from './goals';
import { SKILLS } from './skills';
import { snapCraftImage, snapCraftVideo } from "./carousel";

const PersonModal = React.lazy(() => import('../../components/Personal-Modal/PersonModal'));
const ExperienceModal = React.lazy(() => import('../../components/Experience-Modal/ExperienceModal'));
const Carousel = React.lazy(() => import('../../components/Carousel/Carousel'));
const ContactUs = React.lazy(() => import('../../components/Contact-Us/ContactUs'));
const Image = React.lazy(() => import('../../components/Image'));


export const COMPONENTS = [
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
