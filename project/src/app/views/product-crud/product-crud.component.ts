import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';


@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router , headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
   }

  ngOnInit(): void {
  }
navigateToProductCreate(): void{
this.router.navigate(['/products/create'])
}
}
