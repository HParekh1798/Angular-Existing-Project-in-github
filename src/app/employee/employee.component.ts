import { Component, OnInit } from '@angular/core';
import { SharedService  } from '../shared.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList:any[] | undefined;

  constructor( private service: SharedService) { }

  ngOnInit(): void {
    

  }

  
}
