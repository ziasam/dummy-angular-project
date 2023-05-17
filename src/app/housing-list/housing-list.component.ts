import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent  implements OnInit{

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  searchLocations(search: string) {
    console.log(search);
  }
}
