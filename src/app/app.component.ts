import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Animal } from '../domain/animal';
import { AnimalsService } from './animals-service';
import { HttpClient } from '@angular/common/http';
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
  employeeData: any;
  constructor(private httpClient: HttpClient, private animalService: AnimalsService) {
  }


  ngOnInit() {
    // this.httpClient.get<any>('./../assets/fauna.json').subscribe((data) =>
    //   this.employeeData = data
    // )
    // console.log(this.employeeData, 'this.employeeData')

    this.animalService.getAnimals().subscribe(animalsList => {

      console.log(animalsList, 'animalsList')
      this.animals = animalsList;
      this.filteredAnimals = animalsList;
      // console.log(this.filteredAnimals, 'this.filteredAnimals')
      // this.filteredAnimals.forEach((e) => console.log(e, "e"))
      // this.animalFamilies = this.animals[0].family
      // console.log(this.animalFamilies, 'animalFamilies !! ')
      this.animalFamilies = this.animals.map(animal => animal.family)
        .filter(((value, index, array) => array.indexOf(value) === index));

      this.animals.forEach((e) => { console.log(e); this.animalFamilies.push(e.family) })
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
