import { Component, OnInit } from '@angular/core';
import { EmpDetailsService } from '../services/emp-details.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  public emp = 'E0';
  public employees: any;

  constructor(private empdetail: EmpDetailsService) {}

  ngOnInit(): void {
    this.empdetail.getEmployee().subscribe((data) => (this.employees = data));
  }
  setEmp(data: string) {
    this.emp = '';
    this.emp = data;
  }
  check(a: string, b: string): boolean {
    if (a == b) {
      return true;
    } else {
      return false;
    }
  }
}
