import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  loaded: boolean = false;
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<AnimationPlayState>;
  symbol: any ;
  url = 'https://financialmodelingprep.com/api/v3/company/discounted-cash-flow/GS';
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  dcf: any ;
  stockprice: any ;
  date: any; 
  ineff: any;
  perc: any;
  zero: any;
  uno: any;
  percuno: any;
  

  


  constructor(private http: HttpClient) {

    this.http.get<any>(this.url).subscribe(data => {
    

      this.dcf = data.DCF;
      this.stockprice = data["Stock Price"];
      this.date = data.date;
      this.symbol = data.symbol;
      this.ineff = this.dcf - this.stockprice;
      this.zero = this.dcf / 100;
      this.perc = this.ineff / this.zero;
      this.uno = this.stockprice / 100;
      this.percuno = this.ineff / this.uno
      
      
      
    })
  }

  

}
