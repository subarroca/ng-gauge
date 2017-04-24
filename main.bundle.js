webpackJsonp([1,4],{

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\nng-gauge {\n  margin: 16px;\n  width: 300px;\n  height: 300px;\n  display: inline-block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, ".kw-mid,\n.kw-front {\n  fill: transparent; }\n\n.kw-holder {\n  -webkit-transform: translate(100px, 100px) rotate(-90deg);\n          transform: translate(100px, 100px) rotate(-90deg); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

module.exports = "<ng-gauge\n  [bgRadius] = pieGraph.bgRadius\n  [bgColor] = pieGraph.bgColor\n  [rounded] = pieGraph.rounded\n  [reverse] = pieGraph.reverse\n  [animationSecs] = pieGraph.animationSecs\n  [segments] = pieGraph.segments>\n</ng-gauge>\n\n<ng-gauge\n  [bgRadius] = nautilusGraph.bgRadius\n  [bgColor] = nautilusGraph.bgColor\n  [rounded] = nautilusGraph.rounded\n  [reverse] = nautilusGraph.reverse\n  [animationSecs] = nautilusGraph.animationSecs\n  [segments] = nautilusGraph.segments>\n</ng-gauge>\n\n<ng-gauge\n  [bgRadius] = laneGraph.bgRadius\n  [bgColor] = laneGraph.bgColor\n  [rounded] = laneGraph.rounded\n  [reverse] = laneGraph.reverse\n  [animationSecs] = laneGraph.animationSecs\n  [segments] = laneGraph.segments>\n</ng-gauge>\n\n<ng-gauge\n  [bgRadius] = progressGraph.bgRadius\n  [bgColor] = progressGraph.bgColor\n  [rounded] = progressGraph.rounded\n  [reverse] = progressGraph.reverse\n  [animationSecs] = progressGraph.animationSecs\n  [labels] = progressGraph.labels\n  [segments] = progressGraph.segments>\n</ng-gauge>"

/***/ }),

/***/ 136:
/***/ (function(module, exports) {

module.exports = "<svg viewBox = \"0 0 200 200\">  \n  <g\n    class = kw-holder\n    [attr.transform] = \"isIE11 ? 'translate(100 100) rotate(-90)' : ''\">\n    <circle\n      class = kw-back\n      [attr.r] = \"bgRadius\"\n      [style.fill] = bgColor/>\n\n    <g\n      *ngFor = \"let segment of sortedSegments\">\n      <circle\n        class = kw-mid\n        [style.stroke] = segment.bgColor\n        [style.strokeWidth] = segment.borderWidth\n        [attr.r] = segment.computedRadius/>\n\n      <circle\n        class = kw-front\n\n        [style.transition] = \"'stroke-dasharray ' + animationSecs + 's'\"\n        [style.stroke] = segment.color\n        [style.strokeWidth] = segment.borderWidth\n        [style.strokeDasharray] = \"segmentsLoaded ? segment.strokeProgress : segment.strokeEmptyProgress\"\n        [style.strokeLinecap] = \"rounded ? 'round' : ''\"\n        [attr.r] = segment.computedRadius/>\n    </g>\n  </g>\n\n\n\n  <g\n    transform = \"translate(100, 100)\">\n    <text\n      class = kw-label\n      *ngFor = \"let label of labels\"\n      [attr.x] = label.x\n      [attr.y] = label.y\n      [style.fill] = label.color\n      [style.fontSize] = label.fontSize\n      text-anchor = middle>\n      {{label.text}}\n    </text>\n  </g>\n</svg>"

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(67);


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gauge_module__ = __webpack_require__(75);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__gauge_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_gauge_segment__ = __webpack_require__(77);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__shared_gauge_segment__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_gauge_label__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__shared_gauge_label__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 66;


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(78);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gauge__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/**
 * @category   Component
 * @package    com.kiwity.gauge.app
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ANGULAR

// EXTERNAL
// OWN

var AppComponent = (function () {
    function AppComponent() {
        this.colors = {
            indigo: '#14143e',
            pink: '#fd1c49',
            orange: '#ff6e00',
            yellow: '#f0c800',
            mint: '#00efab',
            cyan: '#05d1ff',
            purple: '#841386',
            white: '#fff'
        };
        this.nautilusGraph = {
            bgRadius: 100,
            bgColor: this.colors.indigo,
            rounded: true,
            reverse: true,
            animationSecs: 2,
            segments: [
                new __WEBPACK_IMPORTED_MODULE_1__gauge__["b" /* GaugeSegment */]({
                    value: 4,
                    color: this.colors.orange,
                    radius: 20,
                    borderWidth: 16
                }),
                new __WEBPACK_IMPORTED_MODULE_1__gauge__["b" /* GaugeSegment */]({
                    value: 8,
                    color: this.colors.purple,
                    radius: 36,
                    borderWidth: 16
                }),
                new __WEBPACK_IMPORTED_MODULE_1__gauge__["b" /* GaugeSegment */]({
                    value: 15,
                    color: this.colors.yellow,
                    radius: 52,
                    borderWidth: 16
                }),
                new __WEBPACK_IMPORTED_MODULE_1__gauge__["b" /* GaugeSegment */]({
                    value: 16,
                    color: this.colors.cyan,
                    radius: 68,
                    borderWidth: 16
                }),
                new __WEBPACK_IMPORTED_MODULE_1__gauge__["b" /* GaugeSegment */]({
                    value: 23,
                    color: this.colors.pink,
                    radius: 84,
                    borderWidth: 16
                }),
                new __WEBPACK_IMPORTED_MODULE_1__gauge__["b" /* GaugeSegment */]({
                    value: 42,
                    color: this.colors.mint,
                    radius: 100,
                    borderWidth: 16
                })
            ]
        };
        this.laneGraph = {
            bgRadius: 100,
            bgColor: this.colors.indigo,
            rounded: true,
            reverse: true,
            animationSecs: 5,
            segments: [
                new __WEBPACK_IMPORTED_MODULE_1__gauge__["b" /* GaugeSegment */]({
                    value: 4,
                    color: this.colors.mint,
                    bgColor: this.colors.mint + "22",
                    radius: 85,
                    borderWidth: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_1__gauge__["b" /* GaugeSegment */]({
                    value: 8,
                    color: this.colors.pink,
                    bgColor: this.colors.pink + "22",
                    radius: 70,
                    borderWidth: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_1__gauge__["b" /* GaugeSegment */]({
                    value: 15,
                    color: this.colors.cyan,
                    bgColor: this.colors.cyan + "22",
                    radius: 55,
                    borderWidth: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_1__gauge__["b" /* GaugeSegment */]({
                    value: 16,
                    color: this.colors.yellow,
                    bgColor: this.colors.yellow + "22",
                    radius: 40,
                    borderWidth: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_1__gauge__["b" /* GaugeSegment */]({
                    value: 23,
                    color: this.colors.purple,
                    bgColor: this.colors.purple + "22",
                    radius: 25,
                    borderWidth: 2
                }),
                new __WEBPACK_IMPORTED_MODULE_1__gauge__["b" /* GaugeSegment */]({
                    value: 42,
                    color: this.colors.orange,
                    bgColor: this.colors.orange + "22",
                    radius: 10,
                    borderWidth: 2
                })
            ]
        };
        this.pieGraph = {
            bgRadius: 100,
            bgColor: this.colors.indigo,
            rounded: false,
            reverse: false,
            animationSecs: 3,
            borderWidth: 100,
            segments: [
                new __WEBPACK_IMPORTED_MODULE_1__gauge__["b" /* GaugeSegment */]({
                    value: 4,
                    goal: 42,
                    color: this.colors.pink
                }),
                new __WEBPACK_IMPORTED_MODULE_1__gauge__["b" /* GaugeSegment */]({
                    value: 8,
                    goal: 42,
                    color: this.colors.orange
                }),
                new __WEBPACK_IMPORTED_MODULE_1__gauge__["b" /* GaugeSegment */]({
                    value: 15,
                    goal: 42,
                    color: this.colors.yellow
                }),
                new __WEBPACK_IMPORTED_MODULE_1__gauge__["b" /* GaugeSegment */]({
                    value: 16,
                    goal: 42,
                    color: this.colors.cyan
                }),
                new __WEBPACK_IMPORTED_MODULE_1__gauge__["b" /* GaugeSegment */]({
                    value: 23,
                    goal: 42,
                    color: this.colors.purple
                }),
                new __WEBPACK_IMPORTED_MODULE_1__gauge__["b" /* GaugeSegment */]({
                    value: 42,
                    goal: 42,
                    color: this.colors.mint
                })
            ]
        };
        this.progressGraph = {
            bgRadius: 60,
            bgColor: this.colors.indigo,
            rounded: false,
            reverse: false,
            animationSecs: 1,
            labels: [
                new __WEBPACK_IMPORTED_MODULE_1__gauge__["c" /* GaugeLabel */]({
                    color: this.colors.white,
                    text: 'Loaded',
                    x: 0,
                    y: 20,
                    fontSize: '1em'
                }),
                new __WEBPACK_IMPORTED_MODULE_1__gauge__["c" /* GaugeLabel */]({
                    color: this.colors.pink,
                    text: '81%',
                    x: 0,
                    y: 0,
                    fontSize: '2em'
                })
            ],
            segments: [
                new __WEBPACK_IMPORTED_MODULE_1__gauge__["b" /* GaugeSegment */]({
                    value: 81,
                    color: this.colors.pink,
                    borderWidth: 20
                })
            ]
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'ng-root',
        template: __webpack_require__(135),
        styles: [__webpack_require__(132)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gauge__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/**
 * @category   Module
 * @package    com.kiwity.gauge.app
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ANGULAR


// EXTERNAL
// OWN


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__gauge__["a" /* GaugeModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaugeComponent; });
/**
 * @category   Component
 * @package    com.kiwity.gauge.gauge
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ANGULAR

var GaugeComponent = (function () {
    function GaugeComponent() {
        this.bgRadius = 100;
        this.rounded = true;
        this.reverse = false;
        this.animationSecs = 0.5;
        this.segmentsLoaded = false;
        this.isIE11 = /Trident.*rv[ :]*11\./.test(navigator.userAgent);
    }
    Object.defineProperty(GaugeComponent.prototype, "segments", {
        set: function (segments) {
            var _this = this;
            this.segmentsLoaded = false;
            this.sortedSegments = this.sortSegments(segments);
            // wait a bit and start animation
            setTimeout(function () { return _this.segmentsLoaded = true; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    GaugeComponent.prototype.ngOnInit = function () {
    };
    GaugeComponent.prototype.sortSegments = function (segments) {
        var _this = this;
        return segments && segments.sort(function (a, b) {
            if (_this.reverse) {
                return (a.value / a.goal > b.value / b.goal) ? 1 : -1;
            }
            else {
                return (a.value / a.goal > b.value / b.goal) ? -1 : 1;
            }
        });
    };
    return GaugeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], GaugeComponent.prototype, "bgRadius", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], GaugeComponent.prototype, "bgColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], GaugeComponent.prototype, "rounded", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], GaugeComponent.prototype, "reverse", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], GaugeComponent.prototype, "animationSecs", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Array)
], GaugeComponent.prototype, "labels", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], GaugeComponent.prototype, "segments", null);
GaugeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'ng-gauge',
        template: __webpack_require__(136),
        styles: [__webpack_require__(133)]
    }),
    __metadata("design:paramtypes", [])
], GaugeComponent);

//# sourceMappingURL=gauge.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gauge_component__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaugeModule; });
/**
 * @category   Module
 * @package    com.kiwity.gauge.gauge
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ANGULAR


// EXTERNAL
// OWN

var GaugeModule = (function () {
    function GaugeModule() {
    }
    return GaugeModule;
}());
GaugeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__gauge_component__["a" /* GaugeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */]
        ],
        providers: [],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_2__gauge_component__["a" /* GaugeComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__gauge_component__["a" /* GaugeComponent */]
        ]
    })
], GaugeModule);

//# sourceMappingURL=gauge.module.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaugeLabel; });
/**
 * @category   Model
 * @package    com.kiwity.gauge.gauge
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/
// ANGULAR
// EXTERNAL
// OWN
var GaugeLabel = (function () {
    function GaugeLabel(options) {
        if (options === void 0) { options = {}; }
        this.color = options.color;
        this.text = options.text;
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.fontSize = options.fontSize || '1em';
    }
    return GaugeLabel;
}());

//# sourceMappingURL=gauge-label.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaugeSegment; });
/**
 * @category   Model
 * @package    com.kiwity.gauge.gauge
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/
// ANGULAR
// EXTERNAL
// OWN
var GaugeSegment = (function () {
    function GaugeSegment(options) {
        if (options === void 0) { options = {}; }
        this.radius = options.radius || 100;
        this.goal = options.goal || 100;
        this.value = options.value;
        this.color = options.color;
        this.bgColor = options.bgColor || 'transparent';
        this.borderWidth = options.borderWidth || 100;
    }
    Object.defineProperty(GaugeSegment.prototype, "computedRadius", {
        get: function () {
            return this.radius - this.borderWidth / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeSegment.prototype, "strokeProgress", {
        get: function () {
            return 2 * Math.PI * this.computedRadius * this.value / this.goal + " " + 2 * Math.PI * this.computedRadius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeSegment.prototype, "strokeEmptyProgress", {
        get: function () {
            return "0 " + 2 * Math.PI * this.computedRadius;
        },
        enumerable: true,
        configurable: true
    });
    return GaugeSegment;
}());

//# sourceMappingURL=gauge-segment.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[160]);
//# sourceMappingURL=main.bundle.js.map