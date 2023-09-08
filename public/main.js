"use strict";
(self["webpackChunkangular_src"] = self["webpackChunkangular_src"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var simple_flash_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simple-flash-message */ 5583);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 953);
var _class;




class AppComponent {
  constructor() {
    this.title = 'app works!';
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 3,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar")(1, "app-flash")(2, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, simple_flash_message__WEBPACK_IMPORTED_MODULE_3__.FlashComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   tokenGetter: () => (/* binding */ tokenGetter)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @auth0/angular-jwt */ 2401);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var simple_flash_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! simple-flash-message */ 5583);
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/validate.service */ 4042);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ 2333);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 953);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ 6666);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ 6560);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ 159);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile/profile.component */ 7395);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 3113);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/auth.guard */ 1391);
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/admin.guard */ 5336);
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/products/products.component */ 9510);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;
























function tokenGetter() {
  return localStorage.getItem("id_token");
}
const appRoutes = [{
  path: '',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent
}, {
  path: 'register',
  component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__.RegisterComponent
}, {
  path: 'login',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent
}, {
  path: 'profile',
  component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__.ProfileComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard]
}, {
  path: 'dashboard',
  component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__.DashboardComponent,
  canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_10__.AdminGuard]
}];
class AppModule {
  constructor(library) {
    library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faStarOfLife);
  }
}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FaIconLibrary));
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
  providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_0__.ValidateService, _services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService, _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forRoot(appRoutes), _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FontAwesomeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, simple_flash_message__WEBPACK_IMPORTED_MODULE_18__.FlashModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_20__.JwtModule.forRoot({
    config: {
      tokenGetter: tokenGetter
    }
  }), _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__.RegisterComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent, _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__.ProfileComponent, _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__.DashboardComponent, _components_products_products_component__WEBPACK_IMPORTED_MODULE_11__.ProductsComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FontAwesomeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, simple_flash_message__WEBPACK_IMPORTED_MODULE_18__.FlashModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_20__.JwtModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule]
  });
})();

/***/ }),

/***/ 3113:
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;



class DashboardComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    this.authService.admin().subscribe(profile => {
      this.user = profile;
    }, err => {
      console.log(err);
      return false;
    });
  }
}
_class = DashboardComponent;
_class.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-dashboard"]],
  decls: 4,
  vars: 1,
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "AS");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("dashboard works! ", ctx.user, "");
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 159:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../products/products.component */ 9510);
var _class;



class HomeComponent {
  constructor() {
    this.faStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faStar;
  }
}
_class = HomeComponent;
_class.ɵfac = function HomeComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-home"]],
  decls: 1,
  vars: 0,
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-products");
    }
  },
  dependencies: [_products_products_component__WEBPACK_IMPORTED_MODULE_0__.ProductsComponent],
  styles: [".nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\n    margin-bottom: 3px;\n    color: black;\n    font-size: large;\n    font-family: monospace;\n    font-weight: 900    ;\n}\n.nav-link.active[_ngcontent-%COMP%]{\n    background-color: orange;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QiIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtcGlsbHMgLm5hdi1saW5re1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBmb250LXdlaWdodDogOTAwICAgIDtcclxufVxyXG4ubmF2LWxpbmsuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6666:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var simple_flash_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simple-flash-message */ 5583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
var _class;





class LoginComponent {
  constructor(authService, router, flashMessage) {
    this.authService = authService;
    this.router = router;
    this.flashMessage = flashMessage;
  }
  ngOnInit() {}
  onLoginSubmit() {
    const user = {
      email: this.email,
      password: this.password
    };
    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.showFlash("success", "Başarılı!", "Başarıyla giriş yapıldı.");
        this.router.navigate(['profile']);
      } else {
        this.flashMessage.showFlash("error", "Hata!", data.msg);
        this.router.navigate(['login']);
      }
    });
  }
}
_class = LoginComponent;
_class.ɵfac = function LoginComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](simple_flash_message__WEBPACK_IMPORTED_MODULE_3__.FlashService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-login"]],
  decls: 12,
  vars: 2,
  consts: [[1, "d-flex", "justify-content-center", 3, "submit"], [1, "col-12", "col-xl-4", "col-xxl-4", "col-lg-4", "col-md-6", "col-sm-9", "mt-5"], [1, "mb-3"], ["for", "inputEmail", 1, "form-label"], ["type", "email", "id", "inputEmail", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputPassword", 1, "form-label"], ["type", "password", "id", "inputPassword", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-warning", "col-2"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_0_listener() {
        return ctx.onLoginSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2)(7, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u015Eifre");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) {
        return ctx.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Giri\u015F");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 953:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var simple_flash_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! simple-flash-message */ 5583);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
var _class;







const _c0 = function () {
  return ["active"];
};
const _c1 = function () {
  return ["/profile"];
};
function NavbarComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 10)(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1));
  }
}
const _c2 = function () {
  return ["/dashboard"];
};
function NavbarComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 10)(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c2));
  }
}
function NavbarComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 12)(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_li_11_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onLogoutClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00C7\u0131k\u0131\u015F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
const _c3 = function () {
  return ["/register"];
};
function NavbarComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 10)(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Kay\u0131t");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c3));
  }
}
const _c4 = function () {
  return ["/login"];
};
function NavbarComponent_li_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 10)(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Giri\u015F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c4));
  }
}
const _c5 = function () {
  return ["/"];
};
class NavbarComponent {
  constructor(authService, router, flashMessage) {
    this.authService = authService;
    this.router = router;
    this.flashMessage = flashMessage;
    this.faBowlFood = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faBowlFood;
  }
  ngOnInit() {}
  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.showFlash('success', 'Başarılı!', "Başarıyla çıkış yapıldı.");
  }
}
_class = NavbarComponent;
_class.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](simple_flash_message__WEBPACK_IMPORTED_MODULE_4__.FlashService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-navbar"]],
  decls: 14,
  vars: 8,
  consts: [[1, "navbar", "navbar-expand-lg", "bg-body-tertiary", "sticky-top"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand", "ms-5", "font-ys", "color-ys-red", 3, "routerLink"], [3, "icon"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", "ms-auto", "me-5"], ["class", "nav-item", 3, "routerLinkActive", 4, "ngIf"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item", 3, "routerLinkActive"], [1, "nav-link", "color-ys-red", 3, "routerLink"], [1, "nav-item"], [1, "nav-link", "color-ys", 3, "click"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "fa-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " YemekSipari\u015F");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NavbarComponent_li_9_Template, 3, 4, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NavbarComponent_li_10_Template, 3, 4, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, NavbarComponent_li_11_Template, 3, 0, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, NavbarComponent_li_12_Template, 3, 4, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NavbarComponent_li_13_Template, 3, 4, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c5));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faBowlFood);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn() && !ctx.authService.admin());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.authService.loggedIn());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.authService.loggedIn());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FaIconComponent],
  styles: [".active[_ngcontent-%COMP%]{\n    font-weight: bold;\n}\n\n.navbar[_ngcontent-%COMP%]{\n    box-shadow:         0px 4px 8px 0px rgba(197,22,5,1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFHSSxvREFBb0Q7QUFDeEQiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5uYXZiYXJ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggOHB4IDBweCByZ2JhKDE5NywyMiw1LDEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAgICAwcHggNHB4IDhweCAwcHggcmdiYSgxOTcsMjIsNSwxKTtcclxuICAgIGJveC1zaGFkb3c6ICAgICAgICAgMHB4IDRweCA4cHggMHB4IHJnYmEoMTk3LDIyLDUsMSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9510:
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsComponent: () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;


class ProductsComponent {
  constructor() {
    this.faStarOfLife = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faStarOfLife;
    this.faCaretDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCaretDown;
  }
}
_class = ProductsComponent;
_class.ɵfac = function ProductsComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-products"]],
  decls: 85,
  vars: 0,
  consts: [["id", "carouselExampleCaptions", 1, "carousel", "slide", "ms-auto", "me-auto", 2, "width", "100%"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide-to", "2", "aria-label", "Slide 3"], [1, "carousel-inner"], [1, "carousel-item", "active", 2, "height", "60vh"], ["src", "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg", "alt", "...", 1, "d-block", "w-100", 2, "height", "60vh"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "carousel-item", 2, "height", "60vh"], ["src", "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000", "alt", "...", 1, "d-block", "w-100", 2, "height", "60vh"], ["src", "https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg", "alt", "...", 1, "d-block", "w-100", 2, "height", "60vh"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "d-block"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "mb-3", "mt-3", "justify-content-center"], ["role", "presentation", 1, "nav-item"], ["id", "pills-home-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-home", "type", "button", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-profile-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-profile", "type", "button", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "false", 1, "nav-link"], ["id", "pills-contact-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-contact", "type", "button", "role", "tab", "aria-controls", "pills-contact", "aria-selected", "false", 1, "nav-link"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", "tabindex", "0", 1, "tab-pane", "fade", "show", "active"], [2, "background-color", "#eee"], [1, "container", "py-5"], [1, "row"], [1, "col-md-6", "col-lg-4", "mb-4", "mb-md-0", "mt-3"], [1, "card", "d-flex", 2, "width", "18rem"], ["src", "...", "alt", "...", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["href", "#", 1, "btn", "btn-primary", "ms-auto"], [1, "card", 2, "width", "18rem"], ["href", "#", 1, "btn", "btn-primary", "ms-auto", "me-auto"], ["href", "#", 1, "btn", "btn-primary"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", "tabindex", "0", 1, "tab-pane", "fade"], ["id", "pills-contact", "role", "tabpanel", "aria-labelledby", "pills-contact-tab", "tabindex", "0", 1, "tab-pane", "fade"]],
  template: function ProductsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "button", 2)(3, "button", 3)(4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8)(9, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "First slide label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Some representative placeholder content for the first slide.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8)(16, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Second slide label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Some representative placeholder content for the second slide.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8)(23, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Third slide label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Some representative placeholder content for the third slide.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Previous");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 17)(36, "ul", 18)(37, "li", 19)(38, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li", 19)(41, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li", 19)(44, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 23)(47, "div", 24)(48, "section", 25)(49, "div", 26)(50, "div", 27)(51, "div", 28)(52, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "img", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 31)(55, "h5", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Card title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Some quick example text to build on the card title and make up the bulk of the card's content. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Go somewhere");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 28)(62, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "img", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 31)(65, "h5", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Card title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " Some quick example text to build on the card title and make up the bulk of the card's content. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Go somewhere");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 28)(72, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "img", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 31)(75, "h5", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Card title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "p", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Go somewhere");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " ... ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " ... ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
  },
  styles: [".nav-link[_ngcontent-%COMP%]{\n    color: #C51605 !important;\n    border-color: #C51605 !important;\n    border-width: 1.2px;\n    border-style: solid;\n    margin-right: 5px;\n    \n}\n\n.nav-link.active[_ngcontent-%COMP%]{\n    color: white !important;\n    background-color: #C51605 !important;\n}\n\n.item-1[_ngcontent-%COMP%], .item-2[_ngcontent-%COMP%], .item-3[_ngcontent-%COMP%] {\n\tposition: absolute;\n  display: block;\n\ttop: 2em;\n  \n  width: 60%;\n  \n  font-size: 2em;\n\n\tanimation-duration: 20s;\n\tanimation-timing-function: ease-in-out;\n\tanimation-iteration-count: infinite;\n}\n\n.item-1[_ngcontent-%COMP%]{\n\tanimation-name: _ngcontent-%COMP%_anim-1;\n}\n\n.item-2[_ngcontent-%COMP%]{\n\tanimation-name: _ngcontent-%COMP%_anim-2;\n}\n\n.item-3[_ngcontent-%COMP%]{\n\tanimation-name: _ngcontent-%COMP%_anim-3;\n}\n\n@keyframes _ngcontent-%COMP%_anim-1 {\n\t0%, 8.3% { left: -100%; opacity: 0; }\n  8.3%,25% { left: 25%; opacity: 1; }\n  33.33%, 100% { left: 110%; opacity: 0; }\n}\n\n@keyframes _ngcontent-%COMP%_anim-2 {\n\t0%, 33.33% { left: -100%; opacity: 0; }\n  41.63%, 58.29% { left: 25%; opacity: 1; }\n  66.66%, 100% { left: 110%; opacity: 0; }\n}\n\n@keyframes _ngcontent-%COMP%_anim-3 {\n\t0%, 66.66% { left: -100%; opacity: 0; }\n  74.96%, 91.62% { left: 25%; opacity: 1; }\n  100% { left: 110%; opacity: 0; }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsb0NBQW9DO0FBQ3hDOztBQUVBOzs7Q0FHQyxrQkFBa0I7RUFDakIsY0FBYztDQUNmLFFBQVE7O0VBRVAsVUFBVTs7RUFFVixjQUFjOztDQUVmLHVCQUF1QjtDQUN2QixzQ0FBc0M7Q0FDdEMsbUNBQW1DO0FBQ3BDOztBQUVBO0NBQ0Msc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0Msc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0Msc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsV0FBVyxXQUFXLEVBQUUsVUFBVSxFQUFFO0VBQ25DLFdBQVcsU0FBUyxFQUFFLFVBQVUsRUFBRTtFQUNsQyxlQUFlLFVBQVUsRUFBRSxVQUFVLEVBQUU7QUFDekM7O0FBRUE7Q0FDQyxhQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUU7RUFDckMsaUJBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUU7RUFDeEMsZUFBZSxVQUFVLEVBQUUsVUFBVSxFQUFFO0FBQ3pDOztBQUVBO0NBQ0MsYUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFO0VBQ3JDLGlCQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFO0VBQ3hDLE9BQU8sVUFBVSxFQUFFLFVBQVUsRUFBRTtBQUNqQyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGlua3tcclxuICAgIGNvbG9yOiAjQzUxNjA1ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNDNTE2MDUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci13aWR0aDogMS4ycHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBcclxufVxyXG5cclxuLm5hdi1saW5rLmFjdGl2ZXtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M1MTYwNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXRlbS0xLCBcclxuLml0ZW0tMiwgXHJcbi5pdGVtLTMge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuXHR0b3A6IDJlbTtcclxuICBcclxuICB3aWR0aDogNjAlO1xyXG4gIFxyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG5cclxuXHRhbmltYXRpb24tZHVyYXRpb246IDIwcztcclxuXHRhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuXHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuLml0ZW0tMXtcclxuXHRhbmltYXRpb24tbmFtZTogYW5pbS0xO1xyXG59XHJcblxyXG4uaXRlbS0ye1xyXG5cdGFuaW1hdGlvbi1uYW1lOiBhbmltLTI7XHJcbn1cclxuXHJcbi5pdGVtLTN7XHJcblx0YW5pbWF0aW9uLW5hbWU6IGFuaW0tMztcclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltLTEge1xyXG5cdDAlLCA4LjMlIHsgbGVmdDogLTEwMCU7IG9wYWNpdHk6IDA7IH1cclxuICA4LjMlLDI1JSB7IGxlZnQ6IDI1JTsgb3BhY2l0eTogMTsgfVxyXG4gIDMzLjMzJSwgMTAwJSB7IGxlZnQ6IDExMCU7IG9wYWNpdHk6IDA7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltLTIge1xyXG5cdDAlLCAzMy4zMyUgeyBsZWZ0OiAtMTAwJTsgb3BhY2l0eTogMDsgfVxyXG4gIDQxLjYzJSwgNTguMjklIHsgbGVmdDogMjUlOyBvcGFjaXR5OiAxOyB9XHJcbiAgNjYuNjYlLCAxMDAlIHsgbGVmdDogMTEwJTsgb3BhY2l0eTogMDsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW0tMyB7XHJcblx0MCUsIDY2LjY2JSB7IGxlZnQ6IC0xMDAlOyBvcGFjaXR5OiAwOyB9XHJcbiAgNzQuOTYlLCA5MS42MiUgeyBsZWZ0OiAyNSU7IG9wYWNpdHk6IDE7IH1cclxuICAxMDAlIHsgbGVmdDogMTEwJTsgb3BhY2l0eTogMDsgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7395:
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;




function ProfileComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 2)(4, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.user.name, " ", ctx_r0.user.surname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Email: ", ctx_r0.user.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Birthdate: ", ctx_r0.user.birthdate, "");
  }
}
class ProfileComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    }, err => {
      console.log(err);
      return false;
    });
  }
}
_class = ProfileComponent;
_class.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-profile"]],
  decls: 3,
  vars: 1,
  consts: [[4, "ngIf"], [1, "page-header"], [1, "list-group"], [1, "list-group-item"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "profile works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileComponent_div_2_Template, 8, 4, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6560:
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/validate.service */ 4042);
/* harmony import */ var simple_flash_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simple-flash-message */ 5583);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
var _class;






class RegisterComponent {
  constructor(validateService, flashMessage, authService, router) {
    this.validateService = validateService;
    this.flashMessage = flashMessage;
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {}
  onRegisterSubmit() {
    const user = {
      email: this.email,
      name: this.name,
      surname: this.surname,
      password: this.password,
      adress: this.adress,
      birthdate: this.birthdate
    };
    // Validate Fields
    if (!this.validateService.validateRegister(user)) {
      this.flashMessage.showFlash("error", "Kontrol Hatası", "Tüm alanlar doldurulmalıdır.");
      return false;
    }
    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.showFlash("error", "Email Hatası", "Email adresi doğru şekilde girilmelidir.");
      return false;
    }
    this.authService.registerUser(user).subscribe(data => {
      console.log(data);
      if (data.success) {
        this.flashMessage.showFlash("success", "Başarılı", "Kaydınız başarıyla tamamnlandı. Sisteme giriş yapabilirsiniz.");
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.showFlash("error", "Hata", "Oops. Bir şeyler yanlış gitti.");
        this.router.navigate(['/register']);
      }
    });
    return true;
  }
}
_class = RegisterComponent;
_class.ɵfac = function RegisterComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_0__.ValidateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](simple_flash_message__WEBPACK_IMPORTED_MODULE_3__.FlashService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-register"]],
  decls: 44,
  vars: 6,
  consts: [[3, "submit"], [1, "row", "g-5", "justify-content-center", "mb-2", "mt-5", "align-items-center"], [1, "col-3", "col-lg-3", "col-sm-4"], [1, "col-form-label"], [1, "col-4", "col-lg-4", "col-sm-6", "col-xs-6"], ["type", "text", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "g-5", "justify-content-center", "mb-2", "align-items-center"], ["type", "password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "surname", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "adress", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "date", "name", "birthdate", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "g-1", "justify-content-center", "mb-2", "align-items-center", "mt-4"], [1, "col-3", "col-lg-3", "col-sm-3", "text-end"], ["type", "button", 1, "btn", "btn-danger"], [1, "col-3", "col-lg-3", "col-sm-3", "text-start"], ["type", "submit", 1, "btn", "btn-success"]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function RegisterComponent_Template_form_submit_0_listener() {
        return ctx.onRegisterSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "div", 2)(9, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u015Eifre");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4)(12, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_12_listener($event) {
        return ctx.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6)(14, "div", 2)(15, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Ad");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 4)(18, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_18_listener($event) {
        return ctx.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 6)(20, "div", 2)(21, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Soyad");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 4)(24, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_24_listener($event) {
        return ctx.surname = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 6)(26, "div", 2)(27, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Adres");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 4)(30, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_30_listener($event) {
        return ctx.adress = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 6)(32, "div", 2)(33, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Do\u011Fum Tarihi");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 4)(36, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_36_listener($event) {
        return ctx.birthdate = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 12)(38, "div", 13)(39, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Temizle");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 15)(42, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "G\u00F6nder");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.surname);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.adress);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.birthdate);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5336:
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminGuard: () => (/* binding */ AdminGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 2333);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;



class AdminGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    if (this.authService.admin()) {
      return true;
    } else {
      this.router.navigate(['profile']);
      return false;
    }
  }
}
_class = AdminGuard;
_class.ɵfac = function AdminGuard_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 1391:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 2333);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;



class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    if (this.authService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  canAdmin() {
    if (this.authService.admin()) {
      return true;
    } else {
      this.router.navigate(['profile']);
      return false;
    }
  }
}
_class = AuthGuard;
_class.ɵfac = function AuthGuard_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 2333:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ 2401);
var _class;




class AuthService {
  constructor(http, jwtHelper) {
    this.http = http;
    this.jwtHelper = jwtHelper;
  }
  registerUser(user) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
      'Content-Type': 'application/json',
      "Accept": "application/json"
    });
    return this.http.post('http://localhost:3000/register', user, {
      headers: headers
    });
  }
  authenticateUser(user) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
      'Content-Type': 'application/json',
      "Accept": "application/json"
    });
    return this.http.post('http://localhost:3000/login', user, {
      headers: headers
    });
  }
  getProfile() {
    this.loadToken();
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
      'Content-Type': 'application/json',
      "Accept": "application/json",
      'Authorization': this.authToken ? this.authToken : "noauth"
    });
    return this.http.get('http://localhost:3000/profile', {
      headers: headers
    });
  }
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    window.location.reload();
  }
  loggedIn() {
    return !this.jwtHelper.isTokenExpired();
  }
  admin() {
    this.loadToken();
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
      'Content-Type': 'application/json',
      "Accept": "application/json",
      'Authorization': this.authToken ? this.authToken : "noauth"
    });
    return this.http.get('http://localhost:3000/dashboard', {
      headers: headers
    });
  }
}
_class = AuthService;
_class.ɵfac = function AuthService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__.JwtHelperService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4042:
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidateService: () => (/* binding */ ValidateService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class ValidateService {
  constructor() {}
  validateRegister(user) {
    if (user.name == undefined || user.surname == undefined || user.adress == undefined || user.birthdate == undefined) {
      return false;
    } else {
      return true;
    }
  }
  validateEmail(email) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
  }
}
_class = ValidateService;
_class.ɵfac = function ValidateService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map