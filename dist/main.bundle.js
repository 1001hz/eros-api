webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"../../../../../src/app/auth/auth.module.ts",
		"auth.module"
	],
	"./cms/cms.module": [
		"../../../../../src/app/cms/cms.module.ts",
		"cms.module"
	],
	"./wedding/wedding.module": [
		"../../../../../src/app/wedding/wedding.module.ts",
		"wedding.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-config/api-routes.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiRoutes; });
var ApiRoutes = {
    login: {
        method: 'POST',
        path: '/login'
    },
    logout: {
        method: 'GET',
        path: '/logout'
    },
    tokenLogin: {
        method: 'POST',
        path: '/login/token'
    },
    signUp: {
        method: 'POST',
        path: '/user'
    },
    userUpdate: {
        method: 'PATCH',
        path: '/user'
    },
    resetPasswordLink: {
        method: 'POST',
        path: '/reset-password-link'
    },
    resetPassword: {
        method: 'POST',
        path: '/reset-password'
    },
    getWeddings: {
        method: 'GET',
        path: '/weddings'
    },
    addWedding: {
        method: 'POST',
        path: '/weddings'
    },
    updateWedding: {
        method: 'PATCH',
        path: '/weddings'
    },
    removeWedding: {
        method: 'DELETE',
        path: '/weddings'
    },
    getGuests: {
        method: 'GET',
        path: '/weddings/{weddingId}/guests'
    },
    validateInvitationCode: {
        method: 'GET',
        path: '/weddings/{weddingId}/invitation/{invitationId}'
    }
};


/***/ }),

/***/ "../../../../../src/app/app-config/app-config.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppConfigModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_routes_config__ = __webpack_require__("../../../../../src/app/app-config/api-routes.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var APP_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* InjectionToken */]('app.config');
var AppConfigModule = (function () {
    function AppConfigModule() {
    }
    AppConfigModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            providers: [{
                    provide: APP_CONFIG,
                    useValue: {
                        apiEndpoint: __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiEndpoint,
                        apiRoutes: __WEBPACK_IMPORTED_MODULE_2__api_routes_config__["a" /* ApiRoutes */],
                        tokenKey: 'user_token'
                    }
                }]
        })
    ], AppConfigModule);
    return AppConfigModule;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_resolvers_wedding_service__ = __webpack_require__("../../../../../src/app/shared/resolvers/wedding.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_guards_login_guard__ = __webpack_require__("../../../../../src/app/core/guards/login.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'wedding', loadChildren: './wedding/wedding.module#WeddingModule' },
    { path: 'cms', loadChildren: './cms/cms.module#CmsModule', canActivate: [__WEBPACK_IMPORTED_MODULE_5__core_guards_login_guard__["a" /* LoginGuard */]], resolve: {
            weddings: __WEBPACK_IMPORTED_MODULE_4__shared_resolvers_wedding_service__["a" /* WeddingResolve */]
        } }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes
                //{ enableTracing: true } // <-- debugging purposes only
                ),
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-loader></app-loader>\n</div>\n\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config_app_config_module__ = __webpack_require__("../../../../../src/app/app-config/app-config.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_reducers_user_reducer__ = __webpack_require__("../../../../../src/app/shared/reducers/user.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_reducers_wedding_reducer__ = __webpack_require__("../../../../../src/app/shared/reducers/wedding.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_reducers_guest_reducer__ = __webpack_require__("../../../../../src/app/shared/reducers/guest.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_reducers_auth_reducer__ = __webpack_require__("../../../../../src/app/shared/reducers/auth.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_reducers_account_reducer__ = __webpack_require__("../../../../../src/app/shared/reducers/account.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_effects_auth_effects_service__ = __webpack_require__("../../../../../src/app/shared/effects/auth-effects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_effects_user_effects_service__ = __webpack_require__("../../../../../src/app/shared/effects/user-effects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 // components, pipes, etc used in many templates, Material2 module
 // singletons, spinners, modals, man nav, anything that goes in the app template














var rootReducer = {
    user: __WEBPACK_IMPORTED_MODULE_10__shared_reducers_user_reducer__["c" /* userReducer */],
    weddings: __WEBPACK_IMPORTED_MODULE_11__shared_reducers_wedding_reducer__["d" /* weddingReducer */],
    guests: __WEBPACK_IMPORTED_MODULE_12__shared_reducers_guest_reducer__["c" /* guestReducer */],
    auth: __WEBPACK_IMPORTED_MODULE_13__shared_reducers_auth_reducer__["a" /* authReducer */],
    account: __WEBPACK_IMPORTED_MODULE_14__shared_reducers_account_reducer__["a" /* accountReducer */]
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_18__landing_landing_component__["a" /* LandingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_config_app_config_module__["b" /* AppConfigModule */],
                __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["i" /* StoreModule */].forRoot(rootReducer),
                __WEBPACK_IMPORTED_MODULE_8__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_15__shared_effects_auth_effects_service__["a" /* AuthEffects */], __WEBPACK_IMPORTED_MODULE_16__shared_effects_user_effects_service__["a" /* UserEffects */]]),
                __WEBPACK_IMPORTED_MODULE_19__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({
                    maxAge: 25 //  Retains last 25 states
                })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* unused harmony export onAppInit */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_material_module__ = __webpack_require__("../../../../../src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nav_nav_component__ = __webpack_require__("../../../../../src/app/core/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_api_service__ = __webpack_require__("../../../../../src/app/core/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("../../../../../src/app/core/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_toast_service__ = __webpack_require__("../../../../../src/app/core/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_wedding_service__ = __webpack_require__("../../../../../src/app/core/services/wedding.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_loader_service__ = __webpack_require__("../../../../../src/app/core/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__toast_toast_component__ = __webpack_require__("../../../../../src/app/core/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_login_guard__ = __webpack_require__("../../../../../src/app/core/guards/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_reset_password_guard__ = __webpack_require__("../../../../../src/app/core/guards/reset-password.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_module_import_guard__ = __webpack_require__("../../../../../src/app/core/guards/module-import.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__loader_loader_component__ = __webpack_require__("../../../../../src/app/core/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__interceptors_api_interceptor__ = __webpack_require__("../../../../../src/app/core/interceptors/api.interceptor.ts");
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


















var CoreModule = (function () {
    function CoreModule(parentModule) {
        Object(__WEBPACK_IMPORTED_MODULE_15__guards_module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'CoreModule');
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__material_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_16__loader_loader_component__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__toast_toast_component__["a" /* ToastComponent */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__nav_nav_component__["a" /* NavComponent */], __WEBPACK_IMPORTED_MODULE_12__toast_toast_component__["a" /* ToastComponent */], __WEBPACK_IMPORTED_MODULE_16__loader_loader_component__["a" /* LoaderComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_8__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_13__guards_login_guard__["a" /* LoginGuard */],
                __WEBPACK_IMPORTED_MODULE_14__guards_reset_password_guard__["a" /* ResetPasswordGuard */],
                __WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_10__services_wedding_service__["a" /* WeddingService */],
                __WEBPACK_IMPORTED_MODULE_11__services_loader_service__["a" /* LoaderService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* APP_INITIALIZER */],
                    useFactory: onAppInit,
                    multi: true,
                    deps: [__WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */]]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_17__interceptors_api_interceptor__["a" /* ApiInterceptor */],
                    multi: true,
                }
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());

function onAppInit(authService) {
    return function () { return authService.tokenLogin(); };
}


/***/ }),

/***/ "../../../../../src/app/core/guards/login.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/core/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginGuard = (function () {
    function LoginGuard(userService) {
        this.userService = userService;
    }
    LoginGuard.prototype.canActivate = function (next, state) {
        return this.userService.user.map(function (u) {
            return u._id ? true : false;
        }).first();
    };
    LoginGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "../../../../../src/app/core/guards/module-import.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "../../../../../src/app/core/guards/reset-password.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ResetPasswordGuard = (function () {
    function ResetPasswordGuard() {
    }
    ResetPasswordGuard.prototype.canActivate = function (next, state) {
        return next.params.token ? true : false;
    };
    ResetPasswordGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], ResetPasswordGuard);
    return ResetPasswordGuard;
}());



/***/ }),

/***/ "../../../../../src/app/core/interceptors/api.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/core/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loader_service__ = __webpack_require__("../../../../../src/app/core/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config_app_config_module__ = __webpack_require__("../../../../../src/app/app-config/app-config.module.ts");
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






var ApiInterceptor = (function () {
    function ApiInterceptor(_config, userService, loaderService) {
        var _this = this;
        this.userService = userService;
        this.loaderService = loaderService;
        this.config = _config;
        userService.user.subscribe(function (_user) { return _this.authToken = _user.token; });
    }
    ApiInterceptor.prototype.intercept = function (req, next) {
        // Clone the request to add the new header.
        var authReq = req.clone({ headers: req.headers.set('X-Auth-Token', this.authToken) });
        // CLone new request to add API endpoint
        var apiReq = authReq.clone({ url: "" + this.config.apiEndpoint + req.url });
        // Pass on the cloned request instead of the original request.
        return next.handle(apiReq)
            .catch(function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                console.log("From interceptor", err);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["b" /* Observable */].throw(err.message || 'Server error');
            }
        });
    };
    ApiInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__app_config_app_config_module__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_loader_service__["a" /* LoaderService */]])
    ], ApiInterceptor);
    return ApiInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/core/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading$|async\">\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/loader/loader.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_loader_service__ = __webpack_require__("../../../../../src/app/core/services/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        this.loading$ = this.loaderService.loading;
    };
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loader',
            template: __webpack_require__("../../../../../src/app/core/loader/loader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/loader/loader.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_loader_service__["a" /* LoaderService */]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [mat-menu-trigger-for]=\"menu\">\n  <mat-icon>more_vert</mat-icon>\n</button>\n<mat-menu x-position=\"before\" #menu=\"matMenu\">\n\n  <div>\n    <button [routerLink]=\"['auth', 'login']\" routerLinkActive=\"active\" mat-menu-item>Login</button>\n    <button [routerLink]=\"['auth', 'signup']\" routerLinkActive=\"active\" mat-menu-item>Signup</button>\n  </div>\n</mat-menu>\n"

/***/ }),

/***/ "../../../../../src/app/core/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/core/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = (function () {
    function NavComponent(userService, authService, router) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
    }
    NavComponent.prototype.ngOnInit = function () {
        this.user = this.userService.user;
    };
    NavComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/core/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toast_service__ = __webpack_require__("../../../../../src/app/core/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader_service__ = __webpack_require__("../../../../../src/app/core/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config_app_config_module__ = __webpack_require__("../../../../../src/app/app-config/app-config.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
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






var ApiService = (function () {
    function ApiService(loaderService, toastService, _config, store, http) {
        var _this = this;
        this.loaderService = loaderService;
        this.toastService = toastService;
        this.store = store;
        this.http = http;
        this.config = _config;
        store.select('user').subscribe(function (u) {
            _this.token = u.token;
        });
    }
    ApiService.prototype.makeHeaders = function () {
        //this.headers = new Headers({ 'Content-Type': 'application/json' });
        //this.headers.append('X-Auth-Token', this.token);
    };
    ApiService.prototype.insertDataInUrl = function (endpoint, data) {
        Object.keys(data).forEach(function (key) {
            endpoint = endpoint.replace('{' + key + '}', data[key]);
        });
        return endpoint;
    };
    ApiService.prototype.makeRequest = function (route, data) {
        //let endpoint = this.config.apiEndpoint + route.path;
        var endpoint = route.path;
        switch (route.method) {
            case 'GET':
                if (data) {
                    endpoint = this.insertDataInUrl(endpoint, data);
                }
                return this.httpGet(endpoint);
            case 'POST':
                return this.httpPost(endpoint, data);
            case 'PATCH':
                return this.httpPatch(endpoint, data);
            case 'PUT':
                return this.httpPut(endpoint, data);
            case 'DELETE':
                return this.httpDelete(endpoint, data);
        }
    };
    ApiService.prototype.httpGet = function (endpoint) {
        return this.http.get(endpoint);
    };
    ApiService.prototype.httpPost = function (endpoint, data) {
        return this.http.post(endpoint, data);
    };
    ApiService.prototype.httpPut = function (endpoint, data) {
        return this.http.put(endpoint, data);
    };
    ApiService.prototype.httpPatch = function (endpoint, data) {
        return this.http.patch(endpoint, data);
    };
    ApiService.prototype.httpDelete = function (endpoint, data) {
        //this.makeHeaders();
        //let options = new RequestOptions({ headers: this.headers });
        //
        //options.body = data;
        return this.http.delete(endpoint);
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__app_config_app_config_module__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_1__toast_service__["a" /* ToastService */], Object, __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/core/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/core/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config_app_config_module__ = __webpack_require__("../../../../../src/app/app-config/app-config.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_actions_auth_actions__ = __webpack_require__("../../../../../src/app/shared/actions/auth.actions.ts");
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






var AuthService = (function () {
    function AuthService(authActions, store, http, userService, _config) {
        this.authActions = authActions;
        this.store = store;
        this.http = http;
        this.userService = userService;
        this.config = _config;
    }
    AuthService.prototype.login = function (loginRequest) {
        this.store.dispatch(this.authActions.loginBegin(loginRequest));
    };
    AuthService.prototype.logout = function () {
        this.store.dispatch(this.authActions.logoutBegin());
    };
    AuthService.prototype.tokenLogin = function () {
        var _this = this;
        var token = localStorage.getItem(this.config.tokenKey);
        if (token) {
            var data = {
                token: token
            };
            return this.http.post(this.config.apiRoutes.tokenLogin.path, data)
                .toPromise()
                .then(function (user) {
                _this.userService.setUser(user);
                localStorage.setItem(_this.config.tokenKey, user.token);
            })
                .catch(function (err) { return Promise.resolve(); });
        }
        else {
            return Promise.resolve();
        }
    };
    AuthService.prototype.signup = function (signUpRequest) {
        this.store.dispatch(this.authActions.signupBegin(signUpRequest));
    };
    AuthService.prototype.resetPasswordLink = function (email) {
        var data = {
            email: email
        };
        return this.http.post(this.config.apiRoutes.resetPasswordLink.path, data)
            .map(function () {
            return true;
        });
    };
    AuthService.prototype.resetPassword = function (password, token) {
        var data = {
            password: password,
            token: token
        };
        return this.http.post(this.config.apiRoutes.resetPassword.path, data)
            .map(function () {
            return true;
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__app_config_app_config_module__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__shared_actions_auth_actions__["a" /* AuthActions */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], Object])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/core/services/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = (function () {
    function LoaderService() {
        this.loading = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* BehaviorSubject */](false);
    }
    LoaderService.prototype.start = function () {
        console.log("Start");
        this.loading.next(true);
    };
    LoaderService.prototype.stop = function () {
        console.log("Stop");
        this.loading.next(false);
    };
    LoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "../../../../../src/app/core/services/toast.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastService = (function () {
    function ToastService() {
    }
    ToastService.prototype.onSuccess = function (message) {
        alert('Success Toast' + message);
    };
    ToastService.prototype.onError = function (message) {
        console.log(message);
        alert('Error Toast' + message);
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "../../../../../src/app/core/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_reducers_user_reducer__ = __webpack_require__("../../../../../src/app/shared/reducers/user.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_actions_user_actions__ = __webpack_require__("../../../../../src/app/shared/actions/user.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config_app_config_module__ = __webpack_require__("../../../../../src/app/app-config/app-config.module.ts");
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






var UserService = (function () {
    function UserService(store, userActions, _config) {
        var _this = this;
        this.store = store;
        this.userActions = userActions;
        this.user = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* BehaviorSubject */](null);
        this.accountState = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* BehaviorSubject */](null);
        this.config = _config;
        this.store.select('user').subscribe(function (u) {
            _this.user.next(u);
        });
        this.store.select('account').subscribe(function (accountState) {
            _this.accountState.next(accountState);
        });
    }
    UserService.prototype.setUser = function (user) {
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__shared_reducers_user_reducer__["b" /* SET_USER */], payload: user });
        localStorage.setItem(this.config.tokenKey, user.token);
    };
    UserService.prototype.resetUser = function () {
        localStorage.removeItem(this.config.tokenKey);
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__shared_reducers_user_reducer__["a" /* RESET_USER */] });
    };
    UserService.prototype.updateUser = function (updateUserRequest) {
        this.store.dispatch(this.userActions.updateUserBegin(updateUserRequest));
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__app_config_app_config_module__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4__shared_actions_user_actions__["a" /* UserActions */], Object])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/core/services/wedding.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeddingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_wedding_model__ = __webpack_require__("../../../../../src/app/shared/models/wedding.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_guest_model__ = __webpack_require__("../../../../../src/app/shared/models/guest.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_reducers_wedding_reducer__ = __webpack_require__("../../../../../src/app/shared/reducers/wedding.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_reducers_guest_reducer__ = __webpack_require__("../../../../../src/app/shared/reducers/guest.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_service__ = __webpack_require__("../../../../../src/app/core/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_config_app_config_module__ = __webpack_require__("../../../../../src/app/app-config/app-config.module.ts");
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









var WeddingService = (function () {
    function WeddingService(store, apiService, _config) {
        var _this = this;
        this.store = store;
        this.apiService = apiService;
        this.weddings = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* BehaviorSubject */](null);
        this.guests = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* BehaviorSubject */](null);
        this.config = _config;
        this.store.select('weddings').subscribe(function (weddings) {
            _this.weddings.next(weddings);
        });
        this.store.select('guests').subscribe(function (guests) {
            _this.guests.next(guests);
        });
    }
    WeddingService.prototype.checkInvitation = function (weddingId, invitationId) {
        return this.apiService.makeRequest(this.config.apiRoutes.validateInvitationCode, { weddingId: weddingId, invitationId: invitationId })
            .map(function (result) {
            if (result.valid) {
                return true;
            }
            return false;
        });
    };
    /**
     * Get all weddings from the server, put in the local store
     */
    WeddingService.prototype.fetchWeddings = function () {
        var _this = this;
        return this.apiService.makeRequest(this.config.apiRoutes.getWeddings)
            .map(function (weddings) {
            weddings.map(function (wedding) {
                var _wedding = new __WEBPACK_IMPORTED_MODULE_3__shared_models_wedding_model__["a" /* Wedding */]();
                // extract data from server response
                _wedding.makeFromResponse(wedding);
                // remove wedding with same ID from store (old data)
                _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__shared_reducers_wedding_reducer__["b" /* DELETE_WEDDING */], payload: _wedding._id });
                // add to store
                _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__shared_reducers_wedding_reducer__["a" /* ADD_WEDDING */], payload: _wedding });
            });
        })
            .reduce(function (acc, cur) {
            return Object.assign([], acc, cur);
        }, []);
    };
    WeddingService.prototype.getWeddingById = function (weddingId) {
        return this.store.select('weddings')
            .flatMap(function (weddings) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["b" /* Observable */].from(weddings)
                .filter(function (wedding) { return wedding._id === weddingId; });
        });
    };
    WeddingService.prototype.addNewWedding = function (weddingRequestData) {
        var _this = this;
        var myDate = new Date(weddingRequestData.date);
        weddingRequestData.date = myDate.getTime();
        return this.apiService.makeRequest(this.config.apiRoutes.addWedding, weddingRequestData)
            .map(function (_wedding) {
            var wedding = new __WEBPACK_IMPORTED_MODULE_3__shared_models_wedding_model__["a" /* Wedding */]();
            wedding.makeFromResponse(_wedding);
            _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__shared_reducers_wedding_reducer__["a" /* ADD_WEDDING */], payload: wedding });
            return true;
        });
    };
    WeddingService.prototype.update = function (weddingRequestData) {
        var _this = this;
        var myDate = new Date(weddingRequestData.date);
        weddingRequestData.date = myDate.getTime();
        return this.apiService.makeRequest(this.config.apiRoutes.updateWedding, weddingRequestData)
            .map(function (_wedding) {
            var wedding = new __WEBPACK_IMPORTED_MODULE_3__shared_models_wedding_model__["a" /* Wedding */]();
            wedding.makeFromResponse(_wedding);
            _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__shared_reducers_wedding_reducer__["c" /* UPDATE_WEDDING */], payload: wedding });
            return true;
        });
    };
    WeddingService.prototype.remove = function (weddingId) {
        var _this = this;
        var weddingDeleteData = { _id: weddingId };
        return this.apiService.makeRequest(this.config.apiRoutes.removeWedding, weddingDeleteData)
            .map(function (_wedding) {
            _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__shared_reducers_wedding_reducer__["b" /* DELETE_WEDDING */], payload: _wedding._id });
            return true;
        });
    };
    WeddingService.prototype.fetchGuests = function (weddingId) {
        var _this = this;
        var data = {
            weddingId: weddingId
        };
        return this.apiService.makeRequest(this.config.apiRoutes.getGuests, data)
            .map(function (guests) {
            guests.map(function (guest) {
                var _guest = new __WEBPACK_IMPORTED_MODULE_4__shared_models_guest_model__["a" /* Guest */]();
                // extract data from server response
                _guest.makeFromResponse(guest);
                // remove wedding with same ID from store (old data)
                _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_6__shared_reducers_guest_reducer__["b" /* DELETE_GUEST */], payload: _guest._id });
                // add to store
                _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_6__shared_reducers_guest_reducer__["a" /* ADD_GUEST */], payload: _guest });
            });
        });
    };
    WeddingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_8__app_config_app_config_module__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_7__api_service__["a" /* ApiService */], Object])
    ], WeddingService);
    return WeddingService;
}());



/***/ }),

/***/ "../../../../../src/app/core/toast/toast.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  toast works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/core/toast/toast.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/toast/toast.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastComponent = (function () {
    function ToastComponent() {
    }
    ToastComponent.prototype.ngOnInit = function () {
    };
    ToastComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-toast',
            template: __webpack_require__("../../../../../src/app/core/toast/toast.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/toast/toast.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToastComponent);
    return ToastComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section banner\">\n  <div class=\"section__image banner__image\" style=\"background-image:url(/assets/images/flowers.jpg)\">\n    <div class=\"section__content section__content--pad banner__content\">\n      <h1 class=\"banner__heading banner__heading--border\">Welcome <br /><span class=\"banner__heading--alt\">to your</span> <br />wedding</h1>\n      <p class=\"banner__icon\"><mat-icon>favorite</mat-icon>\n      </p>\n      <p class=\"banner__subtext\">It's kind of a big deal</p>\n      <p class=\"section__cta\">\n        <button mat-raised-button color=\"primary\" [routerLink]=\"['auth', 'login']\">Login</button>\n      </p>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"section\">\n  <div class=\"section__content section__content--pad\">\n    <h1 class=\"section__heading\">Get your wedding online</h1>\n    <p class=\"section__text\">\n      Sign up for free today\n    </p>\n    <p class=\"section__text\">\n      Manage your guest list, RSVPs, email invitations, wedding day information like venue location & ceremony times.\n    </p>\n    <p class=\"section__cta\">\n      <button mat-raised-button color=\"primary\" [routerLink]=\"['auth', 'signup']\" routerLinkActive=\"active\">Signup</button>\n    </p>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material/app-date-adaptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppDateAdapter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AppDateAdapter = (function (_super) {
    __extends(AppDateAdapter, _super);
    function AppDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppDateAdapter.prototype.format = function (date, displayFormat) {
        if (displayFormat === 'input') {
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            return day + "/" + month + "/" + year;
        }
        else {
            return date.toDateString();
        }
    };
    return AppDateAdapter;
}(__WEBPACK_IMPORTED_MODULE_0__angular_material__["r" /* NativeDateAdapter */]));



/***/ }),

/***/ "../../../../../src/app/material/app-date-formats.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_DATE_FORMATS; });
var APP_DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'numeric' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};


/***/ }),

/***/ "../../../../../src/app/material/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_date_adaptor__ = __webpack_require__("../../../../../src/app/material/app-date-adaptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_date_formats__ = __webpack_require__("../../../../../src/app/material/app-date-formats.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatCheckboxModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatCheckboxModule */]
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["c" /* DateAdapter */], useClass: __WEBPACK_IMPORTED_MODULE_1__app_date_adaptor__["a" /* AppDateAdapter */]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["f" /* MAT_DATE_FORMATS */], useValue: __WEBPACK_IMPORTED_MODULE_2__app_date_formats__["a" /* APP_DATE_FORMATS */]
                }
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/actions/auth.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthActions = (function () {
    function AuthActions() {
    }
    AuthActions_1 = AuthActions;
    AuthActions.prototype.loginBegin = function (loginRequest) {
        return {
            type: AuthActions_1.LOGIN_BEGIN,
            payload: loginRequest
        };
    };
    AuthActions.prototype.loginSuccess = function (user) {
        return {
            type: AuthActions_1.LOGIN_SUCCESS,
            payload: user
        };
    };
    AuthActions.prototype.loginFailed = function () {
        return {
            type: AuthActions_1.LOGIN_FAILED
        };
    };
    AuthActions.prototype.loginFinished = function () {
        return {
            type: AuthActions_1.LOGIN_FINISHED
        };
    };
    AuthActions.prototype.logoutBegin = function () {
        return {
            type: AuthActions_1.LOGOUT_BEGIN
        };
    };
    AuthActions.prototype.logoutSuccess = function () {
        return {
            type: AuthActions_1.LOGOUT_SUCCESS
        };
    };
    AuthActions.prototype.logoutFailed = function () {
        return {
            type: AuthActions_1.LOGOUT_FAILED
        };
    };
    AuthActions.prototype.logoutFinished = function () {
        return {
            type: AuthActions_1.LOGOUT_FINISHED
        };
    };
    AuthActions.prototype.signupBegin = function (signUpRequest) {
        return {
            type: AuthActions_1.SIGNUP_BEGIN,
            payload: signUpRequest
        };
    };
    AuthActions.prototype.signupSuccess = function (user) {
        return {
            type: AuthActions_1.SIGNUP_SUCCESS,
            payload: user
        };
    };
    AuthActions.prototype.signupFinished = function () {
        return {
            type: AuthActions_1.SIGNUP_FINISHED
        };
    };
    AuthActions.prototype.signupFailed = function () {
        return {
            type: AuthActions_1.SIGNUP_FAILED
        };
    };
    AuthActions.LOGIN_BEGIN = 'LOGIN_BEGIN';
    AuthActions.LOGIN_SUCCESS = 'LOGIN_SUCCESS';
    AuthActions.LOGIN_FAILED = 'LOGIN_FAILED';
    AuthActions.LOGIN_FINISHED = 'LOGIN_FINISHED';
    AuthActions.LOGOUT_BEGIN = 'LOGOUT_BEGIN';
    AuthActions.LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
    AuthActions.LOGOUT_FAILED = 'LOGOUT_FAILED';
    AuthActions.LOGOUT_FINISHED = 'LOGOUT_FINISHED';
    AuthActions.SIGNUP_BEGIN = 'SIGNUP_BEGIN';
    AuthActions.SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
    AuthActions.SIGNUP_FAILED = 'SIGNUP_FAILED';
    AuthActions.SIGNUP_FINISHED = 'SIGNUP_FINISHED';
    AuthActions = AuthActions_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthActions);
    return AuthActions;
    var AuthActions_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/actions/user.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserActions = (function () {
    function UserActions() {
    }
    UserActions_1 = UserActions;
    UserActions.prototype.updateUserBegin = function (updateUserRequest) {
        return {
            type: UserActions_1.UPDATE_USER,
            payload: updateUserRequest
        };
    };
    UserActions.prototype.updateSuccess = function (user) {
        return {
            type: UserActions_1.UPDATE_SUCCESS,
            payload: user
        };
    };
    UserActions.prototype.updateFailed = function () {
        return {
            type: UserActions_1.UPDATE_FAILED
        };
    };
    UserActions.UPDATE_USER = 'UPDATE_USER';
    UserActions.UPDATE_SUCCESS = 'UPDATE_SUCCESS';
    UserActions.UPDATE_FAILED = 'UPDATE_FAILED';
    UserActions = UserActions_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserActions);
    return UserActions;
    var UserActions_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/effects/auth-effects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_user_service__ = __webpack_require__("../../../../../src/app/core/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_auth_actions__ = __webpack_require__("../../../../../src/app/shared/actions/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_config_app_config_module__ = __webpack_require__("../../../../../src/app/app-config/app-config.module.ts");
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









var AuthEffects = (function () {
    function AuthEffects(authActions, _config, http, userService, router, actions$) {
        var _this = this;
        this.authActions = authActions;
        this.http = http;
        this.userService = userService;
        this.router = router;
        this.actions$ = actions$;
        this.loginBegin$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions_auth_actions__["a" /* AuthActions */].LOGIN_BEGIN)
            .switchMap(function (action) {
            return _this.http.post(_this.config.apiRoutes.login.path, action.payload)
                .switchMap(function (user) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(_this.authActions.loginSuccess(user));
            });
        })
            .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(_this.authActions.loginFailed()); });
        this.loginSuccess$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions_auth_actions__["a" /* AuthActions */].LOGIN_SUCCESS)
            .switchMap(function (action) {
            // set user
            _this.userService.setUser(action.payload);
            // redirect
            _this.router.navigate(['cms']);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(_this.authActions.loginFinished());
        });
        this.logoutBegin$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions_auth_actions__["a" /* AuthActions */].LOGOUT_BEGIN)
            .switchMap(function (action) {
            return _this.http.get(_this.config.apiRoutes.logout.path)
                .switchMap(function () {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(_this.authActions.logoutSuccess());
            });
        })
            .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(_this.authActions.logoutFailed()); });
        this.logoutSuccess$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions_auth_actions__["a" /* AuthActions */].LOGOUT_SUCCESS)
            .switchMap(function (action) {
            // set the user
            _this.userService.resetUser();
            // redirect to login after user is reset
            _this.router.navigate(['auth', 'login']);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(_this.authActions.logoutFinished());
        });
        this.signupBegin$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions_auth_actions__["a" /* AuthActions */].SIGNUP_BEGIN)
            .switchMap(function (action) {
            return _this.http.post(_this.config.apiRoutes.signUp.path, action.payload)
                .switchMap(function (user) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(_this.authActions.signupSuccess(user));
            });
        })
            .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(_this.authActions.signupFailed()); });
        this.signupSuccess$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions_auth_actions__["a" /* AuthActions */].SIGNUP_SUCCESS)
            .switchMap(function (action) {
            // set user
            _this.userService.setUser(action.payload);
            // redirect
            _this.router.navigate(['cms']);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(_this.authActions.signupFinished());
        });
        this.config = _config;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "loginBegin$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */])
    ], AuthEffects.prototype, "loginSuccess$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "logoutBegin$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */])
    ], AuthEffects.prototype, "logoutSuccess$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "signupBegin$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "signupSuccess$", void 0);
    AuthEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_8__app_config_app_config_module__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__actions_auth_actions__["a" /* AuthActions */], Object, __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__core_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "../../../../../src/app/shared/effects/user-effects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_user_actions__ = __webpack_require__("../../../../../src/app/shared/actions/user.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config_app_config_module__ = __webpack_require__("../../../../../src/app/app-config/app-config.module.ts");
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







var UserEffects = (function () {
    function UserEffects(userActions, _config, http, actions$) {
        var _this = this;
        this.userActions = userActions;
        this.http = http;
        this.actions$ = actions$;
        this.updateUserBegin$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_user_actions__["a" /* UserActions */].UPDATE_USER)
            .switchMap(function (action) {
            var updateUserRequest = action.payload;
            return _this.http.patch(_this.config.apiRoutes.userUpdate.path, updateUserRequest)
                .switchMap(function (user) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(_this.userActions.updateSuccess(user));
            });
        })
            .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(_this.userActions.updateFailed()); });
        this.config = _config;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], UserEffects.prototype, "updateUserBegin$", void 0);
    UserEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__app_config_app_config_module__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__actions_user_actions__["a" /* UserActions */], Object, __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]])
    ], UserEffects);
    return UserEffects;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/guest.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Guest; });
var Guest = (function () {
    function Guest() {
        this._id = null;
        this.firstName = null;
        this.lastName = null;
    }
    Guest.prototype.makeFromResponse = function (data) {
        this._id = data._id;
        this.lastName = data.lastName;
        this.firstName = data.firstName;
    };
    return Guest;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/wedding.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wedding; });
var Wedding = (function () {
    function Wedding() {
        this._id = null;
        this.date = null;
        this.name = null;
        this.ceremonyVenue = null;
        this.ceremonyLocation = null;
        this.ceremonyInfo = null;
        this.ceremonyTime = null;
        this.ceremonyMap = null;
        this.aftersVenue = null;
        this.aftersLocation = null;
        this.aftersInfo = null;
        this.aftersTime = null;
        this.aftersMap = null;
    }
    Wedding.prototype.makeFromResponse = function (data) {
        this._id = data._id;
        this.date = this._timestampToDateString(data.date);
        this.name = data.name;
        this.ceremonyVenue = data.ceremonyVenue;
        this.ceremonyLocation = data.ceremonyLocation;
        this.ceremonyInfo = data.ceremonyInfo;
        this.ceremonyTime = data.ceremonyTime;
        this.ceremonyMap = data.ceremonyMap;
        this.aftersVenue = data.aftersVenue;
        this.aftersLocation = data.aftersLocation;
        this.aftersInfo = data.aftersInfo;
        this.aftersTime = data.aftersTime;
        this.aftersMap = data.aftersMap;
    };
    Wedding.prototype._timestampToDateString = function (timestamp) {
        return new Date(parseInt(timestamp)).toISOString();
    };
    return Wedding;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/reducers/account.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = accountReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_user_actions__ = __webpack_require__("../../../../../src/app/shared/actions/user.actions.ts");

var initialState = {
    updatingAccount: false
};
function accountReducer(state, action) {
    if (state === void 0) { state = initialState; }
    if (action === void 0) { action = null; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_user_actions__["a" /* UserActions */].UPDATE_USER:
            return Object.assign({}, state, {
                updatingAccount: true
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_user_actions__["a" /* UserActions */].UPDATE_SUCCESS:
            return Object.assign({}, state, {
                updatingAccount: false
            });
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/shared/reducers/auth.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = authReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_auth_actions__ = __webpack_require__("../../../../../src/app/shared/actions/auth.actions.ts");

var initialState = {
    loggingIn: false,
    signingUp: false
};
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    if (action === void 0) { action = null; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_actions__["a" /* AuthActions */].LOGIN_BEGIN:
            return Object.assign({}, state, {
                loggingIn: true
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_actions__["a" /* AuthActions */].LOGIN_FINISHED:
            return Object.assign({}, state, {
                loggingIn: false
            });
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/shared/reducers/guest.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_GUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DELETE_GUEST; });
/* unused harmony export UPDATE_GUEST */
/* harmony export (immutable) */ __webpack_exports__["c"] = guestReducer;
var ADD_GUEST = 'ADD_GUEST';
var DELETE_GUEST = 'DELETE_GUEST';
var UPDATE_GUEST = 'UPDATE_GUEST';
function guestReducer(state, action) {
    if (state === void 0) { state = []; }
    if (action === void 0) { action = null; }
    switch (action.type) {
        case ADD_GUEST:
            return state.concat([action.payload]);
        case DELETE_GUEST:
            return state.filter(function (guest) {
                if (action.payload !== guest._id) {
                    return guest;
                }
            });
        case UPDATE_GUEST:
            var index = state.map(function (guest) { return guest._id; })
                .indexOf(action.payload._id);
            return state.slice(0, index).concat([
                Object.assign({}, state[index], action.payload)
            ], state.slice(index + 1));
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/shared/reducers/user.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RESET_USER; });
/* harmony export (immutable) */ __webpack_exports__["c"] = userReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_user_actions__ = __webpack_require__("../../../../../src/app/shared/actions/user.actions.ts");

var SET_USER = 'SET_USER';
var RESET_USER = 'RESET_USER';
var initialState = {
    _id: '',
    email: '',
    firstName: '',
    lastName: '',
    token: ''
};
function userReducer(state, action) {
    if (state === void 0) { state = initialState; }
    if (action === void 0) { action = null; }
    switch (action.type) {
        case SET_USER:
            return Object.assign({}, state, action.payload);
        case RESET_USER:
            return initialState;
        case __WEBPACK_IMPORTED_MODULE_0__actions_user_actions__["a" /* UserActions */].UPDATE_SUCCESS:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/shared/reducers/wedding.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_WEDDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DELETE_WEDDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UPDATE_WEDDING; });
/* harmony export (immutable) */ __webpack_exports__["d"] = weddingReducer;
var ADD_WEDDING = 'ADD_WEDDING';
var DELETE_WEDDING = 'DELETE_WEDDING';
var UPDATE_WEDDING = 'UPDATE_WEDDING';
function weddingReducer(state, action) {
    if (state === void 0) { state = []; }
    if (action === void 0) { action = null; }
    switch (action.type) {
        case ADD_WEDDING:
            return state.concat([action.payload]);
        case DELETE_WEDDING:
            return state.filter(function (wedding) {
                if (action.payload !== wedding._id) {
                    return wedding;
                }
            });
        case UPDATE_WEDDING:
            var index = state.map(function (wedding) { return wedding._id; })
                .indexOf(action.payload._id);
            return state.slice(0, index).concat([
                Object.assign({}, state[index], action.payload)
            ], state.slice(index + 1));
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/shared/resolvers/guest.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestResolve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_wedding_service__ = __webpack_require__("../../../../../src/app/core/services/wedding.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GuestResolve = (function () {
    function GuestResolve(weddingService) {
        this.weddingService = weddingService;
    }
    GuestResolve.prototype.resolve = function (route) {
        return this.weddingService.fetchGuests((route.paramMap.get('weddingId'))).first();
    };
    GuestResolve = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_wedding_service__["a" /* WeddingService */]])
    ], GuestResolve);
    return GuestResolve;
}());



/***/ }),

/***/ "../../../../../src/app/shared/resolvers/wedding.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeddingResolve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_wedding_service__ = __webpack_require__("../../../../../src/app/core/services/wedding.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeddingResolve = (function () {
    function WeddingResolve(weddingService) {
        this.weddingService = weddingService;
    }
    WeddingResolve.prototype.resolve = function (route) {
        return this.weddingService.fetchWeddings().first();
    };
    WeddingResolve = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
        //export class WeddingResolve implements Resolve<Promise<Array<Wedding>>> {
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_wedding_service__["a" /* WeddingService */]])
    ], WeddingResolve);
    return WeddingResolve;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_material_module__ = __webpack_require__("../../../../../src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resolvers_wedding_service__ = __webpack_require__("../../../../../src/app/shared/resolvers/wedding.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resolvers_guest_service__ = __webpack_require__("../../../../../src/app/shared/resolvers/guest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_safe_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/safe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_auth_actions__ = __webpack_require__("../../../../../src/app/shared/actions/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_user_actions__ = __webpack_require__("../../../../../src/app/shared/actions/user.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__material_material_module__["a" /* MaterialModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__material_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_safe_pipe__["a" /* SafePipe */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__pipes_safe_pipe__["a" /* SafePipe */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__resolvers_wedding_service__["a" /* WeddingResolve */],
                __WEBPACK_IMPORTED_MODULE_4__resolvers_guest_service__["a" /* GuestResolve */],
                __WEBPACK_IMPORTED_MODULE_6__actions_auth_actions__["a" /* AuthActions */],
                __WEBPACK_IMPORTED_MODULE_7__actions_user_actions__["a" /* UserActions */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiEndpoint: '//localhost:3001/api/v1'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map