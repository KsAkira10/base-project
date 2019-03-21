(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ngx-via-cep/ngx-via-cep.module": [
		"./src/app/pages/ngx-via-cep/ngx-via-cep.module.ts",
		"ngx-via-cep-ngx-via-cep-module"
	],
	"./pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"pages-pages-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        loadChildren: './pages/pages.module#PagesModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<header>\n  <nav class=\"navbar navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">{{ title }}</a>\n    <button\n      class=\"navbar-toggler d-md-none d-flex\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#navbarNav\"\n      aria-controls=\"navbarNav\"\n      [attr.aria-expanded]=\"menu.open\"\n      aria-label=\"Toggle navigation\"\n      (click)=\"handleOnClick()\"\n    >\n      <span class=\"navbar-toggler-icon\">\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          viewBox=\"0 0 30 30\"\n          width=\"30\"\n          height=\"30\"\n          focusable=\"false\"\n        >\n          <title>Menu</title>\n          <path\n            stroke=\"currentColor\"\n            stroke-width=\"2\"\n            stroke-linecap=\"round\"\n            stroke-miterlimit=\"10\"\n            d=\"M4 7h22M4 15h22M4 23h22\"\n          ></path>\n        </svg>\n      </span>\n    </button>\n  </nav>\n</header>\n<main class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</main>\n<footer></footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/actions */ "./src/app/store/actions/index.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
        this.title = 'Base Project';
        this.menu$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('menuReducer'));
    }
    AppComponent.prototype.ngOnInit = function () {
        this.registerMenu$();
    };
    AppComponent.prototype.registerMenu$ = function () {
        var _this = this;
        this.menu$.subscribe(function (menu) {
            _this.menu = menu;
        });
    };
    AppComponent.prototype.openMenu = function () {
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["OpenMenuAction"]());
    };
    AppComponent.prototype.closeMenu = function () {
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["CloseMenuAction"]());
    };
    AppComponent.prototype.handleOnClick = function () {
        if (this.menu.closed) {
            this.openMenu();
        }
        else {
            this.closeMenu();
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store */ "./src/app/store/index.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_8__["reducers"], { metaReducers: _store__WEBPACK_IMPORTED_MODULE_8__["metaReducers"] }),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument() : [],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/store/actions/index.ts":
/*!****************************************!*\
  !*** ./src/app/store/actions/index.ts ***!
  \****************************************/
/*! exports provided: MenuActionTypes, OpenMenuAction, CloseMenuAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.action */ "./src/app/store/actions/menu.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuActionTypes", function() { return _menu_action__WEBPACK_IMPORTED_MODULE_0__["MenuActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenMenuAction", function() { return _menu_action__WEBPACK_IMPORTED_MODULE_0__["OpenMenuAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloseMenuAction", function() { return _menu_action__WEBPACK_IMPORTED_MODULE_0__["CloseMenuAction"]; });




/***/ }),

/***/ "./src/app/store/actions/menu.action.ts":
/*!**********************************************!*\
  !*** ./src/app/store/actions/menu.action.ts ***!
  \**********************************************/
/*! exports provided: MenuActionTypes, OpenMenuAction, CloseMenuAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuActionTypes", function() { return MenuActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenMenuAction", function() { return OpenMenuAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseMenuAction", function() { return CloseMenuAction; });
var MenuActionTypes;
(function (MenuActionTypes) {
    MenuActionTypes["Open"] = "[Menu] Open Menu";
    MenuActionTypes["Close"] = "[Menu] Close Menu";
})(MenuActionTypes || (MenuActionTypes = {}));
var OpenMenuAction = /** @class */ (function () {
    function OpenMenuAction() {
        this.type = MenuActionTypes.Open;
    }
    return OpenMenuAction;
}());

var CloseMenuAction = /** @class */ (function () {
    function CloseMenuAction() {
        this.type = MenuActionTypes.Close;
    }
    return CloseMenuAction;
}());



/***/ }),

/***/ "./src/app/store/index.ts":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: reducers, debug, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./src/app/store/reducers/index.ts");


var reducers = {
    menuReducer: _reducers__WEBPACK_IMPORTED_MODULE_1__["menuReducer"]
};
function debug(reducer) {
    return function (state, action) {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production
    ? [debug]
    : [];


/***/ }),

/***/ "./src/app/store/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: menuReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.reducer */ "./src/app/store/reducers/menu.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "menuReducer", function() { return _menu_reducer__WEBPACK_IMPORTED_MODULE_0__["menuReducer"]; });




/***/ }),

/***/ "./src/app/store/reducers/menu.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/store/reducers/menu.reducer.ts ***!
  \************************************************/
/*! exports provided: menuReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuReducer", function() { return menuReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/store/actions/index.ts");


var initialState = {
    open: false,
    closed: true
};
function menuReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["MenuActionTypes"].Open:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { open: true, closed: false });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["MenuActionTypes"].Close:
        default:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { open: false, closed: true });
    }
}


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Akira/Developer/base-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map