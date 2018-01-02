import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-effeti',
  templateUrl: './effeti.component.html',
  styleUrls: ['./effeti.component.scss']
})
export class EffetiComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
