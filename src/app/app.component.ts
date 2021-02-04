import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Animal } from '../domain/animal';
import { AnimalsService } from './animals-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AnimalsService],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {

  title = 'Animals wiki';
  animals: Animal[];
  animalFamilies: string[];
  filteredAnimals: Animal[];

  constructor(private animalService: AnimalsService) {
  }


  ngOnInit() {

    this.animalService.getAnimals().subscribe(animalsList => {
      console.log(animalsList, 'animalsList')
      this.animals = animalsList;
      this.filteredAnimals = animalsList;
      this.animalFamilies = this.animals
        .map(animal => animal.family)
        .filter(((value, index, array) => array.indexOf(value) === index));
      // this.animalFamilies = this.animals
      //   .map(animal => animal.family)
      // let animalFamilies = [];
      // this.animals.map((e) => this.animalFamilies.push(e.family));

    });
    // console.log(this.animalFamilies, 'animalFamilies')
  }

  filterAnimalsPerFamily(family: string) {
    if (family === '') {
      this.filteredAnimals = this.animals;
    } else {
      this.filteredAnimals = this.animals.filter(animal => animal.family === family);
    }
  }
}
