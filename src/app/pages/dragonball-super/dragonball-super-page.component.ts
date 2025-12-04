import { Component, signal } from "@angular/core";
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../dragonball/character-add/character-add";
//import { NgClass } from "@angular/common";

interface Character{
  id: number;
  name: string;
  power: number;
}

@Component({
  standalone: true,
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterList, CharacterAdd]
})

export class DragonBallSuperPageComponent{

  name = signal('');
  power = signal(0);



  characters = signal<Character[]>([
    {id:1, name:'Goku', power: 9001},
    {id:2, name:'Vegeta', power: 8000},
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


}

