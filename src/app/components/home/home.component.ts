import { Component, OnInit } from '@angular/core';
import { AppCostants } from 'src/app/costants/app.costants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public bgImg = AppCostants.BGIMG


  constructor() { }

  ngOnInit(): void {
  }

}
