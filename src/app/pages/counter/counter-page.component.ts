import { ChangeDetectionStrategy, Component, signal } from "@angular/core";


@Component({
  standalone: true,
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush, //Asincroniza excepto las señales ahorrando carga de trabajo
})
export class CounterPageComponent {

  counter = 10;
  counterSignal = signal(10);

  constructor(){
    // setInterval(()=>{
    //   this.increaseBy(1);
    //   console.log('Tick');
    // }, 2000);
  }

  increaseBy(value: number){
    this.counter += value;
    this.counterSignal.update( (current) => current + value);
  }

  decreaseBy(value: number){
    this.counter -= value;
  }

  resetCounter(){
    this.counter = 0;
    this.counterSignal.set(0);
  }

}
