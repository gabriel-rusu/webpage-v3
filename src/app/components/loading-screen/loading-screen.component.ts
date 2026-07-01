import {Component} from '@angular/core';
import {LoadingScreenService} from "../../services/loading-screen.service";

@Component({
    selector: 'app-loading-screen',
    imports: [],
    templateUrl: './loading-screen.component.html',
    styleUrl: './loading-screen.component.css'
})
export class LoadingScreenComponent {

  constructor(protected loadingScreenService: LoadingScreenService) {
  }
}
