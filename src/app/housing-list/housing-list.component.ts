import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLoaction } from '../housing-loaction';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent  implements OnInit{

  @Input() locationList: HousingLoaction[] = [];
  results:HousingLoaction[] = [];
  @Output() selectedLocationEvent = new EventEmitter<HousingLoaction>();

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  searchLocations(search: string) {
    console.log(search);
    if(!search) return;
    this.results = this.locationList.filter(location => location.city.toLowerCase().includes(search.toLowerCase()));
  }

  selectHousingLocation(location: HousingLoaction) {
    this,this.selectedLocationEvent.emit(location);   
  }
}
