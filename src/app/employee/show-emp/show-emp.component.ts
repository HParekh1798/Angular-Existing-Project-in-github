import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {
  employeeList:any[] | undefined;

  ModalTitle:string | undefined ;
  ActivateAddEditEmpComp:boolean | undefined ;
  emp:any;

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.refreshEmployeeList();
  }

  addClick()
  {
    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      Department:"",
      DateOfJoining:"",
      PhotoFileName:""
    }
    this.ModalTitle= "Add Employee";
    this.ActivateAddEditEmpComp=true ;
  }
  editClick(item: any)
  {
    console.log(item);
    this.emp = item;
    this.ModalTitle = "Edit Employee";
    this.ActivateAddEditEmpComp = true;
  }

  deleteClick(item:any)
  {
    if(confirm('Are you sure??')){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmployeeList();
      })
    }
  }

  closeClick()
  {
    this.ActivateAddEditEmpComp= false;
    this.refreshEmployeeList();
  }

  refreshEmployeeList()
  {
    this.service.getEmployeetList().subscribe(data => {this.employeeList = data});
  }

}
