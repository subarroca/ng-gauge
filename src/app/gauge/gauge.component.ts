/**
 * @category   Component
 * @package    com.kiwity.kw-ng2-gauge.gauge
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/




// ANGULAR
import { Component, OnInit, Input } from '@angular/core';




// EXTERNAL




// OWN
import { GaugeSegment } from './shared/gauge-segment';





@Component({
  selector: 'kwng2-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit {
  @Input() outerRadius: number = 100;
  @Input() bgColor: string;
  @Input() rounded: boolean = true;
  @Input() reverse: boolean = false;



  @Input() segments: GaugeSegment[];



  @Input() heading: string;
  @Input() label: string;




  PI: number = Math.PI;


  constructor() { }

  ngOnInit() {
  }

  get sortedSegments() {
    return this.segments.sort((a: GaugeSegment, b: GaugeSegment) => {
      if (this.reverse) {
        return (a.value / a.goal > b.value / b.goal) ? 1 : -1;
      } else {
        return (a.value / a.goal > b.value / b.goal) ? -1 : 1;
      }
    });
  }


}
