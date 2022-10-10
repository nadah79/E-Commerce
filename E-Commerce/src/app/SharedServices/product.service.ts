import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Shared Interfaces&enums/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  
  url:string="https://dummyjson.com/products";
 
  getProduct():Observable<any[]>{
    return this.http.get<IProduct[]>(this.url);
  }

  postUrl:string="https://dummyjson.com/products/add";
  postProduct(productTitle:string){
    return this.http.post(this.postUrl,productTitle);
  }
}
