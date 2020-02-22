import { MyserviceService } from './my-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'Angular 7 Project!';

  columnDefs = [
    {headerName: 'ID', field: 'id', sortable: true, filter: true},
    {headerName: 'First Name', field: 'first_name', sortable: true, filter: true},
    {headerName: 'Last Name', field: 'last_name', sortable: true, filter: true},
    {headerName: 'Email', field: 'email', sortable: true, filter: true},
    {headerName: 'Gender', field: 'gender', sortable: true, filter: true},
    {headerName: 'IP Adress', field: 'ip_address', sortable: true, filter: true}
];

rowData: any;


  public persondata = [];
  constructor(private myservice: MyserviceService) {}


  ngOnInit() {
     this.myservice.getData().subscribe((data) => {
        this.rowData = Array.from(Object.keys(data), k=>data[k]);
        console.log(this.rowData); 
     });
  }
}
