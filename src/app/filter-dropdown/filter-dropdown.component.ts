import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'filter-dropdown',
  template: `
    <div class="container">
      <div class="row mb-1">
        <div class="col-2"></div>
          <div class="col-4">
            <div class="dropdown">
              <button class="btn btn-primary">Dropdown</button>
              <div class="dropdown-content">
                <a *ngFor="let family of animalFamilies" (click)="familySelected.emit(family)">{{family}}</a>
              </div>
            </div>
        </div>
        <div class="col-4">
          <button type="button" class="btn btn-secondary"

           (click)="familySelected.emit('')"
          >Cancel filter</button>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  `,
  styleUrls: ['./filter-dropdown.component.scss']
})

export class FilterDropdownComponent {
  @Input()
  animalFamilies: string[];

  @Output()
  familySelected: EventEmitter<string> = new EventEmitter<string>();
}


// <!--[click]="familySelected.emit('')" -- >
 // "-": "0.0.1",
// "g": "^2.0.1",
