import { Component, OnInit } from '@angular/core';
import { ParamMap, Router,ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Shared Interfaces&enums/iproduct';
import { ProductService } from 'src/app/SharedServices/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  // activatedRoute: any;
  selected_comment_id: any;
  product_id:any;
  selected_product_id:any;

  constructor(private productService:ProductService,private router:Router,private activatedRoute:ActivatedRoute) { }
  // Products:IProduct[];
  productsData: any;
  ngOnInit(): void {
    this.productService.getProduct().subscribe(
      productData=>{
        this.productsData= productData;
        console.log(productData)
      }
    )
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.selected_product_id=params.get('id');
    });
  }
  goToProductDescription(product_id:any)
  {
  
    //go to department details page and pass the id parameter to it
    this.router.navigate(["products",product_id]);
  }
  productPost:any;
  createProduct(){
    let productTitle:any="Dell Laptop";
    this.productService.postProduct(productTitle).subscribe(
      data=>{
        // console.log(data);
        this.productPost=data
        
      }
    );
  }
}
