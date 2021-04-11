import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private appService : AppServiceService,
              private Router: Router 
    ) { }
  categories = ["Fiction","Drama","History","Humor","Politics","Philosophy","History","Adventure"]
  ngOnInit() {

  }


  listBooks(data){
    this.Router.navigate(['/view'],{ queryParams : { returnUrl : data }})
  }
}
