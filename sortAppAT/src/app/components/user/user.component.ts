import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{// implements OnInit {
  searchText: string;
  filters: Object;

  searchText1: string;
  filters1: Object;
  
  // searchText2: string;
  // filters2: Object;

  constructor() {}

}
