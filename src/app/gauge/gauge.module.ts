/**
 * @category   Module
 * @package    com.kiwity.kw-ng2-gauge.gauge
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/




// ANGULAR
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';




// EXTERNAL




// OWN
import { GaugeComponent } from './gauge.component';





@NgModule({
  declarations: [
    GaugeComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [
    GaugeComponent
  ],
  exports: [
    GaugeComponent
  ]
})
export class GaugeModule { }
