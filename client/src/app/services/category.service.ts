import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
//mapear objetos
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { AppConfig } from "../../app.config";

@Injectable()
export class CategoryService {
  public url: string;

  constructor(private _https: Http) { 
    this.url = AppConfig.url;    
  }

  // consultar las categorias
  

}
