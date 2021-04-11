import { Component, OnInit } from '@angular/core';
import { elementStart } from '@angular/core/src/render3';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-veiw',
  templateUrl: './veiw.component.html',
  styleUrls: ['./veiw.component.css']
})
export class VeiwComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private appService: AppServiceService,
    private spinner: NgxSpinnerService) { }
  cat: any;
  books: any;
  searchForm = new FormControl('');
  value = ''
  ngOnInit() {
    this.cat = this.route.snapshot.queryParams['returnUrl'];
    console.log(">>>>>>>>>>>>>>>>>>.", this.cat)
    this.listBook();
  }

  veiwDetails(cat) {

    let hmtl1 = cat.formats[Object.keys(cat.formats).find(k => k.indexOf("text/html") != -1)];
    let text1 = cat.formats[Object.keys(cat.formats).find(k => k.indexOf("text/plain") != -1)];

    if (hmtl1) {
      window.open(hmtl1, "_blank")
    } else if (text1) {
      window.open(text1, "_blank")
    } else{
      alert("We can't display book!")
    }
  }

  listBook() {
    this.spinner.show();
    this.appService.getBooks(this.cat).subscribe(
      (res) => {
        this.spinner.hide();
        console.log(res, "<<<<<<<<<<<<<<<<<<<")
        this.books = res
      }
    )
  }

  filterData(data) {
    console.log('>>>>>>>>>', data)
    this.spinner.show();
    this.appService.getFilterData(this.cat, data).subscribe(
      (res) => {
        this.spinner.hide();
        console.log(res, "<<<<<<<<<<<<<<<<<<<")
        this.books = res
      }
    )
  }

  clearData() {
    this.listBook();
  }
}
