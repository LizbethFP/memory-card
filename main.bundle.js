webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".casino-green {\r\n  background-image: radial-gradient(circle, #42630e, #005f25, #1d3a0a, #3a4104, #000000);\r\n}\r\n\r\n.white-font {\r\n  color: #fff;\r\n}\r\n\r\n.letter-spacing {\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.deck-container {\r\n  /* position: relative; */\r\n}\r\n\r\n.no-paddings {\r\n  padding: 0;\r\n}\r\n\r\n.li-style {\r\n  list-style: none;\r\n}\r\n\r\n.cover {\r\n  /* background-color: black; */\r\n  /* position: absolute; */\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n  -webkit-transition: all 0.5s ease;\r\n  transition: all 0.5s ease;\r\n  max-width: 225px;\r\n}\r\n\r\n/* .cover:hover {\r\n  transform: rotateY(180deg);\r\n} */\r\n\r\n.back-card {\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  max-width: 225px;\r\n  /* position: absolute; */\r\n}\r\n\r\n.front-card {\r\n  /* position: absolute; */\r\n  /* backface-visibility: hidden;\r\n  transform: rotateY(180deg); */\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"casino-green p-1\">\n  <h1 class=\"text-center white-font letter-spacing font-weight-bold my-4\">\n    Welcome to {{ title }}!\n  </h1>\n\n  <gameinfo></gameinfo>\n\n  <!-- <deck></deck> -->\n\n  <div class=\"deck-container\">\n    <ul class=\"no-paddings d-flex flex-row flex-wrap justify-content-around\">\n      <li *ngFor=\"let card of cards | shuffle\" class=\"li-style cover m-4 p-1\">\n\n        <img (click)=\"toggleCards()\" *ngIf=\"hideCard\" src=\"https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-tangent-back-1_1024x1024.png?v=1474345861\"\n          alt=\"back-card\" class=\"back-card\">\n\n        <img (click)=\"toggleCardsBack()\" *ngIf=\"showCard\" src={{card}} alt={{card}} class=\"front-card\">\n\n      </li>\n    </ul>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.data = {};
        this.title = 'Cards Memory';
        this.showCard = false;
        this.hideCard = true;
        this.cards = ['http://deckofcardsapi.com/static/img/AS.png', 'http://deckofcardsapi.com/static/img/AH.png', 'http://deckofcardsapi.com/static/img/8H.png', 'https://deckofcardsapi.com/static/img/8S.png', 'https://deckofcardsapi.com/static/img/7C.png', 'https://deckofcardsapi.com/static/img/7D.png', 'https://deckofcardsapi.com/static/img/QD.png', 'https://deckofcardsapi.com/static/img/QS.png'];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.renderCards();
        this.toggleCards();
        this.toggleCardsBack();
    };
    AppComponent.prototype.renderCards = function () {
        var _this = this;
        this.appService.getCards().subscribe(function (data) {
            console.log('llamada', data);
            console.log(data.remaining);
            _this.data = data;
        });
    };
    AppComponent.prototype.toggleCards = function () {
        // this.showCard = true;
        // this.hideCard = false;
        this.showCard = !this.showCard;
        this.hideCard = !this.hideCard;
        console.log('toggleCards Works');
    };
    AppComponent.prototype.toggleCardsBack = function () {
        // this.showCard = true;
        // this.hideCard = false;
        this.showCard = !this.showCard;
        this.hideCard = !this.hideCard;
        console.log('toggleCardsBack Works');
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]
            ],
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gameinfo_gameinfo_component__ = __webpack_require__("./src/app/gameinfo/gameinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_pipes__ = __webpack_require__("./node_modules/ngx-pipes/ngx-pipes.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { DeckComponent } from './deck/deck.component';
// import { DeckModule } from './deck/deck.module';
// Importar HttpClientModule


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__gameinfo_gameinfo_component__["a" /* GameInfoComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                // DeckModule,
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_pipes__["a" /* NgArrayPipesModule */] // cargamos el módulo de shuffle en array
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.getCards = function () {
        var apiUrl = 'https://deckofcardsapi.com/api/deck/3tg42vyocnxj/shuffle/?cards=8C,8H,KD,KS,7C,7H,AD,AS';
        return this.http.get(apiUrl)
            .map(function (res) {
            return res;
        });
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/gameinfo/gameinfo.component.css":
/***/ (function(module, exports) {

module.exports = ".white-font {\r\n  color: #fff;\r\n}\r\n\r\n.letter-spacing {\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.info-box-shadow {\r\n  -webkit-box-shadow: inset 1px 0px 54px 9px rgba(0, 0, 0, 0.36);\r\n  box-shadow: inset 1px 0px 54px 9px rgba(0, 0, 0, 0.36);\r\n}\r\n\r\n.info-box-shadow p {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.border-radious {\r\n  border-radius: 1rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/gameinfo/gameinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"game-info-container\" class=\"d-flex flex-row flex-wrap justify-content-around mt-5 mb-3\">\r\n\r\n  <div class=\"info-box-shadow border-radious p-4\">\r\n    <p class=\"text-uppercase white-font letter-spacing\">{{turns}}:\r\n      <span class=\"turns\">7</span>\r\n    </p>\r\n  </div>\r\n  <div class=\"info-box-shadow border-radious p-4\">\r\n    <p class=\"white-font letter-spacing\">{{currency}}\r\n      <span class=\"currency\">300</span>\r\n    </p>\r\n  </div>\r\n  <div class=\"info-box-shadow border-radious p-4\">\r\n    <p class=\"text-uppercase white-font letter-spacing\">{{time}}:\r\n      <span class=\"time\">475</span>\r\n    </p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/gameinfo/gameinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameInfoComponent = /** @class */ (function () {
    function GameInfoComponent() {
        this.turns = 'turns';
        this.currency = '$';
        this.time = 'time';
    }
    GameInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'gameinfo',
            template: __webpack_require__("./src/app/gameinfo/gameinfo.component.html"),
            styles: [__webpack_require__("./src/app/gameinfo/gameinfo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GameInfoComponent);
    return GameInfoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map