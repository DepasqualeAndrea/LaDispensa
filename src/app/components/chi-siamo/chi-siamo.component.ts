import { Component, OnInit } from '@angular/core';
import { AppCostants } from 'src/app/costants/app.costants';

@Component({
  selector: 'app-chi-siamo',
  templateUrl: './chi-siamo.component.html',
  styleUrls: ['./chi-siamo.component.scss']
})
export class ChiSiamoComponent implements OnInit {

  public chiSiamo = AppCostants.CHISIAMO

  constructor() { }

  ngOnInit(): void {
  }

}
