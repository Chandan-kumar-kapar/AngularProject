import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any;

  constructor(private auth: AuthService, private route: Router) {}
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  rout(data: any) {
    if (data) {
      this.route.navigateByUrl('/admin');
    } else {
      alert('Invalid EMAIL ID or PASSWORD.');
    }
  }
  submit(data: any) {
    if (data.value['email'] == '' && data.value['password'] == '') {
      alert('Please Enter Email Id and Password.');
      return;
    }
    this.auth
      .send_post_request(this.form.value)
      .subscribe((data) => this.rout(data));
  }
}
