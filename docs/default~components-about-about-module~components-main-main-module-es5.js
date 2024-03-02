function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-about-about-module~components-main-main-module"], {
  /***/
  "./src/app/components/main/main-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/main/main-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: MainRoutingModule */

  /***/
  function srcAppComponentsMainMainRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function () {
      return MainRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main.component */
    "./src/app/components/main/main.component.ts");

    var routes = [{
      path: '',
      component: _main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    }];

    var MainRoutingModule = /*#__PURE__*/_createClass(function MainRoutingModule() {
      _classCallCheck(this, MainRoutingModule);
    });

    MainRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MainRoutingModule
    });
    MainRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MainRoutingModule_Factory(t) {
        return new (t || MainRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main/main.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/main/main.component.ts ***!
    \***************************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppComponentsMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _sections_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sections/nav/nav.component */
    "./src/app/components/main/sections/nav/nav.component.ts");
    /* harmony import */


    var _sections_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sections/landing/landing.component */
    "./src/app/components/main/sections/landing/landing.component.ts");

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)();
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["px-main"]],
      decls: 2,
      vars: 0,
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "px-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "px-landing");
        }
      },
      directives: [_sections_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _sections_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'px-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main/main.module.ts":
  /*!************************************************!*\
    !*** ./src/app/components/main/main.module.ts ***!
    \************************************************/

  /*! exports provided: MainModule */

  /***/
  function srcAppComponentsMainMainModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainModule", function () {
      return MainModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _main_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main-routing.module */
    "./src/app/components/main/main-routing.module.ts");
    /* harmony import */


    var _main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _sections_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sections/landing/landing.component */
    "./src/app/components/main/sections/landing/landing.component.ts");
    /* harmony import */


    var _sections_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sections/nav/nav.component */
    "./src/app/components/main/sections/nav/nav.component.ts");
    /* harmony import */


    var _sections_landing_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sections/landing/banner/banner.component */
    "./src/app/components/main/sections/landing/banner/banner.component.ts");
    /* harmony import */


    var src_app_directives_mouse_move_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/mouse.move.directive */
    "./src/app/directives/mouse.move.directive.ts");
    /* harmony import */


    var _sections_landing_meet_phoenix_meet_phoenix_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./sections/landing/meet-phoenix/meet-phoenix.component */
    "./src/app/components/main/sections/landing/meet-phoenix/meet-phoenix.component.ts");
    /* harmony import */


    var _sections_landing_features_features_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./sections/landing/features/features.component */
    "./src/app/components/main/sections/landing/features/features.component.ts");
    /* harmony import */


    var _sections_landing_workspaces_workspaces_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./sections/landing/workspaces/workspaces.component */
    "./src/app/components/main/sections/landing/workspaces/workspaces.component.ts");
    /* harmony import */


    var _sections_landing_server_server_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./sections/landing/server/server.component */
    "./src/app/components/main/sections/landing/server/server.component.ts");
    /* harmony import */


    var _sections_landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./sections/landing/footer/footer.component */
    "./src/app/components/main/sections/landing/footer/footer.component.ts");
    /* harmony import */


    var _sections_landing_banner_download_download_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./sections/landing/banner/download/download.component */
    "./src/app/components/main/sections/landing/banner/download/download.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MainModule = /*#__PURE__*/_createClass(function MainModule() {
      _classCallCheck(this, MainModule);
    });

    MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MainModule
    });
    MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MainModule_Factory(t) {
        return new (t || MainModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, {
        declarations: [_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], _sections_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"], _sections_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"], _sections_landing_banner_download_download_component__WEBPACK_IMPORTED_MODULE_13__["DownloadComponent"], _sections_landing_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"], src_app_directives_mouse_move_directive__WEBPACK_IMPORTED_MODULE_7__["MouseMoveDirective"], _sections_landing_meet_phoenix_meet_phoenix_component__WEBPACK_IMPORTED_MODULE_8__["MeetPhoenixComponent"], _sections_landing_features_features_component__WEBPACK_IMPORTED_MODULE_9__["FeaturesComponent"], _sections_landing_workspaces_workspaces_component__WEBPACK_IMPORTED_MODULE_10__["WorkspacesComponent"], _sections_landing_server_server_component__WEBPACK_IMPORTED_MODULE_11__["ServerComponent"], _sections_landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"]],
        exports: [_sections_landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _sections_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], _sections_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"], _sections_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"], _sections_landing_banner_download_download_component__WEBPACK_IMPORTED_MODULE_13__["DownloadComponent"], _sections_landing_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"], src_app_directives_mouse_move_directive__WEBPACK_IMPORTED_MODULE_7__["MouseMoveDirective"], _sections_landing_meet_phoenix_meet_phoenix_component__WEBPACK_IMPORTED_MODULE_8__["MeetPhoenixComponent"], _sections_landing_features_features_component__WEBPACK_IMPORTED_MODULE_9__["FeaturesComponent"], _sections_landing_workspaces_workspaces_component__WEBPACK_IMPORTED_MODULE_10__["WorkspacesComponent"], _sections_landing_server_server_component__WEBPACK_IMPORTED_MODULE_11__["ServerComponent"], _sections_landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"]],
          exports: [_sections_landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _sections_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_sections_landing_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_l"], _main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], _sections_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"], _sections_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"], _sections_landing_banner_download_download_component__WEBPACK_IMPORTED_MODULE_13__["DownloadComponent"], _sections_landing_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"], src_app_directives_mouse_move_directive__WEBPACK_IMPORTED_MODULE_7__["MouseMoveDirective"], _sections_landing_meet_phoenix_meet_phoenix_component__WEBPACK_IMPORTED_MODULE_8__["MeetPhoenixComponent"], _sections_landing_features_features_component__WEBPACK_IMPORTED_MODULE_9__["FeaturesComponent"], _sections_landing_workspaces_workspaces_component__WEBPACK_IMPORTED_MODULE_10__["WorkspacesComponent"], _sections_landing_server_server_component__WEBPACK_IMPORTED_MODULE_11__["ServerComponent"], _sections_landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]]);
    /***/

  },

  /***/
  "./src/app/components/main/sections/landing/banner/banner.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/main/sections/landing/banner/banner.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: DownloadLabels, BannerComponent */

  /***/
  function srcAppComponentsMainSectionsLandingBannerBannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DownloadLabels", function () {
      return DownloadLabels;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannerComponent", function () {
      return BannerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _download_download_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./download/download.component */
    "./src/app/components/main/sections/landing/banner/download/download.component.ts");
    /* harmony import */


    var src_app_services_ApiService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/ApiService */
    "./src/app/services/ApiService.ts");

    var DownloadLabels = {
      windows_x64: "Windows x64 Installer",
      mac_m1: "Mac - Apple Silicon DMG",
      mac_intel: "Mac - Intel DMG",
      linux: "Linux x64"
    };

    var BannerComponent = /*#__PURE__*/function () {
      function BannerComponent(apiService) {
        _classCallCheck(this, BannerComponent);

        this.apiService = apiService;
        this.loading = true;
      }

      _createClass(BannerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.apiService.getDownloadUrls().subscribe(function (data) {
            _this.downloadUrls = data['phcode.io.DownloadURL'];
            _this.donwloadUrlArr = Object.keys(_this.downloadUrls).map(function (key) {
              return {
                label: DownloadLabels[key],
                value: data['phcode.io.DownloadURL'][key],
                key: key
              };
            });

            _this.donwloadUrlArr.push({
              label: DownloadLabels.linux,
              value: '',
              key: _download_download_component__WEBPACK_IMPORTED_MODULE_1__["Platforms"].linux
            });

            _this.loading = false;
          }, function () {
            console.error('Failed to get URLs');
          });
        }
      }]);

      return BannerComponent;
    }();

    BannerComponent.ɵfac = function BannerComponent_Factory(t) {
      return new (t || BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ApiService__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
    };

    BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BannerComponent,
      selectors: [["px-banner"]],
      decls: 29,
      vars: 9,
      consts: [[1, "main"], ["parent", ""], ["src", "assets/images/vector-top-left.png", "alt", "topl", 1, "vtl", "z1"], ["src", "assets/images/vector-bottom-right.png", "alt", "bottoml", 1, "vbr", "z1"], ["pxMouseMove", "", "src", "assets/images/stars-left.svg", "alt", "bottoml", 1, "stars-left", "z2", 3, "parent"], ["pxMouseMove", "", "src", "assets/images/stars-right.svg", "alt", "bottoml", 1, "stars-right", "z2", 3, "parent"], [1, "container", "content-container", "d-flex", "flex-column", "justify-center", "align-center", "z8"], ["pxMouseMove", "", "xMovement", "3", "yMovement", "3", "src", "assets/images/phoenix-logo.svg", "alt", "logo", 1, "brand-logo", 3, "parent"], [1, "brand-text", "text-center", "z2", "d-flex", "flex-column", "justify-center", "align-center"], [3, "downloadUrls", "donwloadUrlArr"], ["href", "https://phcode.dev/", "target", "_blank"], ["type", "button", 1, "transparent-button", "btn", "launch-btn"], ["pxMouseMove", "", "xMovement", "0", "yMovement", "10", "src", "assets/images/cloud1.svg", "alt", "cloud1", 1, "cloud", "cloud-1", "z3", 3, "parent"], ["pxMouseMove", "", "xMovement", "0", "yMovement", "15", "src", "assets/images/cloud2.svg", "alt", "cloud2", 1, "cloud", "cloud-2", "z6", 3, "parent"], ["pxMouseMove", "", "xMovement", "0", "yMovement", "25", "src", "assets/images/cloud3.svg", "alt", "cloud3", 1, "cloud", "cloud-3", "z5", 3, "parent"], ["pxMouseMove", "", "xMovement", "0", "yMovement", "5", "src", "assets/images/cloud4.svg", "alt", "cloud4", 1, "cloud", "cloud-4", "z6", 3, "parent"], [1, "sky"], ["id", "star-1", 1, "star"], ["id", "star-2", 1, "star"], ["id", "star-3", 1, "star"], ["id", "star-4", 1, "star"]],
      template: function BannerComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Code Creatively: Visual Editing Tailored for Developers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "px-download", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Launch Web Editor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("downloadUrls", ctx.downloadUrls)("donwloadUrlArr", ctx.donwloadUrlArr);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", _r0);
        }
      },
      styles: [".main[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  position: relative;\n  overflow: hidden;\n  background: linear-gradient(#000A2E 80%, white);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.main[_ngcontent-%COMP%]   .vtl[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10%;\n  left: -20px;\n}\n.main[_ngcontent-%COMP%]   .vbr[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10%;\n  right: -20px;\n}\n.main[_ngcontent-%COMP%]   .stars-left[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  top: 10%;\n  opacity: 0.7;\n}\n.main[_ngcontent-%COMP%]   .stars-right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  top: 5%;\n  opacity: 0.7;\n}\n.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n  color: var(--text-color-light);\n  top: 35%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  font-family: var(--font-montserrat-bold);\n}\n.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  height: 35vh;\n}\n.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  margin-top: -30px;\n}\n.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xxl);\n  margin-bottom: var(--space-lg);\n}\n.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat);\n}\n.main[_ngcontent-%COMP%]   .cloud[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  -webkit-user-drag: none;\n  -khtml-user-drag: none;\n  -moz-user-drag: none;\n  -o-user-drag: none;\n  user-drag: none;\n}\n.sky[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: rotateZ(136deg);\n  top: -182px;\n  left: 472px;\n  z-index: 2;\n  opacity: 0.5;\n}\n.star[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  height: 2px;\n  border-radius: 885px;\n  background: linear-gradient(-45deg, #eef0f5, rgba(0, 0, 255, 0));\n  filter: drop-shadow(0 0 6px #d7dff0);\n  animation: tail 5000ms ease-in-out infinite, shooting 5000ms ease-in-out infinite;\n}\n\n.star[_ngcontent-%COMP%]::before, .star[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: calc(50% - 1px);\n  right: 0;\n  height: 2px;\n  background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #eaeef8, rgba(0, 0, 255, 0));\n  transform: translateX(50%) rotateZ(45deg);\n  border-radius: 100%;\n  animation: shining 3000ms ease-in-out infinite;\n}\n.star[_ngcontent-%COMP%]::after {\n  transform: translateX(50%) rotateZ(-45deg);\n}\n\n.star[_ngcontent-%COMP%]:nth-child(1) {\n  top: calc(50% - -119px);\n  left: calc(50% - 43px);\n}\n.star[_ngcontent-%COMP%]:nth-child(1)::before, .star[_ngcontent-%COMP%]:nth-child(1)::after {\n  animation-delay: 12000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(2) {\n  top: calc(50% - -100px);\n  left: calc(50% - 137px);\n  animation-delay: 5000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(2)::before, .star[_ngcontent-%COMP%]:nth-child(2)::after {\n  animation-delay: 10000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(3) {\n  top: calc(50% - -90px);\n  left: calc(50% - 222px);\n  animation-delay: 7000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(3)::before, .star[_ngcontent-%COMP%]:nth-child(3)::after {\n  animation-delay: 7000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(4) {\n  top: calc(50% - -129px);\n  left: calc(50% - 213px);\n  animation-delay: 7000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(4)::before, .star[_ngcontent-%COMP%]:nth-child(4)::after {\n  animation-delay: 7000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(5) {\n  top: calc(50% - 146px);\n  left: calc(50% - 112px);\n  animation-delay: 3000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(5)::before, .star[_ngcontent-%COMP%]:nth-child(5)::after {\n  animation-delay: 3000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(6) {\n  top: calc(50% - -108px);\n  left: calc(50% - 160px);\n  animation-delay: 3000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(6)::before, .star[_ngcontent-%COMP%]:nth-child(6)::after {\n  animation-delay: 3000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(7) {\n  top: calc(50% - 52px);\n  left: calc(50% - 72px);\n  animation-delay: 7000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(7)::before, .star[_ngcontent-%COMP%]:nth-child(7)::after {\n  animation-delay: 7000ms;\n}\n\n@keyframes tail {\n  0% {\n    width: 0;\n  }\n  30% {\n    width: 100px;\n  }\n  100% {\n    width: 0;\n  }\n}\n\n@keyframes shining {\n  0% {\n    width: 0;\n  }\n  50% {\n    width: 30px;\n  }\n  100% {\n    width: 0;\n  }\n}\n\n\n\n\n@keyframes shooting {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(500px);\n  }\n}\n.launch-btn[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 100%;\n  min-width: 350px;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9waGNvZGUuaW8vc3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0NBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUNDRjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREo7QURJRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDRko7QURLRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FDSEo7QURNRTtFQUNFLDhCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUNKSjtBRE1JO0VBQ0UsWUFBQTtBQ0pOO0FETUk7RUFDRSxpQkFBQTtBQ0pOO0FES007RUFDRSwrQkFBQTtFQUNBLDhCQUFBO0FDSFI7QURLTTtFQUNFLG1DQUFBO0FDSFI7QURRRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNOSjtBRFdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ1JGO0FEVUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0VBQUE7RUFJQSxvQ0FBQTtFQUdBLGlGQUFBO0FDVkY7QURjQSxnREFBQTtBQUNBOztFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxvRkFBQTtFQU9BLHlDQUFBO0VBQ0EsbUJBQUE7RUFFQSw4Q0FBQTtBQ2hCRjtBRGtCQTtFQUVFLDBDQUFBO0FDZkY7QURrQkE7OzsyQkFBQTtBQUlBO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtBQ2ZGO0FEbUJBOztFQUdFLHdCQUFBO0FDaEJGO0FEa0JBO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtFQUVBLHVCQUFBO0FDZkY7QURpQkE7O0VBR0Usd0JBQUE7QUNkRjtBRGdCQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFFQSx1QkFBQTtBQ2JGO0FEZUE7O0VBR0UsdUJBQUE7QUNaRjtBRGNBO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtFQUVBLHVCQUFBO0FDWEY7QURhQTs7RUFHRSx1QkFBQTtBQ1ZGO0FEWUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBRUEsdUJBQUE7QUNURjtBRFdBOztFQUdFLHVCQUFBO0FDUkY7QURVQTtFQUNFLHVCQUFBO0VBQ0EsdUJBQUE7RUFFQSx1QkFBQTtBQ1BGO0FEU0E7O0VBR0UsdUJBQUE7QUNORjtBRFFBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUVBLHVCQUFBO0FDTEY7QURPQTs7RUFHRSx1QkFBQTtBQ0pGO0FET0E7d0JBQUE7QUFFQTtFQUNFO0lBQ0UsUUFBQTtFQ0pGO0VETUE7SUFDRSxZQUFBO0VDSkY7RURNQTtJQUNFLFFBQUE7RUNKRjtBQUNGO0FET0E7d0JBQUE7QUFFQTtFQUNFO0lBQ0UsUUFBQTtFQ0xGO0VET0E7SUFDRSxXQUFBO0VDTEY7RURPQTtJQUNFLFFBQUE7RUNMRjtBQUNGO0FEUUE7NkJBQUE7QUFjQTtpQkFBQTtBQWNBO3FCQUFBO0FBYUEsaUNBQUE7QUFDQTtFQUNFO0lBRUUsd0JBQUE7RUNURjtFRFdBO0lBRUUsNEJBQUE7RUNURjtBQUNGO0FEWUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNWRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9zZWN0aW9ucy9sYW5kaW5nL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwMEEyRSA4MCUsIHdoaXRlKTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cblxuICAudnRsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTAlO1xuICAgIGxlZnQ6IC0yMHB4O1xuICB9XG5cbiAgLnZiciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTAlO1xuICAgIHJpZ2h0OiAtMjBweDtcbiAgfVxuXG4gIC5zdGFycy1sZWZ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogMTAlO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gIC5zdGFycy1yaWdodCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgdG9wOiA1JTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAuY29udGVudC1jb250YWluZXIge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcbiAgICB0b3A6IDM1JTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbnRzZXJyYXQtYm9sZCk7XG5cbiAgICAuYnJhbmQtbG9nbyB7XG4gICAgICBoZWlnaHQ6IDM1dmg7XG4gICAgfVxuICAgIC5icmFuZC10ZXh0IHtcbiAgICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14eGwpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1sZyk7XG4gICAgICB9XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNsb3VkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICAgIC1raHRtbC11c2VyLWRyYWc6IG5vbmU7XG4gICAgLW1vei11c2VyLWRyYWc6IG5vbmU7XG4gICAgLW8tdXNlci1kcmFnOiBub25lO1xuICAgIHVzZXItZHJhZzogbm9uZTtcbiAgfVxuXG59XG5cbi5za3kge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogcm90YXRlWigxMzZkZWcpO1xuICB0b3A6IC0xODJweDtcbiAgbGVmdDogNDcycHg7XG4gIHotaW5kZXg6IDI7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5zdGFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogODg1cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsXG4gICAgI2VlZjBmNSwgcmdiYSgwLCAwLCAyNTUsIDApKTtcblxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDZweCAjZWVmMWY4KTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNnB4ICNkN2RmZjApO1xuICAtd2Via2l0LWFuaW1hdGlvbjogdGFpbCA1MDAwbXMgZWFzZS1pbi1vdXQgaW5maW5pdGUsXG4gICAgc2hvb3RpbmcgNTAwMG1zIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBhbmltYXRpb246IHRhaWwgNTAwMG1zIGVhc2UtaW4tb3V0IGluZmluaXRlLFxuICAgIHNob290aW5nIDUwMDBtcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLyogSGVyZSB3ZSBhZGQgYmVmb3JlIGFuZCBhZnRlciBlZmZlY3QgdG8gc3RhciAqL1xuLnN0YXI6OmJlZm9yZSxcbi5zdGFyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDUwJSAtIDFweCk7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIC00NWRlZyxcbiAgICByZ2JhKDAsIDAsIDI1NSwgMCksXG4gICAgI2VhZWVmOCxcbiAgICByZ2JhKDAsIDAsIDI1NSwgMClcbiAgKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSByb3RhdGVaKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgcm90YXRlWig0NWRlZyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzaGluaW5nIDMwMDBtcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBzaGluaW5nIDMwMDBtcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cbi5zdGFyOjphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgcm90YXRlWigtNDVkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSByb3RhdGVaKC00NWRlZyk7XG59XG5cbi8qIEhlcmUgd2UgYXJlIGFkZGluZyBsb2NhdGlvbiBvZiBlYWNoXG4gICBudGgtY2hpbGQsIGFuaW1hdGlvbnMsIGRlbGF5cywgYW5kXG4gICBiZWZvcmUgYW5kIGFmdGVyIGVmZmVjdHMgdG8gZWFjaFxuICAgYW5kIGV2ZXJ5IGJhbGxzKHN0YXJzKSAqL1xuLnN0YXI6bnRoLWNoaWxkKDEpIHtcbiAgdG9wOiBjYWxjKDUwJSAtIC0xMTlweCk7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNDNweCk7XG4gIC8vIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA0MDAwbXM7XG4gIC8vIGFuaW1hdGlvbi1kZWxheTogNDAwMG1zO1xufVxuLnN0YXI6bnRoLWNoaWxkKDEpOjpiZWZvcmUsXG4uc3RhcjpudGgtY2hpbGQoMSk6OmFmdGVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEyMDAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMTIwMDBtcztcbn1cbi5zdGFyOm50aC1jaGlsZCgyKSB7XG4gIHRvcDogY2FsYyg1MCUgLSAtMTAwcHgpO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDEzN3B4KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDUwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiA1MDAwbXM7XG59XG4uc3RhcjpudGgtY2hpbGQoMik6OmJlZm9yZSxcbi5zdGFyOm50aC1jaGlsZCgyKTo6YWZ0ZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTAwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxMDAwMG1zO1xufVxuLnN0YXI6bnRoLWNoaWxkKDMpIHtcbiAgdG9wOiBjYWxjKDUwJSAtIC05MHB4KTtcbiAgbGVmdDogY2FsYyg1MCUgLSAyMjJweCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogNzAwMG1zO1xufVxuLnN0YXI6bnRoLWNoaWxkKDMpOjpiZWZvcmUsXG4uc3RhcjpudGgtY2hpbGQoMyk6OmFmdGVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDcwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG59XG4uc3RhcjpudGgtY2hpbGQoNCkge1xuICB0b3A6IGNhbGMoNTAlIC0gLTEyOXB4KTtcbiAgbGVmdDogY2FsYyg1MCUgLSAyMTNweCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogNzAwMG1zO1xufVxuLnN0YXI6bnRoLWNoaWxkKDQpOjpiZWZvcmUsXG4uc3RhcjpudGgtY2hpbGQoNCk6OmFmdGVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDcwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG59XG4uc3RhcjpudGgtY2hpbGQoNSkge1xuICB0b3A6IGNhbGMoNTAlIC0gMTQ2cHgpO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDExMnB4KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAzMDAwbXM7XG59XG4uc3RhcjpudGgtY2hpbGQoNSk6OmJlZm9yZSxcbi5zdGFyOm50aC1jaGlsZCg1KTo6YWZ0ZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMzAwMG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDMwMDBtcztcbn1cbi5zdGFyOm50aC1jaGlsZCg2KSB7XG4gIHRvcDogY2FsYyg1MCUgLSAtMTA4cHgpO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDE2MHB4KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAzMDAwbXM7XG59XG4uc3RhcjpudGgtY2hpbGQoNik6OmJlZm9yZSxcbi5zdGFyOm50aC1jaGlsZCg2KTo6YWZ0ZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMzAwMG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDMwMDBtcztcbn1cbi5zdGFyOm50aC1jaGlsZCg3KSB7XG4gIHRvcDogY2FsYyg1MCUgLSA1MnB4KTtcbiAgbGVmdDogY2FsYyg1MCUgLSA3MnB4KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDcwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG59XG4uc3RhcjpudGgtY2hpbGQoNyk6OmJlZm9yZSxcbi5zdGFyOm50aC1jaGlsZCg3KTo6YWZ0ZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNzAwMG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDcwMDBtcztcbn1cblxuLyogVGhpcyBjb2RlIHdpbGwgaGVscCB0byBnZW5lcmF0ZVxuZWZmZWN0IGluIHRhaWwgb2Ygc3RhciAqL1xuQGtleWZyYW1lcyB0YWlsIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDMwJSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG59XG5cbi8qIFRoaXMgY29kZSB3aWxsIGdlbmVyYXRlIHNoaW5pbmdcbmVmZmVjdCBpbiBoZWFkIG9mIHN0YXIgKi9cbkBrZXlmcmFtZXMgc2hpbmluZyB7XG4gIDAlIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICA1MCUge1xuICAgIHdpZHRoOiAzMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG59XG5cbi8qIEhlcmUgd2UgYXJlIGFkZGluZyB3ZWJraXQtYW5pbWF0aW9uXG50byBoZWFkIG9mIHN0YXIgZm9yIHNoaW5pbmcgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBzaGluaW5nIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDUwJSB7XG4gICAgd2lkdGg6IDMwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbn1cblxuLyogSGVyZSB3ZSBhcmUgYWRkaW5nIHdlYmtpdC1hbmltYXRpb25cbnRvIHRhaWwgb2Ygc3RhciAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHRhaWwge1xuICAwJSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgMzAlIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbn1cblxuLyogSGVyZSB3ZSBhcmUgYWRkaW5nIHdlYmtpdC1hbmltYXRpb25cbmZvciBzaG9vdGluZyBlZmZlY3QgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBzaG9vdGluZyB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDBweCk7XG4gIH1cbn1cblxuLyogSGVyZSB3ZSBtYWtlIHNob290aW5nIGVmZmVjdCAqL1xuQGtleWZyYW1lcyBzaG9vdGluZyB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDBweCk7XG4gIH1cbn1cblxuLmxhdW5jaC1idG4ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDM1MHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuXG59XG4iLCIubWFpbiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwMEEyRSA4MCUsIHdoaXRlKTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ubWFpbiAudnRsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMCU7XG4gIGxlZnQ6IC0yMHB4O1xufVxuLm1haW4gLnZiciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMCU7XG4gIHJpZ2h0OiAtMjBweDtcbn1cbi5tYWluIC5zdGFycy1sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMTAlO1xuICBvcGFjaXR5OiAwLjc7XG59XG4ubWFpbiAuc3RhcnMtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogNSU7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5tYWluIC5jb250ZW50LWNvbnRhaW5lciB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcbiAgdG9wOiAzNSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdC1ib2xkKTtcbn1cbi5tYWluIC5jb250ZW50LWNvbnRhaW5lciAuYnJhbmQtbG9nbyB7XG4gIGhlaWdodDogMzV2aDtcbn1cbi5tYWluIC5jb250ZW50LWNvbnRhaW5lciAuYnJhbmQtdGV4dCB7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuLm1haW4gLmNvbnRlbnQtY29udGFpbmVyIC5icmFuZC10ZXh0IGgxIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHhsKTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtbGcpO1xufVxuLm1haW4gLmNvbnRlbnQtY29udGFpbmVyIC5icmFuZC10ZXh0IHNwYW4ge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb250c2VycmF0KTtcbn1cbi5tYWluIC5jbG91ZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIC1raHRtbC11c2VyLWRyYWc6IG5vbmU7XG4gIC1tb3otdXNlci1kcmFnOiBub25lO1xuICAtby11c2VyLWRyYWc6IG5vbmU7XG4gIHVzZXItZHJhZzogbm9uZTtcbn1cblxuLnNreSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiByb3RhdGVaKDEzNmRlZyk7XG4gIHRvcDogLTE4MnB4O1xuICBsZWZ0OiA0NzJweDtcbiAgei1pbmRleDogMjtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uc3RhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDg4NXB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZWVmMGY1LCByZ2JhKDAsIDAsIDI1NSwgMCkpO1xuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDZweCAjZWVmMWY4KTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNnB4ICNkN2RmZjApO1xuICAtd2Via2l0LWFuaW1hdGlvbjogdGFpbCA1MDAwbXMgZWFzZS1pbi1vdXQgaW5maW5pdGUsIHNob290aW5nIDUwMDBtcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiB0YWlsIDUwMDBtcyBlYXNlLWluLW91dCBpbmZpbml0ZSwgc2hvb3RpbmcgNTAwMG1zIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4vKiBIZXJlIHdlIGFkZCBiZWZvcmUgYW5kIGFmdGVyIGVmZmVjdCB0byBzdGFyICovXG4uc3Rhcjo6YmVmb3JlLFxuLnN0YXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gMXB4KTtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDAsIDAsIDI1NSwgMCksICNlYWVlZjgsIHJnYmEoMCwgMCwgMjU1LCAwKSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgcm90YXRlWig0NWRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHJvdGF0ZVooNDVkZWcpO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2hpbmluZyAzMDAwbXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogc2hpbmluZyAzMDAwbXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi5zdGFyOjphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgcm90YXRlWigtNDVkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSByb3RhdGVaKC00NWRlZyk7XG59XG5cbi8qIEhlcmUgd2UgYXJlIGFkZGluZyBsb2NhdGlvbiBvZiBlYWNoXG4gICBudGgtY2hpbGQsIGFuaW1hdGlvbnMsIGRlbGF5cywgYW5kXG4gICBiZWZvcmUgYW5kIGFmdGVyIGVmZmVjdHMgdG8gZWFjaFxuICAgYW5kIGV2ZXJ5IGJhbGxzKHN0YXJzKSAqL1xuLnN0YXI6bnRoLWNoaWxkKDEpIHtcbiAgdG9wOiBjYWxjKDUwJSAtIC0xMTlweCk7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNDNweCk7XG59XG5cbi5zdGFyOm50aC1jaGlsZCgxKTo6YmVmb3JlLFxuLnN0YXI6bnRoLWNoaWxkKDEpOjphZnRlciB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxMjAwMG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDEyMDAwbXM7XG59XG5cbi5zdGFyOm50aC1jaGlsZCgyKSB7XG4gIHRvcDogY2FsYyg1MCUgLSAtMTAwcHgpO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDEzN3B4KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDUwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiA1MDAwbXM7XG59XG5cbi5zdGFyOm50aC1jaGlsZCgyKTo6YmVmb3JlLFxuLnN0YXI6bnRoLWNoaWxkKDIpOjphZnRlciB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxMDAwMG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDEwMDAwbXM7XG59XG5cbi5zdGFyOm50aC1jaGlsZCgzKSB7XG4gIHRvcDogY2FsYyg1MCUgLSAtOTBweCk7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjIycHgpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNzAwMG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDcwMDBtcztcbn1cblxuLnN0YXI6bnRoLWNoaWxkKDMpOjpiZWZvcmUsXG4uc3RhcjpudGgtY2hpbGQoMyk6OmFmdGVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDcwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG59XG5cbi5zdGFyOm50aC1jaGlsZCg0KSB7XG4gIHRvcDogY2FsYyg1MCUgLSAtMTI5cHgpO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDIxM3B4KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDcwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG59XG5cbi5zdGFyOm50aC1jaGlsZCg0KTo6YmVmb3JlLFxuLnN0YXI6bnRoLWNoaWxkKDQpOjphZnRlciB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogNzAwMG1zO1xufVxuXG4uc3RhcjpudGgtY2hpbGQoNSkge1xuICB0b3A6IGNhbGMoNTAlIC0gMTQ2cHgpO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDExMnB4KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAzMDAwbXM7XG59XG5cbi5zdGFyOm50aC1jaGlsZCg1KTo6YmVmb3JlLFxuLnN0YXI6bnRoLWNoaWxkKDUpOjphZnRlciB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzMDAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMzAwMG1zO1xufVxuXG4uc3RhcjpudGgtY2hpbGQoNikge1xuICB0b3A6IGNhbGMoNTAlIC0gLTEwOHB4KTtcbiAgbGVmdDogY2FsYyg1MCUgLSAxNjBweCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzMDAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMzAwMG1zO1xufVxuXG4uc3RhcjpudGgtY2hpbGQoNik6OmJlZm9yZSxcbi5zdGFyOm50aC1jaGlsZCg2KTo6YWZ0ZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMzAwMG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDMwMDBtcztcbn1cblxuLnN0YXI6bnRoLWNoaWxkKDcpIHtcbiAgdG9wOiBjYWxjKDUwJSAtIDUycHgpO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDcycHgpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNzAwMG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDcwMDBtcztcbn1cblxuLnN0YXI6bnRoLWNoaWxkKDcpOjpiZWZvcmUsXG4uc3RhcjpudGgtY2hpbGQoNyk6OmFmdGVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDcwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG59XG5cbi8qIFRoaXMgY29kZSB3aWxsIGhlbHAgdG8gZ2VuZXJhdGVcbmVmZmVjdCBpbiB0YWlsIG9mIHN0YXIgKi9cbkBrZXlmcmFtZXMgdGFpbCB7XG4gIDAlIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICAzMCUge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMDtcbiAgfVxufVxuLyogVGhpcyBjb2RlIHdpbGwgZ2VuZXJhdGUgc2hpbmluZ1xuZWZmZWN0IGluIGhlYWQgb2Ygc3RhciAqL1xuQGtleWZyYW1lcyBzaGluaW5nIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDUwJSB7XG4gICAgd2lkdGg6IDMwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbn1cbi8qIEhlcmUgd2UgYXJlIGFkZGluZyB3ZWJraXQtYW5pbWF0aW9uXG50byBoZWFkIG9mIHN0YXIgZm9yIHNoaW5pbmcgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBzaGluaW5nIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDUwJSB7XG4gICAgd2lkdGg6IDMwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbn1cbi8qIEhlcmUgd2UgYXJlIGFkZGluZyB3ZWJraXQtYW5pbWF0aW9uXG50byB0YWlsIG9mIHN0YXIgKi9cbkAtd2Via2l0LWtleWZyYW1lcyB0YWlsIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDMwJSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG59XG4vKiBIZXJlIHdlIGFyZSBhZGRpbmcgd2Via2l0LWFuaW1hdGlvblxuZm9yIHNob290aW5nIGVmZmVjdCAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHNob290aW5nIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMHB4KTtcbiAgfVxufVxuLyogSGVyZSB3ZSBtYWtlIHNob290aW5nIGVmZmVjdCAqL1xuQGtleWZyYW1lcyBzaG9vdGluZyB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDBweCk7XG4gIH1cbn1cbi5sYXVuY2gtYnRuIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAzNTBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'px-banner',
          templateUrl: './banner.component.html',
          styleUrls: ['./banner.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_ApiService__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main/sections/landing/banner/download/download.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/components/main/sections/landing/banner/download/download.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: Platforms, DownloadComponent */

  /***/
  function srcAppComponentsMainSectionsLandingBannerDownloadDownloadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Platforms", function () {
      return Platforms;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DownloadComponent", function () {
      return DownloadComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../banner.component */
    "./src/app/components/main/sections/landing/banner/banner.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["downloadLink"];
    var _c1 = ["codeSnippet"];

    function DownloadComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DownloadComponent_ng_container_2_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.downloadFile();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Download");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "a", 18, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.DownloadBtnLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.DownloadBtnUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DownloadComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DownloadComponent_ng_container_3_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.copyCode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code", 24, 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "wget -qO- https://updates.phcode.io/linux/installer.sh | bash");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function DownloadComponent_a_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DownloadComponent_a_11_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var url_r10 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.selectPlatform(url_r10.key);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var url_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](url_r10.label);
      }
    }

    function DownloadComponent_ng_container_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Supported on Ubuntu 20+, Fedora 34+, Arch Linux and many more...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "View source");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    var Platforms;

    (function (Platforms) {
      Platforms["mac_intel"] = "mac_intel";
      Platforms["mac_m1"] = "mac_m1";
      Platforms["windows_x64"] = "windows_x64";
      Platforms["linux"] = "linux";
      Platforms["unknown"] = "unknown";
    })(Platforms || (Platforms = {}));

    var DownloadComponent = /*#__PURE__*/function () {
      function DownloadComponent() {
        _classCallCheck(this, DownloadComponent);

        this.isLinux = false;
        this.loading = true;
        this.DownloadBtnLabel = 'Download';
        this.DownloadBtnUrl = '';
      }

      _createClass(DownloadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.detectPlatform();
        }
      }, {
        key: "selectPlatform",
        value: function selectPlatform(platform) {
          this.platform = platform;
          this.setUrls(platform);
        }
      }, {
        key: "detectPlatform",
        value: function detectPlatform() {
          var platform = window.navigator.platform.toLowerCase(); // const platform = Platforms.linux;

          if (platform.includes("win")) {
            this.platform = Platforms.windows_x64;
          } else if (platform.includes("mac")) {
            this.platform = Platforms.mac_m1;
          } else if (platform.includes("linux")) {
            this.platform = Platforms.linux;
          } else {
            this.platform = Platforms.unknown;
          }

          this.setUrls(this.platform);
        }
      }, {
        key: "setUrls",
        value: function setUrls(platform) {
          switch (platform) {
            case Platforms.unknown:
              this.DownloadBtnLabel = _banner_component__WEBPACK_IMPORTED_MODULE_1__["DownloadLabels"][Platforms.windows_x64];
              this.DownloadBtnUrl = this.downloadUrls[Platforms.windows_x64];

            default:
              this.DownloadBtnLabel = _banner_component__WEBPACK_IMPORTED_MODULE_1__["DownloadLabels"][platform] || 'Download';
              this.DownloadBtnUrl = this.downloadUrls[platform];
          }
        }
      }, {
        key: "downloadFile",
        value: function downloadFile() {
          // Set the download URL
          // Programmatically trigger the anchor element's click event to start the download
          var downloadLink = this.downloadLinkRef.nativeElement;
          downloadLink.click();
        }
      }, {
        key: "copyCode",
        value: function copyCode() {
          var codeSnippetElement = this.codeSnippetRef.nativeElement;
          var codeText = codeSnippetElement.textContent.trim(); // Use Clipboard API if supported

          if (navigator.clipboard) {
            navigator.clipboard.writeText(codeText).then(function () {
              console.log('Code copied to clipboard!');
            })["catch"](function (err) {
              console.error('Failed to copy code: ', err);
            });
          } else {
            // Fallback for browsers not supporting Clipboard API
            var tempTextarea = document.createElement('textarea');
            tempTextarea.value = codeText;
            document.body.appendChild(tempTextarea);
            tempTextarea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextarea);
            console.log('Code copied to clipboard!');
          }
        }
      }]);

      return DownloadComponent;
    }();

    DownloadComponent.ɵfac = function DownloadComponent_Factory(t) {
      return new (t || DownloadComponent)();
    };

    DownloadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DownloadComponent,
      selectors: [["px-download"]],
      viewQuery: function DownloadComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.downloadLinkRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeSnippetRef = _t.first);
        }
      },
      inputs: {
        downloadUrls: "downloadUrls",
        donwloadUrlArr: "donwloadUrlArr"
      },
      decls: 21,
      vars: 4,
      consts: [[1, "primary-button", "dropdown-container", "download-button", "d-flex", "justify-center", "align-center"], ["role", "group", "aria-label", "Button group with nested dropdown", 1, "btn-group", 2, "width", "100%", "height", "100%"], [4, "ngIf"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "ddntoggle", "btn", "btn-danger", "dropdown-toggle", "dropdown-toggle-split"], [1, "sr-only"], [1, "dropdown-menu"], [1, "dropdown-item", "disabled"], [1, "dropdown-divider"], ["class", "dropdown-item", "href", "javascript:void(0)", 3, "click", 4, "ngFor", "ngForOf"], [2, "display", "flex", "justify-content", "space-around"], ["href", "https://github.com/phcode-dev/phoenix-desktop/releases", "target", "_blank", 1, "dropdown-link", "primary-link"], ["href", "https://phcode.dev/", "target", "_blank", 1, "dropdown-link", "primary-link"], ["type", "button", 1, "btn", 2, "height", "100%", 3, "click"], [2, "font-size", "16px", "font-weight", "bold", "margin-bottom", "0"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-download", 2, "margin-right", "10px"], ["d", "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"], ["d", "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"], [2, "font-size", "14px", "font-weight", "bold"], ["hidden", "", "download", "", 3, "href"], ["downloadLink", ""], ["id", "copy", "type", "button", "aria-haspopup", "true", 1, "btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "gray", "viewBox", "0 0 16 16", 1, "bi", "bi-copy"], ["fill-rule", "evenodd", "d", "M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"], [1, "input-group"], ["id", "codeSnippet", 1, "form-control", "bg-light"], ["codeSnippet", ""], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"], [1, "linux-more"], [1, "text"], ["href", "https://updates.phcode.io/linux/installer.sh", "target", "_blank", 1, "primary-link-accent"]],
      template: function DownloadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DownloadComponent_ng_container_2_Template, 11, 2, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DownloadComponent_ng_container_3_Template, 8, 0, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Downloads");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DownloadComponent_a_11_Template, 2, 1, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Other downloads");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "open on web");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DownloadComponent_ng_container_20_Template, 6, 0, "ng-container", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.platform !== "linux" && !ctx.isLinux);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.platform === "linux" || ctx.isLinux);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.donwloadUrlArr);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.platform === "linux" || ctx.isLinux);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".download-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  height: 70px;\n  width: 100%;\n  min-width: 350px;\n  position: relative;\n}\n.download-button[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  border: none;\n  color: white;\n}\n.download-button[_ngcontent-%COMP%]   .ddntoggle[_ngcontent-%COMP%] {\n  width: 50px;\n}\n.download-button[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xs);\n}\n.download-button[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n#codeSnippet[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  justify-content: center;\n  align-items: center;\n  -webkit-user-select: text;\n     -moz-user-select: text;\n          user-select: text;\n  background-color: #f4e2da !important;\n}\n#copy[_ngcontent-%COMP%] {\n  background-color: #f4e2da !important;\n  width: 50px;\n}\n.linux-more[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: var(--font-size-xs);\n  margin-top: 20px;\n}\n.linux-more[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: var(--text-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9waGNvZGUuaW8vc3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9iYW5uZXIvZG93bmxvYWQvZG93bmxvYWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9zZWN0aW9ucy9sYW5kaW5nL2Jhbm5lci9kb3dubG9hZC9kb3dubG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNBSjtBREdFO0VBQ0UsV0FBQTtBQ0RKO0FESUU7RUFDRSw4QkFBQTtBQ0ZKO0FES0U7RUFDRSxnQkFBQTtBQ0hKO0FET0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLG9DQUFBO0FDSkY7QURNQTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtBQ0hGO0FETUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDSEY7QURJRTtFQUNFLDhCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9iYW5uZXIvZG93bmxvYWQvZG93bmxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5kb3dubG9hZC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMzUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5kZG50b2dnbGUge1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG5cbiAgLmRyb3Bkb3duLWxpbmsge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzKTtcbiAgfVxuXG4gIC5kcm9wZG93bi1tZW51IHtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICB9XG59XG5cbiNjb2RlU25pcHBldCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjI2LCAyMTgpIWltcG9ydGFudDtcbn1cbiNjb3B5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjI2LCAyMTgpIWltcG9ydGFudDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5saW51eC1tb3JlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14cyk7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIC50ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG4gIH1cblxufVxuIiwiLmRvd25sb2FkLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAzNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRvd25sb2FkLWJ1dHRvbiAuYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRvd25sb2FkLWJ1dHRvbiAuZGRudG9nZ2xlIHtcbiAgd2lkdGg6IDUwcHg7XG59XG4uZG93bmxvYWQtYnV0dG9uIC5kcm9wZG93bi1saW5rIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHMpO1xufVxuLmRvd25sb2FkLWJ1dHRvbiAuZHJvcGRvd24tbWVudSB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbiNjb2RlU25pcHBldCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZTJkYSAhaW1wb3J0YW50O1xufVxuXG4jY29weSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGUyZGEgIWltcG9ydGFudDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5saW51eC1tb3JlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14cyk7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubGludXgtbW9yZSAudGV4dCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DownloadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'px-download',
          templateUrl: './download.component.html',
          styleUrls: ['./download.component.scss']
        }]
      }], function () {
        return [];
      }, {
        downloadUrls: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['downloadUrls']
        }],
        donwloadUrlArr: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['donwloadUrlArr']
        }],
        downloadLinkRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['downloadLink']
        }],
        codeSnippetRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['codeSnippet']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/main/sections/landing/features/features.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/main/sections/landing/features/features.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: FeaturesComponent */

  /***/
  function srcAppComponentsMainSectionsLandingFeaturesFeaturesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function () {
      return FeaturesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FeaturesComponent = /*#__PURE__*/function () {
      function FeaturesComponent() {
        _classCallCheck(this, FeaturesComponent);
      }

      _createClass(FeaturesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FeaturesComponent;
    }();

    FeaturesComponent.ɵfac = function FeaturesComponent_Factory(t) {
      return new (t || FeaturesComponent)();
    };

    FeaturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FeaturesComponent,
      selectors: [["px-features"]],
      decls: 37,
      vars: 0,
      consts: [[1, "features", "container-fluid"], [1, "heading-container", "container", "text-center", "py-5"], [1, "row", "py-5"], [1, "heading", "col-md-12"], [1, "row", "my-5", "py-5"], [1, "col-md-3", "d-flex-center"], [1, "col-md-6", "d-flex-space-around"], ["src", "assets/images/js.png", "alt", "icons"], ["src", "assets/images/ts.png", "alt", "icons"], ["src", "assets/images/html.png", "alt", "icons"], ["src", "assets/images/css.png", "alt", "icons"], [1, "container-fluid", "pb-5", "preview"], [1, "row", "pb-5"], [1, "offset-md-1", "col-md-3", "d-flex-center"], ["src", "assets/images/extension.png", "alt", ""], [1, "col-md", "d-flex-center"], [1, "row", "text-left", "text-sm-center", "text-xs-center"], [1, "col-md-12"], [1, "heading"], [1, "col-md-10"], [1, "illustration"], [1, "container", "pt-5", "d-flex-center"], ["src", "assets/images/Illustration.png", "alt", "people"]],
      template: function FeaturesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Packed with features... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " phoenix is tailor made for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " and many more... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Extension and Themes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Customize the editor's functionality and look & feel with thousands of available extensions and themes. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Want to automate a task? Create extensions easily that work on any platform, exactly as you need. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".features[_ngcontent-%COMP%] {\n  background: url('featureBG.png');\n  background-repeat: repeat;\n  background-size: 100% 100%;\n  color: var(--text-color-light);\n}\n.features[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  color: var(--text-color-light);\n  font-size: var(--font-size-lg);\n  font-family: var(--font-montserrat-bold);\n}\n.features[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n  font-size: var(--font-size-xl);\n  font-family: var(--font-montserrat-bold);\n  font-style: italic;\n}\n.features[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .sq-img[_ngcontent-%COMP%], .features[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .flash-img[_ngcontent-%COMP%] {\n  max-width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9waGNvZGUuaW8vc3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9mZWF0dXJlcy9mZWF0dXJlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluL3NlY3Rpb25zL2xhbmRpbmcvZmVhdHVyZXMvZmVhdHVyZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtBQ0NGO0FEQ0U7RUFDRSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0NBQUE7QUNDSjtBREdJO0VBQ0UsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7QUNETjtBRElJO0VBQ0UsZ0JBQUE7QUNGTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9zZWN0aW9ucy9sYW5kaW5nL2ZlYXR1cmVzL2ZlYXR1cmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlYXR1cmVzIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZlYXR1cmVCRy5wbmcnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcblxuICAuaGVhZGluZyB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb250c2VycmF0LWJvbGQpO1xuICB9XG5cbiAgLnByZXZpZXcge1xuICAgIC5oZWFkaW5nIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdC1ib2xkKTtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB9XG5cbiAgICAuc3EtaW1nLCAuZmxhc2gtaW1nIHtcbiAgICAgIG1heC13aWR0aDogMTIwcHg7XG4gICAgfVxuICB9XG59XG5cbi5pbGx1c3RyYXRpb24ge1xuXG59XG4iLCIuZmVhdHVyZXMge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZlYXR1cmVCRy5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG59XG4uZmVhdHVyZXMgLmhlYWRpbmcge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdC1ib2xkKTtcbn1cbi5mZWF0dXJlcyAucHJldmlldyAuaGVhZGluZyB7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14bCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbnRzZXJyYXQtYm9sZCk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5mZWF0dXJlcyAucHJldmlldyAuc3EtaW1nLCAuZmVhdHVyZXMgLnByZXZpZXcgLmZsYXNoLWltZyB7XG4gIG1heC13aWR0aDogMTIwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'px-features',
          templateUrl: './features.component.html',
          styleUrls: ['./features.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main/sections/landing/footer/footer.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/main/sections/landing/footer/footer.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsMainSectionsLandingFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["px-footer"]],
      decls: 26,
      vars: 1,
      consts: [[1, "footer", "p-4", "container-fluid"], [1, "mt-5", "px-2", "footer-items", "justify-content-between", "w-100"], [1, "container-fluid", "row"], [1, "row", "w-100"], [1, "text-left", "text-sm-center", "text-xs-center", "col-sm-12", "col-xs-12", "col-md-2", "col-lg-2", "col-xl-2", "mt-xs-4", "mt-sm-4"], ["href", "#", 1, "p-0", "m-0", 3, "routerLink"], ["target", "_blank", "href", "https://core.ai/privacy.html"], ["target", "_blank", "href", "https://core.ai/terms-of-service.html"], ["target", "_blank", "href", "https://www.gnu.org/licenses/agpl-3.0.en.html"], [1, "col-sm-12", "col-xs-12", "col-md-2", "col-lg-1", "col-xl-1", "offset-md-1", "offset-lg-1", "offset-xl-2", "mt-xs-4", "mt-sm-4", "text-sm-center", "text-xs-center", "copyright", "mt-sm-4", "mt-xs-4"], [1, "m-0", "p-0", 2, "color", "red"], [1, "col-md-12", "mt-4", "w-100", "text-center"], [1, "copyright"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Privacy Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Terms of service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "License");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Made with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u2764\uFE0E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " and Javascript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\xA9 2022 copyright core.ai ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/about");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".footer[_ngcontent-%COMP%] {\n  color: var(--text-color-light);\n  background: url('borderline.png'), linear-gradient(#282727, #282727);\n  background-position: bottom;\n  background-repeat: no-repeat;\n}\n.footer[_ngcontent-%COMP%]   .footer-items[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .footer-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 20px;\n  white-space: nowrap;\n}\n.footer[_ngcontent-%COMP%]   .footer-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-color-light);\n}\n.footer[_ngcontent-%COMP%]   .footer-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--accent-color);\n}\n.footer[_ngcontent-%COMP%]   .footer-items[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  color: var(--text-color-gray);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9waGNvZGUuaW8vc3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxvRUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNDRjtBREVJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDQU47QURHSTtFQUNFLDhCQUFBO0FDRE47QURFTTtFQUNFLDBCQUFBO0FDQVI7QURJSTtFQUNFLDZCQUFBO0FDRk4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JvcmRlcmxpbmUucG5nJyksIGxpbmVhci1ncmFkaWVudCggIzI4MjcyNywgIzI4MjcyNyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAuZm9vdGVyLWl0ZW1zIHtcbiAgICBzcGFuLCBhIHtcbiAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvcHlyaWdodCB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1ncmF5KTtcbiAgICB9XG4gIH1cbn1cbiIsIi5mb290ZXIge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYm9yZGVybGluZS5wbmdcIiksIGxpbmVhci1ncmFkaWVudCgjMjgyNzI3LCAjMjgyNzI3KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmZvb3RlciAuZm9vdGVyLWl0ZW1zIHNwYW4sIC5mb290ZXIgLmZvb3Rlci1pdGVtcyBhIHtcbiAgbWFyZ2luOiAyMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmZvb3RlciAuZm9vdGVyLWl0ZW1zIGEge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG59XG4uZm9vdGVyIC5mb290ZXItaXRlbXMgYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuLmZvb3RlciAuZm9vdGVyLWl0ZW1zIC5jb3B5cmlnaHQge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1ncmF5KTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'px-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main/sections/landing/landing.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/main/sections/landing/landing.component.ts ***!
    \***********************************************************************/

  /*! exports provided: LandingComponent */

  /***/
  function srcAppComponentsMainSectionsLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
      return LandingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./banner/banner.component */
    "./src/app/components/main/sections/landing/banner/banner.component.ts");
    /* harmony import */


    var _meet_phoenix_meet_phoenix_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./meet-phoenix/meet-phoenix.component */
    "./src/app/components/main/sections/landing/meet-phoenix/meet-phoenix.component.ts");
    /* harmony import */


    var _features_features_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./features/features.component */
    "./src/app/components/main/sections/landing/features/features.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/components/main/sections/landing/footer/footer.component.ts");

    var LandingComponent = /*#__PURE__*/function () {
      function LandingComponent() {
        _classCallCheck(this, LandingComponent);
      }

      _createClass(LandingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LandingComponent;
    }();

    LandingComponent.ɵfac = function LandingComponent_Factory(t) {
      return new (t || LandingComponent)();
    };

    LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LandingComponent,
      selectors: [["px-landing"]],
      decls: 5,
      vars: 0,
      consts: [[1, "w-100", "p-0"]],
      template: function LandingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "px-banner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "px-meet-phoenix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "px-features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "px-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _meet_phoenix_meet_phoenix_component__WEBPACK_IMPORTED_MODULE_2__["MeetPhoenixComponent"], _features_features_component__WEBPACK_IMPORTED_MODULE_3__["FeaturesComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9zZWN0aW9ucy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'px-landing',
          templateUrl: './landing.component.html',
          styleUrls: ['./landing.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main/sections/landing/meet-phoenix/meet-phoenix.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/main/sections/landing/meet-phoenix/meet-phoenix.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: MeetPhoenixComponent */

  /***/
  function srcAppComponentsMainSectionsLandingMeetPhoenixMeetPhoenixComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeetPhoenixComponent", function () {
      return MeetPhoenixComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MeetPhoenixComponent = /*#__PURE__*/function () {
      function MeetPhoenixComponent() {
        _classCallCheck(this, MeetPhoenixComponent);
      }

      _createClass(MeetPhoenixComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MeetPhoenixComponent;
    }();

    MeetPhoenixComponent.ɵfac = function MeetPhoenixComponent_Factory(t) {
      return new (t || MeetPhoenixComponent)();
    };

    MeetPhoenixComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MeetPhoenixComponent,
      selectors: [["px-meet-phoenix"]],
      decls: 39,
      vars: 0,
      consts: [["id", "meet-phoenix", 1, "container-fluid", "w-100"], [1, "row", "heading-container", "text-center", "pt-5", "w-100"], [1, "row"], [1, "heading", "col-md-12", "col-sm-12", "col-xs-12"], [1, "description", "col-md-12", "col-sm-12", "col-xs-12", "mt-2", "d-flex-center"], [1, "text-center", "w-50"], [1, "row", "content-1"], [1, "col-md-6", "col-sm-12", "col-xs-12", "mt-sm-4", "mt-xs-4"], ["src", "assets/images/meetPhoenixGraphics.png", "alt", "", 1, "meet-img", 2, "width", "100%"], [1, "col-md-6", "col-sm-12", "col-xs-12"], [1, "col-md-12"], [1, "row", "text-left", "text-sm-center", "text-xs-center", "mt-5"], [1, "col-md-6", "mt-4"], [1, "heading", "col-md-12", "mb-4"], [1, "description", "col-md-12"], [1, "col-md-4"], ["src", "assets/images/meetPhoenixG1.png", "alt", ""], [1, "col-md-12", "mt-5"], [1, "row", "text-left", "text-sm-center", "text-xs-center", "mt-4", "mb-sm-5", "mb-xs-5"], ["height", "200px", "width", "200px", "src", "assets/images/allSystems.png", "alt", "", 2, "opacity", "70%"]],
      template: function MeetPhoenixComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Meet Phoenix Code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " A text editor designed to make coding as intuitive and fun as playing a video game - specially crafted for web developers, designers, and students. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Craft Code Visually ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Live previews eliminate guesswork, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "making web development quicker and less stressful.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Runs Everywhere ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Phoenix Code is natively available for macOS, Windows, and Linux. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "ChromeOS or alternative platforms? Get the web version on any browser-enabled device.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["section[_ngcontent-%COMP%]   .heading-container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat-bold);\n  color: var(--primary-color);\n  font-size: var(--font-size-xxl);\n}\nsection[_ngcontent-%COMP%]   .heading-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat);\n  line-height: 1.5;\n  width: 40%;\n}\nsection[_ngcontent-%COMP%]   .content-1[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat-bold);\n  color: var(--primary-color);\n  font-size: var(--font-size-xl);\n}\nsection[_ngcontent-%COMP%]   .content-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9waGNvZGUuaW8vc3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9tZWV0LXBob2VuaXgvbWVldC1waG9lbml4LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9tZWV0LXBob2VuaXgvbWVldC1waG9lbml4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlJO0VBVkYsd0NBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUhzQjtBQ0d4QjtBRFdJO0VBQ0UsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNUTjtBRGlCSTtFQXhCRix3Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBdUJrQjtBQ2JwQjtBRGVJO0VBQ0UsZ0JBQUE7QUNiTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9zZWN0aW9ucy9sYW5kaW5nL21lZXQtcGhvZW5peC9tZWV0LXBob2VuaXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBtaXhpbiBoZWFkKCRmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14eGwpKSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbnRzZXJyYXQtYm9sZCk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuXG59XG5cblxuc2VjdGlvbiB7XG5cbiAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAuaGVhZGluZyB7XG4gICAgICBAaW5jbHVkZSBoZWFkO1xuICAgIH1cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdCk7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICB9XG4gIH1cblxuICAuY29udGVudC0xIHtcbiAgICAvLyAubWVldC1pbWcge1xuICAgIC8vICAgbWFyZ2luLXRvcDogLTEwMHB4O1xuICAgIC8vIH1cbiAgICAuaGVhZGluZyB7XG4gICAgICBAaW5jbHVkZSBoZWFkKHZhcigtLWZvbnQtc2l6ZS14bCkpO1xuICAgIH1cbiAgICBwIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgfVxuICB9XG59XG4iLCJzZWN0aW9uIC5oZWFkaW5nLWNvbnRhaW5lciAuaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbnRzZXJyYXQtYm9sZCk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHhsKTtcbn1cbnNlY3Rpb24gLmhlYWRpbmctY29udGFpbmVyIC5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbnRzZXJyYXQpO1xuICBsaW5lLWhlaWdodDogMS41O1xuICB3aWR0aDogNDAlO1xufVxuc2VjdGlvbiAuY29udGVudC0xIC5oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdC1ib2xkKTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14bCk7XG59XG5zZWN0aW9uIC5jb250ZW50LTEgcCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetPhoenixComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'px-meet-phoenix',
          templateUrl: './meet-phoenix.component.html',
          styleUrls: ['./meet-phoenix.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main/sections/landing/server/server.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/main/sections/landing/server/server.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ServerComponent */

  /***/
  function srcAppComponentsMainSectionsLandingServerServerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerComponent", function () {
      return ServerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ServerComponent = /*#__PURE__*/function () {
      function ServerComponent() {
        _classCallCheck(this, ServerComponent);
      }

      _createClass(ServerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServerComponent;
    }();

    ServerComponent.ɵfac = function ServerComponent_Factory(t) {
      return new (t || ServerComponent)();
    };

    ServerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServerComponent,
      selectors: [["px-server"]],
      decls: 32,
      vars: 1,
      consts: [[1, "server"], [1, "my-4", "w-100", "text-center"], [1, "p-4", "transparent", "main-heading"], [1, "d-flex-center", "mb-5"], [1, "terminal"], [1, "row", "text-center", "px-5"], [1, "col-md-4", "link"], [1, "col-md-4", "link", 3, "routerLink"]],
      template: function ServerComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/about");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: [".server[_ngcontent-%COMP%] {\n  color: var(--text-color-light);\n  background: url('white-dot-bg.png'), linear-gradient(#282727, #282727);\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.server[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat);\n  font-size: var(--font-size-lg);\n}\n.server[_ngcontent-%COMP%]   .transparent[_ngcontent-%COMP%] {\n  background-color: var(--background-color-dark);\n}\n.server[_ngcontent-%COMP%]   .main-heading[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat-extra-bold);\n  font-style: italic;\n  font-size: var(--font-size-xxl);\n}\n.server[_ngcontent-%COMP%]   .terminal[_ngcontent-%COMP%] {\n  background: url('terminal.png'), linear-gradient(#282727, #282727);\n  background-size: cover;\n  min-height: 500px;\n  min-width: 50vw;\n  background-repeat: none;\n  padding: 50px;\n  overflow: hidden;\n  color: var(--text-color-gray);\n}\n.server[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat-bold);\n  font-size: var(--font-size-xxl);\n  cursor: pointer;\n}\n.server[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  color: var(--accent-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9waGNvZGUuaW8vc3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9zZXJ2ZXIvc2VydmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9zZXJ2ZXIvc2VydmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxzRUFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUNDRjtBREFFO0VBQ0UsbUNBQUE7RUFDQSw4QkFBQTtBQ0VKO0FEQ0U7RUFDRSw4Q0FBQTtBQ0NKO0FEQ0U7RUFDRSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUNDSjtBREVFO0VBQ0Usa0VBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUNBSjtBREVFO0VBQ0Usd0NBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUNBSjtBRENJO0VBQ0UsMEJBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9zZWN0aW9ucy9sYW5kaW5nL3NlcnZlci9zZXJ2ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VydmVyIHtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvd2hpdGUtZG90LWJnLnBuZycpLCBsaW5lYXItZ3JhZGllbnQoICMyODI3MjcsICMyODI3MjcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHAge1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbnRzZXJyYXQpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcbiAgfVxuXG4gIC50cmFuc3BhcmVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1kYXJrKTtcbiAgfVxuICAubWFpbi1oZWFkaW5nIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb250c2VycmF0LWV4dHJhLWJvbGQpO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14eGwpO1xuICB9XG5cbiAgLnRlcm1pbmFsIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdGVybWluYWwucG5nJyksIGxpbmVhci1ncmFkaWVudCggIzI4MjcyNywgIzI4MjcyNyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICBtaW4td2lkdGg6IDUwdnc7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vbmU7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWdyYXkpO1xuICB9XG4gIC5saW5rIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb250c2VycmF0LWJvbGQpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4bCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgfVxuICB9XG59XG4iLCIuc2VydmVyIHtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3doaXRlLWRvdC1iZy5wbmdcIiksIGxpbmVhci1ncmFkaWVudCgjMjgyNzI3LCAjMjgyNzI3KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLnNlcnZlciBwIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcbn1cbi5zZXJ2ZXIgLnRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1kYXJrKTtcbn1cbi5zZXJ2ZXIgLm1haW4taGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbnRzZXJyYXQtZXh0cmEtYm9sZCk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHhsKTtcbn1cbi5zZXJ2ZXIgLnRlcm1pbmFsIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90ZXJtaW5hbC5wbmdcIiksIGxpbmVhci1ncmFkaWVudCgjMjgyNzI3LCAjMjgyNzI3KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIG1pbi13aWR0aDogNTB2dztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vbmU7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWdyYXkpO1xufVxuLnNlcnZlciAubGluayB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbnRzZXJyYXQtYm9sZCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4bCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZXJ2ZXIgLmxpbms6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'px-server',
          templateUrl: './server.component.html',
          styleUrls: ['./server.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main/sections/landing/workspaces/workspaces.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/main/sections/landing/workspaces/workspaces.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: WorkspacesComponent */

  /***/
  function srcAppComponentsMainSectionsLandingWorkspacesWorkspacesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkspacesComponent", function () {
      return WorkspacesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WorkspacesComponent = /*#__PURE__*/function () {
      function WorkspacesComponent() {
        _classCallCheck(this, WorkspacesComponent);
      }

      _createClass(WorkspacesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WorkspacesComponent;
    }();

    WorkspacesComponent.ɵfac = function WorkspacesComponent_Factory(t) {
      return new (t || WorkspacesComponent)();
    };

    WorkspacesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WorkspacesComponent,
      selectors: [["px-workspaces"]],
      decls: 57,
      vars: 0,
      consts: [[1, "workspaces", "container-fluid"], [1, "introducing", "row"], [1, "d-flex-center", "w-100"], [1, "p-4", "white", "text-intro"], [1, "col-md-12", "text-center"], [1, "white", "p-4", "main-heading"], [1, "col-md-12", "text-center", "mb-4", "table-img"], ["src", "assets/images/developers-table.png", "alt", "", 1, "white", "p-4"], [1, "py-4", "col-md-8", "offset-md-2", "white"], [1, "col-md-12", "text-center", "my-4", "host-img", "row"], [1, "py-4", "px-0", "col-md-4", "offset-md-1"], [1, "white", "p-4", "mt-4"], ["src", "assets/images/host.png", "alt", "host", 1, "white", "p-4"], [1, "col-md-4", "px-0"], [1, "white", "p-4"], [1, "col-md-12", "text-center", "my-4"], [1, "row"], [1, "col-md-6"], ["src", "assets/images/collab-coding.png", "alt", "", 1, "white", "collab-coding"], [1, "col-md-6", "white"], [1, "main-heading", "collab"], [1, "text-left", "points"], [1, "col-md-5", "offset-md-1", "white", "d-flex-center", "flex-column"], [1, "text-left"], [1, "col-md-6", "text-left"], ["src", "assets/images/login.png", "alt", "", 1, "white", "collab-coding"]],
      template: function WorkspacesComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      styles: [".workspaces[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  background: url('dot-bg.png');\n  background-size: cover;\n}\n.workspaces[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat);\n  font-size: var(--font-size-lg);\n}\n.workspaces[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.workspaces[_ngcontent-%COMP%]   .text-intro[_ngcontent-%COMP%] {\n  font-family: var(--font-caveat);\n}\n.workspaces[_ngcontent-%COMP%]   .main-heading[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat-extra-bold);\n  font-style: italic;\n}\n.workspaces[_ngcontent-%COMP%]   .table-img[_ngcontent-%COMP%] {\n  margin-top: -5px;\n}\n.workspaces[_ngcontent-%COMP%]   .collab[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.workspaces[_ngcontent-%COMP%]   .points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9waGNvZGUuaW8vc3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy93b3Jrc3BhY2VzL3dvcmtzcGFjZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9zZWN0aW9ucy9sYW5kaW5nL3dvcmtzcGFjZXMvd29ya3NwYWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBQ0NGO0FEQ0U7RUFDRSxtQ0FBQTtFQUNBLDhCQUFBO0FDQ0o7QURFRTtFQUNFLHVCQUFBO0FDQUo7QURHRTtFQUNFLCtCQUFBO0FDREo7QURHRTtFQUNFLDhDQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElFO0VBQ0UsZ0JBQUE7QUNGSjtBREtFO0VBQ0UsOEJBQUE7QUNISjtBRE1JO0VBQ0UsY0FBQTtBQ0pOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL3NlY3Rpb25zL2xhbmRpbmcvd29ya3NwYWNlcy93b3Jrc3BhY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndvcmtzcGFjZXMge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kb3QtYmcucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgcCB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpO1xuICB9XG5cbiAgLndoaXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC50ZXh0LWludHJvIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1jYXZlYXQpO1xuICB9XG4gIC5tYWluLWhlYWRpbmcge1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbnRzZXJyYXQtZXh0cmEtYm9sZCk7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG5cbiAgLnRhYmxlLWltZyB7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgfVxuXG4gIC5jb2xsYWIge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhsKTtcbiAgfVxuICAucG9pbnRzIHtcbiAgICBsaSB7XG4gICAgICBtYXJnaW46IDIwcHggMDtcbiAgICB9XG4gIH1cbn1cbiIsIi53b3Jrc3BhY2VzIHtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2RvdC1iZy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ud29ya3NwYWNlcyBwIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcbn1cbi53b3Jrc3BhY2VzIC53aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLndvcmtzcGFjZXMgLnRleHQtaW50cm8ge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1jYXZlYXQpO1xufVxuLndvcmtzcGFjZXMgLm1haW4taGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbnRzZXJyYXQtZXh0cmEtYm9sZCk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi53b3Jrc3BhY2VzIC50YWJsZS1pbWcge1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuLndvcmtzcGFjZXMgLmNvbGxhYiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhsKTtcbn1cbi53b3Jrc3BhY2VzIC5wb2ludHMgbGkge1xuICBtYXJnaW46IDIwcHggMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkspacesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'px-workspaces',
          templateUrl: './workspaces.component.html',
          styleUrls: ['./workspaces.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main/sections/nav/nav.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/main/sections/nav/nav.component.ts ***!
    \***************************************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppComponentsMainSectionsNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function NavComponent_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phoenix Code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var NavComponent = /*#__PURE__*/function () {
      function NavComponent() {
        _classCallCheck(this, NavComponent);

        this.navFixed = false;
        this.scrollOffset = 100;
      }

      _createClass(NavComponent, [{
        key: "onWindowScroll",
        value: function onWindowScroll() {
          this.navFixed = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) > this.scrollOffset;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.scrollOffset = document.getElementById('meet-phoenix').offsetTop - 200;
        }
      }]);

      return NavComponent;
    }();

    NavComponent.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)();
    };

    NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["px-nav"]],
      hostBindings: function NavComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavComponent_scroll_HostBindingHandler() {
            return ctx.onWindowScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 38,
      vars: 3,
      consts: [[1, "navbar", "navbar-expand-lg", 3, "ngClass"], [1, "navbar-brand", 3, "routerLink"], ["src", "assets/images/phoenix-logo.svg", "alt", "logo", 2, "height", "60px", "width", "60px", "margin-right", "10px"], ["class", "sub-heading", 4, "ngIf"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "div-inline", "my-2", "my-lg-0"], [1, "nav-item", "active"], ["target", "_blank", "href", "https://github.com/orgs/phcode-dev/discussions", 1, "nav-link"], ["target", "_blank", "href", "https://docs.phcode.dev/", 1, "nav-link"], ["href", "https://github.com/phcode-dev/phoenix", "target", "_blank", "aria-label", "GitHub", 1, "nav-link", "icon"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 499.36", "focusable", "false", 1, "navbar-nav-svg"], ["d", "M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z", "fill-rule", "evenodd"], ["href", "https://twitter.com/phcodedev", "target", "_blank", "aria-label", "Twitter", 1, "nav-link", "icon"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "navbar-nav-svg", "bi", "bi-twitter-x"], ["d", "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"], ["href", "https://discord.com/invite/rBpTBPttca", "target", "_blank", "aria-label", "Discord", 1, "nav-link", "icon"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "navbar-nav-svg", "bi", "bi-discord"], ["d", "M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"], ["href", "https://www.youtube.com/channel/UCNK2a8DKqPQQe3GlfTk-RHg", "target", "_blank", "aria-label", "Youtube", 1, "nav-link", "icon"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "navbar-nav-svg", "bi", "bi-youtube"], ["d", "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"], [1, "sub-heading"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavComponent_span_3_Template, 2, 0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Docs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "GitHub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "svg", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.navFixed ? "navFixed" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navFixed);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\nnav[_ngcontent-%COMP%] {\n  height: var(--nav-height);\n  background-color: transparent;\n  z-index: 100;\n}\n\nnav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\nnav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: -5px;\n  font-family: var(--font-montserrat-bold);\n  font-size: var(--font-size-xl);\n}\n\nnav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover {\n  color: var(--text-color-light);\n}\n\nnav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  margin: 0 20px;\n}\n\nnav[_ngcontent-%COMP%]   .nav-link.icon[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nnav[_ngcontent-%COMP%]   .navbar-nav-svg[_ngcontent-%COMP%] {\n  fill: var(--text-color-light);\n  height: 20px;\n}\n\nnav[_ngcontent-%COMP%]   .navbar-nav-svg[_ngcontent-%COMP%]:hover {\n  fill: var(--accent-color);\n}\n\n.navFixed[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  background-color: rgba(65, 63, 63, 0.594);\n  transition: all 0.1s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9waGNvZGUuaW8vc3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluL3NlY3Rpb25zL25hdi9uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVJO0VBQ0UsV0FBQTtBQ0FOOztBREVJO0VBQ0UsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLDhCQUFBO0FDQU47O0FERUk7RUFDRSw4QkFBQTtBQ0FOOztBRElFO0VBQ0UsY0FBQTtBQ0ZKOztBRElJO0VBQ0UsU0FBQTtBQ0ZOOztBRE1FO0VBQ0UsNkJBQUE7RUFJQSxZQUFBO0FDUEo7O0FESUk7RUFDRSx5QkFBQTtBQ0ZOOztBRFFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLGdDQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5uYXYge1xuICBoZWlnaHQ6IHZhcigtLW5hdi1oZWlnaHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgei1pbmRleDogMTAwO1xuXG4gIC5uYXZiYXItYnJhbmQge1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogODBweDtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbnRzZXJyYXQtYm9sZCk7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14bCk7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xuICAgIH1cblxuICB9XG4gIC5uYXYtbGluayB7XG4gICAgbWFyZ2luOiAwIDIwcHg7XG5cbiAgICAmLmljb24ge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5uYXZiYXItbmF2LXN2ZyB7XG4gICAgZmlsbDogdmFyKC0tdGV4dC1jb2xvci1saWdodCkgO1xuICAgICY6aG92ZXIge1xuICAgICAgZmlsbDogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICB9XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG59XG5cbi5uYXZGaXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSg2NSwgNjMsIDYzLCAwLjU5NCk7XG4gIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XG59XG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxubmF2IHtcbiAgaGVpZ2h0OiB2YXIoLS1uYXYtaGVpZ2h0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IDEwMDtcbn1cbm5hdiAubmF2YmFyLWJyYW5kIGltZyB7XG4gIHdpZHRoOiA4MHB4O1xufVxubmF2IC5uYXZiYXItYnJhbmQgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb250c2VycmF0LWJvbGQpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14bCk7XG59XG5uYXYgLm5hdmJhci1icmFuZDpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcbn1cbm5hdiAubmF2LWxpbmsge1xuICBtYXJnaW46IDAgMjBweDtcbn1cbm5hdiAubmF2LWxpbmsuaWNvbiB7XG4gIG1hcmdpbjogMDtcbn1cbm5hdiAubmF2YmFyLW5hdi1zdmcge1xuICBmaWxsOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcbiAgaGVpZ2h0OiAyMHB4O1xufVxubmF2IC5uYXZiYXItbmF2LXN2Zzpob3ZlciB7XG4gIGZpbGw6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbi5uYXZGaXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjUsIDYzLCA2MywgMC41OTQpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'px-nav',
          templateUrl: './nav.component.html',
          styleUrls: ['./nav.component.scss']
        }]
      }], null, {
        onWindowScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:scroll']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/directives/mouse.move.directive.ts":
  /*!****************************************************!*\
    !*** ./src/app/directives/mouse.move.directive.ts ***!
    \****************************************************/

  /*! exports provided: MouseMoveDirective */

  /***/
  function srcAppDirectivesMouseMoveDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MouseMoveDirective", function () {
      return MouseMoveDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MouseMoveDirective = /*#__PURE__*/function () {
      function MouseMoveDirective(el) {
        var _this2 = this;

        _classCallCheck(this, MouseMoveDirective);

        this.el = el;
        this.element = null;
        this.mouseOverParent = false;
        this.parent = null;
        this.xMovement = 10;
        this.yMovement = 10;
        this.scroll = false;

        this.updateElPosition = function (e) {
          var mousePercentX = e.clientX / document.body.clientWidth;
          var mousePercentY = e.clientY / document.body.clientHeight;
          var posX = (mousePercentX * 2 - 1) * _this2.xMovement;
          var posY = (mousePercentY * 2 - 1) * _this2.yMovement;
          _this2.element.style.transform = "translate(".concat(posX, "px, ").concat(posY, "px)");
        };

        this.updateElPositionOnScroll = function (e) {
          console.log('scroll');

          if (_this2.scroll) {
            // const mousePercentX = window.scrollY / document.body.clientWidth;
            var mousePercentY = window.scrollY / document.body.clientHeight; // const posX = (mousePercentX * 2 - 1) * this.xMovement;

            var posY = (mousePercentY * 2 - 1) * (_this2.yMovement * 3);
            _this2.element.style.transform = "translateY(".concat(posY, "px)");
          }
        };

        this.element = el.nativeElement;
      }

      _createClass(MouseMoveDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this3 = this;

          if (this.parent) {
            this.parent.addEventListener('mouseenter', function () {
              document.addEventListener('mousemove', _this3.updateElPosition);
            });
            this.parent.addEventListener('mouseleave', function () {
              document.removeEventListener('mousemove', _this3.updateElPosition);
            });
          }
        }
      }]);

      return MouseMoveDirective;
    }();

    MouseMoveDirective.ɵfac = function MouseMoveDirective_Factory(t) {
      return new (t || MouseMoveDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    MouseMoveDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MouseMoveDirective,
      selectors: [["", "pxMouseMove", ""]],
      inputs: {
        parent: "parent",
        xMovement: "xMovement",
        yMovement: "yMovement",
        scroll: "scroll"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MouseMoveDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[pxMouseMove]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        parent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['parent']
        }],
        xMovement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['xMovement']
        }],
        yMovement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['yMovement']
        }],
        scroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['scroll']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/ApiService.ts":
  /*!****************************************!*\
    !*** ./src/app/services/ApiService.ts ***!
    \****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.apiUrl = 'https://updates.phcode.io/install.json';
      }

      _createClass(ApiService, [{
        key: "getDownloadUrls",
        value: function getDownloadUrls() {
          return this.http.get("".concat(this.apiUrl));
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~components-about-about-module~components-main-main-module-es5.js.map