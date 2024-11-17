import {EducationType} from "./education.type";
import {Job} from "./job";
import {About} from "./about.type";
import {Intro} from "./intro.type";

export interface Resume {
  intro: Intro,
  about: About
  education: EducationType[];
  experience: Job[];
}
