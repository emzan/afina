import {Component, OnInit, ViewChild, ChangeDetectionStrategy} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { HttpClient } from '@angular/common/http';
//import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tab3',
 // changeDetection: ChangeDetectionStrategy.OnPush ,
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  loaded: boolean = false;
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<AnimationPlayState>;
  symbol = 'AAPL';
 
  url = 'https://financialmodelingprep.com/api/v3/company/stock/list';
  financialStatement: any = [];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private http: HttpClient) {

    this.http.get<any>(this.url).subscribe(data => {
      this.financialStatement = data.symbolsList.slice(0,500);
      this.createdDisplayComlumn(this.financialStatement[0]);
      this.dataSource = new MatTableDataSource(this.financialStatement);

     
      this.loaded =true;
    })
  }


  ngOnInit() {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.financialStatement);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      //this.ref.markForCheck();
    },1000);
    
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createdDisplayComlumn(obj) {
    Object.keys(obj).forEach((key,index)=> {
      this.displayedColumns.push(key);
    });
  }
  
}

//eccellente!
