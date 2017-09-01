import { Component, OnInit } from '@angular/core';
import { UserService } from "./services/user.service";
import { User } from './models/user';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers : [UserService]
})

export class AppComponent implements OnInit {
    public user : User;
    public token;
    public identity;

    constructor(
      private _userService : UserService
    ){
      this.user = new User('','','','','','ROLE_USER','null');
    }

    ngOnInit(){
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
    }

    onSubmit(){      
      // autenticacion
      this._userService.singup(this.user).subscribe(
        response => {
          let identity = response.user;
          this.identity = identity;

          if(!this.identity.username){
            console.log('el usuario no esta autenticado')
          }else{
             // Crear el locasstorage 
          localStorage.setItem('identity', JSON.stringify(identity));
            // Obtener el token
            this._userService.singup(this.user, true).subscribe(
              response => {
                let token = response.token;
                this.token = token;

                if (this.token.lenght <= 0) {
                  alert('el token no se ha generado')
                }else{
                  // crea elemento en el localStorage para tener el token
                  localStorage.setItem('token', token);
                }
              }, 
              error => {
                  var errorM = <any>error;
                  if (errorM != null) { 
                    console.log('Error en 1:' + errorM);                     
                    var body = JSON.parse(error._body);
                    // this.errorMenssage = body.message;
                  }
              }
            );
          }          
        },
        error =>{
          var errorM = <any>error;
          if (errorM != null) {  
            console.log('Error en 2:' + errorM);          
            var body = JSON.parse(error._body);
           
            // this.errorMenssage = body.message;
          } 
        }
      );
    }
}
