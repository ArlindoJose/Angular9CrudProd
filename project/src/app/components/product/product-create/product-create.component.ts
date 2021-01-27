import { ProductService } from './../product.service';
import { Product } from './../prouct.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name:'',
    price: null
  }
  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit(): void {
   
  }

createProduct(): void{
  this.productService.create(this.product).subscribe(()=> {
     this.productService.ShowMessage('Operaçao Efectuada com sucesso')
     this.router.navigate(['/products'])
  })
}

cancel(): void{
 this.router.navigate(['/products'])
}

}
