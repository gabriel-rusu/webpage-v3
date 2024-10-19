import {Education} from "./education";
import {Job} from "./job";

export class Resume {
  constructor(public education: Education[], public experience: Job[]) {
  }
}
