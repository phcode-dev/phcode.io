(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-about-about-module~components-main-main-module"],{

/***/ "./src/app/components/main/main-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/main/main-routing.module.ts ***!
  \********************************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.component */ "./src/app/components/main/main.component.ts");





const routes = [{ path: '', component: _main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] }];
class MainRoutingModule {
}
MainRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainRoutingModule });
MainRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainRoutingModule_Factory(t) { return new (t || MainRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sections_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/nav/nav.component */ "./src/app/components/main/sections/nav/nav.component.ts");
/* harmony import */ var _sections_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/landing/landing.component */ "./src/app/components/main/sections/landing/landing.component.ts");




class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["px-main"]], decls: 2, vars: 0, template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "px-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "px-landing");
    } }, directives: [_sections_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _sections_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'px-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/main/main.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/main/main.module.ts ***!
  \************************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/components/main/main-routing.module.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _sections_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/landing/landing.component */ "./src/app/components/main/sections/landing/landing.component.ts");
/* harmony import */ var _sections_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/nav/nav.component */ "./src/app/components/main/sections/nav/nav.component.ts");
/* harmony import */ var _sections_landing_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/landing/banner/banner.component */ "./src/app/components/main/sections/landing/banner/banner.component.ts");
/* harmony import */ var src_app_directives_mouse_move_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/mouse.move.directive */ "./src/app/directives/mouse.move.directive.ts");
/* harmony import */ var _sections_landing_meet_phoenix_meet_phoenix_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/landing/meet-phoenix/meet-phoenix.component */ "./src/app/components/main/sections/landing/meet-phoenix/meet-phoenix.component.ts");
/* harmony import */ var _sections_landing_features_features_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/landing/features/features.component */ "./src/app/components/main/sections/landing/features/features.component.ts");
/* harmony import */ var _sections_landing_workspaces_workspaces_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/landing/workspaces/workspaces.component */ "./src/app/components/main/sections/landing/workspaces/workspaces.component.ts");
/* harmony import */ var _sections_landing_server_server_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/landing/server/server.component */ "./src/app/components/main/sections/landing/server/server.component.ts");
/* harmony import */ var _sections_landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sections/landing/footer/footer.component */ "./src/app/components/main/sections/landing/footer/footer.component.ts");
/* harmony import */ var _sections_landing_banner_download_download_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sections/landing/banner/download/download.component */ "./src/app/components/main/sections/landing/banner/download/download.component.ts");
/* harmony import */ var _sections_landing_banner_alert_alert_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sections/landing/banner/alert/alert.component */ "./src/app/components/main/sections/landing/banner/alert/alert.component.ts");
/* harmony import */ var _sections_landing_video_overlay_video_overlay_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sections/landing/video-overlay/video-overlay.component */ "./src/app/components/main/sections/landing/video-overlay/video-overlay.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



















class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        _sections_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"],
        _sections_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
        _sections_landing_banner_alert_alert_component__WEBPACK_IMPORTED_MODULE_14__["AlertComponent"],
        _sections_landing_banner_download_download_component__WEBPACK_IMPORTED_MODULE_13__["DownloadComponent"],
        _sections_landing_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"],
        src_app_directives_mouse_move_directive__WEBPACK_IMPORTED_MODULE_7__["MouseMoveDirective"],
        _sections_landing_meet_phoenix_meet_phoenix_component__WEBPACK_IMPORTED_MODULE_8__["MeetPhoenixComponent"],
        _sections_landing_video_overlay_video_overlay_component__WEBPACK_IMPORTED_MODULE_15__["VideoOverlayComponent"],
        _sections_landing_features_features_component__WEBPACK_IMPORTED_MODULE_9__["FeaturesComponent"],
        _sections_landing_workspaces_workspaces_component__WEBPACK_IMPORTED_MODULE_10__["WorkspacesComponent"],
        _sections_landing_server_server_component__WEBPACK_IMPORTED_MODULE_11__["ServerComponent"],
        _sections_landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"]], exports: [_sections_landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _sections_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
                    _sections_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"],
                    _sections_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                    _sections_landing_banner_alert_alert_component__WEBPACK_IMPORTED_MODULE_14__["AlertComponent"],
                    _sections_landing_banner_download_download_component__WEBPACK_IMPORTED_MODULE_13__["DownloadComponent"],
                    _sections_landing_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"],
                    src_app_directives_mouse_move_directive__WEBPACK_IMPORTED_MODULE_7__["MouseMoveDirective"],
                    _sections_landing_meet_phoenix_meet_phoenix_component__WEBPACK_IMPORTED_MODULE_8__["MeetPhoenixComponent"],
                    _sections_landing_video_overlay_video_overlay_component__WEBPACK_IMPORTED_MODULE_15__["VideoOverlayComponent"],
                    _sections_landing_features_features_component__WEBPACK_IMPORTED_MODULE_9__["FeaturesComponent"],
                    _sections_landing_workspaces_workspaces_component__WEBPACK_IMPORTED_MODULE_10__["WorkspacesComponent"],
                    _sections_landing_server_server_component__WEBPACK_IMPORTED_MODULE_11__["ServerComponent"],
                    _sections_landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"]
                ],
                exports: [
                    _sections_landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _sections_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"]
                ]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_sections_landing_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_l"], _main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
    _sections_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"],
    _sections_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
    _sections_landing_banner_alert_alert_component__WEBPACK_IMPORTED_MODULE_14__["AlertComponent"],
    _sections_landing_banner_download_download_component__WEBPACK_IMPORTED_MODULE_13__["DownloadComponent"],
    _sections_landing_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"],
    src_app_directives_mouse_move_directive__WEBPACK_IMPORTED_MODULE_7__["MouseMoveDirective"],
    _sections_landing_meet_phoenix_meet_phoenix_component__WEBPACK_IMPORTED_MODULE_8__["MeetPhoenixComponent"],
    _sections_landing_video_overlay_video_overlay_component__WEBPACK_IMPORTED_MODULE_15__["VideoOverlayComponent"],
    _sections_landing_features_features_component__WEBPACK_IMPORTED_MODULE_9__["FeaturesComponent"],
    _sections_landing_workspaces_workspaces_component__WEBPACK_IMPORTED_MODULE_10__["WorkspacesComponent"],
    _sections_landing_server_server_component__WEBPACK_IMPORTED_MODULE_11__["ServerComponent"],
    _sections_landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/components/main/sections/landing/banner/alert/alert.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/main/sections/landing/banner/alert/alert.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_alertService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/alertService */ "./src/app/services/alertService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function AlertComponent_div_0_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_div_0_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2.closeAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlertComponent_div_0_button_1_Template, 2, 0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "alert alert-" + ctx_r0.activeAlert.type + "-" + ctx_r0.activeAlert.severity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.activeAlert.dismissable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.activeAlert.titleHTML);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.activeAlert.messageHTML);
} }
var SeverityType;
(function (SeverityType) {
    SeverityType["Critical"] = "critical";
    SeverityType["Warning"] = "warning";
    SeverityType["Info"] = "info";
})(SeverityType || (SeverityType = {}));
class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.activeAlert = null;
    }
    ngOnInit() {
        this.getCriticalAlerts();
    }
    getCriticalAlerts() {
        this.alertService.fetchCriticalAlerts().subscribe((data) => {
            let platform = this.getMobileOperatingSystem() || window.navigator.platform.toLowerCase();
            if (platform.includes('mac')) {
                platform = 'mac';
            }
            else if (platform.includes('win')) {
                platform = 'win';
            }
            else if (platform.includes('linux')) {
                platform = 'linux';
            }
            const platFormAlert = data[platform];
            if ((platFormAlert === null || platFormAlert === void 0 ? void 0 : platFormAlert.messageHTML) && (platFormAlert === null || platFormAlert === void 0 ? void 0 : platFormAlert.titleHTML)) {
                this.activeAlert = platFormAlert;
                this.activeAlert.severity = this.activeAlert.severity || SeverityType.Critical;
                this.activeAlert.dismissable = this.activeAlert.dismissable || false;
                this.activeAlert.type = this.activeAlert.type || 3;
            }
            else {
                this.activeAlert = null;
            }
        }, () => {
            console.error('Failed to get Critical Alerts');
        });
    }
    closeAlert() {
        this.activeAlert = null;
    }
    getMobileOperatingSystem() {
        var _a;
        var userAgent = navigator.userAgent || navigator.vendor;
        if (/android/i.test(userAgent)) {
            return "android";
        }
        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent) && !((_a = window) === null || _a === void 0 ? void 0 : _a.MSStream)) {
            return "ios";
        }
        return false;
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_alertService__WEBPACK_IMPORTED_MODULE_1__["AlertService"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["px-alert"]], decls: 1, vars: 1, consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["class", "close", 3, "click", 4, "ngIf"], [1, "alert-title"], [1, "alert-content"], [1, "close", 3, "click"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 6, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeAlert);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 1.5rem;\n  cursor: pointer;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  outline: none;\n}\n\n.alert[_ngcontent-%COMP%] {\n  max-width: 25vw;\n  padding: 20px;\n  margin: 8px;\n  position: fixed;\n  top: 100px;\n  right: 30px;\n  z-index: 100;\n}\n\n.alert-1-primary[_ngcontent-%COMP%] {\n  background-color: rgba(77, 77, 255, 0.3);\n}\n\n.alert-1-primary[_ngcontent-%COMP%]   .alert-title[_ngcontent-%COMP%] {\n  color: #4d4dff;\n}\n\n.alert-1-warning[_ngcontent-%COMP%] {\n  background-color: rgba(255, 186, 0, 0.3);\n}\n\n.alert-1-warning[_ngcontent-%COMP%]   .alert-title[_ngcontent-%COMP%] {\n  color: #ffba00;\n}\n\n.alert-2-warning[_ngcontent-%COMP%] {\n  border-left: 4px solid #ffba00;\n  background-color: rgba(255, 186, 0, 0.5);\n}\n\n.alert-2-warning[_ngcontent-%COMP%]   .alert-title[_ngcontent-%COMP%] {\n  color: #ffe399;\n}\n\n.alert-3-warning[_ngcontent-%COMP%] {\n  border: 1px solid #b38200;\n  border-radius: 8px;\n  background-color: rgba(255, 186, 0, 0.85);\n}\n\n.alert-3-warning[_ngcontent-%COMP%]   .alert-title[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.alert-2-success[_ngcontent-%COMP%] {\n  border-left: 4px solid #2ec946;\n  background-color: rgba(46, 201, 70, 0.5);\n}\n\n.alert-2-success[_ngcontent-%COMP%]   .alert-title[_ngcontent-%COMP%] {\n  color: #a5ebb0;\n}\n\n.alert-2-secondary[_ngcontent-%COMP%] {\n  border-left: 4px solid #666666;\n  background-color: rgba(102, 102, 102, 0.5);\n}\n\n.alert-2-secondary[_ngcontent-%COMP%]   .alert-title[_ngcontent-%COMP%] {\n  color: #b3b3b3;\n}\n\n.alert-1-info[_ngcontent-%COMP%] {\n  background-color: rgba(77, 77, 255, 0.3);\n}\n\n.alert-1-info[_ngcontent-%COMP%]   .alert-title[_ngcontent-%COMP%] {\n  color: #4d4dff;\n}\n\n.alert-2-info[_ngcontent-%COMP%] {\n  border-left: 4px solid #4d4dff;\n  background-color: rgba(77, 77, 255, 0.5);\n}\n\n.alert-2-info[_ngcontent-%COMP%]   .alert-title[_ngcontent-%COMP%] {\n  color: #e6e6ff;\n}\n\n.alert-3-info[_ngcontent-%COMP%] {\n  border: 1px solid #0101ff;\n  border-radius: 8px;\n  background-color: rgba(77, 77, 255, 0.85);\n}\n\n.alert-3-info[_ngcontent-%COMP%]   .alert-title[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.alert-1-critical[_ngcontent-%COMP%] {\n  background-color: rgba(95, 33, 32, 0.3);\n}\n\n.alert-1-critical[_ngcontent-%COMP%]   .alert-title[_ngcontent-%COMP%] {\n  color: #5f2120;\n}\n\n.alert-2-critical[_ngcontent-%COMP%] {\n  border-left: 4px solid #5f2120;\n  background-color: rgba(95, 33, 32, 0.5);\n}\n\n.alert-2-critical[_ngcontent-%COMP%]   .alert-title[_ngcontent-%COMP%] {\n  color: #c55553;\n}\n\n.alert-3-critical[_ngcontent-%COMP%] {\n  border: 1px solid #260d0d;\n  border-radius: 8px;\n  background-color: rgba(95, 33, 32, 0.85);\n}\n\n.alert-3-critical[_ngcontent-%COMP%]   .alert-title[_ngcontent-%COMP%] {\n  color: #e5b3b2;\n}\n\n.alert-title[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 8px;\n  font-size: 18px;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.alert-content[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-family: \"Open Sans\", sans-serif;\n  color: #fcfcfc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9waGNvZGUuaW8vc3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9iYW5uZXIvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9zZWN0aW9ucy9sYW5kaW5nL2Jhbm5lci9hbGVydC9hbGVydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ05GOztBRFVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1BGOztBRHFDQTtFQTFCRSx3Q0FBQTtBQ1BGOztBRFNFO0VBQ0UsY0FqQ1k7QUMwQmhCOztBRGtDQTtFQTlCRSx3Q0FBQTtBQ0FGOztBREVFO0VBQ0UsY0E5Qlk7QUM4QmhCOztBRDhCQTtFQXpCRSw4QkFBQTtFQUNBLHdDQUFBO0FDREY7O0FER0U7RUFDRSxjQUFBO0FDREo7O0FEeUJBO0VBbkJFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQ0ZGOztBRElFO0VBQ0UsWUFBQTtBQ0ZKOztBRG9CQTtFQWhDRSw4QkFBQTtFQUNBLHdDQUFBO0FDZ0JGOztBRGRFO0VBQ0UsY0FBQTtBQ2dCSjs7QURnQkE7RUFwQ0UsOEJBQUE7RUFDQSwwQ0FBQTtBQ3dCRjs7QUR0QkU7RUFDRSxjQUFBO0FDd0JKOztBRFlBO0VBaERFLHdDQUFBO0FDd0NGOztBRHRDRTtFQUNFLGNBakNZO0FDeUVoQjs7QURRQTtFQTNDRSw4QkFBQTtFQUNBLHdDQUFBO0FDdUNGOztBRHJDRTtFQUNFLGNBQUE7QUN1Q0o7O0FER0E7RUFyQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FDc0NGOztBRHBDRTtFQUNFLFlBQUE7QUNzQ0o7O0FERkE7RUExREUsdUNBQUE7QUNnRUY7O0FEOURFO0VBQ0UsY0EvQlc7QUMrRmY7O0FETkE7RUFyREUsOEJBQUE7RUFDQSx1Q0FBQTtBQytERjs7QUQ3REU7RUFDRSxjQUFBO0FDK0RKOztBRFhBO0VBL0NFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQzhERjs7QUQ1REU7RUFDRSxjQUFBO0FDOERKOztBRGhCQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtBQ21CRjs7QURoQkE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtBQ21CRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9zZWN0aW9ucy9sYW5kaW5nL2Jhbm5lci9hbGVydC9hbGVydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuJHByaW1hcnktY29sb3I6ICM0ZDRkZmY7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjY2NjY2O1xuJGRhbmdlci1jb2xvcjogcmdiKDk1LCAzMywgMzIpO1xuJHdhcm5pbmctY29sb3I6ICNmZmJhMDA7XG4kc3VjY2Vzcy1jb2xvcjogIzJlYzk0NjtcblxuLmNsb3NlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuXG4uYWxlcnQge1xuICBtYXgtd2lkdGg6IDI1dnc7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogOHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTAwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB6LWluZGV4OiAxMDA7XG59XG5cbkBtaXhpbiBhbGVydC0xKCRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvciwgMC4zKTtcblxuICAuYWxlcnQtdGl0bGUge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gIH1cbn1cblxuQG1peGluIGFsZXJ0LTIoJGNvbG9yKSB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgJGNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvciwgMC41KTtcblxuICAuYWxlcnQtdGl0bGUge1xuICAgIGNvbG9yOiBsaWdodGVuKCRjb2xvciwgMzAlKTtcbiAgfVxufVxuXG5AbWl4aW4gYWxlcnQtMygkY29sb3IpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRjb2xvciwgMTUlKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvciwgMC44NSk7XG5cbiAgLmFsZXJ0LXRpdGxlIHtcbiAgICBjb2xvcjogbGlnaHRlbigkY29sb3IsIDU1JSk7XG4gIH1cbn1cblxuLmFsZXJ0LTEtcHJpbWFyeSB7XG4gIEBpbmNsdWRlIGFsZXJ0LTEoJHByaW1hcnktY29sb3IpO1xufVxuXG4uYWxlcnQtMS13YXJuaW5nIHtcbiAgQGluY2x1ZGUgYWxlcnQtMSgkd2FybmluZy1jb2xvcik7XG59XG4uYWxlcnQtMi13YXJuaW5nIHtcbiAgQGluY2x1ZGUgYWxlcnQtMigkd2FybmluZy1jb2xvcik7XG59XG4uYWxlcnQtMy13YXJuaW5nIHtcbiAgQGluY2x1ZGUgYWxlcnQtMygkd2FybmluZy1jb2xvcik7XG59XG5cbi5hbGVydC0yLXN1Y2Nlc3Mge1xuICBAaW5jbHVkZSBhbGVydC0yKCRzdWNjZXNzLWNvbG9yKTtcbn1cblxuLmFsZXJ0LTItc2Vjb25kYXJ5IHtcbiAgQGluY2x1ZGUgYWxlcnQtMigkc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLmFsZXJ0LTEtaW5mbyB7XG4gIEBpbmNsdWRlIGFsZXJ0LTEoJHByaW1hcnktY29sb3IpO1xufVxuLmFsZXJ0LTItaW5mbyB7XG4gIEBpbmNsdWRlIGFsZXJ0LTIoJHByaW1hcnktY29sb3IpO1xufVxuLmFsZXJ0LTMtaW5mbyB7XG4gIEBpbmNsdWRlIGFsZXJ0LTMoJHByaW1hcnktY29sb3IpO1xufVxuXG4uYWxlcnQtMS1jcml0aWNhbCB7XG4gIEBpbmNsdWRlIGFsZXJ0LTEoJGRhbmdlci1jb2xvcik7XG59XG4uYWxlcnQtMi1jcml0aWNhbCB7XG4gIEBpbmNsdWRlIGFsZXJ0LTIoJGRhbmdlci1jb2xvcik7XG59XG4uYWxlcnQtMy1jcml0aWNhbCB7XG4gIEBpbmNsdWRlIGFsZXJ0LTMoJGRhbmdlci1jb2xvcik7XG59XG5cbi5hbGVydC10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xufVxuXG4uYWxlcnQtY29udGVudCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjZmNmY2ZjO1xufVxuIiwiLmNsb3NlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmFsZXJ0IHtcbiAgbWF4LXdpZHRoOiAyNXZ3O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDhweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwMHB4O1xuICByaWdodDogMzBweDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uYWxlcnQtMS1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NywgNzcsIDI1NSwgMC4zKTtcbn1cbi5hbGVydC0xLXByaW1hcnkgLmFsZXJ0LXRpdGxlIHtcbiAgY29sb3I6ICM0ZDRkZmY7XG59XG5cbi5hbGVydC0xLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTg2LCAwLCAwLjMpO1xufVxuLmFsZXJ0LTEtd2FybmluZyAuYWxlcnQtdGl0bGUge1xuICBjb2xvcjogI2ZmYmEwMDtcbn1cblxuLmFsZXJ0LTItd2FybmluZyB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2ZmYmEwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE4NiwgMCwgMC41KTtcbn1cbi5hbGVydC0yLXdhcm5pbmcgLmFsZXJ0LXRpdGxlIHtcbiAgY29sb3I6ICNmZmUzOTk7XG59XG5cbi5hbGVydC0zLXdhcm5pbmcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjM4MjAwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxODYsIDAsIDAuODUpO1xufVxuLmFsZXJ0LTMtd2FybmluZyAuYWxlcnQtdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hbGVydC0yLXN1Y2Nlc3Mge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMyZWM5NDY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDYsIDIwMSwgNzAsIDAuNSk7XG59XG4uYWxlcnQtMi1zdWNjZXNzIC5hbGVydC10aXRsZSB7XG4gIGNvbG9yOiAjYTVlYmIwO1xufVxuXG4uYWxlcnQtMi1zZWNvbmRhcnkge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICM2NjY2NjY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAyLCAxMDIsIDEwMiwgMC41KTtcbn1cbi5hbGVydC0yLXNlY29uZGFyeSAuYWxlcnQtdGl0bGUge1xuICBjb2xvcjogI2IzYjNiMztcbn1cblxuLmFsZXJ0LTEtaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzcsIDc3LCAyNTUsIDAuMyk7XG59XG4uYWxlcnQtMS1pbmZvIC5hbGVydC10aXRsZSB7XG4gIGNvbG9yOiAjNGQ0ZGZmO1xufVxuXG4uYWxlcnQtMi1pbmZvIHtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjNGQ0ZGZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc3LCA3NywgMjU1LCAwLjUpO1xufVxuLmFsZXJ0LTItaW5mbyAuYWxlcnQtdGl0bGUge1xuICBjb2xvcjogI2U2ZTZmZjtcbn1cblxuLmFsZXJ0LTMtaW5mbyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMTAxZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NywgNzcsIDI1NSwgMC44NSk7XG59XG4uYWxlcnQtMy1pbmZvIC5hbGVydC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFsZXJ0LTEtY3JpdGljYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk1LCAzMywgMzIsIDAuMyk7XG59XG4uYWxlcnQtMS1jcml0aWNhbCAuYWxlcnQtdGl0bGUge1xuICBjb2xvcjogIzVmMjEyMDtcbn1cblxuLmFsZXJ0LTItY3JpdGljYWwge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICM1ZjIxMjA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTUsIDMzLCAzMiwgMC41KTtcbn1cbi5hbGVydC0yLWNyaXRpY2FsIC5hbGVydC10aXRsZSB7XG4gIGNvbG9yOiAjYzU1NTUzO1xufVxuXG4uYWxlcnQtMy1jcml0aWNhbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNjBkMGQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NSwgMzMsIDMyLCAwLjg1KTtcbn1cbi5hbGVydC0zLWNyaXRpY2FsIC5hbGVydC10aXRsZSB7XG4gIGNvbG9yOiAjZTViM2IyO1xufVxuXG4uYWxlcnQtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uYWxlcnQtY29udGVudCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmY2ZjZmM7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'px-alert',
                templateUrl: './alert.component.html',
                styleUrls: ['./alert.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_alertService__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/main/sections/landing/banner/banner.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/main/sections/landing/banner/banner.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DownloadLabels, BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadLabels", function() { return DownloadLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _download_download_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download/download.component */ "./src/app/components/main/sections/landing/banner/download/download.component.ts");
/* harmony import */ var src_app_services_apiService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apiService */ "./src/app/services/apiService.ts");




function BannerComponent_px_download_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "px-download", 24);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("downloadUrls", ctx_r1.downloadUrls)("donwloadUrlArr", ctx_r1.donwloadUrlArr)("isMobile", ctx_r1.isMobile);
} }
function BannerComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " downloads and counting...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r2.downloadProofLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.downloadCount);
} }
const DownloadLabels = {
    windows_x64: "Windows x64 Installer",
    mac_m1: "Mac - Apple Silicon DMG",
    mac_intel: "Mac - Intel DMG",
    linux: "Linux x64",
    chrome_os: "Chrome OS App",
};
class BannerComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.loading = true;
        this.isMobile = false;
    }
    ngOnInit() {
        this.apiService.getDownloadUrls().subscribe((data) => {
            this.downloadUrls = data['phcode.io.DownloadURL'];
            this.donwloadUrlArr = Object.keys(this.downloadUrls).map(key => ({
                label: DownloadLabels[key],
                value: data['phcode.io.DownloadURL'][key],
                key,
            }));
            this.donwloadUrlArr.push({
                label: DownloadLabels.linux,
                value: '',
                key: _download_download_component__WEBPACK_IMPORTED_MODULE_1__["Platforms"].linux,
            });
            this.loading = false;
        }, () => {
            console.error('Failed to get URLs');
        });
        this.isMobile = this.checkMobile();
        this.apiService.getDownloadCounts().subscribe((data) => {
            this.downloadCount = data.totalDownloads.toLocaleString();
            this.downloadProofLink = data.downloadProofLink;
        });
    }
    checkMobile() {
        let check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true; })(navigator.userAgent || navigator.vendor || window['opera']);
        return check;
    }
    ;
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_apiService__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["px-banner"]], decls: 37, vars: 10, consts: [[1, "main"], ["parent", ""], ["src", "assets/images/vector-top-left.png", "alt", "topl", 1, "vtl", "z1"], ["src", "assets/images/vector-bottom-right.png", "alt", "bottoml", 1, "vbr", "z1"], ["pxMouseMove", "", "src", "assets/images/stars-left.svg", "alt", "bottoml", 1, "stars-left", "z2", 3, "parent"], ["pxMouseMove", "", "src", "assets/images/stars-right.svg", "alt", "bottoml", 1, "stars-right", "z2", 3, "parent"], [1, "container", "content-container", "d-flex", "flex-column", "justify-center", "align-center", "z8"], ["pxMouseMove", "", "xMovement", "3", "yMovement", "3", "src", "assets/images/phoenix-logo.svg", "alt", "logo", 1, "brand-logo", 3, "parent"], [1, "brand-text", "text-center", "z2", "d-flex", "flex-column", "justify-center", "align-center"], [3, "downloadUrls", "donwloadUrlArr", "isMobile", 4, "ngIf"], ["href", "https://phcode.dev/", "target", "_blank"], ["type", "button", 1, "btn", "launch-btn", 3, "ngClass"], [2, "font-size", "small"], ["href", "https://brackets.io/", "target", "_blank", 1, "primary-link"], ["style", "font-size: small;", 4, "ngIf"], ["pxMouseMove", "", "xMovement", "0", "yMovement", "10", "src", "assets/images/cloud1.svg", "alt", "cloud1", 1, "cloud", "cloud-1", "z3", 3, "parent"], ["pxMouseMove", "", "xMovement", "0", "yMovement", "15", "src", "assets/images/cloud2.svg", "alt", "cloud2", 1, "cloud", "cloud-2", "z6", 3, "parent"], ["pxMouseMove", "", "xMovement", "0", "yMovement", "25", "src", "assets/images/cloud3.svg", "alt", "cloud3", 1, "cloud", "cloud-3", "z5", 3, "parent"], ["pxMouseMove", "", "xMovement", "0", "yMovement", "5", "src", "assets/images/cloud4.svg", "alt", "cloud4", 1, "cloud", "cloud-4", "z6", 3, "parent"], [1, "sky"], ["id", "star-1", 1, "star"], ["id", "star-2", 1, "star"], ["id", "star-3", 1, "star"], ["id", "star-4", 1, "star"], [3, "downloadUrls", "donwloadUrlArr", "isMobile"], ["target", "_blank", 1, "primary-link-accent", 3, "href"], [2, "color", "white"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Phoenix Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "The text editor designed to make coding as simple and fun as playing a video game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BannerComponent_px_download_15_Template, 1, 3, "px-download", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Launch Web Editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Built for you by the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "brackets.io");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " development team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, BannerComponent_span_27_Template, 7, 2, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.downloadUrls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isMobile ? "primary-button" : "transparent-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.downloadCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", _r0);
    } }, styles: [".main[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  position: relative;\n  overflow: hidden;\n  background: linear-gradient(#000A2E 80%, white);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.main[_ngcontent-%COMP%]   .vtl[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10%;\n  left: -20px;\n}\n.main[_ngcontent-%COMP%]   .vbr[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10%;\n  right: -20px;\n}\n.main[_ngcontent-%COMP%]   .stars-left[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  top: 10%;\n  opacity: 0.7;\n}\n.main[_ngcontent-%COMP%]   .stars-right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  top: 5%;\n  opacity: 0.7;\n}\n.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n  color: var(--text-color-light);\n  top: 35%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  font-family: var(--font-montserrat-bold);\n}\n.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  height: 25vh;\n  margin-top: 100px;\n}\n@media all and (max-width: 690px) {\n  .main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n    margin-top: 200px;\n  }\n}\n.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  margin-top: -30px;\n}\n.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xxl);\n  margin-bottom: var(--space-lg);\n}\n.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat);\n}\n.main[_ngcontent-%COMP%]   .cloud[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  -webkit-user-drag: none;\n  -khtml-user-drag: none;\n  -moz-user-drag: none;\n  -o-user-drag: none;\n  user-drag: none;\n}\n.sky[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: rotateZ(136deg);\n  top: -182px;\n  left: 472px;\n  z-index: 2;\n  opacity: 0.5;\n}\n.star[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  height: 2px;\n  border-radius: 885px;\n  background: linear-gradient(-45deg, #eef0f5, rgba(0, 0, 255, 0));\n  filter: drop-shadow(0 0 6px #d7dff0);\n  animation: tail 5000ms ease-in-out infinite, shooting 5000ms ease-in-out infinite;\n}\n\n.star[_ngcontent-%COMP%]::before, .star[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: calc(50% - 1px);\n  right: 0;\n  height: 2px;\n  background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #eaeef8, rgba(0, 0, 255, 0));\n  transform: translateX(50%) rotateZ(45deg);\n  border-radius: 100%;\n  animation: shining 3000ms ease-in-out infinite;\n}\n.star[_ngcontent-%COMP%]::after {\n  transform: translateX(50%) rotateZ(-45deg);\n}\n\n.star[_ngcontent-%COMP%]:nth-child(1) {\n  top: calc(50% - -119px);\n  left: calc(50% - 43px);\n}\n.star[_ngcontent-%COMP%]:nth-child(1)::before, .star[_ngcontent-%COMP%]:nth-child(1)::after {\n  animation-delay: 12000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(2) {\n  top: calc(50% - -100px);\n  left: calc(50% - 137px);\n  animation-delay: 5000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(2)::before, .star[_ngcontent-%COMP%]:nth-child(2)::after {\n  animation-delay: 10000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(3) {\n  top: calc(50% - -90px);\n  left: calc(50% - 222px);\n  animation-delay: 7000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(3)::before, .star[_ngcontent-%COMP%]:nth-child(3)::after {\n  animation-delay: 7000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(4) {\n  top: calc(50% - -129px);\n  left: calc(50% - 213px);\n  animation-delay: 7000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(4)::before, .star[_ngcontent-%COMP%]:nth-child(4)::after {\n  animation-delay: 7000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(5) {\n  top: calc(50% - 146px);\n  left: calc(50% - 112px);\n  animation-delay: 3000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(5)::before, .star[_ngcontent-%COMP%]:nth-child(5)::after {\n  animation-delay: 3000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(6) {\n  top: calc(50% - -108px);\n  left: calc(50% - 160px);\n  animation-delay: 3000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(6)::before, .star[_ngcontent-%COMP%]:nth-child(6)::after {\n  animation-delay: 3000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(7) {\n  top: calc(50% - 52px);\n  left: calc(50% - 72px);\n  animation-delay: 7000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(7)::before, .star[_ngcontent-%COMP%]:nth-child(7)::after {\n  animation-delay: 7000ms;\n}\n\n@keyframes tail {\n  0% {\n    width: 0;\n  }\n  30% {\n    width: 100px;\n  }\n  100% {\n    width: 0;\n  }\n}\n\n@keyframes shining {\n  0% {\n    width: 0;\n  }\n  50% {\n    width: 30px;\n  }\n  100% {\n    width: 0;\n  }\n}\n\n\n\n\n@keyframes shooting {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(500px);\n  }\n}\n.launch-btn[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 100%;\n  min-width: 350px;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9waGNvZGUuaW8vc3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0NBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUNDRjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREo7QURJRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDRko7QURLRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FDSEo7QURNRTtFQUNFLDhCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUNKSjtBRE1JO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDSk47QURNSTtFQUNFO0lBQ0UsaUJBQUE7RUNKTjtBQUNGO0FETUk7RUFDRSxpQkFBQTtBQ0pOO0FES007RUFDRSwrQkFBQTtFQUNBLDhCQUFBO0FDSFI7QURLTTtFQUNFLG1DQUFBO0FDSFI7QURRRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNOSjtBRFdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ1JGO0FEVUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0VBQUE7RUFJQSxvQ0FBQTtFQUdBLGlGQUFBO0FDVkY7QURjQSxnREFBQTtBQUNBOztFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxvRkFBQTtFQU9BLHlDQUFBO0VBQ0EsbUJBQUE7RUFFQSw4Q0FBQTtBQ2hCRjtBRGtCQTtFQUVFLDBDQUFBO0FDZkY7QURrQkE7OzsyQkFBQTtBQUlBO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtBQ2ZGO0FEbUJBOztFQUdFLHdCQUFBO0FDaEJGO0FEa0JBO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtFQUVBLHVCQUFBO0FDZkY7QURpQkE7O0VBR0Usd0JBQUE7QUNkRjtBRGdCQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFFQSx1QkFBQTtBQ2JGO0FEZUE7O0VBR0UsdUJBQUE7QUNaRjtBRGNBO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtFQUVBLHVCQUFBO0FDWEY7QURhQTs7RUFHRSx1QkFBQTtBQ1ZGO0FEWUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBRUEsdUJBQUE7QUNURjtBRFdBOztFQUdFLHVCQUFBO0FDUkY7QURVQTtFQUNFLHVCQUFBO0VBQ0EsdUJBQUE7RUFFQSx1QkFBQTtBQ1BGO0FEU0E7O0VBR0UsdUJBQUE7QUNORjtBRFFBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUVBLHVCQUFBO0FDTEY7QURPQTs7RUFHRSx1QkFBQTtBQ0pGO0FET0E7d0JBQUE7QUFFQTtFQUNFO0lBQ0UsUUFBQTtFQ0pGO0VETUE7SUFDRSxZQUFBO0VDSkY7RURNQTtJQUNFLFFBQUE7RUNKRjtBQUNGO0FET0E7d0JBQUE7QUFFQTtFQUNFO0lBQ0UsUUFBQTtFQ0xGO0VET0E7SUFDRSxXQUFBO0VDTEY7RURPQTtJQUNFLFFBQUE7RUNMRjtBQUNGO0FEUUE7NkJBQUE7QUFjQTtpQkFBQTtBQWNBO3FCQUFBO0FBYUEsaUNBQUE7QUFDQTtFQUNFO0lBRUUsd0JBQUE7RUNURjtFRFdBO0lBRUUsNEJBQUE7RUNURjtBQUNGO0FEWUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNWRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9zZWN0aW9ucy9sYW5kaW5nL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwMEEyRSA4MCUsIHdoaXRlKTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cblxuICAudnRsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTAlO1xuICAgIGxlZnQ6IC0yMHB4O1xuICB9XG5cbiAgLnZiciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTAlO1xuICAgIHJpZ2h0OiAtMjBweDtcbiAgfVxuXG4gIC5zdGFycy1sZWZ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogMTAlO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gIC5zdGFycy1yaWdodCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgdG9wOiA1JTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAuY29udGVudC1jb250YWluZXIge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcbiAgICB0b3A6IDM1JTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbnRzZXJyYXQtYm9sZCk7XG5cbiAgICAuYnJhbmQtbG9nbyB7XG4gICAgICBoZWlnaHQ6IDI1dmg7XG4gICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICB9XG4gICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjkwcHgpIHtcbiAgICAgIC5icmFuZC1sb2dvIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5icmFuZC10ZXh0IHtcbiAgICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14eGwpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1sZyk7XG4gICAgICB9XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNsb3VkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICAgIC1raHRtbC11c2VyLWRyYWc6IG5vbmU7XG4gICAgLW1vei11c2VyLWRyYWc6IG5vbmU7XG4gICAgLW8tdXNlci1kcmFnOiBub25lO1xuICAgIHVzZXItZHJhZzogbm9uZTtcbiAgfVxuXG59XG5cbi5za3kge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogcm90YXRlWigxMzZkZWcpO1xuICB0b3A6IC0xODJweDtcbiAgbGVmdDogNDcycHg7XG4gIHotaW5kZXg6IDI7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5zdGFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogODg1cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsXG4gICAgI2VlZjBmNSwgcmdiYSgwLCAwLCAyNTUsIDApKTtcblxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDZweCAjZWVmMWY4KTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNnB4ICNkN2RmZjApO1xuICAtd2Via2l0LWFuaW1hdGlvbjogdGFpbCA1MDAwbXMgZWFzZS1pbi1vdXQgaW5maW5pdGUsXG4gICAgc2hvb3RpbmcgNTAwMG1zIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBhbmltYXRpb246IHRhaWwgNTAwMG1zIGVhc2UtaW4tb3V0IGluZmluaXRlLFxuICAgIHNob290aW5nIDUwMDBtcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLyogSGVyZSB3ZSBhZGQgYmVmb3JlIGFuZCBhZnRlciBlZmZlY3QgdG8gc3RhciAqL1xuLnN0YXI6OmJlZm9yZSxcbi5zdGFyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDUwJSAtIDFweCk7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIC00NWRlZyxcbiAgICByZ2JhKDAsIDAsIDI1NSwgMCksXG4gICAgI2VhZWVmOCxcbiAgICByZ2JhKDAsIDAsIDI1NSwgMClcbiAgKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSByb3RhdGVaKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgcm90YXRlWig0NWRlZyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzaGluaW5nIDMwMDBtcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBzaGluaW5nIDMwMDBtcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cbi5zdGFyOjphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgcm90YXRlWigtNDVkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSByb3RhdGVaKC00NWRlZyk7XG59XG5cbi8qIEhlcmUgd2UgYXJlIGFkZGluZyBsb2NhdGlvbiBvZiBlYWNoXG4gICBudGgtY2hpbGQsIGFuaW1hdGlvbnMsIGRlbGF5cywgYW5kXG4gICBiZWZvcmUgYW5kIGFmdGVyIGVmZmVjdHMgdG8gZWFjaFxuICAgYW5kIGV2ZXJ5IGJhbGxzKHN0YXJzKSAqL1xuLnN0YXI6bnRoLWNoaWxkKDEpIHtcbiAgdG9wOiBjYWxjKDUwJSAtIC0xMTlweCk7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNDNweCk7XG4gIC8vIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA0MDAwbXM7XG4gIC8vIGFuaW1hdGlvbi1kZWxheTogNDAwMG1zO1xufVxuLnN0YXI6bnRoLWNoaWxkKDEpOjpiZWZvcmUsXG4uc3RhcjpudGgtY2hpbGQoMSk6OmFmdGVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEyMDAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMTIwMDBtcztcbn1cbi5zdGFyOm50aC1jaGlsZCgyKSB7XG4gIHRvcDogY2FsYyg1MCUgLSAtMTAwcHgpO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDEzN3B4KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDUwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiA1MDAwbXM7XG59XG4uc3RhcjpudGgtY2hpbGQoMik6OmJlZm9yZSxcbi5zdGFyOm50aC1jaGlsZCgyKTo6YWZ0ZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTAwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxMDAwMG1zO1xufVxuLnN0YXI6bnRoLWNoaWxkKDMpIHtcbiAgdG9wOiBjYWxjKDUwJSAtIC05MHB4KTtcbiAgbGVmdDogY2FsYyg1MCUgLSAyMjJweCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogNzAwMG1zO1xufVxuLnN0YXI6bnRoLWNoaWxkKDMpOjpiZWZvcmUsXG4uc3RhcjpudGgtY2hpbGQoMyk6OmFmdGVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDcwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG59XG4uc3RhcjpudGgtY2hpbGQoNCkge1xuICB0b3A6IGNhbGMoNTAlIC0gLTEyOXB4KTtcbiAgbGVmdDogY2FsYyg1MCUgLSAyMTNweCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogNzAwMG1zO1xufVxuLnN0YXI6bnRoLWNoaWxkKDQpOjpiZWZvcmUsXG4uc3RhcjpudGgtY2hpbGQoNCk6OmFmdGVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDcwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG59XG4uc3RhcjpudGgtY2hpbGQoNSkge1xuICB0b3A6IGNhbGMoNTAlIC0gMTQ2cHgpO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDExMnB4KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAzMDAwbXM7XG59XG4uc3RhcjpudGgtY2hpbGQoNSk6OmJlZm9yZSxcbi5zdGFyOm50aC1jaGlsZCg1KTo6YWZ0ZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMzAwMG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDMwMDBtcztcbn1cbi5zdGFyOm50aC1jaGlsZCg2KSB7XG4gIHRvcDogY2FsYyg1MCUgLSAtMTA4cHgpO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDE2MHB4KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAzMDAwbXM7XG59XG4uc3RhcjpudGgtY2hpbGQoNik6OmJlZm9yZSxcbi5zdGFyOm50aC1jaGlsZCg2KTo6YWZ0ZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMzAwMG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDMwMDBtcztcbn1cbi5zdGFyOm50aC1jaGlsZCg3KSB7XG4gIHRvcDogY2FsYyg1MCUgLSA1MnB4KTtcbiAgbGVmdDogY2FsYyg1MCUgLSA3MnB4KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDcwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG59XG4uc3RhcjpudGgtY2hpbGQoNyk6OmJlZm9yZSxcbi5zdGFyOm50aC1jaGlsZCg3KTo6YWZ0ZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNzAwMG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDcwMDBtcztcbn1cblxuLyogVGhpcyBjb2RlIHdpbGwgaGVscCB0byBnZW5lcmF0ZVxuZWZmZWN0IGluIHRhaWwgb2Ygc3RhciAqL1xuQGtleWZyYW1lcyB0YWlsIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDMwJSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG59XG5cbi8qIFRoaXMgY29kZSB3aWxsIGdlbmVyYXRlIHNoaW5pbmdcbmVmZmVjdCBpbiBoZWFkIG9mIHN0YXIgKi9cbkBrZXlmcmFtZXMgc2hpbmluZyB7XG4gIDAlIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICA1MCUge1xuICAgIHdpZHRoOiAzMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG59XG5cbi8qIEhlcmUgd2UgYXJlIGFkZGluZyB3ZWJraXQtYW5pbWF0aW9uXG50byBoZWFkIG9mIHN0YXIgZm9yIHNoaW5pbmcgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBzaGluaW5nIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDUwJSB7XG4gICAgd2lkdGg6IDMwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbn1cblxuLyogSGVyZSB3ZSBhcmUgYWRkaW5nIHdlYmtpdC1hbmltYXRpb25cbnRvIHRhaWwgb2Ygc3RhciAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHRhaWwge1xuICAwJSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgMzAlIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbn1cblxuLyogSGVyZSB3ZSBhcmUgYWRkaW5nIHdlYmtpdC1hbmltYXRpb25cbmZvciBzaG9vdGluZyBlZmZlY3QgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBzaG9vdGluZyB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDBweCk7XG4gIH1cbn1cblxuLyogSGVyZSB3ZSBtYWtlIHNob290aW5nIGVmZmVjdCAqL1xuQGtleWZyYW1lcyBzaG9vdGluZyB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDBweCk7XG4gIH1cbn1cblxuLmxhdW5jaC1idG4ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDM1MHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuXG59XG4iLCIubWFpbiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwMEEyRSA4MCUsIHdoaXRlKTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ubWFpbiAudnRsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMCU7XG4gIGxlZnQ6IC0yMHB4O1xufVxuLm1haW4gLnZiciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMCU7XG4gIHJpZ2h0OiAtMjBweDtcbn1cbi5tYWluIC5zdGFycy1sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMTAlO1xuICBvcGFjaXR5OiAwLjc7XG59XG4ubWFpbiAuc3RhcnMtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogNSU7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5tYWluIC5jb250ZW50LWNvbnRhaW5lciB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcbiAgdG9wOiAzNSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdC1ib2xkKTtcbn1cbi5tYWluIC5jb250ZW50LWNvbnRhaW5lciAuYnJhbmQtbG9nbyB7XG4gIGhlaWdodDogMjV2aDtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2OTBweCkge1xuICAubWFpbiAuY29udGVudC1jb250YWluZXIgLmJyYW5kLWxvZ28ge1xuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xuICB9XG59XG4ubWFpbiAuY29udGVudC1jb250YWluZXIgLmJyYW5kLXRleHQge1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cbi5tYWluIC5jb250ZW50LWNvbnRhaW5lciAuYnJhbmQtdGV4dCBoMSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4bCk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLWxnKTtcbn1cbi5tYWluIC5jb250ZW50LWNvbnRhaW5lciAuYnJhbmQtdGV4dCBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdCk7XG59XG4ubWFpbiAuY2xvdWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICAta2h0bWwtdXNlci1kcmFnOiBub25lO1xuICAtbW96LXVzZXItZHJhZzogbm9uZTtcbiAgLW8tdXNlci1kcmFnOiBub25lO1xuICB1c2VyLWRyYWc6IG5vbmU7XG59XG5cbi5za3kge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogcm90YXRlWigxMzZkZWcpO1xuICB0b3A6IC0xODJweDtcbiAgbGVmdDogNDcycHg7XG4gIHotaW5kZXg6IDI7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLnN0YXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIGhlaWdodDogMnB4O1xuICBib3JkZXItcmFkaXVzOiA4ODVweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2VlZjBmNSwgcmdiYSgwLCAwLCAyNTUsIDApKTtcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDAgMCA2cHggI2VlZjFmOCk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDZweCAjZDdkZmYwKTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHRhaWwgNTAwMG1zIGVhc2UtaW4tb3V0IGluZmluaXRlLCBzaG9vdGluZyA1MDAwbXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogdGFpbCA1MDAwbXMgZWFzZS1pbi1vdXQgaW5maW5pdGUsIHNob290aW5nIDUwMDBtcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLyogSGVyZSB3ZSBhZGQgYmVmb3JlIGFuZCBhZnRlciBlZmZlY3QgdG8gc3RhciAqL1xuLnN0YXI6OmJlZm9yZSxcbi5zdGFyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDUwJSAtIDFweCk7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgwLCAwLCAyNTUsIDApLCAjZWFlZWY4LCByZ2JhKDAsIDAsIDI1NSwgMCkpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHJvdGF0ZVooNDVkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSByb3RhdGVaKDQ1ZGVnKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNoaW5pbmcgMzAwMG1zIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBhbmltYXRpb246IHNoaW5pbmcgMzAwMG1zIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4uc3Rhcjo6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHJvdGF0ZVooLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgcm90YXRlWigtNDVkZWcpO1xufVxuXG4vKiBIZXJlIHdlIGFyZSBhZGRpbmcgbG9jYXRpb24gb2YgZWFjaFxuICAgbnRoLWNoaWxkLCBhbmltYXRpb25zLCBkZWxheXMsIGFuZFxuICAgYmVmb3JlIGFuZCBhZnRlciBlZmZlY3RzIHRvIGVhY2hcbiAgIGFuZCBldmVyeSBiYWxscyhzdGFycykgKi9cbi5zdGFyOm50aC1jaGlsZCgxKSB7XG4gIHRvcDogY2FsYyg1MCUgLSAtMTE5cHgpO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDQzcHgpO1xufVxuXG4uc3RhcjpudGgtY2hpbGQoMSk6OmJlZm9yZSxcbi5zdGFyOm50aC1jaGlsZCgxKTo6YWZ0ZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTIwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxMjAwMG1zO1xufVxuXG4uc3RhcjpudGgtY2hpbGQoMikge1xuICB0b3A6IGNhbGMoNTAlIC0gLTEwMHB4KTtcbiAgbGVmdDogY2FsYyg1MCUgLSAxMzdweCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA1MDAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogNTAwMG1zO1xufVxuXG4uc3RhcjpudGgtY2hpbGQoMik6OmJlZm9yZSxcbi5zdGFyOm50aC1jaGlsZCgyKTo6YWZ0ZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTAwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxMDAwMG1zO1xufVxuXG4uc3RhcjpudGgtY2hpbGQoMykge1xuICB0b3A6IGNhbGMoNTAlIC0gLTkwcHgpO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDIyMnB4KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDcwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG59XG5cbi5zdGFyOm50aC1jaGlsZCgzKTo6YmVmb3JlLFxuLnN0YXI6bnRoLWNoaWxkKDMpOjphZnRlciB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogNzAwMG1zO1xufVxuXG4uc3RhcjpudGgtY2hpbGQoNCkge1xuICB0b3A6IGNhbGMoNTAlIC0gLTEyOXB4KTtcbiAgbGVmdDogY2FsYyg1MCUgLSAyMTNweCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogNzAwMG1zO1xufVxuXG4uc3RhcjpudGgtY2hpbGQoNCk6OmJlZm9yZSxcbi5zdGFyOm50aC1jaGlsZCg0KTo6YWZ0ZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNzAwMG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDcwMDBtcztcbn1cblxuLnN0YXI6bnRoLWNoaWxkKDUpIHtcbiAgdG9wOiBjYWxjKDUwJSAtIDE0NnB4KTtcbiAgbGVmdDogY2FsYyg1MCUgLSAxMTJweCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzMDAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMzAwMG1zO1xufVxuXG4uc3RhcjpudGgtY2hpbGQoNSk6OmJlZm9yZSxcbi5zdGFyOm50aC1jaGlsZCg1KTo6YWZ0ZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMzAwMG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDMwMDBtcztcbn1cblxuLnN0YXI6bnRoLWNoaWxkKDYpIHtcbiAgdG9wOiBjYWxjKDUwJSAtIC0xMDhweCk7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTYwcHgpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMzAwMG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDMwMDBtcztcbn1cblxuLnN0YXI6bnRoLWNoaWxkKDYpOjpiZWZvcmUsXG4uc3RhcjpudGgtY2hpbGQoNik6OmFmdGVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAzMDAwbXM7XG59XG5cbi5zdGFyOm50aC1jaGlsZCg3KSB7XG4gIHRvcDogY2FsYyg1MCUgLSA1MnB4KTtcbiAgbGVmdDogY2FsYyg1MCUgLSA3MnB4KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDcwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG59XG5cbi5zdGFyOm50aC1jaGlsZCg3KTo6YmVmb3JlLFxuLnN0YXI6bnRoLWNoaWxkKDcpOjphZnRlciB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogNzAwMG1zO1xufVxuXG4vKiBUaGlzIGNvZGUgd2lsbCBoZWxwIHRvIGdlbmVyYXRlXG5lZmZlY3QgaW4gdGFpbCBvZiBzdGFyICovXG5Aa2V5ZnJhbWVzIHRhaWwge1xuICAwJSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgMzAlIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbn1cbi8qIFRoaXMgY29kZSB3aWxsIGdlbmVyYXRlIHNoaW5pbmdcbmVmZmVjdCBpbiBoZWFkIG9mIHN0YXIgKi9cbkBrZXlmcmFtZXMgc2hpbmluZyB7XG4gIDAlIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICA1MCUge1xuICAgIHdpZHRoOiAzMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG59XG4vKiBIZXJlIHdlIGFyZSBhZGRpbmcgd2Via2l0LWFuaW1hdGlvblxudG8gaGVhZCBvZiBzdGFyIGZvciBzaGluaW5nICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hpbmluZyB7XG4gIDAlIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICA1MCUge1xuICAgIHdpZHRoOiAzMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG59XG4vKiBIZXJlIHdlIGFyZSBhZGRpbmcgd2Via2l0LWFuaW1hdGlvblxudG8gdGFpbCBvZiBzdGFyICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgdGFpbCB7XG4gIDAlIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICAzMCUge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMDtcbiAgfVxufVxuLyogSGVyZSB3ZSBhcmUgYWRkaW5nIHdlYmtpdC1hbmltYXRpb25cbmZvciBzaG9vdGluZyBlZmZlY3QgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBzaG9vdGluZyB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDBweCk7XG4gIH1cbn1cbi8qIEhlcmUgd2UgbWFrZSBzaG9vdGluZyBlZmZlY3QgKi9cbkBrZXlmcmFtZXMgc2hvb3Rpbmcge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xuICB9XG59XG4ubGF1bmNoLWJ0biB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMzUwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'px-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_apiService__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/main/sections/landing/banner/download/download.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/main/sections/landing/banner/download/download.component.ts ***!
  \****************************************************************************************/
/*! exports provided: Platforms, DownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platforms", function() { return Platforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadComponent", function() { return DownloadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../banner.component */ "./src/app/components/main/sections/landing/banner/banner.component.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["downloadLink"];
const _c1 = ["codeSnippet"];
function DownloadComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Copy and paste into your Linux terminal to install");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DownloadComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DownloadComponent_ng_container_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.downloadFile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "a", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.DownloadBtnLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r1.DownloadBtnUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("target", "_blank" ? ctx_r1.platform === "chrome_os" : undefined);
} }
function DownloadComponent_ng_container_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Copied to clipboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@enterAnimation", undefined);
} }
function DownloadComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DownloadComponent_ng_container_5_span_1_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DownloadComponent_ng_container_5_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.copyCode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DownloadComponent_ng_container_5_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.copyCode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "wget -qO- https://updates.phcode.io/linux/installer.sh | bash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.copied);
} }
function DownloadComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DownloadComponent_a_13_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const url_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.selectPlatform(url_r13.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const url_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](url_r13.label);
} }
function DownloadComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Supported on Ubuntu 20+, Fedora 34+, Arch Linux and many more...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "View source");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
var Platforms;
(function (Platforms) {
    Platforms["mac_intel"] = "mac_intel";
    Platforms["mac_m1"] = "mac_m1";
    Platforms["windows_x64"] = "windows_x64";
    Platforms["linux"] = "linux";
    Platforms["chrome_os"] = "chrome_os";
    Platforms["unknown"] = "unknown";
})(Platforms || (Platforms = {}));
class DownloadComponent {
    constructor() {
        this.isLinux = false;
        this.loading = true;
        this.DownloadBtnLabel = 'Download';
        this.DownloadBtnUrl = '';
        this.copied = false;
    }
    ngOnInit() {
        this.detectPlatform();
    }
    selectPlatform(platform) {
        this.platform = platform;
        this.setUrls(platform);
    }
    detectPlatform() {
        const platform = window.navigator.platform.toLowerCase();
        const userAgent = window.navigator.userAgent.toLowerCase();
        if (userAgent.includes("cros")) {
            this.platform = Platforms.chrome_os;
        }
        else if (platform.includes("win")) {
            this.platform = Platforms.windows_x64;
        }
        else if (platform.includes("mac")) {
            this.platform = Platforms.mac_m1;
        }
        else if (platform.includes("linux")) {
            this.platform = Platforms.linux;
        }
        else {
            this.platform = Platforms.unknown;
        }
        this.setUrls(this.platform);
    }
    setUrls(platform) {
        switch (platform) {
            case Platforms.unknown:
                this.DownloadBtnLabel = _banner_component__WEBPACK_IMPORTED_MODULE_1__["DownloadLabels"][Platforms.windows_x64];
                this.DownloadBtnUrl = this.downloadUrls[Platforms.windows_x64];
            default:
                this.DownloadBtnLabel = _banner_component__WEBPACK_IMPORTED_MODULE_1__["DownloadLabels"][platform] || 'Download';
                this.DownloadBtnUrl = this.downloadUrls[platform];
        }
    }
    downloadFile() {
        // Set the download URL
        // Programmatically trigger the anchor element's click event to start the download
        const downloadLink = this.downloadLinkRef.nativeElement;
        downloadLink.click();
    }
    copyCode() {
        const codeSnippetElement = this.codeSnippetRef.nativeElement;
        const codeText = codeSnippetElement.textContent.trim();
        // Use Clipboard API if supported
        if (navigator.clipboard) {
            navigator.clipboard.writeText(codeText).then(() => {
                console.log('Code copied to clipboard!');
                this.copied = true;
                setTimeout(() => {
                    this.copied = false;
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy code: ', err);
            });
        }
        else {
            // Fallback for browsers not supporting Clipboard API
            const tempTextarea = document.createElement('textarea');
            tempTextarea.value = codeText;
            document.body.appendChild(tempTextarea);
            tempTextarea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextarea);
            console.log('Code copied to clipboard!');
        }
    }
}
DownloadComponent.ɵfac = function DownloadComponent_Factory(t) { return new (t || DownloadComponent)(); };
DownloadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DownloadComponent, selectors: [["px-download"]], viewQuery: function DownloadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.downloadLinkRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeSnippetRef = _t.first);
    } }, inputs: { downloadUrls: "downloadUrls", donwloadUrlArr: "donwloadUrlArr", isMobile: "isMobile" }, decls: 23, vars: 6, consts: [[1, "container-fluid", "w-100"], ["class", "text-center text-muted instruction", 4, "ngIf"], [1, "primary-button", "dropdown-container", "download-button", "d-flex", "justify-center", "align-center"], ["role", "group", "aria-label", "Button group with nested dropdown", 1, "btn-group", 2, "width", "100%", "height", "100%"], [4, "ngIf"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "ddntoggle", "btn", "btn-danger", "dropdown-toggle", "dropdown-toggle-split"], [1, "sr-only"], [1, "dropdown-menu", 3, "ngClass"], [1, "dropdown-item", "disabled"], [1, "dropdown-divider"], ["class", "dropdown-item", "href", "javascript:void(0)", 3, "click", 4, "ngFor", "ngForOf"], [2, "display", "flex", "justify-content", "space-around"], ["href", "https://github.com/phcode-dev/phoenix-desktop/releases", "target", "_blank", 1, "dropdown-link"], ["href", "https://phcode.dev/", "target", "_blank", 1, "dropdown-link"], [1, "text-center", "text-muted", "instruction"], ["type", "button", 1, "btn", 2, "height", "100%", 3, "click"], [2, "font-size", "16px", "font-weight", "bold", "margin-bottom", "0"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-download", 2, "margin-right", "10px"], ["d", "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"], ["d", "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"], [2, "font-size", "14px", "font-weight", "bold"], ["hidden", "", "download", "", 3, "href", "target"], ["downloadLink", ""], ["class", "copied", "id", "copy-notification", 4, "ngIf"], ["id", "copy", "type", "button", "aria-haspopup", "true", 1, "btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "gray", "viewBox", "0 0 16 16", 1, "bi", "bi-copy"], ["fill-rule", "evenodd", "d", "M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"], [1, "input-group", 3, "click"], ["id", "codeSnippet", 1, "form-control", "bg-light"], ["codeSnippet", ""], ["id", "copy-notification", 1, "copied"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"], [1, "linux-more"], [1, "text"], ["href", "https://updates.phcode.io/linux/installer.sh", "target", "_blank", 1, "primary-link-accent"]], template: function DownloadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DownloadComponent_p_1_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DownloadComponent_ng_container_4_Template, 11, 3, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DownloadComponent_ng_container_5_Template, 9, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Toggle Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Downloads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DownloadComponent_a_13_Template, 2, 1, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Other downloads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "open on web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DownloadComponent_ng_container_22_Template, 6, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.platform === "linux" || ctx.isLinux);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.platform !== "linux" && !ctx.isLinux);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.platform === "linux" || ctx.isLinux);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isMobile ? "mobile-dropdown-menu" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.donwloadUrlArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.platform === "linux" || ctx.isLinux);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".instruction[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat);\n  font-weight: lighter;\n}\n\n.copied[_ngcontent-%COMP%] {\n  color: var(--color-success-dark);\n  background-color: rgba(255, 255, 255, 0.75);\n  position: absolute;\n  top: 50%;\n  left: -110px;\n  width: 100px;\n  transform: translateY(-50%);\n  padding: 5px;\n  border-radius: 6px;\n  font-size: small;\n  transition: all 0.3s ease;\n}\n\n.download-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  height: 70px;\n  width: 100%;\n  min-width: 350px;\n  position: relative;\n}\n\n.download-button[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  border: none;\n  color: white;\n}\n\n.download-button[_ngcontent-%COMP%]   .ddntoggle[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n.download-button[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xs);\n}\n\n.download-button[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n\n.download-button[_ngcontent-%COMP%]   .mobile-dropdown-menu[_ngcontent-%COMP%] {\n  margin-left: -275px;\n}\n\n#codeSnippet[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  justify-content: center;\n  align-items: center;\n  -webkit-user-select: text;\n     -moz-user-select: text;\n          user-select: text;\n  background-color: #f4e2da !important;\n}\n\n#copy[_ngcontent-%COMP%] {\n  background-color: #f4e2da !important;\n  width: 50px;\n}\n\n.linux-more[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: var(--font-size-xs);\n  margin-top: 20px;\n}\n\n.linux-more[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: var(--text-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9waGNvZGUuaW8vc3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9iYW5uZXIvZG93bmxvYWQvZG93bmxvYWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9zZWN0aW9ucy9sYW5kaW5nL2Jhbm5lci9kb3dubG9hZC9kb3dubG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG1DQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGdDQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNBSjs7QURHRTtFQUNFLFdBQUE7QUNESjs7QURJRTtFQUNFLDhCQUFBO0FDRko7O0FES0U7RUFDRSxnQkFBQTtBQ0hKOztBREtFO0VBQ0UsbUJBQUE7QUNISjs7QURPQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0Esb0NBQUE7QUNKRjs7QURNQTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtBQ0hGOztBRE1BO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ0hGOztBRElFO0VBQ0UsOEJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9zZWN0aW9ucy9sYW5kaW5nL2Jhbm5lci9kb3dubG9hZC9kb3dubG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmluc3RydWN0aW9uIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdCk7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4uY29waWVkIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXN1Y2Nlc3MtZGFyayk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IC0xMTBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IHNtYWxsO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4uZG93bmxvYWQtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDM1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLmJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAuZGRudG9nZ2xlIHtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxuXG4gIC5kcm9wZG93bi1saW5rIHtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14cyk7XG4gIH1cblxuICAuZHJvcGRvd24tbWVudSB7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgfVxuICAubW9iaWxlLWRyb3Bkb3duLW1lbnUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjc1cHg7XG4gIH1cbn1cblxuI2NvZGVTbmlwcGV0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyMjYsIDIxOCkhaW1wb3J0YW50O1xufVxuI2NvcHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyMjYsIDIxOCkhaW1wb3J0YW50O1xuICB3aWR0aDogNTBweDtcbn1cblxuLmxpbnV4LW1vcmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgLnRleHQge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcbiAgfVxuXG59XG4iLCIuaW5zdHJ1Y3Rpb24ge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb250c2VycmF0KTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbi5jb3BpZWQge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc3VjY2Vzcy1kYXJrKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogLTExMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5kb3dubG9hZC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMzUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kb3dubG9hZC1idXR0b24gLmJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kb3dubG9hZC1idXR0b24gLmRkbnRvZ2dsZSB7XG4gIHdpZHRoOiA1MHB4O1xufVxuLmRvd25sb2FkLWJ1dHRvbiAuZHJvcGRvd24tbGluayB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzKTtcbn1cbi5kb3dubG9hZC1idXR0b24gLmRyb3Bkb3duLW1lbnUge1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuLmRvd25sb2FkLWJ1dHRvbiAubW9iaWxlLWRyb3Bkb3duLW1lbnUge1xuICBtYXJnaW4tbGVmdDogLTI3NXB4O1xufVxuXG4jY29kZVNuaXBwZXQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGUyZGEgIWltcG9ydGFudDtcbn1cblxuI2NvcHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlMmRhICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4ubGludXgtbW9yZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHMpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmxpbnV4LW1vcmUgLnRleHQge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG59Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('enterAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DownloadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'px-download',
                templateUrl: './download.component.html',
                styleUrls: ['./download.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('enterAnimation', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                        ])
                    ])
                ],
            }]
    }], function () { return []; }, { downloadUrls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['downloadUrls']
        }], donwloadUrlArr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['donwloadUrlArr']
        }], isMobile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['isMobile']
        }], downloadLinkRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['downloadLink']
        }], codeSnippetRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['codeSnippet']
        }] }); })();


/***/ }),

/***/ "./src/app/components/main/sections/landing/features/features.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/main/sections/landing/features/features.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_alertService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/alertService */ "./src/app/services/alertService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _video_overlay_video_overlay_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../video-overlay/video-overlay.component */ "./src/app/components/main/sections/landing/video-overlay/video-overlay.component.ts");





function FeaturesComponent_px_video_overlay_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "px-video-overlay", 25);
} if (rf & 2) {
    const config_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", config_r1.title)("titleIconSrc", config_r1.titleIconSrc)("subtitle", config_r1.subtitle)("videoSrc", config_r1.videoSrc);
} }
const VIDEO_OVERLAY_CONFIG = [
    {
        title: 'Live Preview',
        subtitle: `See your HTML and CSS code changes instantly, without page reloads! Use powerful UI tools like the colour editor to tweak background
and text colours, adjust font sizes and border-radius with number dials, or explore page layouts with live code hints. Phoenix Code makes
your web design workflows faster and more enjoyable.`,
        titleIconSrc: 'assets/images/load.gif',
        videoSrc: 'https://docs-images.phcode.dev/videos/phcode.io-site/live_preview.mp4',
    },
    {
        title: 'Code Intelligence for the Web',
        subtitle: `Write HTML, CSS, and JavaScript faster with on-the-fly code completion and catch errors before they become problems. We're always
adding better smarts to our code intelligence, making Phoenix Code sharper with every release. It's web development with everything you
need, right out of the box- no extensions needed.`,
        titleIconSrc: 'assets/images/intelligence.png',
        videoSrc: 'https://docs-images.phcode.dev/videos/phcode.io-site/error_detect.mp4',
    },
    {
        title: 'Lightning-Fast Search',
        subtitle: `Find exactly what you need across your entire project with Instant search. We've fine-tuned the UX to help you pinpoint your query
faster: search within specific file types, exclude files and folders, or use regular expressions for complex queries. Phoenix Code's state-of-
the-art 'find in files' feature handles large projects with ease, delivering instant results as you type.`,
        titleIconSrc: 'assets/images/flash.gif',
        videoSrc: 'https://docs-images.phcode.dev/videos/phcode.io-site/find_in_files.mp4',
    },
];
class FeaturesComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.videoOverlayConfig = [];
        this.featuresFromAPI = null;
    }
    ngOnInit() {
        this.alertService.fetchCriticalAlerts().subscribe((data) => {
            if ((data === null || data === void 0 ? void 0 : data.features) && Array.isArray(data.features) && data.features.length > 0) {
                this.videoOverlayConfig = data === null || data === void 0 ? void 0 : data.features;
            }
            else {
                this.videoOverlayConfig = VIDEO_OVERLAY_CONFIG;
            }
        });
    }
}
FeaturesComponent.ɵfac = function FeaturesComponent_Factory(t) { return new (t || FeaturesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_alertService__WEBPACK_IMPORTED_MODULE_1__["AlertService"])); };
FeaturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeaturesComponent, selectors: [["px-features"]], decls: 36, vars: 1, consts: [[1, "features", "container-fluid"], [1, "heading-container", "container", "text-center", "py-5"], [1, "row", "py-5"], [1, "heading", "col-md-12"], [3, "title", "titleIconSrc", "subtitle", "videoSrc", 4, "ngFor", "ngForOf"], [1, "d-flex-center", "w-100", "my-4", "py-4"], [1, "row", "col-md-10", "col-xs-12", "d-flex-center", "my-4", "py-4"], [1, "col-md-2", "col-sm-2", "col-xs-12", "mb-4", "text-center"], [1, "col-md-2", "col-sm-2", "col-xs-12", "mb-4", "text-center", "technologies-icon"], ["src", "assets/images/js.png", "alt", "icons"], ["src", "assets/images/ts.png", "alt", "icons"], ["src", "assets/images/html.png", "alt", "icons"], ["src", "assets/images/css.png", "alt", "icons"], [1, "col-md-2", "col-sm-2", "col-xs-12", "text-center", "mt-2", "mt-xs-4"], [1, "container-fluid", "pb-5", "preview"], [1, "row", "pb-5"], [1, "offset-md-1", "col-md-3", "d-flex-center"], ["src", "assets/images/extension.png", "alt", ""], [1, "col-md", "d-flex-center"], [1, "container", "text-left", "text-sm-center", "text-xs-center", "px-3"], [1, "heading", "container", "text-left", "w-75"], [1, "container", "text-left", "w-75"], [1, "illustration"], [1, "container", "pt-5", "d-flex-center"], ["src", "assets/images/Illustration.png", "alt", "people"], [3, "title", "titleIconSrc", "subtitle", "videoSrc"]], template: function FeaturesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Packed with features... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FeaturesComponent_px_video_overlay_5_Template, 1, 4, "px-video-overlay", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " phoenix is tailor made for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " and many more... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Extension and Themes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Customize the editor's functionality and look & feel with thousands of available extensions and themes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Want to automate a task? Create extensions easily that work on any platform, exactly as you need. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.videoOverlayConfig);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _video_overlay_video_overlay_component__WEBPACK_IMPORTED_MODULE_3__["VideoOverlayComponent"]], styles: [".features[_ngcontent-%COMP%] {\n  background: url('featureBG.png');\n  background-repeat: repeat;\n  background-size: 100% 100%;\n  color: var(--text-color-light);\n}\n.features[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  color: var(--text-color-light);\n  font-size: var(--font-size-lg);\n  font-family: var(--font-montserrat-bold);\n}\n.features[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n  font-size: var(--font-size-xl);\n  font-family: var(--font-montserrat-bold);\n  font-style: italic;\n}\n.features[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .sq-img[_ngcontent-%COMP%], .features[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .flash-img[_ngcontent-%COMP%] {\n  max-width: 120px;\n}\n.technologies-icon[_ngcontent-%COMP%] {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9waGNvZGUuaW8vc3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9mZWF0dXJlcy9mZWF0dXJlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluL3NlY3Rpb25zL2xhbmRpbmcvZmVhdHVyZXMvZmVhdHVyZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtBQ0NGO0FEQ0U7RUFDRSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0NBQUE7QUNDSjtBREdJO0VBQ0UsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7QUNETjtBRElJO0VBQ0UsZ0JBQUE7QUNGTjtBRE9BO0VBQ0UsWUFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL3NlY3Rpb25zL2xhbmRpbmcvZmVhdHVyZXMvZmVhdHVyZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVhdHVyZXMge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmVhdHVyZUJHLnBuZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xuXG4gIC5oZWFkaW5nIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbnRzZXJyYXQtYm9sZCk7XG4gIH1cblxuICAucHJldmlldyB7XG4gICAgLmhlYWRpbmcge1xuICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14bCk7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb250c2VycmF0LWJvbGQpO1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIH1cblxuICAgIC5zcS1pbWcsIC5mbGFzaC1pbWcge1xuICAgICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgICB9XG4gIH1cbn1cblxuLnRlY2hub2xvZ2llcy1pY29uIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuIiwiLmZlYXR1cmVzIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mZWF0dXJlQkcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xufVxuLmZlYXR1cmVzIC5oZWFkaW5nIHtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sZyk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbnRzZXJyYXQtYm9sZCk7XG59XG4uZmVhdHVyZXMgLnByZXZpZXcgLmhlYWRpbmcge1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb250c2VycmF0LWJvbGQpO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uZmVhdHVyZXMgLnByZXZpZXcgLnNxLWltZywgLmZlYXR1cmVzIC5wcmV2aWV3IC5mbGFzaC1pbWcge1xuICBtYXgtd2lkdGg6IDEyMHB4O1xufVxuXG4udGVjaG5vbG9naWVzLWljb24ge1xuICB3aWR0aDogMjAwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'px-features',
                templateUrl: './features.component.html',
                styleUrls: ['./features.component.scss']
            }]
    }], function () { return [{ type: src_app_services_alertService__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/main/sections/landing/footer/footer.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/main/sections/landing/footer/footer.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class FooterComponent {
    constructor() {
        this.fullYear = new Date().getFullYear();
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["px-footer"]], decls: 21, vars: 2, consts: [[1, "footer", "p-4", "container-fluid"], [1, "mt-5", "px-2", "footer-items", "row", "w-100", "text-center", "text-md-left"], [1, "col-12", "col-md-8", "footer-links"], ["href", "#", 1, "d-block", "d-md-inline-block", "mr-md-3", "mb-3", 3, "routerLink"], ["target", "_blank", "href", "https://core.ai/privacy.html", 1, "d-block", "d-md-inline-block", "mr-md-3", "mb-3"], ["target", "_blank", "href", "https://core.ai/terms-of-service.html", 1, "d-block", "d-md-inline-block", "mr-md-3", "mb-3"], ["target", "_blank", "href", "https://www.gnu.org/licenses/agpl-3.0.en.html", 1, "d-block", "d-md-inline-block", "mr-md-3", "mb-3"], [1, "col-12", "col-md-4", "d-flex", "justify-content-center", "justify-content-md-end", "align-items-center", "mt-3", "mt-md-0"], [1, "m-0", "p-0", 2, "color", "red"], [1, "container-fluid", "align-middle", "text-center", "mt-4"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Terms of service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "License");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Made with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u2764\uFE0E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " and Javascript in Phoenix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.fullYear, " copyright core.ai ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".footer[_ngcontent-%COMP%] {\n  color: var(--text-color-light);\n  background: url('borderline.png'), linear-gradient(#282727, #282727);\n  background-position: bottom;\n  background-repeat: no-repeat;\n}\n@media all and (max-width: 500px) {\n  .footer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.footer[_ngcontent-%COMP%]   .footer-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-color-light);\n}\n@media all and (max-width: 690px) {\n  .footer[_ngcontent-%COMP%]   .footer-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.footer[_ngcontent-%COMP%]   .footer-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--accent-color);\n}\n.footer[_ngcontent-%COMP%]   .footer-items[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  color: var(--text-color-gray);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9waGNvZGUuaW8vc3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxvRUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNDRjtBREFDO0VBTEQ7SUFNTSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQ0dKO0FBQ0Y7QURLSTtFQUNFLDhCQUFBO0FDSE47QURJTTtFQUZGO0lBR0ksY0FBQTtFQ0ROO0FBQ0Y7QURFTTtFQUNFLDBCQUFBO0FDQVI7QURJSTtFQUNFLDZCQUFBO0FDRk4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JvcmRlcmxpbmUucG5nJyksIGxpbmVhci1ncmFkaWVudCggIzI4MjcyNywgIzI4MjcyNyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgLmZvb3Rlci1pdGVtcyB7XG4gICAgLy8gc3BhbiwgYSB7XG4gICAgLy8gICBtYXJnaW46IDIwcHg7XG4gICAgLy8gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIC8vIH1cblxuXG4gICAgYSB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG4gICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2OTBweCkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29weXJpZ2h0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWdyYXkpO1xuICAgIH1cbiAgfVxufVxuIiwiLmZvb3RlciB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ib3JkZXJsaW5lLnBuZ1wiKSwgbGluZWFyLWdyYWRpZW50KCMyODI3MjcsICMyODI3MjcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuLmZvb3RlciAuZm9vdGVyLWl0ZW1zIGEge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2OTBweCkge1xuICAuZm9vdGVyIC5mb290ZXItaXRlbXMgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5mb290ZXIgLmZvb3Rlci1pdGVtcyBhOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG4uZm9vdGVyIC5mb290ZXItaXRlbXMgLmNvcHlyaWdodCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWdyYXkpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'px-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/main/sections/landing/landing.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/main/sections/landing/landing.component.ts ***!
  \***********************************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _banner_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner/alert/alert.component */ "./src/app/components/main/sections/landing/banner/alert/alert.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/components/main/sections/landing/banner/banner.component.ts");
/* harmony import */ var _meet_phoenix_meet_phoenix_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meet-phoenix/meet-phoenix.component */ "./src/app/components/main/sections/landing/meet-phoenix/meet-phoenix.component.ts");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/features.component */ "./src/app/components/main/sections/landing/features/features.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/main/sections/landing/footer/footer.component.ts");







class LandingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["px-landing"]], decls: 6, vars: 0, consts: [[1, "w-100", "p-0"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "px-alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "px-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "px-meet-phoenix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "px-features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "px-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_banner_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], _meet_phoenix_meet_phoenix_component__WEBPACK_IMPORTED_MODULE_3__["MeetPhoenixComponent"], _features_features_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9zZWN0aW9ucy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'px-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/main/sections/landing/meet-phoenix/meet-phoenix.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/main/sections/landing/meet-phoenix/meet-phoenix.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MeetPhoenixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetPhoenixComponent", function() { return MeetPhoenixComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MeetPhoenixComponent {
    constructor() { }
    ngOnInit() {
    }
}
MeetPhoenixComponent.ɵfac = function MeetPhoenixComponent_Factory(t) { return new (t || MeetPhoenixComponent)(); };
MeetPhoenixComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeetPhoenixComponent, selectors: [["px-meet-phoenix"]], decls: 25, vars: 0, consts: [["id", "meet-phoenix", 1, "container-fluid", "w-100"], [1, "heading-container", "text-center", "pt-5", "w-100"], [1, "heading", "col-md-12", "col-sm-12", "col-xs-12"], [1, "description", "col-md-12", "col-sm-12", "col-xs-12", "mt-2", "d-flex-center", "w-100"], [1, "text-center", "w-50", "w-xs-100"], [1, "row", "content-1", "center-below-xs"], [1, "col-md-6", "col-sm-12", "col-xs-12", "mt-sm-4", "mt-xs-4", "text-sm-center", "text-xs-center", "text-lg-right", "text-xl-right", "text-md-right"], ["src", "assets/images/meetPhoenixGraphics.png", "alt", "", 1, "meet-img", 2, "width", "100%"], [1, "col-md-6", "col-sm-12", "col-xs-12"], [1, "row"], [1, "col-md-12", "mt-5", "center-below-xs"], [1, "row", "text-lg-left", "text-xl-left", "text-md-left", "text-sm-center", "text-xs-center", "mt-4", "mb-sm-5", "mb-xs-5"], [1, "col-md-6", "mt-4"], [1, "heading", "col-md-12", "mb-4"], [1, "description", "col-md-12"], [1, "col-md-4", "text-center"], ["height", "200px", "src", "assets/images/supportedSystemsbrowers.png", "alt", "", 2, "opacity", "70%"]], template: function MeetPhoenixComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Meet Phoenix Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " A text editor specially crafted for web developers, designers, and students. Phoenix Code's advanced visual tools and live previews\neliminate guesswork, making web development quicker and more enjoyable. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Runs Everywhere ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Phoenix Code is natively available for macOS, Windows, Linux and ChromeOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Or use the web app on any device with a browser.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["section[_ngcontent-%COMP%]   .heading-container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat-bold);\n  color: var(--primary-color);\n  font-size: var(--font-size-xxl);\n}\nsection[_ngcontent-%COMP%]   .heading-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat);\n  line-height: 1.5;\n  width: 40%;\n}\nsection[_ngcontent-%COMP%]   .content-1[_ngcontent-%COMP%]   .meet-img[_ngcontent-%COMP%] {\n  max-width: 600px;\n  padding: 20px;\n}\nsection[_ngcontent-%COMP%]   .content-1[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat-bold);\n  color: var(--primary-color);\n  font-size: var(--font-size-xl);\n}\nsection[_ngcontent-%COMP%]   .content-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n@media only screen and (max-width: 575px) {\n  .center-below-xs[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9waGNvZGUuaW8vc3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9tZWV0LXBob2VuaXgvbWVldC1waG9lbml4LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9tZWV0LXBob2VuaXgvbWVldC1waG9lbml4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlJO0VBVkYsd0NBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUhzQjtBQ0d4QjtBRFdJO0VBQ0UsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNUTjtBRGNJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDWk47QURlSTtFQTFCRix3Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBeUJrQjtBQ1hwQjtBRGFJO0VBQ0UsZ0JBQUE7QUNYTjtBRGdCQTtFQUNFO0lBQ0Usa0JBQUE7RUNiRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL3NlY3Rpb25zL2xhbmRpbmcvbWVldC1waG9lbml4L21lZXQtcGhvZW5peC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQG1peGluIGhlYWQoJGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4bCkpIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdC1ib2xkKTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG5cbn1cblxuXG5zZWN0aW9uIHtcblxuICAuaGVhZGluZy1jb250YWluZXIge1xuICAgIC5oZWFkaW5nIHtcbiAgICAgIEBpbmNsdWRlIGhlYWQ7XG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb250c2VycmF0KTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICB3aWR0aDogNDAlO1xuICAgIH1cbiAgfVxuXG4gIC5jb250ZW50LTEge1xuICAgIC5tZWV0LWltZyB7XG4gICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG5cbiAgICAuaGVhZGluZyB7XG4gICAgICBAaW5jbHVkZSBoZWFkKHZhcigtLWZvbnQtc2l6ZS14bCkpO1xuICAgIH1cbiAgICBwIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmNlbnRlci1iZWxvdy14cyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iLCJzZWN0aW9uIC5oZWFkaW5nLWNvbnRhaW5lciAuaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbnRzZXJyYXQtYm9sZCk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHhsKTtcbn1cbnNlY3Rpb24gLmhlYWRpbmctY29udGFpbmVyIC5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbnRzZXJyYXQpO1xuICBsaW5lLWhlaWdodDogMS41O1xuICB3aWR0aDogNDAlO1xufVxuc2VjdGlvbiAuY29udGVudC0xIC5tZWV0LWltZyB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5zZWN0aW9uIC5jb250ZW50LTEgLmhlYWRpbmcge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb250c2VycmF0LWJvbGQpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhsKTtcbn1cbnNlY3Rpb24gLmNvbnRlbnQtMSBwIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuY2VudGVyLWJlbG93LXhzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetPhoenixComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'px-meet-phoenix',
                templateUrl: './meet-phoenix.component.html',
                styleUrls: ['./meet-phoenix.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/main/sections/landing/server/server.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/main/sections/landing/server/server.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerComponent", function() { return ServerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ServerComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServerComponent.ɵfac = function ServerComponent_Factory(t) { return new (t || ServerComponent)(); };
ServerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServerComponent, selectors: [["px-server"]], decls: 32, vars: 1, consts: [[1, "server"], [1, "my-4", "w-100", "text-center"], [1, "p-4", "transparent", "main-heading"], [1, "d-flex-center", "mb-5"], [1, "terminal"], [1, "row", "text-center", "px-5"], [1, "col-md-4", "link"], [1, "col-md-4", "link", 3, "routerLink"]], template: function ServerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " SERVER ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Terminal access: guarenteed on cloud and onprem with sudo access");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " > On demand virtual machines with sudo access in the cloud for performance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " > Fully Featured Terminal Support ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " > Choose servers based on geo-location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "VISION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "MISSION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/about");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".server[_ngcontent-%COMP%] {\n  color: var(--text-color-light);\n  background: url('white-dot-bg.png'), linear-gradient(#282727, #282727);\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.server[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat);\n  font-size: var(--font-size-lg);\n}\n.server[_ngcontent-%COMP%]   .transparent[_ngcontent-%COMP%] {\n  background-color: var(--background-color-dark);\n}\n.server[_ngcontent-%COMP%]   .main-heading[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat-extra-bold);\n  font-style: italic;\n  font-size: var(--font-size-xxl);\n}\n.server[_ngcontent-%COMP%]   .terminal[_ngcontent-%COMP%] {\n  background: url('terminal.png'), linear-gradient(#282727, #282727);\n  background-size: cover;\n  min-height: 500px;\n  min-width: 50vw;\n  background-repeat: none;\n  padding: 50px;\n  overflow: hidden;\n  color: var(--text-color-gray);\n}\n.server[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat-bold);\n  font-size: var(--font-size-xxl);\n  cursor: pointer;\n}\n.server[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  color: var(--accent-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9waGNvZGUuaW8vc3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9zZXJ2ZXIvc2VydmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9zZXJ2ZXIvc2VydmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxzRUFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUNDRjtBREFFO0VBQ0UsbUNBQUE7RUFDQSw4QkFBQTtBQ0VKO0FEQ0U7RUFDRSw4Q0FBQTtBQ0NKO0FEQ0U7RUFDRSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUNDSjtBREVFO0VBQ0Usa0VBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUNBSjtBREVFO0VBQ0Usd0NBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUNBSjtBRENJO0VBQ0UsMEJBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9zZWN0aW9ucy9sYW5kaW5nL3NlcnZlci9zZXJ2ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VydmVyIHtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvd2hpdGUtZG90LWJnLnBuZycpLCBsaW5lYXItZ3JhZGllbnQoICMyODI3MjcsICMyODI3MjcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHAge1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbnRzZXJyYXQpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcbiAgfVxuXG4gIC50cmFuc3BhcmVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1kYXJrKTtcbiAgfVxuICAubWFpbi1oZWFkaW5nIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb250c2VycmF0LWV4dHJhLWJvbGQpO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14eGwpO1xuICB9XG5cbiAgLnRlcm1pbmFsIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdGVybWluYWwucG5nJyksIGxpbmVhci1ncmFkaWVudCggIzI4MjcyNywgIzI4MjcyNyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICBtaW4td2lkdGg6IDUwdnc7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vbmU7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWdyYXkpO1xuICB9XG4gIC5saW5rIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb250c2VycmF0LWJvbGQpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4bCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgfVxuICB9XG59XG4iLCIuc2VydmVyIHtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3doaXRlLWRvdC1iZy5wbmdcIiksIGxpbmVhci1ncmFkaWVudCgjMjgyNzI3LCAjMjgyNzI3KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLnNlcnZlciBwIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcbn1cbi5zZXJ2ZXIgLnRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1kYXJrKTtcbn1cbi5zZXJ2ZXIgLm1haW4taGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbnRzZXJyYXQtZXh0cmEtYm9sZCk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHhsKTtcbn1cbi5zZXJ2ZXIgLnRlcm1pbmFsIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90ZXJtaW5hbC5wbmdcIiksIGxpbmVhci1ncmFkaWVudCgjMjgyNzI3LCAjMjgyNzI3KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIG1pbi13aWR0aDogNTB2dztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vbmU7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWdyYXkpO1xufVxuLnNlcnZlciAubGluayB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbnRzZXJyYXQtYm9sZCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4bCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZXJ2ZXIgLmxpbms6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'px-server',
                templateUrl: './server.component.html',
                styleUrls: ['./server.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/main/sections/landing/video-overlay/video-overlay.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/main/sections/landing/video-overlay/video-overlay.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: VideoOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoOverlayComponent", function() { return VideoOverlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = ["videoElement"];
function VideoOverlayComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.titleIconSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function VideoOverlayComponent_video_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "video", 13, 14);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.videoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class VideoOverlayComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        const video = this.videoElement.nativeElement;
        video.muted = true;
        video.autoplay = true;
        video.loop = true;
        video.load();
        video.play().catch(error => {
            console.error('Error attempting to play video:', error);
        });
    }
}
VideoOverlayComponent.ɵfac = function VideoOverlayComponent_Factory(t) { return new (t || VideoOverlayComponent)(); };
VideoOverlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoOverlayComponent, selectors: [["px-video-overlay"]], viewQuery: function VideoOverlayComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.videoElement = _t.first);
    } }, inputs: { title: "title", titleIconSrc: "titleIconSrc", subtitle: "subtitle", videoSrc: "videoSrc" }, decls: 14, vars: 4, consts: [["id", "video-overlay", 1, "container", "d-flex-center", "mt-5"], [1, "row", "content-1", "center-below-xs", "pt-4"], [1, "col-md-6", "col-sm-12", "col-xs-12"], [1, "row"], [1, "col-md-12", "mt-4", "center-below-xs"], [1, "row", "text-lg-left", "text-xl-left", "text-md-left", "text-sm-center", "text-xs-center", "mb-sm-5", "mb-xs-5"], [1, "heading", "col-md-12", "mb-4", "text-accent"], ["style", "width: 50px", "class", "flash-img", "alt", "flash", 3, "src", 4, "ngIf"], [1, "description", "col-md-10"], [3, "innerHTML"], [1, "col-md-6", "col-sm-12", "col-xs-12", "mt-sm-4", "mt-xs-4", "text-sm-center", "text-xs-center", "text-lg-right", "text-xl-right", "text-md-right"], ["muted", "", "autoplay", "", "loop", "", "controls", "", 3, "src", 4, "ngIf"], ["alt", "flash", 1, "flash-img", 2, "width", "50px", 3, "src"], ["muted", "", "autoplay", "", "loop", "", "controls", "", 3, "src"], ["videoElement", ""]], template: function VideoOverlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VideoOverlayComponent_img_8_Template, 1, 1, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, VideoOverlayComponent_video_13_Template, 2, 1, "video", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.titleIconSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.subtitle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videoSrc);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["section[_ngcontent-%COMP%] {\n  width: 90%;\n}\nsection[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  max-height: 50svh;\n  width: 100%;\n  position: relative;\n  border-radius: 20px;\n  \n  overflow: hidden;\n  \n  border: 5px solid #333;\n  \n  box-shadow: 0 4px 8px rgba(62, 62, 62, 0.3);\n  \n}\nsection[_ngcontent-%COMP%]   .heading-container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat-bold);\n  color: var(--primary-color);\n  font-size: var(--font-size-xxl);\n}\nsection[_ngcontent-%COMP%]   .heading-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat);\n  line-height: 1.5;\n  width: 40%;\n}\nsection[_ngcontent-%COMP%]   .content-1[_ngcontent-%COMP%]   .meet-img[_ngcontent-%COMP%] {\n  max-width: 600px;\n  padding: 20px;\n}\nsection[_ngcontent-%COMP%]   .content-1[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat-bold);\n  color: var(--primary-color);\n  font-size: var(--font-size-xl);\n}\nsection[_ngcontent-%COMP%]   .content-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n@media only screen and (max-width: 575px) {\n  .center-below-xs[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9waGNvZGUuaW8vc3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy92aWRlby1vdmVybGF5L3ZpZGVvLW92ZXJsYXkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9zZWN0aW9ucy9sYW5kaW5nL3ZpZGVvLW92ZXJsYXkvdmlkZW8tb3ZlcmxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNBLFVBQUE7QUNSQTtBRFNBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUFxQiwrQkFBQTtFQUNyQixnQkFBQTtFQUFrQixpREFBQTtFQUNsQixzQkFBQTtFQUF3QixvQkFBQTtFQUN4QiwyQ0FBQTtFQUE2QyxvQkFBQTtBQ0gvQztBRE9JO0VBcEJGLHdDQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFIc0I7QUNtQnhCO0FES0k7RUFDRSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0hOO0FEUUk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNOTjtBRFNJO0VBcENGLHdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFtQ2tCO0FDTHBCO0FET0k7RUFDRSxnQkFBQTtBQ0xOO0FEV0E7RUFDRTtJQUNFLGtCQUFBO0VDUkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9zZWN0aW9ucy9sYW5kaW5nL3ZpZGVvLW92ZXJsYXkvdmlkZW8tb3ZlcmxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQG1peGluIGhlYWQoJGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4bCkpIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdC1ib2xkKTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG59XG5cblxuXG5zZWN0aW9uIHtcbndpZHRoOiA5MCU7XG52aWRlbyB7XG4gIG1heC1oZWlnaHQ6IDUwc3ZoO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4OyAvKiBBZGp1c3QgdGhlIHZhbHVlIGFzIG5lZWRlZCAqL1xuICBvdmVyZmxvdzogaGlkZGVuOyAvKiBFbnN1cmVzIGNvbnRlbnQgc3RheXMgd2l0aGluIHJvdW5kZWQgY29ybmVycyAqL1xuICBib3JkZXI6IDVweCBzb2xpZCAjMzMzOyAvKiBPcHRpb25hbCBib3JkZXIgKi9cbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoNjIsIDYyLCA2MiwgMC4zKTsgLyogT3B0aW9uYWwgc2hhZG93ICovXG59XG5cbiAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAuaGVhZGluZyB7XG4gICAgICBAaW5jbHVkZSBoZWFkO1xuICAgIH1cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdCk7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICB9XG4gIH1cblxuICAuY29udGVudC0xIHtcbiAgICAubWVldC1pbWcge1xuICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuXG4gICAgLmhlYWRpbmcge1xuICAgICAgQGluY2x1ZGUgaGVhZCh2YXIoLS1mb250LXNpemUteGwpKTtcbiAgICB9XG4gICAgcCB7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIH1cbiAgfVxuXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmNlbnRlci1iZWxvdy14cyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iLCJzZWN0aW9uIHtcbiAgd2lkdGg6IDkwJTtcbn1cbnNlY3Rpb24gdmlkZW8ge1xuICBtYXgtaGVpZ2h0OiA1MHN2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLyogRW5zdXJlcyBjb250ZW50IHN0YXlzIHdpdGhpbiByb3VuZGVkIGNvcm5lcnMgKi9cbiAgYm9yZGVyOiA1cHggc29saWQgIzMzMztcbiAgLyogT3B0aW9uYWwgYm9yZGVyICovXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDYyLCA2MiwgNjIsIDAuMyk7XG4gIC8qIE9wdGlvbmFsIHNoYWRvdyAqL1xufVxuc2VjdGlvbiAuaGVhZGluZy1jb250YWluZXIgLmhlYWRpbmcge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb250c2VycmF0LWJvbGQpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4bCk7XG59XG5zZWN0aW9uIC5oZWFkaW5nLWNvbnRhaW5lciAuZGVzY3JpcHRpb24ge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb250c2VycmF0KTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgd2lkdGg6IDQwJTtcbn1cbnNlY3Rpb24gLmNvbnRlbnQtMSAubWVldC1pbWcge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuc2VjdGlvbiAuY29udGVudC0xIC5oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdC1ib2xkKTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14bCk7XG59XG5zZWN0aW9uIC5jb250ZW50LTEgcCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmNlbnRlci1iZWxvdy14cyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoOverlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'px-video-overlay',
                templateUrl: './video-overlay.component.html',
                styleUrls: ['./video-overlay.component.scss']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['title']
        }], titleIconSrc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['titleIconSrc']
        }], subtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['subtitle']
        }], videoSrc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['videoSrc']
        }], videoElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['videoElement']
        }] }); })();


/***/ }),

/***/ "./src/app/components/main/sections/landing/workspaces/workspaces.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/main/sections/landing/workspaces/workspaces.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WorkspacesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspacesComponent", function() { return WorkspacesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WorkspacesComponent {
    constructor() { }
    ngOnInit() {
    }
}
WorkspacesComponent.ɵfac = function WorkspacesComponent_Factory(t) { return new (t || WorkspacesComponent)(); };
WorkspacesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkspacesComponent, selectors: [["px-workspaces"]], decls: 57, vars: 0, consts: [[1, "workspaces", "container-fluid"], [1, "introducing", "row"], [1, "d-flex-center", "w-100"], [1, "p-4", "white", "text-intro"], [1, "col-md-12", "text-center"], [1, "white", "p-4", "main-heading"], [1, "col-md-12", "text-center", "mb-4", "table-img"], ["src", "assets/images/developers-table.png", "alt", "", 1, "white", "p-4"], [1, "py-4", "col-md-8", "offset-md-2", "white"], [1, "col-md-12", "text-center", "my-4", "host-img", "row"], [1, "py-4", "px-0", "col-md-4", "offset-md-1"], [1, "white", "p-4", "mt-4"], ["src", "assets/images/host.png", "alt", "host", 1, "white", "p-4"], [1, "col-md-4", "px-0"], [1, "white", "p-4"], [1, "col-md-12", "text-center", "my-4"], [1, "row"], [1, "col-md-6"], ["src", "assets/images/collab-coding.png", "alt", "", 1, "white", "collab-coding"], [1, "col-md-6", "white"], [1, "main-heading", "collab"], [1, "text-left", "points"], [1, "col-md-5", "offset-md-1", "white", "d-flex-center", "flex-column"], [1, "text-left"], [1, "col-md-6", "text-left"], ["src", "assets/images/login.png", "alt", "", 1, "white", "collab-coding"]], template: function WorkspacesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Introducing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "DEVELOPMENT WORKSPACES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Phoenix\u2019s development workspaces are not just your project\u2019s root folder like you have experienced in other IDE\u2019s. Phoenix workspaces are real local & cloud spaces.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Setup Development workspaces locally & in the cloud. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " With just the click of a button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Host & share apps easily");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "COLLABORATIVE DEVELOPMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "do it the right way with phoenix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ol", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Create custom development workspace and share it with the team. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Seamless workspace roaming between all your connected devices. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Continous cloud backup and recovery of workspaces. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Experience peer programming at its best. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "AUTH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Multiple Authentication mechanisms Supports google, facebook, git and bitbucket logins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "ENTERPRISE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "SAML Enterprise logins Optional self hosting Advanced Auditing Enforce source code copy policies in developer machines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".workspaces[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  background: url('dot-bg.png');\n  background-size: cover;\n}\n.workspaces[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat);\n  font-size: var(--font-size-lg);\n}\n.workspaces[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.workspaces[_ngcontent-%COMP%]   .text-intro[_ngcontent-%COMP%] {\n  font-family: var(--font-caveat);\n}\n.workspaces[_ngcontent-%COMP%]   .main-heading[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat-extra-bold);\n  font-style: italic;\n}\n.workspaces[_ngcontent-%COMP%]   .table-img[_ngcontent-%COMP%] {\n  margin-top: -5px;\n}\n.workspaces[_ngcontent-%COMP%]   .collab[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.workspaces[_ngcontent-%COMP%]   .points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9waGNvZGUuaW8vc3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy93b3Jrc3BhY2VzL3dvcmtzcGFjZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9zZWN0aW9ucy9sYW5kaW5nL3dvcmtzcGFjZXMvd29ya3NwYWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBQ0NGO0FEQ0U7RUFDRSxtQ0FBQTtFQUNBLDhCQUFBO0FDQ0o7QURFRTtFQUNFLHVCQUFBO0FDQUo7QURHRTtFQUNFLCtCQUFBO0FDREo7QURHRTtFQUNFLDhDQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElFO0VBQ0UsZ0JBQUE7QUNGSjtBREtFO0VBQ0UsOEJBQUE7QUNISjtBRE1JO0VBQ0UsY0FBQTtBQ0pOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL3NlY3Rpb25zL2xhbmRpbmcvd29ya3NwYWNlcy93b3Jrc3BhY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndvcmtzcGFjZXMge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kb3QtYmcucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgcCB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpO1xuICB9XG5cbiAgLndoaXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC50ZXh0LWludHJvIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1jYXZlYXQpO1xuICB9XG4gIC5tYWluLWhlYWRpbmcge1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbnRzZXJyYXQtZXh0cmEtYm9sZCk7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG5cbiAgLnRhYmxlLWltZyB7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgfVxuXG4gIC5jb2xsYWIge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhsKTtcbiAgfVxuICAucG9pbnRzIHtcbiAgICBsaSB7XG4gICAgICBtYXJnaW46IDIwcHggMDtcbiAgICB9XG4gIH1cbn1cbiIsIi53b3Jrc3BhY2VzIHtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2RvdC1iZy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ud29ya3NwYWNlcyBwIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcbn1cbi53b3Jrc3BhY2VzIC53aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLndvcmtzcGFjZXMgLnRleHQtaW50cm8ge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1jYXZlYXQpO1xufVxuLndvcmtzcGFjZXMgLm1haW4taGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbnRzZXJyYXQtZXh0cmEtYm9sZCk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi53b3Jrc3BhY2VzIC50YWJsZS1pbWcge1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuLndvcmtzcGFjZXMgLmNvbGxhYiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhsKTtcbn1cbi53b3Jrc3BhY2VzIC5wb2ludHMgbGkge1xuICBtYXJnaW46IDIwcHggMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkspacesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'px-workspaces',
                templateUrl: './workspaces.component.html',
                styleUrls: ['./workspaces.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/main/sections/nav/nav.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/main/sections/nav/nav.component.ts ***!
  \***************************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function NavComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phoenix Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavComponent {
    constructor() {
        this.navFixed = false;
        this.scrollOffset = 100;
    }
    onWindowScroll() {
        this.navFixed = (window.pageYOffset
            || document.documentElement.scrollTop
            || document.body.scrollTop || 0) > this.scrollOffset;
    }
    ngOnInit() {
        this.scrollOffset = document.getElementById('meet-phoenix').offsetTop - 200;
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["px-nav"]], hostBindings: function NavComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 39, vars: 3, consts: [[1, "navbar", "navbar-expand-lg", 3, "ngClass"], [1, "navbar-brand", 3, "routerLink"], ["src", "assets/images/phoenix-logo.svg", "alt", "logo", 2, "height", "60px", "width", "60px", "margin-right", "10px"], ["class", "sub-heading", 4, "ngIf"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "white", "viewBox", "0 0 16 16", 1, "bi", "bi-list"], ["fill-rule", "evenodd", "d", "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "div-inline", "my-2", "my-lg-0"], [1, "nav-item", "active"], ["target", "_blank", "href", "https://github.com/orgs/phcode-dev/discussions", 1, "nav-link"], ["target", "_blank", "href", "https://docs.phcode.dev/", 1, "nav-link"], ["href", "https://github.com/phcode-dev/phoenix", "target", "_blank", "aria-label", "GitHub", 1, "nav-link", "icon"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 499.36", "focusable", "false", 1, "navbar-nav-svg"], ["d", "M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z", "fill-rule", "evenodd"], ["href", "https://twitter.com/phcodedev", "target", "_blank", "aria-label", "Twitter", 1, "nav-link", "icon"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "navbar-nav-svg", "bi", "bi-twitter-x"], ["d", "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"], ["href", "https://discord.com/invite/rBpTBPttca", "target", "_blank", "aria-label", "Discord", 1, "nav-link", "icon"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "navbar-nav-svg", "bi", "bi-discord"], ["d", "M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"], ["href", "https://www.youtube.com/channel/UCNK2a8DKqPQQe3GlfTk-RHg", "target", "_blank", "aria-label", "Youtube", 1, "nav-link", "icon"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "navbar-nav-svg", "bi", "bi-youtube"], ["d", "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"], [1, "sub-heading"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavComponent_span_3_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Docs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.navFixed ? "navFixed" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navFixed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\nnav[_ngcontent-%COMP%] {\n  height: var(--nav-height);\n  background-color: transparent;\n  z-index: 100;\n}\n\nnav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\nnav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: -5px;\n  font-family: var(--font-montserrat-bold);\n  font-size: var(--font-size-xl);\n}\n\nnav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover {\n  color: var(--text-color-light);\n}\n\nnav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  margin: 0 20px;\n}\n\nnav[_ngcontent-%COMP%]   .nav-link.icon[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nnav[_ngcontent-%COMP%]   .navbar-nav-svg[_ngcontent-%COMP%] {\n  fill: var(--text-color-light);\n  height: 20px;\n}\n\nnav[_ngcontent-%COMP%]   .navbar-nav-svg[_ngcontent-%COMP%]:hover {\n  fill: var(--accent-color);\n}\n\n.navFixed[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  background-color: rgba(65, 63, 63, 0.594);\n  transition: all 0.1s ease-in-out;\n}\n\n.navbar-collapse.show[_ngcontent-%COMP%], .navbar-collapse.collapsing[_ngcontent-%COMP%] {\n  background-color: rgba(65, 63, 63, 0.816);\n  text-align: center;\n}\n\na[_ngcontent-%COMP%] {\n  color: var(--text-color-light);\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: var(--accent-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9waGNvZGUuaW8vc3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluL3NlY3Rpb25zL25hdi9uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVJO0VBQ0UsV0FBQTtBQ0FOOztBREVJO0VBQ0UsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLDhCQUFBO0FDQU47O0FERUk7RUFDRSw4QkFBQTtBQ0FOOztBREtFO0VBQ0UsY0FBQTtBQ0hKOztBRElJO0VBQ0UsU0FBQTtBQ0ZOOztBRE1FO0VBQ0UsNkJBQUE7RUFJQSxZQUFBO0FDUEo7O0FESUk7RUFDRSx5QkFBQTtBQ0ZOOztBRFFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLGdDQUFBO0FDTEY7O0FEUUE7RUFDRSx5Q0FBQTtFQUNBLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSw4QkFBQTtBQ0xGOztBRE1FO0VBQ0ksMEJBQUE7QUNKTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9zZWN0aW9ucy9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm5hdiB7XG4gIGhlaWdodDogdmFyKC0tbmF2LWhlaWdodCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB6LWluZGV4OiAxMDA7XG5cbiAgLm5hdmJhci1icmFuZCB7XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdC1ib2xkKTtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhsKTtcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG4gICAgfVxuXG4gIH1cblxuICAubmF2LWxpbmsge1xuICAgIG1hcmdpbjogMCAyMHB4O1xuICAgICYuaWNvbiB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG5cbiAgLm5hdmJhci1uYXYtc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KSA7XG4gICAgJjpob3ZlciB7XG4gICAgICBmaWxsOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgIH1cbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cbn1cblxuLm5hdkZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDY1LCA2MywgNjMsIDAuNTk0KTtcbiAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcbn1cblxuLm5hdmJhci1jb2xsYXBzZS5zaG93LCAubmF2YmFyLWNvbGxhcHNlLmNvbGxhcHNpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNjUsIDYzLCA2MywgMC44MTYpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmEge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG4gICY6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgfVxufVxuIiwiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm5hdiB7XG4gIGhlaWdodDogdmFyKC0tbmF2LWhlaWdodCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB6LWluZGV4OiAxMDA7XG59XG5uYXYgLm5hdmJhci1icmFuZCBpbWcge1xuICB3aWR0aDogODBweDtcbn1cbm5hdiAubmF2YmFyLWJyYW5kIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdC1ib2xkKTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xufVxubmF2IC5uYXZiYXItYnJhbmQ6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG59XG5uYXYgLm5hdi1saW5rIHtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG5uYXYgLm5hdi1saW5rLmljb24ge1xuICBtYXJnaW46IDA7XG59XG5uYXYgLm5hdmJhci1uYXYtc3ZnIHtcbiAgZmlsbDogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG4gIGhlaWdodDogMjBweDtcbn1cbm5hdiAubmF2YmFyLW5hdi1zdmc6aG92ZXIge1xuICBmaWxsOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4ubmF2Rml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY1LCA2MywgNjMsIDAuNTk0KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5uYXZiYXItY29sbGFwc2Uuc2hvdywgLm5hdmJhci1jb2xsYXBzZS5jb2xsYXBzaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NSwgNjMsIDYzLCAwLjgxNik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'px-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss']
            }]
    }], null, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll']
        }] }); })();


/***/ }),

/***/ "./src/app/directives/mouse.move.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/directives/mouse.move.directive.ts ***!
  \****************************************************/
/*! exports provided: MouseMoveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseMoveDirective", function() { return MouseMoveDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MouseMoveDirective {
    constructor(el) {
        this.el = el;
        this.element = null;
        this.mouseOverParent = false;
        this.parent = null;
        this.xMovement = 10;
        this.yMovement = 10;
        this.scroll = false;
        this.updateElPosition = (e) => {
            const mousePercentX = e.clientX / document.body.clientWidth;
            const mousePercentY = e.clientY / document.body.clientHeight;
            const posX = (mousePercentX * 2 - 1) * this.xMovement;
            const posY = (mousePercentY * 2 - 1) * this.yMovement;
            this.element.style.transform = `translate(${posX}px, ${posY}px)`;
        };
        this.updateElPositionOnScroll = (e) => {
            console.log('scroll');
            if (this.scroll) {
                // const mousePercentX = window.scrollY / document.body.clientWidth;
                const mousePercentY = window.scrollY / document.body.clientHeight;
                // const posX = (mousePercentX * 2 - 1) * this.xMovement;
                const posY = (mousePercentY * 2 - 1) * (this.yMovement * 3);
                this.element.style.transform = `translateY(${posY}px)`;
            }
        };
        this.element = el.nativeElement;
    }
    ngAfterViewInit() {
        if (this.parent) {
            this.parent.addEventListener('mouseenter', () => {
                document.addEventListener('mousemove', this.updateElPosition);
            });
            this.parent.addEventListener('mouseleave', () => {
                document.removeEventListener('mousemove', this.updateElPosition);
            });
        }
    }
}
MouseMoveDirective.ɵfac = function MouseMoveDirective_Factory(t) { return new (t || MouseMoveDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
MouseMoveDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MouseMoveDirective, selectors: [["", "pxMouseMove", ""]], inputs: { parent: "parent", xMovement: "xMovement", yMovement: "yMovement", scroll: "scroll" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MouseMoveDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[pxMouseMove]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { parent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['parent']
        }], xMovement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['xMovement']
        }], yMovement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['yMovement']
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['scroll']
        }] }); })();


/***/ }),

/***/ "./src/app/services/alertService.ts":
/*!******************************************!*\
  !*** ./src/app/services/alertService.ts ***!
  \******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _apiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apiService */ "./src/app/services/apiService.ts");





class AlertService {
    constructor(apiService) {
        this.apiService = apiService;
        this.criticalAlertsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.criticalAlerts$ = this.criticalAlertsSubject.asObservable();
    }
    fetchCriticalAlerts() {
        if (this.criticalAlertsSubject.value === null) {
            return this.apiService.getCriticalAlerts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(data => this.criticalAlertsSubject.next(data)));
        }
        else {
            return this.criticalAlerts$;
        }
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_apiService__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _apiService__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/apiService.ts":
/*!****************************************!*\
  !*** ./src/app/services/apiService.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ApiService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://updates.phcode.io/install.json';
        this.downloadCountUrl = 'https://public-stats.phcode.io/generated/download_counts.json';
        this.alertsUrl = 'https://updates.phcode.io/siteNotifications/en.json';
    }
    getDownloadUrls() {
        return this.http.get(`${this.apiUrl}`);
    }
    getDownloadCounts() {
        return this.http.get(`${this.downloadCountUrl}`);
    }
    getCriticalAlerts() {
        return this.http.get(`${this.alertsUrl}`);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~components-about-about-module~components-main-main-module-es2015.js.map