import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.html'
})
export class CharacterAdd {

addCharacter() {
  console.log(this.name(),this.power());
    if(!this.name() || !this.power() || this.power()<= 0){
      console.log('No se pueden dejar campos vacios, la fuerza no puedes ser igual o menor a 0')
      return;
    }

    const newCharacter: Character = {
      id: 10000,
      name: this.name(),
      power: this.power(),
    };

    //this.characters().push(newCharacter);
    console.log({ newCharacter});

    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
}
name= signal('');
power = signal(0);


}
