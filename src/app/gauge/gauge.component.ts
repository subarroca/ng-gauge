/**
 * @category   Component
 * @package    com.kiwity.kw-ng2-gauge.gauge
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/




// ANGULAR
import { Component, OnInit, Input } from '@angular/core';




// EXTERNAL
import { Observable } from 'rxjs/Rx';




// OWN
import { GaugeSegment } from './shared/gauge-segment';





@Component({
  selector: 'ng2-kw-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit {
  @Input() bgRadius: number = 100;
  @Input() bgColor: string;
  @Input() rounded: boolean = true;
  @Input() reverse: boolean = false;
  @Input() animationSecs: number = 0.5;


  @Input() heading: string;
  @Input() headingColor: string;
  @Input() label: string;
  @Input() labelColor: string;


  @Input()
  set segments(segments: GaugeSegment[]) {
    this.segmentsLoaded = false;
    this.sortedSegments = this.sortSegments(segments);

    Observable.timer(0)
      .first()
      .subscribe(() => this.segmentsLoaded = true);
  }
  sortedSegments: GaugeSegment[];


  segmentsLoaded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  sortSegments(segments: GaugeSegment[]) {
    return segments.sort((a: GaugeSegment, b: GaugeSegment) => {
      if (this.reverse) {
        return (a.value / a.goal > b.value / b.goal) ? 1 : -1;
      } else {
        return (a.value / a.goal > b.value / b.goal) ? -1 : 1;
      }
    });
  }


}
