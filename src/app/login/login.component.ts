import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private returnUrl: string;
  usuario: string;
  password: string;
  errorUsu: boolean;
  errorPass: boolean;
  mnsErrorLoginUsu: string;
  mnsErrorLoginPass: string;

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.limpiarMnsErrors();
  }

  public login() {
    if (this.usuario === undefined || this.usuario === '' || this.password === undefined || this.password === '') {
      if (this.usuario === undefined || this.usuario === '') {
        this.errorUsu = true;
        this.mnsErrorLoginUsu = 'Campo Usuario es obligatorio';

      }
      if (this.password === undefined || this.password === '') {
        this.errorPass = true;
        this.mnsErrorLoginPass = 'Campo Contraseña es obligatorio';
      }
    } else {
        if(this.usuario === 'user' && this.password === 'user'){
          this.router.navigateByUrl(this.returnUrl);
        }else{
          if(this.usuario !== 'user'){
            this.errorUsu = true;
            this.mnsErrorLoginUsu = 'El usuario ingresado no existe.';
          }
          else {
            if(this.password !== 'user'){
              this.errorPass = true;
              this.mnsErrorLoginPass = 'La contraseña ingresada es incorrecta.';
            }
          }
        }
    }
  }

  public limpiarMnsErrors() {
    this.mnsErrorLoginUsu = '';
    this.mnsErrorLoginPass = '';
  }

}
