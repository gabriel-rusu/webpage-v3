import {TimePeriod} from "./time-period";
import {JobDescription} from "./job-description.type";


export interface Job {
  position: string;
  company: string;
  jobDescription: JobDescription;
  timePeriod?: TimePeriod;
}
