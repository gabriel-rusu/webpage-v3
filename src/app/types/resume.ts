import {EducationType} from "./education.type";
import {Job} from "./job";

export interface Resume {
  education: EducationType[];
  experience: Job[];
}
