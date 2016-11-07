# ng2-kw-gauge

Flexible gauge graph made with SVG ang Angular2 that can be used as pie chart too.

## Options:
* rounded: boolean = true          | whether linecap should be rounded
* reverse: boolean = false         | segments are sorted by value. whether drawing order should be sorted
* animationSecs: number = 0.5      | animation of lines when changing values
* bgRadius: number = 100           | radius of background circle
* bgColor: string                  | color of background circle
* heading: string                  | title placed in  center (bottom)
* headingColor: string             | color of title placed in center
* label: string                    | value placed in center (top)
* labelColor: string               | color of value placed in center
* segments: GaugeSegment           | info to be displayed

GaugeSegment is a class you can use and it has the following properties:
* radius: number = 100             | outer radius of this segment (border is painted inside)
* goal: number = 100               | maximum value for given segment
* value: number                    | value to be represented
* color: string                    | color of the segments
* bgColor: string = 'transparent'  | background color of this segment
* borderWidth: number = 100        | width of the border. Gets painted inside radius



## Installing
ng2-kw-gauge is available via npm
`npm install ng2-kw-gauge`

Import GaugeModule in your app
import { GaugeModule, GaugeSegment } from 'ng2-kw-gauge/src'

Use `<ng2-kw-gauge></ng2-kw-gauge>`.
Set a width and height for the gauge and it will scale accordingly.