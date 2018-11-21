(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_home_dynamic_home_dynamic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/home-dynamic/home-dynamic.component */ "./src/app/views/home-dynamic/home-dynamic.component.ts");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _views_request_details_request_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/request-details/request-details.component */ "./src/app/views/request-details/request-details.component.ts");
/* harmony import */ var _views_new_request_new_request_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/new-request/new-request.component */ "./src/app/views/new-request/new-request.component.ts");
/* harmony import */ var _views_new_request_dynamic_new_request_dynamic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/new-request-dynamic/new-request-dynamic.component */ "./src/app/views/new-request-dynamic/new-request-dynamic.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'login',
        component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'home',
        component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'request-details',
        component: _views_request_details_request_details_component__WEBPACK_IMPORTED_MODULE_5__["RequestDetailsComponent"]
    },
    {
        path: 'home-dynamic',
        component: _views_home_dynamic_home_dynamic_component__WEBPACK_IMPORTED_MODULE_3__["HomeDynamicComponent"]
    },
    {
        path: 'new-request',
        component: _views_new_request_new_request_component__WEBPACK_IMPORTED_MODULE_6__["NewRequestComponent"]
    },
    {
        path: 'new-request-dynamic',
        component: _views_new_request_dynamic_new_request_dynamic_component__WEBPACK_IMPORTED_MODULE_7__["NewRequestDynamicComponent"]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-header {\n  position: fixed;\n  width: 100%;\n  z-index: 100; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'trv-venue-hotel-client';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_home_dynamic_home_dynamic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/home-dynamic/home-dynamic.component */ "./src/app/views/home-dynamic/home-dynamic.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/filter/filter.component */ "./src/app/components/filter/filter.component.ts");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _components_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/request-list/request-list.component */ "./src/app/components/request-list/request-list.component.ts");
/* harmony import */ var _components_request_list_dynamic_request_list_dynamic_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/request-list-dynamic/request-list-dynamic.component */ "./src/app/components/request-list-dynamic/request-list-dynamic.component.ts");
/* harmony import */ var _views_request_details_request_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/request-details/request-details.component */ "./src/app/views/request-details/request-details.component.ts");
/* harmony import */ var _views_new_request_new_request_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/new-request/new-request.component */ "./src/app/views/new-request/new-request.component.ts");
/* harmony import */ var _components_request_details_status_request_details_status_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/request-details-status/request-details-status.component */ "./src/app/components/request-details-status/request-details-status.component.ts");
/* harmony import */ var _views_new_request_dynamic_new_request_dynamic_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/new-request-dynamic/new-request-dynamic.component */ "./src/app/views/new-request-dynamic/new-request-dynamic.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_userdata_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/userdata.service */ "./src/app/services/userdata.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _component_request_end_request_end_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/request-end/request-end.component */ "./src/app/component/request-end/request-end.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















//userdata service:

//test service::


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _views_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _views_home_dynamic_home_dynamic_component__WEBPACK_IMPORTED_MODULE_7__["HomeDynamicComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__["FilterComponent"],
                _views_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_11__["RequestListComponent"],
                _components_request_list_dynamic_request_list_dynamic_component__WEBPACK_IMPORTED_MODULE_12__["RequestListDynamicComponent"],
                _views_request_details_request_details_component__WEBPACK_IMPORTED_MODULE_13__["RequestDetailsComponent"],
                _views_new_request_new_request_component__WEBPACK_IMPORTED_MODULE_14__["NewRequestComponent"],
                _components_request_details_status_request_details_status_component__WEBPACK_IMPORTED_MODULE_15__["RequestDetailsStatusComponent"],
                _component_request_end_request_end_component__WEBPACK_IMPORTED_MODULE_23__["RequestEndComponent"],
                _views_new_request_dynamic_new_request_dynamic_component__WEBPACK_IMPORTED_MODULE_16__["NewRequestDynamicComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].firebase, 'smartcountry-dev'),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__["AngularFireAuthModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__["AngularFireDatabaseModule"]
            ],
            providers: [_services_userdata_service__WEBPACK_IMPORTED_MODULE_21__["UserdataService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/request-end/request-end.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/request-end/request-end.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  request-end works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/request-end/request-end.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/component/request-end/request-end.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/request-end/request-end.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/request-end/request-end.component.ts ***!
  \****************************************************************/
/*! exports provided: RequestEndComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestEndComponent", function() { return RequestEndComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RequestEndComponent = /** @class */ (function () {
    function RequestEndComponent() {
    }
    RequestEndComponent.prototype.ngOnInit = function () {
    };
    RequestEndComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-end',
            template: __webpack_require__(/*! ./request-end.component.html */ "./src/app/component/request-end/request-end.component.html"),
            styles: [__webpack_require__(/*! ./request-end.component.scss */ "./src/app/component/request-end/request-end.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RequestEndComponent);
    return RequestEndComponent;
}());



/***/ }),

/***/ "./src/app/components/filter/filter.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/filter/filter.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<details id=\"filters\" [attr.open]=\"screenWidth>768 ? '' : null\">\n  <summary><h3>Services</h3></summary>\n  <p id=\"new-request\" routerLink=\"/new-request-dynamic\">+ Neuer Antrag</p>\n  <p id=\"open-requests\" (click)=\"filterByStatus('open')\">&#x25B7; Offene Anträge</p>\n  <p id=\"closed-requests\" (click)=\"filterByStatus('done')\">&#x25B7; Geschlossene Anträge</p>\n  <p id=\"all-requests\" (click)=\"filterByStatus('all')\">&#x25B7; Alle Anträge</p>\n</details>\n"

/***/ }),

/***/ "./src/app/components/filter/filter.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/filter/filter.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#filters {\n  margin: 12px 5%;\n  padding: 0;\n  border: 1px solid #00aebf; }\n  #filters > summary {\n    cursor: pointer;\n    padding: 8px 12px; }\n  #filters > summary > h3 {\n      display: inline; }\n  #filters > div > h3 {\n    margin-bottom: 10px; }\n  #filters > p {\n    cursor: pointer;\n    margin: 0;\n    padding: 12px 12px; }\n  #filters > p:hover {\n    background: #EDEDED; }\n  #filter-distance > div {\n  display: inline-block;\n  width: 46%; }\n  #filter-distance > div:last-child {\n  margin-left: 8%; }\n  #filters.always-open {\n  position: fixed;\n  right: 0;\n  height: calc(100% - 80px);\n  overflow: auto;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  margin: 0;\n  width: 224px; }\n  #filters.always-open > summary {\n    display: block;\n    cursor: default; }\n"

/***/ }),

/***/ "./src/app/components/filter/filter.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/filter/filter.component.ts ***!
  \*******************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/filter.service */ "./src/app/services/filter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterComponent = /** @class */ (function () {
    function FilterComponent(filterService) {
        this.filterService = filterService;
        this.screenWidth = 0;
        this.screenWidth = window.innerWidth;
    }
    FilterComponent.prototype.ngOnInit = function () {
        this.toggleDetails();
    };
    FilterComponent.prototype.onResize = function (event) {
        this.screenWidth = event.target.innerWidth;
        this.toggleDetails();
    };
    FilterComponent.prototype.toggleDetails = function () {
        var filterNode = document.getElementById('filters');
        if (this.screenWidth > 768) {
            filterNode.classList.add('always-open');
        }
        else {
            filterNode.classList.remove('always-open');
        }
    };
    FilterComponent.prototype.filterByStatus = function (status) {
        this.filterService.applyFilter(status);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FilterComponent.prototype, "onResize", null);
    FilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/components/filter/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.scss */ "./src/app/components/filter/filter.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_filter_service__WEBPACK_IMPORTED_MODULE_1__["FilterService"]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n  <div id=\"btn_back\" onclick=\"window.history.back()\" *ngIf=\"isLoggedIn\"></div>\n  <h1 id=\"header-caption\" routerLink=\"home-dynamic\">IDTool</h1>\n  <div id=\"header-login-indicator\" *ngIf=\"isLoggedIn\" (click)=\"performLogout()\" >\n    <span>John Doe</span>\n    <span>&#x25BC;</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header {\n  background-color: #00a8e6;\n  width: 100%;\n  height: 80px;\n  display: flex;\n  align-items: center; }\n\n#header-caption {\n  text-align: center;\n  color: white;\n  padding: 0 8px;\n  flex-grow: 1;\n  cursor: pointer; }\n\n#header-login-indicator {\n  height: 50px;\n  width: 200px;\n  margin: 15px;\n  vertical-align: middle;\n  background-color: #00aebf;\n  border: 1px solid white;\n  color: white;\n  display: flex;\n  align-items: center;\n  cursor: pointer; }\n\n#header-login-indicator > span:first-child {\n    flex-grow: 1;\n    text-align: center; }\n\n#header-login-indicator > span:last-child {\n    padding: 16px; }\n\n#btn_back {\n  width: 100px;\n  height: 100px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z%22%2F%3E%3Cpath fill%3D%22none%22 d%3D%22M0 0h24v24H0z%22%2F%3E%3C%2Fsvg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  -webkit-transform: scale(2);\n          transform: scale(2);\n  background-color: transparent;\n  -webkit-filter: invert(1);\n          filter: invert(1); }\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.isLoggedIn = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getAuthState().subscribe(function (user) {
            _this.user = user;
            if (_this.user) {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        });
    };
    HeaderComponent.prototype.performLogout = function () {
        this.auth.logout().then(this.afterLogoutHook.bind(this), function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
    };
    HeaderComponent.prototype.afterLogoutHook = function () {
        this.isLoggedIn = false;
        this.router.navigateByUrl('/login');
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/request-details-status/request-details-status.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/request-details-status/request-details-status.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"request-details-container\">\n  <h1 id=\"request-details-caption\">{{data.type}}</h1>\n\n  <div id=\"request-details-person\">\n    <div>\n      <h3>Antragsteller:</h3>\n      <p>Name: John Doe</p>\n      <p>Geburtsdatum: 20.11.1992</p>\n      <p>Geburtsort: Berlin</p>\n    </div>\n    <div id=\"person-image\">\n      <img src=\"../../../assets/images/profile-pic.jpg\">\n    </div>\n  </div>\n\n  <div id=\"request-details-status\" *ngIf=\"data.contact!=undefined\">\n    <h3>Auftragsdetails:</h3>\n    <p>Bearbeitungsstatus:{{data.state}}</p>\n    <p>Bearbeitungsnummer: {{data.request_id}}</p>\n    <p>Bürgeramt: {{data.office}}</p>\n    <p>Kontaktperson: {{data.contact.name}}</p>\n    <p>Telefonnummer: {{data.contact.telephone}}</p>\n    <p>Zusätzliche Hinweise: {{data.additional_info}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/request-details-status/request-details-status.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/request-details-status/request-details-status.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#request-details-container {\n  margin-top: 80px;\n  position: absolute;\n  width: 80%;\n  margin-left: 10%; }\n  #request-details-container > div {\n    padding: 12px 28px;\n    margin: 18px 0;\n    background: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n  #request-details-person {\n  display: flex;\n  flex-direction: column; }\n  #request-details-person > div:first-child {\n    flex-grow: 1; }\n  #person-image {\n  height: 200px; }\n  #person-image > img {\n    height: 100%;\n    border: 1px solid gray; }\n  #request-details-caption {\n  overflow: auto; }\n  @media (min-width: 768px) {\n  #request-details-person {\n    flex-direction: row; } }\n"

/***/ }),

/***/ "./src/app/components/request-details-status/request-details-status.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/request-details-status/request-details-status.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RequestDetailsStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDetailsStatusComponent", function() { return RequestDetailsStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestDetailsStatusComponent = /** @class */ (function () {
    function RequestDetailsStatusComponent(changeDetectorRef, router, auth, db) {
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        this.auth = auth;
        this.db = db;
        this.firstUpdate = true;
    }
    RequestDetailsStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data = {};
        this.auth.getAuthState().subscribe(function (user) {
            _this.user = user;
            if (_this.user) {
                _this.loadData();
            }
        });
    };
    RequestDetailsStatusComponent.prototype.loadData = function () {
        var urlParams = new URLSearchParams(window.location.search);
        var req_id = urlParams.get('request-id');
        var path = 'users/' + this.user.uid + '/requests/' + req_id;
        this.db.object(path).valueChanges().subscribe(this.dataUpdateHandler.bind(this));
    };
    RequestDetailsStatusComponent.prototype.sendNotification = function (text) {
        if (text === "") {
            return;
        }
        var note = new Notification(text);
    };
    RequestDetailsStatusComponent.prototype.dataUpdateHandler = function (data) {
        if (!this.firstUpdate) {
            var updateString = "";
            if (data.state != this.data.state) {
                updateString += "Neuer Status fuer " + data.type + " (ID: " + data.request_id + "): " + data.state + " \n";
            }
            this.sendNotification(updateString);
        }
        else {
            this.firstUpdate = false;
        }
        this.data = data;
        this.updateComponent_now();
    };
    RequestDetailsStatusComponent.prototype.updateComponent_now = function () {
        //HACK: call the update now!
        this.changeDetectorRef.detectChanges();
    };
    RequestDetailsStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-details-status',
            template: __webpack_require__(/*! ./request-details-status.component.html */ "./src/app/components/request-details-status/request-details-status.component.html"),
            styles: [__webpack_require__(/*! ./request-details-status.component.scss */ "./src/app/components/request-details-status/request-details-status.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], RequestDetailsStatusComponent);
    return RequestDetailsStatusComponent;
}());



/***/ }),

/***/ "./src/app/components/request-list-dynamic/request-list-dynamic.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/request-list-dynamic/request-list-dynamic.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"request-list-container\">\n  <ul>\n    <li *ngFor=\"let request of data\" style=\"list-style-type: none\">\n        <div class=\"request-card\">\n\n          <div class=\"request-card-image\">\n            <!--<img src=\"{{hotel.images[0]}}\" width=\"100%\"> -->\n          </div>\n\n          <div class=\"request-card-text\">\n            <h3>{{request.type}}</h3>\n            <p>Datum der Antragstellung: {{request.date}}</p>\n            <p>Status: {{request.state}}</p>\n            <p>Bearbeitungs-ID: {{request.request_id}}</p>\n          </div>\n\n        <a class=\"request-card-btn btn-primary\" (click)=\"show_details(request.request_id)\">Details</a>\n        </div>\n      </li>\n  </ul>\n"

/***/ }),

/***/ "./src/app/components/request-list-dynamic/request-list-dynamic.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/request-list-dynamic/request-list-dynamic.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".request-card {\n  margin: 12px 5%;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  background: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 6px; }\n\n.request-card-image {\n  height: 160px;\n  width: 100%;\n  display: contents;\n  background: lightgrey; }\n\n.request-card-btn {\n  font-size: large;\n  text-align: center;\n  margin-top: 16px;\n  text-decoration: none; }\n\n@media (min-width: 768px) {\n  .request-card {\n    height: 300px;\n    flex-direction: row; }\n  .request-card-image {\n    height: 300px;\n    width: 400px;\n    display: block; }\n  .request-card-text {\n    flex-grow: 1;\n    margin-left: 16px;\n    overflow-y: auto; }\n  .request-card-btn {\n    align-self: flex-end;\n    margin: 8px;\n    padding: 12px 18px; } }\n\n@media (min-width: 1200px) {\n  .request-card {\n    margin-left: 15%;\n    margin-right: 15%; } }\n"

/***/ }),

/***/ "./src/app/components/request-list-dynamic/request-list-dynamic.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/request-list-dynamic/request-list-dynamic.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RequestListDynamicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestListDynamicComponent", function() { return RequestListDynamicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/filter.service */ "./src/app/services/filter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestListDynamicComponent = /** @class */ (function () {
    function RequestListDynamicComponent(httpClient, filterService, router, changeDetectorRef) {
        this.httpClient = httpClient;
        this.filterService = filterService;
        this.router = router;
        this.changeDetectorRef = changeDetectorRef;
    }
    RequestListDynamicComponent.prototype.ngOnInit = function () {
        //this.data = [{type:"abc",data:"yesterday",status:"in bearbeitung",id:"100"}]
    };
    RequestListDynamicComponent.prototype.ngOnChanges = function (changes) {
    };
    RequestListDynamicComponent.prototype.show_details = function (id) {
        //="request-details" [queryParams]="{request-id: request.request_id}"
        this.router.navigate(['/request-details'], { queryParams: { "request-id": id } });
    };
    RequestListDynamicComponent.prototype.updateComponent_now = function () {
        //HACK: call the update now!
        this.changeDetectorRef.detectChanges();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RequestListDynamicComponent.prototype, "data", void 0);
    RequestListDynamicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-list-dynamic',
            template: __webpack_require__(/*! ./request-list-dynamic.component.html */ "./src/app/components/request-list-dynamic/request-list-dynamic.component.html"),
            styles: [__webpack_require__(/*! ./request-list-dynamic.component.scss */ "./src/app/components/request-list-dynamic/request-list-dynamic.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_filter_service__WEBPACK_IMPORTED_MODULE_2__["FilterService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], RequestListDynamicComponent);
    return RequestListDynamicComponent;
}());



/***/ }),

/***/ "./src/app/components/request-list/request-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/request-list/request-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"request-list-container\">\n  <div class=\"request-card\" *ngIf=\"!filterService.isFilteredOut('In Bearbeitung')\"> \n    <div class=\"request-card-image\">\n      <!--<img src=\"{{hotel.images[0]}}\" width=\"100%\">-->\n    </div>\n    <div class=\"request-card-text\">\n      <h3>Ausweisbeantragung</h3>\n      <p>Datum der Antragstellung: 18.10.18</p>\n      <p>Status: In Bearbeitung</p>\n      <p>Bearbeitungs-ID: X5HJ85JKT</p>\n    </div>\n    <a class=\"request-card-btn btn-primary\" routerLink=\"/request-details\">Details</a>\n  </div>\n\n  <div class=\"request-card\" *ngIf=\"!filterService.isFilteredOut('In Bearbeitung')\">\n    <div class=\"request-card-image\">\n      <!--<img src=\"{{hotel.images[0]}}\" width=\"100%\">-->\n    </div>\n    <div class=\"request-card-text\">\n      <h3>Wohnungsummeldung</h3>\n      <p>Datum der Antragstellung: 09.11.18</p>\n      <p>Status: In Bearbeitung</p>\n      <p>Bearbeitungs-ID: X93JSB57M</p>\n    </div>\n    <a class=\"request-card-btn btn-primary\" routerLink=\"/request-details\">Details</a>\n  </div>\n\n  <div class=\"request-card\" *ngIf=\"!filterService.isFilteredOut('Abgeschlossen')\">\n    <div class=\"request-card-image\">\n      <!--<img src=\"{{hotel.images[0]}}\" width=\"100%\">-->\n    </div>\n    <div class=\"request-card-text\">\n      <h3>Antrag neuer Reisepass</h3>\n      <p>Datum der Antragstellung: 22.09.18</p>\n      <p>Status: Abgeschlossen</p>\n      <p>Bearbeitungs-ID: X74FJZF42I</p>\n    </div>\n    <a class=\"request-card-btn btn-primary\" routerLink=\"/request-details\">Details</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/request-list/request-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/request-list/request-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".request-card {\n  margin: 12px 5%;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  background: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 6px; }\n\n.request-card-image {\n  height: 160px;\n  width: 100%;\n  display: contents;\n  background: lightgrey; }\n\n.request-card-btn {\n  font-size: large;\n  text-align: center;\n  margin-top: 16px;\n  text-decoration: none; }\n\n@media (min-width: 768px) {\n  .request-card {\n    height: 300px;\n    flex-direction: row; }\n  .request-card-image {\n    height: 300px;\n    width: 400px;\n    display: block; }\n  .request-card-text {\n    flex-grow: 1;\n    margin-left: 16px;\n    overflow-y: auto; }\n  .request-card-btn {\n    align-self: flex-end;\n    margin: 8px;\n    padding: 12px 18px; } }\n\n@media (min-width: 1200px) {\n  .request-card {\n    margin-left: 15%;\n    margin-right: 15%; } }\n"

/***/ }),

/***/ "./src/app/components/request-list/request-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/request-list/request-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: RequestListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestListComponent", function() { return RequestListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/filter.service */ "./src/app/services/filter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestListComponent = /** @class */ (function () {
    function RequestListComponent(httpClient, filterService) {
        this.httpClient = httpClient;
        this.filterService = filterService;
    }
    RequestListComponent.prototype.ngOnInit = function () {
    };
    RequestListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-list',
            template: __webpack_require__(/*! ./request-list.component.html */ "./src/app/components/request-list/request-list.component.html"),
            styles: [__webpack_require__(/*! ./request-list.component.scss */ "./src/app/components/request-list/request-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_filter_service__WEBPACK_IMPORTED_MODULE_2__["FilterService"]])
    ], RequestListComponent);
    return RequestListComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        this.currentUser = null;
        this.authState = this.afAuth.authState;
        this.authState.subscribe(function (user) {
            if (user) {
                _this.currentUser = user;
            }
            else {
                _this.currentUser = null;
            }
        });
    }
    AuthService.prototype.getAuthState = function () {
        return this.authState;
    };
    AuthService.prototype.loginWithEmail = function () {
        return this.afAuth.auth.signInWithEmailAndPassword("john.doe@email.com", "password");
    };
    AuthService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/filter.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/filter.service.ts ***!
  \********************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterService = /** @class */ (function () {
    function FilterService() {
        this.statusInProgressEquivalents = [
            'In Bearbeitung', 'in Bearbeitung',
            'Wird bearbeitet', 'wird bearbeitet',
            'Offen', 'offen',
            'Ausstehend', 'ausstehend',
            'In Progress', 'in progress'
        ];
        this.statusDoneEquivalents = [
            'Abgeschlossen', 'abgeschlossen',
            'Geschlossen', 'geschlossen',
            'Erledigt', 'erledigt',
            'Bearbeitet', 'bearbeitet',
            'Fertiggestellt', 'fertiggestellt'
        ];
        this.currentStatusFilter = 'all'; // all, open, done
    }
    FilterService.prototype.applyFilter = function (statusFilter) {
        this.currentStatusFilter = statusFilter;
    };
    FilterService.prototype.getCurrentStatusFilter = function () {
        return this.currentStatusFilter;
    };
    FilterService.prototype.isFilteredOut = function (status) {
        if (this.currentStatusFilter === 'all') {
            return false;
        }
        else if ((this.currentStatusFilter === 'open') &&
            (this.statusInProgressEquivalents.includes(status))) {
            return false;
        }
        else {
            if ((this.currentStatusFilter === 'done') &&
                (this.statusDoneEquivalents.includes(status))) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    FilterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FilterService);
    return FilterService;
}());



/***/ }),

/***/ "./src/app/services/userdata.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/userdata.service.ts ***!
  \**********************************************/
/*! exports provided: UserdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdataService", function() { return UserdataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserdataService = /** @class */ (function () {
    function UserdataService() {
        this.isUserAutheticated = false;
        this.userAuthChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    UserdataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserdataService);
    return UserdataService;
}());



/***/ }),

/***/ "./src/app/views/home-dynamic/home-dynamic.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/home-dynamic/home-dynamic.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"requests\">\n\n  <app-filter></app-filter>\n\n  <app-request-list-dynamic [data]=\"requestData\"> </app-request-list-dynamic>\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/home-dynamic/home-dynamic.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/home-dynamic/home-dynamic.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#requests {\n  margin-top: 80px;\n  position: absolute;\n  width: 100%;\n  display: flex;\n  flex-direction: column; }\n  #requests > app-request-list {\n    flex-grow: 1; }\n  @media (min-width: 768px) {\n  #requests {\n    flex-direction: row; }\n    #requests > app-request-list {\n      width: calc(100% - 226px);\n      position: absolute; }\n    #requests > app-filter {\n      order: 2; } }\n"

/***/ }),

/***/ "./src/app/views/home-dynamic/home-dynamic.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/home-dynamic/home-dynamic.component.ts ***!
  \**************************************************************/
/*! exports provided: HomeDynamicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeDynamicComponent", function() { return HomeDynamicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeDynamicComponent = /** @class */ (function () {
    function HomeDynamicComponent(changeDetectorRef, router, auth, db) {
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        this.auth = auth;
        this.db = db;
    }
    HomeDynamicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requestData = [{ type: "Bitte warten", status: "Daten werden geladen..." }];
        //register a firebase auth listener -> this is used to get data
        //this.initUserRequests();
        this.auth.getAuthState().subscribe(function (user) {
            _this.user = user;
            if (_this.user) {
                _this.initUserRequests();
            }
        });
        /*
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            localStorage.setItem('myPage.expectSignIn', '1')
            this.initUserRequests();
          } else {
            localStorage.removeItem('myPage.expectSignIn')
            this.requestData = [{type:"Error :/",date:"-",status:"Bitte melden sie sich an",id:""}]
            this.router.navigateByUrl('/login')
          }
        })
        */
    };
    HomeDynamicComponent.prototype.initUserRequests = function () {
        var thisComponent = this;
        thisComponent.requestData = [{ type: "Bitte warten.", date: "-", status: "Daten werden geladen", id: "" }];
        var uid = this.user.uid;
        //var ref = this.db.database().ref().child('users').child('uid')
        this.db.list('users/' + uid + '/requests').valueChanges().subscribe(this.requestDataUpdateHandler.bind(this));
    };
    HomeDynamicComponent.prototype.sendNotification = function (text) {
        if (text === "") {
            return;
        }
        var note = new Notification(text);
    };
    HomeDynamicComponent.prototype.requestDataUpdateHandler = function (data) {
        //compare this data to our cached data -> notify!
        var updateString = "";
        if (data.length > this.requestData.length) {
            console.log('new requests loaded successfully.');
            updateString += "Neuer Antrag wurde erfolgreich erstellt!";
        }
        else {
            //This is really bad hahaha -> just need to match keys. Should be okay for a demo though.
            for (var i = 0; i < data.length; i++) {
                for (var ii = 0; ii < this.requestData.length; ii++) {
                    //order !
                    if (data[i].request_id == this.requestData[ii].request_id) {
                        console.log();
                        if (data[i].state != this.requestData[ii].state) {
                            updateString += "Neuer Status fuer " + data[i].type + " (ID: " + data[i].request_id + "): " + data[i].state + " \n";
                        }
                        break;
                    }
                }
            }
            console.log(updateString);
            this.sendNotification(updateString);
        }
        this.requestData = data;
        this.updateComponent_now();
    };
    HomeDynamicComponent.prototype.updateComponent_now = function () {
        //HACK: call the update now!
        this.changeDetectorRef.detectChanges();
    };
    HomeDynamicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home-dynamic.component.html */ "./src/app/views/home-dynamic/home-dynamic.component.html"),
            styles: [__webpack_require__(/*! ./home-dynamic.component.scss */ "./src/app/views/home-dynamic/home-dynamic.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], HomeDynamicComponent);
    return HomeDynamicComponent;
}());



/***/ }),

/***/ "./src/app/views/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"requests\">\n\n  <app-filter></app-filter>\n\n  <app-request-list></app-request-list>\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#requests {\n  margin-top: 80px;\n  position: absolute;\n  width: 100%;\n  display: flex;\n  flex-direction: column; }\n  #requests > app-request-list {\n    flex-grow: 1; }\n  @media (min-width: 768px) {\n  #requests {\n    flex-direction: row; }\n    #requests > app-request-list {\n      width: calc(100% - 226px);\n      position: absolute; }\n    #requests > app-filter {\n      order: 2; } }\n"

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/views/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/views/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"login-container\">\n  <div id=\"login-id\" (click)=\"login()\">\n    <div id=\"login-id-image\"><div></div></div>\n    <div id=\"login-id-caption\">\n      <div id=\"loading-ring\"></div>\n      <span>Ausweis scannen</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/views/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login-container {\n  margin-top: 80px;\n  position: absolute;\n  width: 98%;\n  height: calc(100% - 80px);\n  left: 1%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n#login-id {\n  height: 260px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 50px;\n  border: 1px solid grey;\n  border-radius: 6px;\n  max-width: 800px;\n  width: 80%;\n  cursor: pointer; }\n\n#login-id-image {\n  height: 100%;\n  width: 100%;\n  background: url(\"data:image/svg+xml,%3Csvg aria-hidden%3D%22true%22 data-prefix%3D%22fas%22 data-icon%3D%22id-card%22 class%3D%22svg-inline--fa fa-id-card fa-w-18%22 role%3D%22img%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 576 512%22%3E%3Cpath fill%3D%22currentColor%22 d%3D%22M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0v304zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E\");\n  background-repeat: no-repeat;\n  background-position: center; }\n\n#login-id-caption {\n  width: 50%;\n  text-align: center;\n  font-size: xx-large;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n@media (min-width: 768px) {\n  #login-id {\n    flex-direction: row; }\n  #login-id-image {\n    width: 50%; }\n  #login-container {\n    margin-top: 100px;\n    height: 78%;\n    width: 70%;\n    left: 15%; } }\n\n#loading-ring {\n  width: 64px;\n  height: 64px;\n  top: calc(50% - 32px);\n  left: calc(50% - 32px);\n  display: none; }\n\n#loading-ring:after {\n  content: \" \";\n  display: block;\n  width: 46px;\n  height: 46px;\n  margin: 1px;\n  border-radius: 50%;\n  border: 5px solid #009;\n  border-color: #009 transparent #009 transparent;\n  -webkit-animation: lds-dual-ring 1.2s linear infinite;\n          animation: lds-dual-ring 1.2s linear infinite; }\n\n@-webkit-keyframes lds-dual-ring {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes lds-dual-ring {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n"

/***/ }),

/***/ "./src/app/views/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    //
    function LoginComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.user = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getAuthState().subscribe(function (user) { return _this.user = user; });
    };
    LoginComponent.prototype.login = function () {
        document.getElementById('loading-ring').style.display = 'inline-block';
        setTimeout(this.performLogin.bind(this), 100);
    };
    LoginComponent.prototype.performLogin = function () {
        var _this = this;
        this.auth.loginWithEmail().then(function () {
            Notification.requestPermission().then(function (result) {
            });
            _this.router.navigateByUrl('/home-dynamic');
        }, function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/views/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/new-request-dynamic/new-request-dynamic.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/views/new-request-dynamic/new-request-dynamic.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"new-request-container\">\n  <h1>Neuen Antrag erstellen</h1>\n\n  <p>Kategorie:</p>\n  <select id=\"select-category\" title=\"\" [(ngModel)]=\"selectedCategory\">\n    <option *ngFor=\"let request of possibleRequests;let index=index\" value=\"{{index}}\">{{request.type}}</option>\n  </select>\n\n  <div class=\"request-card\">\n    <h2>{{possibleRequests[selectedCategory].longname}}</h2>\n\n    <div *ngFor=\"let question of questionData;let index = index;\">\n      <div *ngIf=\"possibleRequests[selectedCategory].isQuestionActive[index]\">\n        <p>{{question.longname}}</p>\n        <input [(ngModel)]=\"dataModel[index]\" type=\"{{question.type}}\" class=\"form-control\" placeholder=\"---\">\n      </div>\n    </div>\n    <a class=\"request-card-btn btn-primary\" (click)=\"submitButtonListener()\">Antrag stellen</a>\n  </div>\n\n</div>\n\n<!-- <div id=\"new-request-container\">\n\n\n  <select id=\"select-category\" title=\"\" [(ngModel)]=\"selectedCategory\">\n    <option *ngFor=\"request in possibleRequests\" value=\"{{request.type}}\">{{request.type}}</option>\n  </select>\n\n  <div class=\"request-card\" *ngIf=\"isSelected('Personalausweis')\">\n    <div class=\"request-card-text\">\n      <h2>Personalausweisbeantragung</h2>\n      <p>Bitte überprüfen Sie Ihre Angaben:</p>\n      <form onsubmit=\"alert('submit!');return false\">\n        Name: <input type=\"text\" name=\"fullname\" value=\"John Doe\">\n        Geburtsdatum: <input type=\"date\" name=\"birthdate\">\n        Geburtsort: <input type=\"text\" name=\"birthplace\" value=\"Berlin\">\n        Wohnort: <input type=\"text\" name=\"address\" value=\"Berlin\">\n      </form>\n    </div>\n\n  </div>\n\n  <div class=\"request-card\" *ngIf=\"isSelected('Reisepass')\">\n    <div class=\"request-card-text\">\n      <h2>Reisepass-Beantragung</h2>\n      <p>Bitte überprüfen Sie Ihre Angaben:</p>\n      <p>Name: John Doe</p>\n      <p>Geburtsdatum: 12.08.1992</p>\n      <p>Geburtsort: Berlin</p>\n    </div>\n    <a class=\"request-card-btn btn-primary\" routerLink=\"/request-details\">Antrag stellen</a>\n  </div>\n\n  <div class=\"request-card\" *ngIf=\"isSelected('Addressänderung')\">\n    <div class=\"request-card-text\">\n      <h2>Adressänderung</h2>\n      <p>Bitte überprüfen Sie Ihre Angaben:</p>\n      <p>Name: John Doe</p>\n      <p>Geburtsdatum: 12.08.1992</p>\n      <p>Geburtsort: Berlin</p>\n      <br>\n      <p>Alte Adresse: Kurzhauser Str. 39, 10414 Berlin</p>\n      <p><span>Neue Adresse:</span> <input type=\"text\" title=\"Neue Adresse\"></p>\n    </div>\n    <a class=\"request-card-btn btn-primary\" routerLink=\"/request-details\">Antrag stellen</a>\n  </div>\n\n  <div class=\"request-card\" *ngIf=\"isSelected('Namensänderung')\">\n    <div class=\"request-card-text\">\n      <h2>Namensänderung</h2>\n      <p>Bitte überprüfen Sie Ihre Angaben:</p>\n      <p>Name: John Doe</p>\n      <p>Geburtsdatum: 12.08.1992</p>\n      <p>Geburtsort: Berlin</p>\n      <br>\n      <p><span>Neuer Name:</span> <input type=\"text\" title=\"Neuer Name\"></p>\n    </div>\n    <a class=\"request-card-btn btn-primary\" routerLink=\"/request-details\">Antrag stellen</a>\n  </div>\n\n  <div class=\"request-card\" *ngIf=\"isSelected('Hochzeit')\">\n    <div class=\"request-card-text\">\n      <h2>Hochzeit</h2>\n      <p>Bitte überprüfen Sie Ihre Angaben:</p>\n      <p>Name: John Doe</p>\n      <p>Geburtsdatum: 12.08.1992</p>\n      <p>Geburtsort: Berlin</p>\n      <br>\n      <p><span>Name des Ehepartners:</span> <input type=\"text\" title=\"Name\"></p>\n      <p><span>Geburtsdatum des Ehepartners:</span> <input type=\"text\" title=\"Datum\"></p>\n      <p><span>Geburtsort des Ehepartners:</span> <input type=\"text\" title=\"Ort\"></p>\n      <br>\n      <p><span>Datum der Trauung:</span> <input type=\"text\" title=\"Datum\"></p>\n      <p><span>Ort der Trauung:</span> <input type=\"text\" title=\"Ort\"></p>\n      <p><span>Neuer Familienname:</span> <input type=\"text\" title=\"Name\"></p>\n    </div>\n    <a class=\"request-card-btn btn-primary\" routerLink=\"/request-details\">Antrag stellen</a>\n  </div>\n\n  <div class=\"request-card\" *ngIf=\"isSelected('Geburt')\">\n    <div class=\"request-card-text\">\n      <h2>Geburt</h2>\n      <p><span>Name des Neugeborenen:</span> <input type=\"text\" title=\"Name\"></p>\n      <p><span>Geburtsdatum:</span> <input type=\"text\" title=\"Datum\"></p>\n      <p><span>Geburtsort:</span> <input type=\"text\" title=\"Ort\"></p>\n    </div>\n    <a class=\"request-card-btn btn-primary\" routerLink=\"/request-details\">Antrag stellen</a>\n  </div>\n\n  <div class=\"request-card\" *ngIf=\"isSelected('Tod')\">\n    <div class=\"request-card-text\">\n      <h2>Tod</h2>\n      <p><span>Name des Verstorbenen:</span> <input type=\"text\" title=\"Name\"></p>\n      <p><span>Geburtsdatum des Verstorbenen:</span> <input type=\"text\" title=\"Geburtsdatum\"></p>\n      <p><span>Geburtsort:</span> <input type=\"text\" title=\"Geburtsort\"></p>\n      <br>\n      <p><span>Datum des Todesfalls:</span> <input type=\"text\" title=\"Datum\"></p>\n      <p><span>Ort des Todesfalls:</span> <input type=\"text\" title=\"Ort\"></p>\n    </div>\n    <a class=\"request-card-btn btn-primary\" routerLink=\"/request-details\">Antrag stellen</a>\n  </div>\n\n</div> -->\n"

/***/ }),

/***/ "./src/app/views/new-request-dynamic/new-request-dynamic.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/new-request-dynamic/new-request-dynamic.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#new-request-container {\n  margin-top: 80px;\n  position: absolute;\n  width: 80%;\n  margin-left: 10%; }\n  #new-request-container > p {\n    display: inline-block;\n    margin-right: 12px; }\n  .request-card {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  background: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 6px; }\n  .request-card-text > h2 {\n  overflow: auto; }\n  .request-card-text > p > span {\n  display: inline-block;\n  width: 250px; }\n  .request-card-text > p > input {\n  width: 100%; }\n  .request-card-btn {\n  font-size: large;\n  text-align: center;\n  margin-top: 16px;\n  text-decoration: none; }\n  @media (min-width: 768px) {\n  .request-card {\n    flex-direction: row; }\n  .request-card-text {\n    flex-grow: 1;\n    margin-left: 16px;\n    overflow-y: auto; }\n  .request-card-text > p > input {\n    width: 40%; }\n  .request-card-btn {\n    align-self: flex-end;\n    margin: 8px;\n    padding: 12px 18px; } }\n"

/***/ }),

/***/ "./src/app/views/new-request-dynamic/new-request-dynamic.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/new-request-dynamic/new-request-dynamic.component.ts ***!
  \****************************************************************************/
/*! exports provided: NewRequestDynamicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRequestDynamicComponent", function() { return NewRequestDynamicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _requestTypes_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requestTypes.json */ "./src/app/views/new-request-dynamic/requestTypes.json");
var _requestTypes_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/Object.assign({}, _requestTypes_json__WEBPACK_IMPORTED_MODULE_2__, {"default": _requestTypes_json__WEBPACK_IMPORTED_MODULE_2__});
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewRequestDynamicComponent = /** @class */ (function () {
    function NewRequestDynamicComponent(router, auth, db) {
        this.router = router;
        this.auth = auth;
        this.db = db;
        this.selectedCategory = 0;
    }
    NewRequestDynamicComponent.prototype.ngOnInit = function () {
        var _this = this;
        //load selector values::
        this.possibleRequests = _requestTypes_json__WEBPACK_IMPORTED_MODULE_2__.rdata;
        this.questionData = _requestTypes_json__WEBPACK_IMPORTED_MODULE_2__.qdata;
        this.dataModel = [];
        this.auth.getAuthState().subscribe(function (user) {
            _this.user = user;
            if (_this.user) {
                _this.loadPersonalData();
            }
        });
    };
    NewRequestDynamicComponent.prototype.loadPersonalData = function () {
        //this fn should get the actual user data from firebase/database
        //Placeholder method :)
        var userdata = { name: "John Doe", birthday: "1992-08-12", address: "Kurzhauser Str. 39, 10414 Berlin" };
        //populate the dataModel::
        this.dataModel = [userdata.name, userdata.birthday, userdata.address, userdata.address];
        return userdata;
    };
    NewRequestDynamicComponent.prototype.isSelected = function (selection) {
        return document.getElementById('select-category').value === selection;
    };
    NewRequestDynamicComponent.prototype.getSelectedQuestionName = function () {
        return this.possibleRequests[this.selectedCategory].type;
    };
    NewRequestDynamicComponent.prototype.submitButtonListener = function () {
        var _this = this;
        var data = {
            name: this.dataModel[0],
            birthday: this.dataModel[1],
            address: this.dataModel[2],
            old_address: this.dataModel[3]
        };
        var user_request = {
            uid: this.user.uid,
            date: Date.now(),
            attached_documents: [data],
            state: "In Bearbeitung",
            type: this.getSelectedQuestionName(),
            request_id: "0",
            office: "Berlin Mitte",
            contact: { name: "Frau Ines Müller", telephone: "03055223344" },
            additional_info: ""
        };
        /*push(value: T)*/
        var path = 'users/' + this.user.uid + '/requests';
        //push a new request and get the id.
        this.db.list(path).push({}).then(function (data) {
            user_request.request_id = data.key;
            _this.db.list(path).update(data.key, user_request).then(function (data) { _this.router.navigateByUrl('/home-dynamic'); });
        });
    };
    NewRequestDynamicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-request-dynamic',
            template: __webpack_require__(/*! ./new-request-dynamic.component.html */ "./src/app/views/new-request-dynamic/new-request-dynamic.component.html"),
            styles: [__webpack_require__(/*! ./new-request-dynamic.component.scss */ "./src/app/views/new-request-dynamic/new-request-dynamic.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], NewRequestDynamicComponent);
    return NewRequestDynamicComponent;
}());



/***/ }),

/***/ "./src/app/views/new-request-dynamic/requestTypes.json":
/*!*************************************************************!*\
  !*** ./src/app/views/new-request-dynamic/requestTypes.json ***!
  \*************************************************************/
/*! exports provided: rdata, qdata, default */
/***/ (function(module) {

module.exports = {"rdata":[{"type":"Personalausweis","longname":"Personalausweis beantragen/verlängern:","isQuestionActive":[true,true,true,false]},{"type":"Reisepass","longname":"Reisepass beantragen/verlängern:","isQuestionActive":[true,true,true,false]},{"type":"Addressänderung","longname":"Addressänderung beantragen:","isQuestionActive":[true,true,true,true]}],"qdata":[{"name":"fullname","longname":"Name:","type":"value"},{"name":"birthday","longname":"Geburtstag:","type":"date"},{"name":"address","longname":"Address:","type":"value"},{"name":"old_address","longname":"alte Addresse:","type":"value"}]};

/***/ }),

/***/ "./src/app/views/new-request/new-request.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/new-request/new-request.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"new-request-container\">\n\n  <h1>Neuen Antrag erstellen</h1>\n\n  <p>Kategorie:</p>\n  <select id=\"select-category\" title=\"Kategorie für neuen Antrag\" (ngModel)=\"selectedCategory\">\n    <option>Personalausweis</option>\n    <option>Reisepass</option>\n    <option>Adressänderung</option>\n    <option>Namensänderung</option>\n    <option>Hochzeit</option>\n    <option>Geburt</option>\n    <option>Tod</option>\n  </select>\n\n  <div class=\"request-card\" *ngIf=\"isSelected('Personalausweis')\">\n    <div class=\"request-card-text\">\n      <h2>Personalausweisbeantragung</h2>\n      <p>Bitte überprüfen Sie Ihre Angaben:</p>\n      <p>Name: John Doe</p>\n      <p>Geburtsdatum: 12.08.1992</p>\n      <p>Geburtsort: Berlin</p>\n    </div>\n    <a class=\"request-card-btn btn-primary\" routerLink=\"/request-details\">Antrag stellen</a>\n  </div>\n\n  <div class=\"request-card\" *ngIf=\"isSelected('Reisepass')\">\n    <div class=\"request-card-text\">\n      <h2>Reisepass-Beantragung</h2>\n      <p>Bitte überprüfen Sie Ihre Angaben:</p>\n      <p>Name: John Doe</p>\n      <p>Geburtsdatum: 12.08.1992</p>\n      <p>Geburtsort: Berlin</p>\n    </div>\n    <a class=\"request-card-btn btn-primary\" routerLink=\"/request-details\">Antrag stellen</a>\n  </div>\n\n  <div class=\"request-card\" *ngIf=\"isSelected('Adressänderung')\">\n    <div class=\"request-card-text\">\n      <h2>Adressänderung</h2>\n      <p>Bitte überprüfen Sie Ihre Angaben:</p>\n      <p>Name: John Doe</p>\n      <p>Geburtsdatum: 12.08.1992</p>\n      <p>Geburtsort: Berlin</p>\n      <br>\n      <p>Alte Adresse: Kurzhauser Str. 39, 10414 Berlin</p>\n      <p><span>Neue Adresse:</span> <input type=\"text\" title=\"Neue Adresse\"></p>\n    </div>\n    <a class=\"request-card-btn btn-primary\" routerLink=\"/request-details\">Antrag stellen</a>\n  </div>\n\n  <div class=\"request-card\" *ngIf=\"isSelected('Namensänderung')\">\n    <div class=\"request-card-text\">\n      <h2>Namensänderung</h2>\n      <p>Bitte überprüfen Sie Ihre Angaben:</p>\n      <p>Name: John Doe</p>\n      <p>Geburtsdatum: 12.08.1992</p>\n      <p>Geburtsort: Berlin</p>\n      <br>\n      <p><span>Neuer Name:</span> <input type=\"text\" title=\"Neuer Name\"></p>\n    </div>\n    <a class=\"request-card-btn btn-primary\" routerLink=\"/request-details\">Antrag stellen</a>\n  </div>\n\n  <div class=\"request-card\" *ngIf=\"isSelected('Hochzeit')\">\n    <div class=\"request-card-text\">\n      <h2>Hochzeit</h2>\n      <p>Bitte überprüfen Sie Ihre Angaben:</p>\n      <p>Name: John Doe</p>\n      <p>Geburtsdatum: 12.08.1992</p>\n      <p>Geburtsort: Berlin</p>\n      <br>\n      <p><span>Name des Ehepartners:</span> <input type=\"text\" title=\"Name\"></p>\n      <p><span>Geburtsdatum des Ehepartners:</span> <input type=\"text\" title=\"Datum\"></p>\n      <p><span>Geburtsort des Ehepartners:</span> <input type=\"text\" title=\"Ort\"></p>\n      <br>\n      <p><span>Datum der Trauung:</span> <input type=\"text\" title=\"Datum\"></p>\n      <p><span>Ort der Trauung:</span> <input type=\"text\" title=\"Ort\"></p>\n      <p><span>Neuer Familienname:</span> <input type=\"text\" title=\"Name\"></p>\n    </div>\n    <a class=\"request-card-btn btn-primary\" routerLink=\"/request-details\">Antrag stellen</a>\n  </div>\n\n  <div class=\"request-card\" *ngIf=\"isSelected('Geburt')\">\n    <div class=\"request-card-text\">\n      <h2>Geburt</h2>\n      <p><span>Name des Neugeborenen:</span> <input type=\"text\" title=\"Name\"></p>\n      <p><span>Geburtsdatum:</span> <input type=\"text\" title=\"Datum\"></p>\n      <p><span>Geburtsort:</span> <input type=\"text\" title=\"Ort\"></p>\n    </div>\n    <a class=\"request-card-btn btn-primary\" routerLink=\"/request-details\">Antrag stellen</a>\n  </div>\n\n  <div class=\"request-card\" *ngIf=\"isSelected('Tod')\">\n    <div class=\"request-card-text\">\n      <h2>Tod</h2>\n      <p><span>Name des Verstorbenen:</span> <input type=\"text\" title=\"Name\"></p>\n      <p><span>Geburtsdatum des Verstorbenen:</span> <input type=\"text\" title=\"Geburtsdatum\"></p>\n      <p><span>Geburtsort:</span> <input type=\"text\" title=\"Geburtsort\"></p>\n      <br>\n      <p><span>Datum des Todesfalls:</span> <input type=\"text\" title=\"Datum\"></p>\n      <p><span>Ort des Todesfalls:</span> <input type=\"text\" title=\"Ort\"></p>\n    </div>\n    <a class=\"request-card-btn btn-primary\" routerLink=\"/request-details\">Antrag stellen</a>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/new-request/new-request.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/views/new-request/new-request.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#new-request-container {\n  margin-top: 80px;\n  position: absolute;\n  width: 80%;\n  margin-left: 10%; }\n  #new-request-container > p {\n    display: inline-block;\n    margin-right: 12px; }\n  .request-card {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  background: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 6px; }\n  .request-card-text > h2 {\n  overflow: auto; }\n  .request-card-text > p > span {\n  display: inline-block;\n  width: 250px; }\n  .request-card-text > p > input {\n  width: 100%; }\n  .request-card-btn {\n  font-size: large;\n  text-align: center;\n  margin-top: 16px;\n  text-decoration: none; }\n  @media (min-width: 768px) {\n  .request-card {\n    flex-direction: row; }\n  .request-card-text {\n    flex-grow: 1;\n    margin-left: 16px;\n    overflow-y: auto; }\n  .request-card-text > p > input {\n    width: 40%; }\n  .request-card-btn {\n    align-self: flex-end;\n    margin: 8px;\n    padding: 12px 18px; } }\n"

/***/ }),

/***/ "./src/app/views/new-request/new-request.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/new-request/new-request.component.ts ***!
  \************************************************************/
/*! exports provided: NewRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRequestComponent", function() { return NewRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewRequestComponent = /** @class */ (function () {
    function NewRequestComponent() {
    }
    NewRequestComponent.prototype.ngOnInit = function () {
    };
    NewRequestComponent.prototype.isSelected = function (selection) {
        return document.getElementById('select-category').value === selection;
    };
    NewRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-request',
            template: __webpack_require__(/*! ./new-request.component.html */ "./src/app/views/new-request/new-request.component.html"),
            styles: [__webpack_require__(/*! ./new-request.component.scss */ "./src/app/views/new-request/new-request.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewRequestComponent);
    return NewRequestComponent;
}());



/***/ }),

/***/ "./src/app/views/request-details/request-details.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/request-details/request-details.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-request-details-status></app-request-details-status>\n"

/***/ }),

/***/ "./src/app/views/request-details/request-details.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/views/request-details/request-details.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#request-details-container {\n  margin-top: 80px;\n  position: absolute;\n  width: 80%;\n  margin-left: 10%; }\n  #request-details-container > div {\n    padding: 12px 28px;\n    margin: 18px 0;\n    background: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n  #request-details-person {\n  display: flex;\n  flex-direction: column; }\n  #request-details-person > div:first-child {\n    flex-grow: 1; }\n  #person-image {\n  height: 200px; }\n  #person-image > img {\n    height: 100%;\n    border: 1px solid gray; }\n  #request-details-caption {\n  overflow: auto; }\n  @media (min-width: 768px) {\n  #request-details-person {\n    flex-direction: row; } }\n"

/***/ }),

/***/ "./src/app/views/request-details/request-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/request-details/request-details.component.ts ***!
  \********************************************************************/
/*! exports provided: RequestDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDetailsComponent", function() { return RequestDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RequestDetailsComponent = /** @class */ (function () {
    function RequestDetailsComponent() {
    }
    RequestDetailsComponent.prototype.ngOnInit = function () {
    };
    RequestDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-details',
            template: __webpack_require__(/*! ./request-details.component.html */ "./src/app/views/request-details/request-details.component.html"),
            styles: [__webpack_require__(/*! ./request-details.component.scss */ "./src/app/views/request-details/request-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RequestDetailsComponent);
    return RequestDetailsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBZnCFC6kt79vYROHStlhdTWWVHOrpITdQ',
        authDomain: 'smartcountry-n12.firebaseapp.com',
        databaseURL: 'https://smartcountry-n12.firebaseio.com',
        projectId: "smartcountry-n12",
        storageBucket: "smartcountry-n12.appspot.com",
        messagingSenderId: "709119497178"
    }
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jan/Documents/JS/smartcountry_hacks/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map