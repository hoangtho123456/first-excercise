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

/***/ "./src/app/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideInDownAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

// Component transition animations
var slideInDownAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* trigger */])('routeAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* transition */])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({
            opacity: 0,
            transform: 'translateX(-100%)'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])('0.2s ease-in')
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* transition */])(':leave', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])('0.5s ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({
            opacity: 0,
            transform: 'translateY(100%)'
        }))
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crisis_center_crisis_center_component__ = __webpack_require__("./src/app/crisis-center/crisis-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_found_component__ = __webpack_require__("./src/app/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: 'crisis-center', component: __WEBPACK_IMPORTED_MODULE_2__crisis_center_crisis_center_component__["a" /* CrisisListComponent */] },
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } //<--debugging purpose only
                )
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "nav a {\r\n\tpadding: 5px;\r\n\tbackground: #ccc;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Todo List</h1>\r\n  <nav>\r\n    <a routerLink=\"/crisis-center\" routerLinkActive=\"active\">Crisis Center</a>\r\n    <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\r\n    <a routerLink=\"/todoList\" routerLinkActive=\"active\" >Todo List</a>\r\n    <a routerLink=\"/form\" routerLinkActive=\"active\">Form</a>\r\n    <a routerLink=\"/directive-form\" routerLinkActive=\"active\">Directive Form</a>\r\n  </nav>\r\n  <router-outlet></router-outlet>  \r\n</div>\r\n\r\n\r\n<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <div style=\"text-align:center\">\r\n  <h1>\r\n    {{ title }}\r\n  </h1>\r\n  <p>{{ content }}</p>\r\n  <router-outlet></router-outlet> -->\r\n  <!-- <app-server></app-server> -->\r\n  <!-- <app-servers></app-servers> -->\r\n  <!-- <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n  </li>\r\n</ul> -->\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Todo List';
        this.content = "Hello world!!";
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__heroes_heroes_module__ = __webpack_require__("./src/app/heroes/heroes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__crisis_center_crisis_center_component__ = __webpack_require__("./src/app/crisis-center/crisis-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__not_found_component__ = __webpack_require__("./src/app/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__todo_list_todo_list_module__ = __webpack_require__("./src/app/todo-list/todo-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__demo_form_demo_form_module__ = __webpack_require__("./src/app/demo-form/demo-form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__form_directive_form_directive_module__ = __webpack_require__("./src/app/form-directive/form-directive.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { HeroListComponent } from './heroes/hero-list.component'; delete because it is in heroes.module
//import { HeroDetailComponent } from './heroes/hero-detail.component';



// import { TodoListComponent } from './todo-list/todo-list.component';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__crisis_center_crisis_center_component__["a" /* CrisisListComponent */],
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__not_found_component__["a" /* PageNotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__form_directive_form_directive_module__["a" /* FormDirectiveModule */],
                __WEBPACK_IMPORTED_MODULE_10__demo_form_demo_form_module__["a" /* DemoFormModule */],
                __WEBPACK_IMPORTED_MODULE_9__todo_list_todo_list_module__["a" /* TodoListModule */],
                __WEBPACK_IMPORTED_MODULE_5__heroes_heroes_module__["a" /* HeroesModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
                // other imports here
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/crisis-center/crisis-center.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/crisis-center/crisis-center.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Demo API</h1>\n<p>\n  crisis-center works!\n</p>\n<div class=\"card card-primary\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">Quick Example</h3>\n  </div>\n  <!-- /.card-header -->\n  <!-- form start -->\n  <form role=\"form\">\n    <div class=\"card-body\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Email address</label>\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Enter email\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n      </div>\n      \n      <!-- <div class=\"form-group\">\n        <label for=\"exampleInputFile\">File input</label>\n        <div class=\"input-group\">\n          <div class=\"custom-file\">\n            <input type=\"file\" class=\"custom-file-input\" id=\"exampleInputFile\">\n            <label class=\"custom-file-label\" for=\"exampleInputFile\">Choose file</label>\n          </div>\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"\">Upload</span>\n          </div>\n        </div>\n      </div> -->\n      <!-- <div class=\"form-check\">\n        <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n        <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n      </div> -->\n    </div>\n    <!-- /.card-body -->\n\n    <div class=\"card-footer\">\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/crisis-center/crisis-center.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrisisListComponent; });
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

var CrisisListComponent = /** @class */ (function () {
    function CrisisListComponent() {
    }
    CrisisListComponent.prototype.ngOnInit = function () {
    };
    CrisisListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-crisis-center',
            template: __webpack_require__("./src/app/crisis-center/crisis-center.component.html"),
            styles: [__webpack_require__("./src/app/crisis-center/crisis-center.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CrisisListComponent);
    return CrisisListComponent;
}());



/***/ }),

/***/ "./src/app/demo-form/demo-form-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoFormRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_form_component__ = __webpack_require__("./src/app/demo-form/demo-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var formRoutes = [
    { path: 'form', component: __WEBPACK_IMPORTED_MODULE_2__demo_form_component__["a" /* DemoFormComponent */] }
];
var DemoFormRoutingModule = /** @class */ (function () {
    function DemoFormRoutingModule() {
    }
    DemoFormRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(formRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], DemoFormRoutingModule);
    return DemoFormRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo-form/demo-form.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required {\r\n\tborder-left: 5px solid #42A948;\r\n}\r\n.ng-invalid:not(form) {\r\n\tborder-left: 5px solid #a94442;\r\n}\r\n.left {\r\n\tfloat: left;\r\n\tmargin-left: 10px;\r\n}\r\n.left:first-child {margin-left: 0;}\r\n.left input{\r\n\tvertical-align: text-bottom;\r\n}\r\n.contain {\r\n    display:  block;\r\n    position:  relative;\r\n\tpadding-left: 25px;\r\n\t-webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n/* .todo li a {\r\n    position: absolute;\r\n    top: 7px;\r\n    left: 14%;\r\n} */\r\n.contain input {\r\n    position:  absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n}\r\n.checkmark {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width:  20px;\r\n    height: 20px;\r\n    background: rgb(153, 151, 151);\r\n}\r\n.contain:hover input~.checkmark, .contain input:checked ~ .checkmark {\r\n    background: #77b2bf;\r\n}\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n.contain input:checked ~ .checkmark:after {\r\n    display: block;\r\n}\r\n.contain .checkmark:after {\r\n    left: 7px;\r\n    top: 0;\r\n    width: 7px;\r\n    height: 15px;\r\n    border: solid white;\r\n    border-width: 0 3px 3px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}"

/***/ }),

/***/ "./src/app/demo-form/demo-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"submitted\" class=\"container\">\r\n  <h1>Demo form</h1>\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"heroForm\">\r\n    <div class=\"form-group\">\r\n      <input class=\"form-control\" id=\"name\" type=\"text\" [(ngModel)]=\"model.name\" name=\"name\" formControlName=\"name\" required>\r\n      <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\r\n       class=\"alert alert-danger\">\r\n        <div *ngIf=\"name.errors.required\">\r\n          Name is required.\r\n        </div>\r\n        <div *ngIf=\"name.errors.minlength\">\r\n          Name must be at least 4 characters long.\r\n        </div>\r\n        <div *ngIf=\"name.errors.forbiddenName\">\r\n          Name cannot be Bob.\r\n        </div>\r\n      </div>\r\n    </div> \r\n    <div class=\"from-group\">\r\n      <label for=\"alter_ego\">Alter Ego</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"alter_ego\"  name=\"alterEgo\" [(ngModel)]=\"model.alterEgo\" formControlName=\"alterEgo\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"age\">Age</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"age\" pattern=\"^[0-9]*$\" name=\"age\" [(ngModel)]=\"model.age\" formControlName=\"age\">\r\n      <!-- <div *ngIf=\"age.invalid && (age.dirty || age.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"age.errors.pattern\">\r\n          Age is not a number; {{ model.age }}\r\n        </div>\r\n      </div> -->\r\n    </div>\r\n\r\n    <!-- <div class=\"form-group\">\r\n      <label for=\"powers\">Hero Power Type</label>\r\n      <div [formArrayName]=\"'items'\" class=\"form-control\" id=\"powers\">\r\n        <div class=\"left\" *ngFor=\"let power of heroForm.get('items')\" [formGroup]=\"power\">\r\n          <label class=\"contain\">\r\n              <input type=\"checkbox\" id=\"po_{{ powers.id }}\" [value]=\"power.id\" formControlName=\"checked\"> {{ power.content }}\r\n              <span class=\"checkmark\"></span>\r\n          </label>\r\n        </div>\r\n        <div [class.invalid]=\"!heroForm.controls.selectedItems.valid\" *ngIf=\"!heroForm.controls.selectedItems.valid\">\r\n          checkbox group is required!\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"power\">Hero Power</label>\r\n      <select class=\"form-control\" id=\"power\" required [(ngModel)]=\"model.power\"\r\n         name=\"power\" formControlName=\"power\">\r\n        <option *ngFor=\"let pow of powers\" [value]=\"pow\">{{ pow }}</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"power\">Hero Power Types</label>\r\n      <select class=\"form-control\" id=\"power\"  required\r\n         name=\"power\" formControlName=\"powersType\" (change)=changeList($event.target.value)>\r\n        <option *ngFor=\"let pow of powersType\" [value]=\"pow.Type\">{{ pow.Type }}</option>\r\n      </select>\r\n      <div [formArrayName]=\"'typeItems'\" class=\"form-control\" id=\"powerss\">\r\n        <div class=\"left\" *ngFor=\"let po of heroForm.controls.typeItems.controls\" [formGroup]=\"po\">\r\n          <label class=\"contain\">\r\n              <input type=\"checkbox\" id=\"po_{{ po.content }}\" [value]=\"po.content\" formControlName=\"checkedDemo\"> {{ po.value.value }}\r\n              <span class=\"checkmark\"></span>\r\n          </label>\r\n        </div>\r\n        <div [class.invalid]=\"!heroForm.controls.selectedItemsDemo.valid\" *ngIf=\"!heroForm.controls.selectedItemsDemo.valid\">\r\n          checkbox group is required!\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"newHero(); heroForm.reset()\">New Hero</button>\r\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"heroForm.invalid &&!heroForm.controls.selectedItems.valid && !heroForm.controls.selectedItemsDemo.valid\">Submit</button>\r\n  </form>\r\n</div>\r\n<div [hidden]=\"!submitted\" class=\"container\">\r\n  <h2>You submitted the following info below:</h2>\r\n  <div class=\"row\">\r\n  \t<div class=\"col-xs-3\">Name</div>\r\n  \t<div class=\"col-xs-9 pull-left\">{{ model.name }}</div>\r\n  </div>\r\n  <div class=\"row\">\r\n  \t<div class=\"col-xs-3\">Power</div>\r\n  \t<div class=\"col-xs-9\">{{ model.power }}</div>\r\n  </div>\r\n  <div [hidden]=\"!model.alterEgo\" class=\"row\">\r\n  \t<div class=\"col-xs-3\">Alter Ego</div>\r\n  \t<div class=\"col-xs-9\">{{ model.alterEgo }}</div>\r\n  </div>\r\n  <div [hidden]=\"!model.age\" class=\"row\">\r\n  \t<div class=\"col-xs-3\">Age</div>\r\n  \t<div class=\"col-xs-9\">{{ model.age }}</div>\r\n  </div>\r\n  <br>\r\n  <button class=\"btn btn-primary\" (click)=\"submitted=false\" >Edit</button>\r\n</div>\r\n<!-- \r\n<form style=\"margin-top: 2%\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"c\">\r\n  <div class=\"form-group\">\r\n    <label for=\"power2s\">Hero Power Type</label>\r\n    <div class=\"form-control\" id=\"power2s\">\r\n      <div class=\"left\" *ngFor=\"let power of listPowers\">\r\n        <label class=\"contain\">\r\n            <input type=\"checkbox\" [value]=\"power.id\" formControlName=\"l\" name=\"la\"> {{ power.content }}\r\n            <span class=\"checkmark\"></span>\r\n        </label>\r\n      </div>\r\n      <div *ngIf=\"c.get('l').invalid\"> \r\n        Accept T & C.\r\n      </div> \r\n    </div>\r\n  </div>\r\n  <button type=\"button\" class=\"btn btn-info\" (click)=\"newHero(); c.reset()\">New Hero</button>\r\n  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!c.valid\">Submit</button>\r\n</form> -->\r\n"

/***/ }),

/***/ "./src/app/demo-form/demo-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero__ = __webpack_require__("./src/app/demo-form/hero.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



function validateName(c) {
    var name_regexp = /^[a-zA-Z0-9]*$/;
    return name_regexp.test(c.value) ? null : {
        validateName: {
            valid: false
        }
    };
}
var DemoFormComponent = /** @class */ (function () {
    function DemoFormComponent() {
        this.submitted = false;
        this.powers = ['Smart', 'Speed', 'Weater Changer', 'Super Hot'];
        this.listPowers = [
            { id: 1, content: 'queen' },
            { id: 2, content: 'king' }
        ];
        this.powersType = [
            { Type: 'smart' },
            { Type: 'Nature' }
        ];
        //demo list checkbox show from clicked select box      
        this.listPowerType = [
            { Type: 'smart', id: 1, content: 'sport' },
            { Type: 'smart', id: 2, content: 'tech' },
            { Type: 'Nature', id: 1, content: 'fire' },
            { Type: 'Nature', id: 2, content: 'wind' }
        ];
        this.listPoTypeTemp = [];
        this.group2 = [];
        this.model = new __WEBPACK_IMPORTED_MODULE_1__hero__["a" /* Hero */](18, 'Mark Zed', this.powers[1], 20, 'Chuck Sting');
    }
    DemoFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    DemoFormComponent.prototype.newHero = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_1__hero__["a" /* Hero */](21, '', '');
    };
    Object.defineProperty(DemoFormComponent.prototype, "diagnostic", {
        //TODO: Remove this when we are done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    DemoFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var group = [];
        this.listPowers.forEach(function (l) {
            group.push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
                key: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](l.id),
                value: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](l.content),
                checked: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](false)
            }));
        });
        //var control = this.heroForm.controls[''] as FormGroup;
        var formControlArray = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormArray */](group);
        var formControlArrayDemo = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormArray */](this.group2);
        formControlArray.valueChanges.subscribe(function (v) {
            _this.heroForm.controls.selectedItems.setValue(_this.mapItems(v));
        });
        formControlArrayDemo.valueChanges.subscribe(function (v) {
            _this.heroForm.controls.selectedItemsDemo.setValue(_this.mapItemsDemo(v));
        });
        this.heroForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.model.name, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(5),
            ]),
            alterEgo: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.model.alterEgo),
            age: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.model.age),
            power: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.model.power),
            powersType: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.powersType),
            //listPows: new FormControl('', Validators.required),
            items: formControlArray,
            typeItems: formControlArrayDemo,
            selectedItems: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.mapItems(formControlArray.value), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            selectedItemsDemo: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.mapItemsDemo(formControlArrayDemo.value), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
        this.c = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            l: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    Object.defineProperty(DemoFormComponent.prototype, "name", {
        get: function () { return this.heroForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DemoFormComponent.prototype, "power", {
        get: function () { return this.heroForm.get('power'); },
        enumerable: true,
        configurable: true
    });
    DemoFormComponent.prototype.mapItems = function (items) {
        var selectedItems = items.filter(function (l) { return l.checked; }).map(function (l) { return l.key; });
        console.log(items.filter(function (l) { return l.checked; }));
        return selectedItems.length ? selectedItems : null;
    };
    DemoFormComponent.prototype.mapItemsDemo = function (items) {
        var selectedItemsDemo = items.filter(function (l) { return l.checkedDemo; }).map(function (l) { return l.key; });
        console.log(items.filter(function (l) { return l.checkedDemo; }));
        return selectedItemsDemo.length ? selectedItemsDemo : null;
    };
    DemoFormComponent.prototype.changeList = function (selectBox) {
        var _this = this;
        console.log(this.listPowerType);
        this.listPoTypeTemp = [];
        this.group2 = [];
        if (this.listPoTypeTemp.length <= 0) {
            for (var i = 0; i < this.listPowerType.length; i++) {
                if (selectBox === this.listPowerType[i].Type) {
                    this.listPoTypeTemp.push(this.listPowerType[i]);
                }
            }
            ;
        }
        this.listPoTypeTemp.forEach(function (l) {
            _this.group2.push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
                key: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](l.id),
                value: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](l.content),
                checkedDemo: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](false)
            }));
        });
        var formControlArrayDemo = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormArray */](this.group2);
        formControlArrayDemo.valueChanges.subscribe(function (v) {
            _this.heroForm.controls.selectedItemsDemo.setValue(_this.mapItemsDemo(v));
        });
        return this.heroForm.setControl('typeItems', formControlArrayDemo);
        // return this.listPoTypeTemp;
    };
    DemoFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/demo-form/demo-form.component.html"),
            styles: [__webpack_require__("./src/app/demo-form/demo-form.component.css")]
        })
    ], DemoFormComponent);
    return DemoFormComponent;
}());



/***/ }),

/***/ "./src/app/demo-form/demo-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_form_component__ = __webpack_require__("./src/app/demo-form/demo-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demo_form_routing_module__ = __webpack_require__("./src/app/demo-form/demo-form-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DemoFormModule = /** @class */ (function () {
    function DemoFormModule() {
    }
    DemoFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__demo_form_routing_module__["a" /* DemoFormRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__demo_form_component__["a" /* DemoFormComponent */]
            ],
            providers: []
        })
    ], DemoFormModule);
    return DemoFormModule;
}());



/***/ }),

/***/ "./src/app/demo-form/hero.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hero; });
var Hero = /** @class */ (function () {
    function Hero(id, name, power, age, alterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.age = age;
        this.alterEgo = alterEgo;
    }
    return Hero;
}());

/*
  let myHero = new Hero(42, 'SkyDog',
                        'Fetch any object at any distance',
                        'Leslie Rollover') ;
*/ 


/***/ }),

/***/ "./src/app/form-directive/form-directive-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormDirectiveRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template_form_directive_component__ = __webpack_require__("./src/app/form-directive/template/form-directive.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var formRoutes = [
    { path: 'directive-form', component: __WEBPACK_IMPORTED_MODULE_2__template_form_directive_component__["a" /* FormDirectiveComponent */] }
];
var FormDirectiveRouting = /** @class */ (function () {
    function FormDirectiveRouting() {
    }
    FormDirectiveRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(formRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], FormDirectiveRouting);
    return FormDirectiveRouting;
}());



/***/ }),

/***/ "./src/app/form-directive/form-directive.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormDirectiveModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__template_form_directive_component__ = __webpack_require__("./src/app/form-directive/template/form-directive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_directive_routing_module__ = __webpack_require__("./src/app/form-directive/form-directive-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_form_underline_directive__ = __webpack_require__("./src/app/form-directive/shared/form-underline.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_form_directive_directive__ = __webpack_require__("./src/app/form-directive/shared/form-directive.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_form_structure_directive__ = __webpack_require__("./src/app/form-directive/shared/form-structure.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var FormDirectiveModule = /** @class */ (function () {
    function FormDirectiveModule() {
    }
    FormDirectiveModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__form_directive_routing_module__["a" /* FormDirectiveRouting */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__shared_form_directive_directive__["a" /* ValidateDirective */],
                __WEBPACK_IMPORTED_MODULE_5__shared_form_underline_directive__["a" /* UnderlineDirective */],
                __WEBPACK_IMPORTED_MODULE_7__shared_form_structure_directive__["a" /* IfDirective */],
                __WEBPACK_IMPORTED_MODULE_3__template_form_directive_component__["a" /* FormDirectiveComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__shared_form_directive_directive__["a" /* ValidateDirective */],
                __WEBPACK_IMPORTED_MODULE_7__shared_form_structure_directive__["a" /* IfDirective */],
                // Export new directive
                __WEBPACK_IMPORTED_MODULE_5__shared_form_underline_directive__["a" /* UnderlineDirective */]
            ],
            providers: []
        })
    ], FormDirectiveModule);
    return FormDirectiveModule;
}());



/***/ }),

/***/ "./src/app/form-directive/shared/form-directive.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ValidateDirective = /** @class */ (function () {
    function ValidateDirective(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    ValidateDirective_1 = ValidateDirective;
    Object.defineProperty(ValidateDirective.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === "true" ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    ValidateDirective.prototype.validate = function (control) {
        var v = control.value;
        var e = control.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse)
            return {
                validateEqual: false
            };
        //value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors["validateEqual"];
            if (!Object.keys(e.errors).length) {
                e.setErrors(null);
            }
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ validateEqual: false });
        }
        return null;
    };
    ValidateDirective = ValidateDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[validateEqual]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALIDATORS */], useExisting: ValidateDirective_1, multi: true }
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Attribute */])('validateEqual')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Attribute */])("reverse")),
        __metadata("design:paramtypes", [String, String])
    ], ValidateDirective);
    return ValidateDirective;
    var ValidateDirective_1;
}());



/***/ }),

/***/ "./src/app/form-directive/shared/form-structure.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IfDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


var IfDirective = /** @class */ (function () {
    function IfDirective() {
    }
    IfDirective_1 = IfDirective;
    IfDirective.prototype.validate = function (control) {
        var listBox = control.value;
        //let selected: any = control.filter((item) => item.checked === true);
        if (listBox == false) {
            return control;
        }
        else {
            console.log(listBox);
            return null;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('changeListBox'),
        __metadata("design:type", Object)
    ], IfDirective.prototype, "listCheckbox", void 0);
    IfDirective = IfDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[changeListBox]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALIDATORS */], useExisting: IfDirective_1, multi: true }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], IfDirective);
    return IfDirective;
    var IfDirective_1;
}());



/***/ }),

/***/ "./src/app/form-directive/shared/form-underline.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnderlineDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnderlineDirective = /** @class */ (function () {
    function UnderlineDirective() {
    }
    UnderlineDirective_1 = UnderlineDirective;
    UnderlineDirective.prototype.validate = function (control) {
        if (control.value && control.value.length < 4) {
            return {
                'minLengthName': { value: control.value }
            };
        }
        else if (control.value && control.value.length > 20) {
            return {
                'maxLengthName': { value: control.value }
            };
        }
    };
    UnderlineDirective = UnderlineDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[myUnderline]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALIDATORS */], useExisting: UnderlineDirective_1, multi: true }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], UnderlineDirective);
    return UnderlineDirective;
    var UnderlineDirective_1;
}());



/***/ }),

/***/ "./src/app/form-directive/template/form-directive.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required {\r\n\tborder-left: 5px solid #42A948;\r\n}\r\n.ng-invalid:not(form) {\r\n\tborder-left: 5px solid #a94442;\r\n}\r\n.left {\r\n\tfloat: left;\r\n\tmargin-left: 10px;\r\n}\r\n.left:first-child {margin-left: 0;}\r\n.left input{\r\n\tvertical-align: text-bottom;\r\n}\r\n.contain {\r\n    display:  block;\r\n    position:  relative;\r\n\tpadding-left: 25px;\r\n\t-webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n/* .todo li a {\r\n    position: absolute;\r\n    top: 7px;\r\n    left: 14%;\r\n} */\r\n.contain input {\r\n    position:  absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n}\r\n.checkmark {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width:  20px;\r\n    height: 20px;\r\n    background: rgb(153, 151, 151);\r\n}\r\n.contain:hover input~.checkmark, .contain input:checked ~ .checkmark {\r\n    background: #77b2bf;\r\n}\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n.contain input:checked ~ .checkmark:after {\r\n    display: block;\r\n}\r\n.contain .checkmark:after {\r\n    left: 7px;\r\n    top: 0;\r\n    width: 7px;\r\n    height: 15px;\r\n    border: solid white;\r\n    border-width: 0 3px 3px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}"

/***/ }),

/***/ "./src/app/form-directive/template/form-directive.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\r\n  <h1>Demo form</h1>\r\n  <p><span myUnderline>Hover it!</span></p>\r\n  <div *myIf=\"false\">\r\n    Inside ifffffff\r\n  </div>\r\n  <form #nameForm=\"ngForm\">\r\n    <input type=\"text\" myUnderline name=\"name\" #name=\"ngModel\" [(ngModel)]=\"title\">\r\n    {{nameForm.valid}}\r\n  </form>\r\n</div> [hidden]=\"submitted\"-->\r\n<div class=\"container\">\r\n  <h1>Demo form</h1>\r\n  <form #nameForm=\"ngForm\" novalidate>\r\n    <div [hidden]=\"nameForm.submitted\">\r\n      <div class=\"form-group\">\r\n        <input myUnderline class=\"form-control\" id=\"name\" type=\"text\" name=\"name\" #name=\"ngModel\"\r\n         [(ngModel)]=\"hero.name\" required>\r\n        <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\r\n         class=\"alert alert-danger\">\r\n          <div *ngIf=\"name.errors.required\">\r\n            Name is required.\r\n          </div>\r\n          <div *ngIf=\"name.errors.minLengthName\">\r\n            Name must be at least 4 characters long.\r\n          </div>\r\n          <div *ngIf=\"name.errors.maxLengthName\">\r\n            Name must has max length 20 characters long.\r\n          </div>\r\n        </div>\r\n      </div> \r\n      \r\n      <div class=\"form-group\">\r\n        <label for=\"pass1\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"pass1\" name=\"password\" [ngModel]=\"hero.password\" #password=\"ngModel\" validateEqual=\"confirmPassword\" reverse=\"true\" required>\r\n        <small [hidden]=\"!password.touched || password.valid || (password.pristine &&    \r\n          !nameForm.submitted)\">\r\n          Password is required\r\n        </small>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"pass2\">Confirm Password</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"pass2\" name=\"confirmPassword\" \r\n        [ngModel]=\"hero.confirmPassword\" #confirmPassword=\"ngModel\" required validateEqual=\"password\">\r\n        <small [hidden]=\"confirmPassword.valid ||  \r\n          (confirmPassword.pristine && !nameForm.submitted)\">\r\n          Password mismatch\r\n        </small>\r\n      </div>\r\n\r\n      <div class=\"from-group\">\r\n        <label for=\"alter_ego\">Alter Ego</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"alter_ego\"  name=\"alterEgo\">\r\n      </div>\r\n      \r\n      <div class=\"form-group\">\r\n        <label for=\"age\">Age</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"age\" pattern=\"^[0-9]*$\" name=\"age\" ngModel>\r\n      </div>\r\n      \r\n      <div class=\"form-group\">\r\n        <label for=\"power\">Hero Power</label>\r\n        <select class=\"form-control\" id=\"power\" required name=\"power\" [(ngModel)]=\"hero.power\" #power=\"ngModel\">\r\n          <option *ngFor=\"let p of powers\" [value]=\"p\">{{p}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"power.errors && power.touched\" class=\"alert alert-danger\">\r\n      <div *ngIf=\"power.errors.required\">Power is required.</div>\r\n    </div>\r\n\r\n    <!-- <div class=\"form-group\">\r\n      <label for=\"powerTypes\">Hero Power Type</label>\r\n      <select class=\"form-control\" id=\"powerTypes\" required \r\n         name=\"selectTypes\" #selectTypes=\"ngModel\" ngModel \r\n         (change)=changeList($event.target.value)>\r\n        <option *ngFor=\"let pow of powersType\" [value]=\"pow.Type\">{{pow.Type}}</option>\r\n      </select>\r\n      <div class=\"form-control\" id=\"powers\">\r\n        <div *ngIf=\"listPoTypeTemp.length > 0\">\r\n          <div *ngFor=\"let po of listPoTypeTemp\">\r\n            <div class=\"left\" ngModelGroup =\"checkbox\">\r\n                <label class=\"contain\">\r\n                    <input changeListBox type=\"checkbox\" #cbox=\"ngModel\" name=\"cbox\" ngModel> {{ po.content }}\r\n                    <span class=\"checkmark\"></span>\r\n                </label>\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div [class.invalid]=\"!selectTypes.valid\" *ngIf=\"!selectTypes.valid\">\r\n          checkbox group is required!\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <!-- <pre>{{ nameForm.value | json }}</pre> -->\r\n    <input type=\"file\" class=\"btn\" (change)=\"onChangeFile($event)\">\r\n    <img [src]=\"url\">\r\n    <div>\r\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"nameForm.reset({})\">New Hero</button>\r\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"nameForm.invalid\">Submit</button>\r\n    </div>\r\n\r\n    <div class=\"submitted-message\" *ngIf=\"nameForm.submitted\">\r\n      <p>You've submitted your hero, {{ nameForm.value.name }}!</p>\r\n      <button (click)=\"nameForm.resetForm({})\">Add new hero</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/form-directive/template/form-directive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormDirectiveComponent; });
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

var FormDirectiveComponent = /** @class */ (function () {
    function FormDirectiveComponent() {
        this.powers = ['Smart', 'fast', 'fire'];
        this.hero = { name: 'D. Saw', password: '', confirmPassword: '', alterEgo: 'Dr. Why', power: this.powers[0] };
        this.url = '';
        this.powersType = [
            { Type: 'smart' },
            { Type: 'Nature' }
        ];
        //demo list checkbox show from clicked select box      
        this.listPowerType = [
            { Type: 'smart', id: 1, content: 'sport' },
            { Type: 'smart', id: 2, content: 'tech' },
            { Type: 'Nature', id: 1, content: 'fire' },
            { Type: 'Nature', id: 2, content: 'wind' }
        ];
        this.listPoTypeTemp = [];
        this.group2 = [];
    }
    FormDirectiveComponent.prototype.ngOnInit = function () {
        this.selectedOptions();
    };
    FormDirectiveComponent.prototype.selectedOptions = function () {
        this.listPoTypeTemp = [];
        this.group2 = [];
        if (this.listPoTypeTemp.length <= 0) {
            for (var i = 0; i < this.listPowerType.length; i++) {
                if (this.selectBox === this.listPowerType[i].Type) {
                    this.listPoTypeTemp.push(this.listPowerType[i]);
                }
            }
            ;
        }
    };
    FormDirectiveComponent.prototype.onChangeFile = function (event) {
        var _this = this;
        //console.log(event);
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    FormDirectiveComponent.prototype.changeList = function (selectBox) {
        console.log(this.listPowerType);
        this.listPoTypeTemp = [];
        this.group2 = [];
        if (this.listPoTypeTemp.length <= 0) {
            for (var i = 0; i < this.listPowerType.length; i++) {
                if (selectBox === this.listPowerType[i].Type) {
                    this.listPoTypeTemp.push(this.listPowerType[i]);
                }
            }
            ;
        }
        return this.listPoTypeTemp;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], FormDirectiveComponent.prototype, "selectBox", void 0);
    FormDirectiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-form-directive',
            template: __webpack_require__("./src/app/form-directive/template/form-directive.component.html"),
            styles: [__webpack_require__("./src/app/form-directive/template/form-directive.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormDirectiveComponent);
    return FormDirectiveComponent;
}());



/***/ }),

/***/ "./src/app/heroes/hero-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hero_service__ = __webpack_require__("./src/app/heroes/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations__ = __webpack_require__("./src/app/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeroDetailComponent = /** @class */ (function () {
    function HeroDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hero$ = this.route.paramMap.switchMap(function (params) { return _this.service.getHero(params.get('id')); });
        // let id = this.route.snapshot.paramMap.get('id');
        // this.hero$ = this.service.getHeroes(id);
    };
    // gotoHeroes() {
    // 	this.router.navigate(['/heroes']);
    // }
    HeroDetailComponent.prototype.gotoHeroes = function (hero) {
        var heroId = hero ? hero.id : null;
        // Pass along the hero id if available
        // so that the HeroList component can select that hero.
        // Include a junk 'foo' property for fun.
        this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
    };
    HeroDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/heroes/heroes.component.html"),
            styles: [__webpack_require__("./src/app/heroes/heroes.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_4__animations__["a" /* slideInDownAnimation */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__hero_service__["a" /* HeroService */]])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());



/***/ }),

/***/ "./src/app/heroes/hero-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hero_service__ = __webpack_require__("./src/app/heroes/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroListComponent = /** @class */ (function () {
    function HeroListComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    HeroListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroes$ = this.route.paramMap.switchMap(function (params) {
            // (+) before `params.get()` turns the string into a number
            _this.selectedId = +params.get('id');
            return _this.service.getHeroes();
        });
    };
    HeroListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            //selector: 'app-heroes',
            //templateUrl: './heroes.component.html',
            template: "\n    <h2>HEROES</h2>\n    <ul class=\"items\">\n      <li *ngFor=\"let hero of heroes$ | async\"\n        [class.selected]=\"hero.id === selectedId\">\n        <a [routerLink]=\"['/hero', hero.id]\">\n          <span class=\"badge\">{{ hero.id }}</span>{{ hero.name }}\n        </a>\n      </li>\n    </ul>\n\n    <button routerLink=\"/sidekicks\">Go to sidekicks</button>\n  ",
            styles: [__webpack_require__("./src/app/heroes/heroes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__hero_service__["a" /* HeroService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], HeroListComponent);
    return HeroListComponent;
}());



/***/ }),

/***/ "./src/app/heroes/hero.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Hero */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Hero = /** @class */ (function () {
    function Hero(id, name) {
        this.id = id;
        this.name = name;
    }
    return Hero;
}());

var HEROES = [
    new Hero(11, 'Mr. T'),
    new Hero(12, 'Narcoo'),
    new Hero(13, 'Bombasto'),
    new Hero(14, 'Celeritas'),
    new Hero(15, 'Magneta'),
    new Hero(16, 'RubberMan')
];
var HeroService = /** @class */ (function () {
    function HeroService() {
    }
    HeroService.prototype.getHeroes = function () { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(HEROES); };
    HeroService.prototype.getHero = function (id) {
        return this.getHeroes().map(function (heroes) { return heroes.find(function (hero) { return hero.id === +id; }); });
    };
    HeroService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])()
    ], HeroService);
    return HeroService;
}());



/***/ }),

/***/ "./src/app/heroes/heroes-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hero_list_component__ = __webpack_require__("./src/app/heroes/hero-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hero_detail_component__ = __webpack_require__("./src/app/heroes/hero-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var heroesRoutes = [
    { path: 'heroes', component: __WEBPACK_IMPORTED_MODULE_2__hero_list_component__["a" /* HeroListComponent */] },
    { path: 'hero/:id', component: __WEBPACK_IMPORTED_MODULE_3__hero_detail_component__["a" /* HeroDetailComponent */] }
];
var HeroRoutingModule = /** @class */ (function () {
    function HeroRoutingModule() {
    }
    HeroRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(heroesRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], HeroRoutingModule);
    return HeroRoutingModule;
}());



/***/ }),

/***/ "./src/app/heroes/heroes.component.css":
/***/ (function(module, exports) {

module.exports = ".items {\r\n\tmargin: 0 0 2em 0;\r\n\tpadding: 0;\r\n\twidth: 25em;\r\n}\r\n.items li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: 15px 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.items li a {\r\n  display: block;\r\n  position: absolute;\r\n  top: 0px;\r\n  width: 100%;\r\n}\r\n.items .badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 18px 0.7em;\r\n    background-color: #608b65;\r\n    line-height: 1em;\r\n    left: -1px;\r\n    top: -14px;\r\n    height: 1.8em;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n}\r\n.items li a {\r\n\tdisplay: block;\r\n}\r\n.items li:hover {background: #ccc;}\r\n.items a:link {color: #607D8B; }"

/***/ }),

/***/ "./src/app/heroes/heroes.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Todo List</h2>\r\n<div *ngIf=\"hero$ | async as hero\">\r\n  <h3>\"{{ hero.name }}\"</h3>\r\n  <div>\r\n  \t<label>Id: {{ hero.id }}</label>\r\n  </div>\r\n  <div>\r\n  \t<label>Name: </label>\r\n  \t<textarea placeholder=\"name\" [(ngModel)]=\"hero.name\"></textarea> \r\n  </div>\r\n  <p>\r\n  \t<button (click)=\"gotoHeroes(hero)\">Back</button>\r\n  </p>\r\n</div>"

/***/ }),

/***/ "./src/app/heroes/heroes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hero_list_component__ = __webpack_require__("./src/app/heroes/hero-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hero_detail_component__ = __webpack_require__("./src/app/heroes/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hero_service__ = __webpack_require__("./src/app/heroes/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__heroes_routing_module__ = __webpack_require__("./src/app/heroes/heroes-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HeroesModule = /** @class */ (function () {
    function HeroesModule() {
    }
    HeroesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__heroes_routing_module__["a" /* HeroRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__hero_list_component__["a" /* HeroListComponent */],
                __WEBPACK_IMPORTED_MODULE_4__hero_detail_component__["a" /* HeroDetailComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__hero_service__["a" /* HeroService */]]
        })
    ], HeroesModule);
    return HeroesModule;
}());



/***/ }),

/***/ "./src/app/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: '<h2>Page not found</h2>'
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/todo-list/detail/detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo-list/detail/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  detail works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/todo-list/detail/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
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

var DetailComponent = /** @class */ (function () {
    function DetailComponent() {
    }
    DetailComponent.prototype.ngOnInit = function () {
    };
    DetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-detail',
            template: __webpack_require__("./src/app/todo-list/detail/detail.component.html"),
            styles: [__webpack_require__("./src/app/todo-list/detail/detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/todo-list/todo-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_list_service__ = __webpack_require__("./src/app/todo-list/todo-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoListDetailComponent = /** @class */ (function () {
    function TodoListDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    TodoListDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.task$ = this.route.paramMap.switchMap(function (params) { return _this.service.getTask(params.get('id')); });
    };
    TodoListDetailComponent.prototype.gotoTodoList = function (task) {
        var taskId = task ? task.id : null;
        this.router.navigate(['/todoList', { id: taskId }]);
    };
    TodoListDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/todo-list/todo-list.component.html"),
            styles: [__webpack_require__("./src/app/todo-list/todo-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__todo_list_service__["a" /* TodoService */]])
    ], TodoListDetailComponent);
    return TodoListDetailComponent;
}());



/***/ }),

/***/ "./src/app/todo-list/todo-list-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_list_component__ = __webpack_require__("./src/app/todo-list/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_detail_component__ = __webpack_require__("./src/app/todo-list/todo-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var todoListRoutes = [
    { path: 'todoList', component: __WEBPACK_IMPORTED_MODULE_2__todo_list_component__["a" /* TodoListComponent */] },
    { path: 'task/:id', component: __WEBPACK_IMPORTED_MODULE_3__todo_detail_component__["a" /* TodoListDetailComponent */] }
];
var TodoListRoutingModule = /** @class */ (function () {
    function TodoListRoutingModule() {
    }
    TodoListRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(todoListRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], TodoListRoutingModule);
    return TodoListRoutingModule;
}());



/***/ }),

/***/ "./src/app/todo-list/todo-list.component.css":
/***/ (function(module, exports) {

module.exports = ".contain {\r\n    display:  block;\r\n    width:  30px;\r\n    height:  30px;\r\n    position:  relative;\r\n    top: -15px;\r\n}\r\n.todo li a {\r\n    position: absolute;\r\n    top: 7px;\r\n    left: 14%;\r\n}\r\n.contain input {\r\n    position:  absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n}\r\n.checkmark {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width:  100%;\r\n    height: 100%;\r\n    background: #77bfaf;\r\n}\r\n.contain:hover input~.checkmark {\r\n    background: #77b2bf;\r\n\r\n}\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n.contain input:checked ~ .checkmark:after {\r\n    display: block;\r\n}\r\n.contain .checkmark:after {\r\n    left: 10px;\r\n    top: 4px;\r\n    width: 10px;\r\n    height: 19px;\r\n    border: solid white;\r\n    border-width: 0 3px 3px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}"

/***/ }),

/***/ "./src/app/todo-list/todo-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Todo List</h2>\r\n<div *ngIf=\"task$ | async as task\">\r\n\t<div>\r\n\t\t<label for=\"\">Id: {{ task.id }}</label>\r\n\t</div>\r\n\t<div>\r\n\t\t<label>content: </label>\r\n\t\t<input [(ngModel)]=\"task.content\" />\r\n\t</div>\r\n\t<button (click)=\"gotoTodoList(task)\">Back</button>\r\n</div>"

/***/ }),

/***/ "./src/app/todo-list/todo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_list_service__ = __webpack_require__("./src/app/todo-list/todo-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tasks$ = this.route.paramMap.switchMap(function (params) {
            _this.selectedId = +params.get('id');
            return _this.service.getTasks();
        });
    };
    TodoListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            //selector: 'app-todo-list',
            template: "\n    <h2>To do List</h2>\n    <ul class=\"items todo\">\n      <li *ngFor=\"let task of tasks$ | async\"\n        [class.selected]=\"task.id === selectedId\">\n        <label class=\"contain\">\n          <input type=\"checkbox\" id=\"#{{ task.id }}\" />\n          <span class=\"checkmark\"></span>\n        </label>\n        <a [routerLink]=\"['/task', task.id]\">\n          <!--<span class=\"badge\">{{ task.id }}</span>-->\n          {{ task.content }}\n        </a>\n      </li>\n    </ul>\n  ",
            styles: [__webpack_require__("./src/app/heroes/heroes.component.css"), __webpack_require__("./src/app/todo-list/todo-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__todo_list_service__["a" /* TodoService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/todo-list/todo-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_list_component__ = __webpack_require__("./src/app/todo-list/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todo_detail_component__ = __webpack_require__("./src/app/todo-list/todo-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todo_list_service__ = __webpack_require__("./src/app/todo-list/todo-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todo_list_routing_module__ = __webpack_require__("./src/app/todo-list/todo-list-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__detail_detail_component__ = __webpack_require__("./src/app/todo-list/detail/detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TodoListModule = /** @class */ (function () {
    function TodoListModule() {
    }
    TodoListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__todo_list_routing_module__["a" /* TodoListRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__todo_list_component__["a" /* TodoListComponent */],
                __WEBPACK_IMPORTED_MODULE_4__todo_detail_component__["a" /* TodoListDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_7__detail_detail_component__["a" /* DetailComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__todo_list_service__["a" /* TodoService */]]
        })
    ], TodoListModule);
    return TodoListModule;
}());



/***/ }),

/***/ "./src/app/todo-list/todo-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Todo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Todo = /** @class */ (function () {
    function Todo(id, content) {
        this.id = id;
        this.content = content;
    }
    return Todo;
}());

var TODOLIST = [
    new Todo(1, 'work1'),
    new Todo(2, 'work2'),
    new Todo(3, 'work3'),
    new Todo(4, 'work4'),
    new Todo(5, 'work5'),
    new Todo(6, 'work6'),
    new Todo(7, 'work7'),
    new Todo(8, 'work8'),
    new Todo(9, 'work9'),
    new Todo(10, 'work10')
];
var TodoService = /** @class */ (function () {
    function TodoService() {
    }
    TodoService.prototype.getTasks = function () { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(TODOLIST); };
    TodoService.prototype.getTask = function (id) {
        return this.getTasks().map(function (tasks) { return tasks.find(function (task) { return task.id === +id; }); });
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])()
    ], TodoService);
    return TodoService;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
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