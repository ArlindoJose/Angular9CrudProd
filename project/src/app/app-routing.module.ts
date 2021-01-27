import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { NgModule } from '@angular/core';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent}  from './views/home/home.component';
import {ProductCrudComponent} from  './views/product-crud/product-crud.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent 
},{
  path:"products",
  component: ProductCrudComponent,
},
{
  path:"products/create",
  component: ProductCreateComponent,
},
{
  path:"products/read",
  component: ProductReadComponent,
},
{
  path:"products/update/:id",
  component: ProductUpdateComponent,
},
{
  path:"products/delete/:id",
  component: ProductDeleteComponent,
},
{
  path:"products/update",
  component: ProductCrudComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
