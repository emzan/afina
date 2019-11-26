import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  loaded: boolean = false;
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<AnimationPlayState>;
  symbol: any ;
  url = 'https://financialmodelingprep.com/api/v3/company/discounted-cash-flow/AAPL';
  dcf: any ;
  stockprice: any ;
  date: any;


  constructor(private http: HttpClient) {

    this.http.get<any>(this.url).subscribe(data => {
    

      this.dcf = data.DCF;
      this.stockprice = data["Stock Price"];
      this.date = data.date;
      this.symbol = data.symbol;
      
    })
  }

}
