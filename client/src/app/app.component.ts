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
      private _userService : UserService,
      private _router : Router
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
          let identity = response.username;
          this.identity = identity;

          if(!this.identity){
            console.log('el usuario no esta autenticado')
          }else{
             // Crear el locasstorage 
          localStorage.setItem('identity', JSON.stringify(response));
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

  public getIdentity(){
    let identity = JSON.parse(localStorage.getItem('identity'));
    if (identity != 'undefined') {
        this.identity = identity; 
    } else {
        this.identity = null;
    }
    return this.identity;
  }



  public logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('identity');   
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this.user =  new User('','','','','','ROLE_USER','null');
    this._router.navigate(['/']); 
  }
}
