import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleCharts } from 'google-charts';
import * as gauss from './gauss';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild('chart', {static: false}) chart;
  data: number[];
  distribution: number[];
  mean = 0;
  sd = 0;
  symbol = "GS";
  url = 'https://financialmodelingprep.com/api/company/historical-price/GS?serietype=line&serieformat=array&datatype=json';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    
    GoogleCharts.load(() => this.drawChartLine());
  }


  drawChartLine() {

    this.http.get<any>(this.url).subscribe(data => {
    
         var graphData = data.historical;

     	graphData.forEach((item) => {
          if(typeof item[0] === "string"){
              var split = (item[0]).split(" ");
              item[0] = new Date(split[3]+'/'+split[1]+'/'+split[2]);
          }
                        });
             		console.log(graphData) ;        
				graphData.unshift(['Date', 'Close', 'Close'])
        var data = new GoogleCharts.api.visualization.arrayToDataTable(graphData);

        var options =  {
                    crosshair: { trigger: 'both',orientation: 'both' },
                   // tooltip: { isHtml: true , ignoreBounds:false},
                  /*   tooltip: {
                    trigger: 'none'
                    }, */
                    seriesType: "line",
                    colors:['#3365cc'],
//                    focusTarget: 'category',
                    series: {
                        0: {targetAxisIndex:1},
                        1:{targetAxisIndex:0, color: '#c3002f'},
                    },
                    height: 800,
                    backgroundColor: {fill: '#FFFFFF'},
                     chartArea: {
                        height:'95%',
                        width: "90%",
                    },
                    legend: 'none',
                    vAxes: {
                        0: {
                            textStyle: {
                                fontSize: 10,
                                color: 'black'
                            },
                            gridlines: {
                                color: '#dcd7da'
                            },
                        },
                        1: {
                            textStyle: {
                                fontSize: 10,
                                color: 'black'
                            },
                            gridlines: {
                                color: '#dcd7da'
                            },
                        }
                        
                    },
        }

        var chart = new GoogleCharts.api.visualization.LineChart(this.chart.nativeElement);
        chart.draw(data, options);

    })
  }

    
}