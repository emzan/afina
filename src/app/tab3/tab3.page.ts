
import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  loaded: boolean = false;
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<AnimationPlayState>;
  symbol: any ;
  url = 'https://financialmodelingprep.com/api/v3/company/discounted-cash-flow/AAPL';
  dcf: any ;
  stockprice: any ;
  date: any;
  ineff: any;
  perc: any;
  zero: any;
  
  

  


  constructor(private http: HttpClient) {

    this.http.get<any>(this.url).subscribe(data => {
    

      this.dcf = data.DCF;
      this.stockprice = data["Stock Price"];
      this.date = data.date;
      this.symbol = data.symbol;
      this.ineff = this.dcf - this.stockprice;
      this.zero = this.dcf / 100;
      this.perc = this.ineff / this.zero
      
      
      
    })
  }

}
