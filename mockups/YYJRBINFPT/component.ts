
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'YYJRBINFPT',
    templateUrl: 'template.html',
    
    })
    export class YYJRBINFPT implements OnInit {
    constructor(
        private http: HttpClient,
        ) { }
    
    // myData: any;

    ngOnInit() {
        // this.http.get('assets/myData.json').subscribe((data) => {
        //     this.myData = data;
        // });
    }
}