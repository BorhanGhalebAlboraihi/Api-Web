import { EmployeeDetailsComponent } from './../employee-details/employee-details.component';
import { Observable } from "rxjs";
import { EmployeeService } from "./../employee.service";

import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { Borhan } from '../Borhan';

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;
  public employeea=[
    {"id":1,"Name":"Borhan","Email":"borhan45267","Type":"Male"},
    {"id":2,"Name":"Ali","Email":"borhan45267","Type":"Male"},
    {"id":3,"Name":"Aroa","Email":"borhan45267","Type":"Male"}
  ];
   
  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();

  
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }
}
