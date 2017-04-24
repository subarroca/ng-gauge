/**
 * @category   Module
 * @package    com.kiwity.gauge.app
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/




// ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




// EXTERNAL




// OWN
import { AppComponent } from './app.component';
import { GaugeModule } from './gauge';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GaugeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
