import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  selectedEmployeeCountRadioButton: string = 'All';
  employees: any[];
 

getEmployees(): void {
  this.employees = [
      {
          code: 'emp101', name: 'Ayushmaan', gender: 'Male',
          annualSalary: 50500, dateOfBirth: '11/6/1997'
      },
      {
          code: 'emp102', name: 'Aditya', gender: 'Male',
          annualSalary: 57400.95, dateOfBirth: '9/6/1982'
      },
      {
          code: 'emp103', name: 'Abhik', gender: 'Male',
          annualSalary: 50900, dateOfBirth: '12/8/1979'
      },
      {
          code: 'emp104', name: 'Aman', gender: 'Female',
          annualSalary: 69500.826, dateOfBirth: '11/10/1980'
      },
      {
          code: 'emp105', name: 'Amar', gender: 'Female',
          annualSalary: 67800.826, dateOfBirth: '10/12/1982'
      },
  ];
}

getTotalEmployeesCount(): number {
  return this.employees.length;
}

getMaleEmployeesCount(): number {
  return this.employees.filter(e => e.gender === 'Male').length;
}

getFemaleEmployeesCount(): number {
  return this.employees.filter(e => e.gender === 'Female').length;
}
trackByEmpCode(index: number, employee: any): string {
  return employee.code;
}
  constructor() { 

    this.employees= [
      {
          code: 'emp101', name: 'Ayushmaan', gender: 'Male',
          annualSalary: 50500, dateOfBirth: '11/6/1988'
      },
      {
          code: 'emp102', name: 'Aditya', gender: 'Male',
          annualSalary: 57400.95, dateOfBirth: '9/6/1982'
      },
      {
          code: 'emp103', name: 'Abhik', gender: 'Male',
          annualSalary: 50900, dateOfBirth: '12/8/1979'
      },
     
  ];
  

  }

  ngOnInit(): void {
  }

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    alert("Emmiter Value="+selectedRadioButtonValue)
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
}

}
