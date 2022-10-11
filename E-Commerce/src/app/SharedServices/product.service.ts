import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Shared Interfaces&enums/iproduct';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  getproductcategorys(value:string){

    return this.http.get("https://dummyjson.com/products/category/"+value)
    
      }

  
  url:string="https://dummyjson.com/products";
 
  // getProduct():Observable<any[]>{
  //   return this.http.get<IProduct[]>(this.url);
  // }


  

    postUrl:string="https://dummyjson.com/products/add";
  postProduct(productTitle:string){
    return this.http.post(this.postUrl,productTitle);
  }

  getproductcategory(){

    return this.http.get(environment.baseApi+'products/categories')
    
      }
      getallproduct(){

        return this.http.get(environment.baseApi+'products')
        
          }

        }
