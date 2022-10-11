import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductService } from 'src/app/SharedServices/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  selected_product_id:any;
  constructor(private productService:ProductService,private router:Router,private activatedRoute:ActivatedRoute) { }
  productsData: any;
  ngOnInit(): void {
    this.productService.getallproduct().subscribe(
      productData=>{
        this.productsData= productData;
        console.log(productData)
      }
    )
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.selected_product_id=params.get('id');
    });
  }
  
  }


