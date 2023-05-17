import { Component } from '@angular/core';
import { HousingLoaction } from './housing-loaction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  housingLocationList: HousingLoaction[] = [
    {
      name: "Bti Building",
      city: "Chittagong",
      state: "Ctg",
      wifi: true,
      laundry: true
    },
    {
      name: "Sanmar Ocean City Building",
      city: "Cumilla",
      state: "Ctg",
      wifi: false,
      laundry: true
    },
    {
      name: "Arab Properties Building",
      city: "Potenga",
      state: "Ctg",
      wifi: true,
      laundry: true
    }
  ];

  selectedLocation: HousingLoaction | undefined;
  
  updateSelectedLocation(location: HousingLoaction) {
    this.selectedLocation = location;
  }
}
