import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule 
  ],
  exports: [
    FooterModule,
    HeaderModule
  ]
})
export class CoreModule { }
