import {Component} from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector:'search-sal',
    templateUrl:'searchsaloon.html'
})
export class SearchSaloon{
    vendorName: string;
    cityName: string;
  
    constructor(private router:Router) { }
  
    ngOnInit() {
    }
  
    searchSaloonName() {
      // console.log(this.vendorName);
      this.router.navigate(['/home/saloon/' + this.searchSaloonName]);
    }
  

}