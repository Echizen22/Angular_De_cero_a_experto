import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public chracters: Character[] = [{
    name: 'Krillin',
    power: 1000
  },{
    name: 'Goku',
    power: 9500
  },{
    name: 'Vegeta',
    power: 7500
  }];


  onNewCharacter( character: Character ):void {
    this.chracters.push(character);
  }

  onDeleteCharacter( index:number ) {
    this.chracters.splice(index, 1);
  }

}
