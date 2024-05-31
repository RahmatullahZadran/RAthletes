import { Routes } from '@angular/router';
import { ShowComponent } from './show/show.component';
import { ChestComponent } from './chest/chest.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



export const routes: Routes = [
   { path: '',
     component: ShowComponent },
    { path: 'chest',
     component: ChestComponent },
    

];

@NgModule({
  imports: [RouterModule,RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }