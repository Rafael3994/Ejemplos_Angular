import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  email: string = ''
  password: string = ''

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    let token = sessionStorage.getItem('token');
    if (token) {
      this.router.navigate(['dashboard']);
    }
  }

  loginUser(value: any) {
    let { email, password } = value;
    this.authService.login(email, password)
      .subscribe((res) => {
        if (res.token) {
          sessionStorage.setItem('token', res.token)
          this.router.navigate(['dashboard']);
        }
      },
        (error) => { console.error('error', error) },
        () => console.log('Petición de login terminada')
      )
  }
}
