import {AfterViewInit, Component, computed, Input, signal, Signal, WritableSignal} from '@angular/core';
import {isIndexAtTheEnd, isIndexAtTheStart} from "../../commons/string.functions";

@Component({
  selector: 'app-dynamic-typing',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-typing.component.html',
  styleUrl: './dynamic-typing.component.css'
})
export class DynamicTypingComponent implements AfterViewInit{
  @Input({required: true}) textToAnimate!: string[];
  @Input() staticText: string = '';

  currentIndex = 0;
  currentCharIndex = 0;
  text: string = '';
  dynamicText: WritableSignal<string> = signal<string>(this.text);
  private reverseOrder: boolean = false;

  ngAfterViewInit(): void {
    this.text = this.textToAnimate[this.currentIndex][this.currentCharIndex];
    this.dynamicText.set(this.text);
    setTimeout(() => {
      setInterval(() => {
        const currentText = this.textToAnimate[this.currentIndex]

        if(this.reverseOrder && !isIndexAtTheStart(this.currentCharIndex)) {
          this.currentCharIndex--;
        } else if(!this.reverseOrder) {
          this.currentCharIndex++;
          this.reverseOrder = isIndexAtTheEnd(this.currentCharIndex, currentText);
        } else if(isIndexAtTheStart(this.currentCharIndex)) {
          this.goToNextText();
        }
        this.text = currentText.substring(0, this.currentCharIndex);
        this.dynamicText.set(this.text);
      }, 200);
    }, 100)
  }

  private goToNextText() {
    this.text = '';
    this.reverseOrder = false;
    this.currentCharIndex =  0
    this.currentIndex = (this.currentIndex + 1) % this.textToAnimate.length;
  }
}

