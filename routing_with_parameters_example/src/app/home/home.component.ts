import { Component } from '@angular/core';
import { DatabaseService } from '../Services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})


export class HomeComponent {

  constructor(public databaseService: DatabaseService){


  }

}
