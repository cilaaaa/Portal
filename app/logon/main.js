(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/logon/fesm5/ui-logon-angular.js":
/*!**********************************************!*\
  !*** ./dist/logon/fesm5/ui-logon-angular.js ***!
  \**********************************************/
/*! exports provided: LogonService, LogonComponent, LogonModule, LandingPageComponent, User, PluralField, QueryObject, Projection, Selection, Sort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogonService", function() { return LogonService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogonComponent", function() { return LogonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogonModule", function() { return LogonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluralField", function() { return PluralField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryObject", function() { return QueryObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projection", function() { return Projection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sort", function() { return Sort; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ui-message-angular */ "./node_modules/ui-message-angular/fesm5/ui-message-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");











/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var msgStore = [
    { msgCat: 'EXCEPTION',
        msgName: 'GENERIC',
        msgText: {
            EN: { shortText: 'Exception Occurs',
                longText: '%s1' }
        }
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var LogonService = /** @class */ (function () {
    function LogonService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.host = '';
        this.messageService.setMessageStore(msgStore, 'EN');
    }
    /**
     * @param {?} host
     * @return {?}
     */
    LogonService.prototype.setHost = /**
     * @param {?} host
     * @return {?}
     */
    function (host) {
        this.host = host;
    };
    /**
     * @param {?} userid
     * @param {?} password
     * @return {?}
     */
    LogonService.prototype.logon = /**
     * @param {?} userid
     * @param {?} password
     * @return {?}
     */
    function (userid, password) {
        return this.http.post(this.host ? this.host + '/api/logon' : 'api/logon', { username: userid, password: password }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('Logon')));
    };
    /**
     * @return {?}
     */
    LogonService.prototype.logout = /**
     * @return {?}
     */
    function () {
        return this.http.delete(this.host ? this.host + '/api/logout' : 'api/logout', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('Logout')));
    };
    /**
     * @return {?}
     */
    LogonService.prototype.session = /**
     * @return {?}
     */
    function () {
        return this.http.get(this.host ? this.host + '/api/session' : 'api/session', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('Get session')));
    };
    /**
     * @param {?} queryObject
     * @return {?}
     */
    LogonService.prototype.query = /**
     * @param {?} queryObject
     * @return {?}
     */
    function (queryObject) {
        return this.http.post(this.host ? this.host + '/api/query' : 'api/query', queryObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('query')));
    };
    /**
     * @param {?} instanceGUID
     * @return {?}
     */
    LogonService.prototype.read = /**
     * @param {?} instanceGUID
     * @return {?}
     */
    function (instanceGUID) {
        return this.http.get(this.host ? this.host + ("/api/entity/instance/" + instanceGUID) : "api/entity/instance/" + instanceGUID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError('read')));
    };
    /**
     * @private
     * @template T
     * @param {?=} operation
     * @param {?=} result
     * @return {?}
     */
    LogonService.prototype.handleError = /**
     * @private
     * @template T
     * @param {?=} operation
     * @param {?=} result
     * @return {?}
     */
    function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            _this.messageService.addMessage('EXCEPTION', 'GENERIC', ui_message_angular__WEBPACK_IMPORTED_MODULE_7__["messageType"].Exception, JSON.stringify(error));
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])((/** @type {?} */ (result)));
        };
    };
    LogonService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LogonService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }
    ]; };
    /** @nocollapse */ LogonService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["defineInjectable"])({ factory: function LogonService_Factory() { return new LogonService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["inject"])(ui_message_angular__WEBPACK_IMPORTED_MODULE_7__["MessageService"])); }, token: LogonService, providedIn: "root" });
    return LogonService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var PluralField = /** @class */ (function () {
    function PluralField() {
    }
    return PluralField;
}());
var QueryObject = /** @class */ (function () {
    function QueryObject() {
    }
    return QueryObject;
}());
var Projection = /** @class */ (function () {
    function Projection() {
    }
    return Projection;
}());
var Selection = /** @class */ (function () {
    function Selection() {
    }
    return Selection;
}());
var Sort = /** @class */ (function () {
    function Sort() {
    }
    return Sort;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LogonComponent = /** @class */ (function () {
    function LogonComponent(document, router, route, autofill, logonService, messageService) {
        this.document = document;
        this.router = router;
        this.route = route;
        this.autofill = autofill;
        this.logonService = logonService;
        this.messageService = messageService;
        this.user = new User;
        this.isWaiting = false;
        this.title = 'Logon Portal';
        this.userLabel = 'User ID';
        this.pwdLabel = 'Password';
        this.btnLabel = 'Logon';
        this.redirectUrl = '';
        this.redirectPath = '';
        this.host = '';
    }
    /**
     * @return {?}
     */
    LogonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.autofill.monitor(this.inputUserID.nativeElement);
        this.autofill.monitor(this.inputPassword.nativeElement);
        if (this.route.snapshot.data['title']) {
            this.title = this.route.snapshot.data['title'];
        }
        if (this.route.snapshot.data['userLabel']) {
            this.userLabel = this.route.snapshot.data['userLabel'];
        }
        if (this.route.snapshot.data['pwdLabel']) {
            this.pwdLabel = this.route.snapshot.data['pwdLabel'];
        }
        if (this.route.snapshot.data['btnLabel']) {
            this.btnLabel = this.route.snapshot.data['btnLabel'];
        }
        if (this.route.snapshot.data['redirectUrl']) {
            this.redirectUrl = this.route.snapshot.data['redirectUrl'];
        }
        if (this.route.snapshot.data['redirectPath']) {
            this.redirectPath = this.route.snapshot.data['redirectPath'];
        }
        if (this.route.snapshot.data['host']) {
            this.host = this.route.snapshot.data['host'];
        }
        this.logonService.setHost(this.host);
    };
    /**
     * @return {?}
     */
    LogonComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.autofill.stopMonitoring(this.inputUserID.nativeElement);
        this.autofill.stopMonitoring(this.inputPassword.nativeElement);
    };
    /**
     * @return {?}
     */
    LogonComponent.prototype.logon = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isWaiting = true;
        this.logonService.logon(this.user.userid, this.user.password).subscribe(function (data) {
            _this.isWaiting = false;
            if (!data) {
                return;
            }
            if (data.err) {
                _this.messageService.report((/** @type {?} */ (data.err)));
            }
            else {
                _this.user.displayName = data.user['DISPLAY_NAME'];
                _this.user.userid = data.user['USER_ID'];
                _this.user.username = data.user['USER_NAME'];
                _this.user.locked = data.user['LOCK'];
                _this.user.pwdState = data.user['PWD_STATE'];
                _this.user.name = data.user['GIVEN_NAME'];
                if (_this.redirectPath) {
                    _this.router.navigateByUrl(_this.redirectPath);
                }
                else if (_this.redirectUrl) {
                    _this.document.location.href = _this.redirectUrl;
                }
            }
        });
    };
    LogonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"], args: [{
                    selector: 'dk-logon',
                    template: "<form class=\"dk-form-logon\" (ngSubmit)=\"logon()\">\n  <fieldset [disabled]=\"isWaiting\">\n    <div class=\"text-center dk-mb-4\">\n      <!--<img class=\"mb-4\" src=\"https://getbootstrap.com/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\">-->\n      <h1 class=\"dk-form-title dk-mb-3 font-weight-normal\">{{title}}</h1>\n    </div>\n\n    <div class=\"dk-message-area\">\n      <dk-message></dk-message>\n    </div>\n\n    <div class=\"dk-form-label-group\">\n      <input type=\"text\" id=\"inputUserID\" name=\"inputUserID\" #inputUserID class=\"form-control dk-form-control\"\n             [(ngModel)]=\"user.userid\" placeholder=\"User ID\" required=\"\" autofocus=\"\">\n      <label for=\"inputUserID\">{{userLabel}}</label>\n    </div>\n\n    <div class=\"dk-form-label-group\">\n      <input type=\"password\" id=\"inputPassword\" name=\"inputPassword\" #inputPassword class=\"form-control dk-form-control\"\n             [(ngModel)]=\"user.password\" placeholder=\"Password\" required=\"\">\n      <label for=\"inputPassword\">{{pwdLabel}}</label>\n    </div>\n\n    <button class=\"btn dk-btn-lg btn-primary btn-block\" type=\"submit\">\n      <i *ngIf=\"isWaiting\" class=\"fas fa-spinner fa-spin\"></i> {{btnLabel}}\n    </button>\n  </fieldset>\n</form>\n\n",
                    styles: [".dk-form-logon{width:100%;max-width:420px;padding:15px;margin:0 auto;line-height:1.5;--input-padding-x:0.75rem;--input-padding-y:0.75rem}.dk-form-logon label{margin-bottom:.5rem;font-size:1rem}.dk-message-area{margin-bottom:.5rem}.dk-mb-3{margin-bottom:1rem}.dk-mb-4{margin-bottom:1.5rem}.dk-form-title{font-size:1.75rem;line-height:1.2;color:inherit;font-family:inherit}.dk-form-label-group{position:relative;margin-bottom:1rem}.dk-form-control{font-size:1rem;border-radius:.25rem;height:calc(2.9rem + 2px)}.dk-form-label-group>input,.dk-form-label-group>label{padding:var(--input-padding-y) var(--input-padding-x)}.dk-form-label-group>label{position:absolute;top:0;left:0;display:block;width:100%;margin-bottom:0;line-height:1.5;color:#495057;border:1px solid transparent;border-radius:.25rem;transition:.1s ease-in-out}.dk-form-label-group input::-webkit-input-placeholder{color:transparent}.dk-form-label-group input:-ms-input-placeholder{color:transparent}.dk-form-label-group input::-ms-input-placeholder{color:transparent}.dk-form-label-group input::placeholder{color:transparent}.dk-form-label-group input:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start;transition:background-color 50000s ease-in-out}.dk-form-label-group input:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}.dk-form-label-group input.cdk-text-field-autofilled,.dk-form-label-group input:not(:placeholder-shown){padding-top:calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));padding-bottom:calc(var(--input-padding-y)/ 3)}.dk-form-label-group input.cdk-text-field-autofilled~label,.dk-form-label-group input:not(:placeholder-shown)~label{padding-top:calc(var(--input-padding-y)/ 3);padding-bottom:calc(var(--input-padding-y)/ 3);font-size:.75rem;color:#777}.dk-btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}"]
                }] }
    ];
    /** @nocollapse */
    LogonComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
        { type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_2__["AutofillMonitor"] },
        { type: LogonService },
        { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }
    ]; };
    LogonComponent.propDecorators = {
        inputUserID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"], args: ['inputUserID', { read: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"] },] }],
        inputPassword: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"], args: ['inputPassword', { read: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"] },] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
        userLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
        pwdLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
        btnLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
        redirectUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
        redirectPath: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
        host: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }]
    };
    return LogonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(router, logonService) {
        this.router = router;
        this.logonService = logonService;
    }
    /**
     * @return {?}
     */
    LandingPageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    LandingPageComponent.prototype.logout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.logonService.logout().subscribe(function (data) {
            _this.router.navigateByUrl('');
        });
    };
    /**
     * @return {?}
     */
    LandingPageComponent.prototype.session = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.logonService.session().subscribe(function (data) {
            _this.result = data;
        });
    };
    /**
     * @return {?}
     */
    LandingPageComponent.prototype.query = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var queryObject = (/** @type {?} */ ({
            ENTITY_ID: 'person',
            RELATION_ID: 'r_user'
        }));
        this.logonService.query(queryObject).subscribe(function (data) { return _this.result = data; });
    };
    /**
     * @return {?}
     */
    LandingPageComponent.prototype.read = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.logonService.read('2FBE7490E10F11E8A90957FA46F2CECA').subscribe(function (data) { return _this.result = data; });
    };
    LandingPageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"], args: [{
                    selector: 'dk-landing-page',
                    template: "<h4>\n  Logon Successfully\n</h4>\n\n<div class=\"btn-group\" role=\"group\">\n  <button type=\"button\" class=\"btn dk-btn-lg btn-primary\" (click)=\"logout()\">Logout</button>\n  <button type=\"button\" class=\"btn dk-btn-lg btn-primary\" (click)=\"session()\">Get Session</button>\n  <button type=\"button\" class=\"btn dk-btn-lg btn-primary\" (click)=\"query()\">Query</button>\n  <button type=\"button\" class=\"btn dk-btn-lg btn-primary\" (click)=\"read()\">Read</button>\n</div>\n<div class=\"container\">\n  <pre>{{result | json}}</pre>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    LandingPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: LogonService }
    ]; };
    return LandingPageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LogonModule = /** @class */ (function () {
    function LogonModule() {
    }
    LogonModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                        ui_message_angular__WEBPACK_IMPORTED_MODULE_7__["MessageModule"]
                    ],
                    declarations: [LogonComponent, LandingPageComponent],
                    exports: [LogonComponent]
                },] }
    ];
    return LogonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ui-logon-angular.js.map

/***/ }),

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dk-logon-view {\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLWxvZ29uLXZpZXcge1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dk-logon-view\">\n  <router-outlet></router-outlet>\n</div>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ui_logon_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui-logon-angular */ "./dist/logon/fesm5/ui-logon-angular.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    {
        path: '', component: ui_logon_angular__WEBPACK_IMPORTED_MODULE_4__["LogonComponent"],
        data: {
            title: 'Logon Portal (DH001/Dark1234)', userLabel: 'User ID', pwdLabel: 'Password', btnLabel: 'Sign In',
            redirectPath: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].redirectPath, redirectUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].redirectUrl, host: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].host
        }
    },
    { path: 'landing', component: ui_logon_angular__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ui_logon_angular__WEBPACK_IMPORTED_MODULE_4__["LogonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
    redirectPath: '',
    redirectUrl: '/portal/external-app/Modeling',
    host: 'http://localhost:3000'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! /Users/VinceZK/workspace/javascript/Logon/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map