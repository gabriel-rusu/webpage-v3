import {TimePeriod} from "./time-period";

export interface EducationType {
  degree: string;
  faculty: string;
  university: string;
  description: string;
  timePeriod?: TimePeriod;
  finalGrade?: string;
}
