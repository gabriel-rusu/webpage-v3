import {Service, signal} from '@angular/core';

@Service()
export class LoadingScreenService {
  private loading = signal(false);
  private counter = 0;

  start() {
    this.counter++;
    this.loading.set(true);
  }

  stop() {
    this.counter--;
    if(this.counter <= 0) {
      this.loading.set(false);
      this.counter = 0;
    }
  }

  isLoading = this.loading.asReadonly();
}
