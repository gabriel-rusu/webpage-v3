import {TimePeriod} from "./time-period";

export class Education {
  constructor(public degree: string, public faculty: string, public university: string, public description: string, public timePeriod?: TimePeriod, public finalGrade?: string) {
  }
}
