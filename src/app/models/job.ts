import {TimePeriod} from "./time-period";

export class Job {

  // "description":{
  //   "techStack": "",
  //   "responsibilities": "",
  //   "achievements": ""
  // },

  constructor(public position: string, public company: string, public description: string, public timePeriod: TimePeriod) {
  }

}
