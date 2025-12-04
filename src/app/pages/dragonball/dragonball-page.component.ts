import { Component, computed, signal } from "@angular/core";
//import { NgClass } from "@angular/common";

interface Character{
  id: number;
  name: string;
  power: number;
}

@Component({
  standalone: true,
  templateUrl: './dragonball-page.component.html',
  //imports: [NgClass],
})

export class DragonBallPageComponent{

  name = signal('');
  power = signal(0);



  characters = signal<Character[]>([
    {id:1, name:'Goku', power: 9001},
    // {id:2, name:'Vegeta', power: 8000},
    // {id:4, name:'Yamcha', power: 500},
    // {id:3, name:'Piccolo', power: 3000},
  ]);

  addCharacter(){
    console.log(this.name(),this.power());
    if(!this.name() || !this.power() || this.power()<= 0){
      console.log('No se pueden dejar campos vacios, la fuerza no puedes ser igual o menor a 0')
      return;
    }

    const newCharacter: Character = {
      id: this.characters.length + 1,
      name: this.name(),
      power: this.power(),
    };

    //this.characters().push(newCharacter);
    this.characters.update(
      (list) => [...list, newCharacter]
    );

    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }

//   powerClasses = computed(() =>{
//   return{
//     'text-danger': true,
//   };
// });
}

