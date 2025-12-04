import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal, WritableSignal } from "@angular/core";


@Component({
  standalone: true,
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe],
})

export class HeroPageComponent{

  // name: WritableSignal<string> = signal('Ironman');
  name = signal('Ironman');
  // age : WritableSignal<number> = signal(45);
  age = signal(45);


  heroDescription = computed(() =>{
    const description = `${this.name()} - ${this.age()}`;
    return description;
  })

  // getHeroDescription(){
     // read the signal values instead of interpolating the signal objects
     // use the signal as a function to get the current value
  //   return `${this.name()} - ${this.age()}`;
  // }

  capitalizedName = computed(() =>{
    const capitalized = this.name().toUpperCase();
    return capitalized;
  })


  changeHero(){
    this.name.update( () => 'Spidernman');
    this.age.update(() => 22);
  }

  resetForm(){
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge(){
    this.age.update(() => 60);
  }

}
