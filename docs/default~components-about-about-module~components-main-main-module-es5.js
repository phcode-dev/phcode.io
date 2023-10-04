function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

    var MainRoutingModule = function MainRoutingModule() {
      _classCallCheck(this, MainRoutingModule);
    };

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

    var MainModule = function MainModule() {
      _classCallCheck(this, MainModule);
    };

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
        declarations: [_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], _sections_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"], _sections_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"], _sections_landing_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"], src_app_directives_mouse_move_directive__WEBPACK_IMPORTED_MODULE_7__["MouseMoveDirective"], _sections_landing_meet_phoenix_meet_phoenix_component__WEBPACK_IMPORTED_MODULE_8__["MeetPhoenixComponent"], _sections_landing_features_features_component__WEBPACK_IMPORTED_MODULE_9__["FeaturesComponent"], _sections_landing_workspaces_workspaces_component__WEBPACK_IMPORTED_MODULE_10__["WorkspacesComponent"], _sections_landing_server_server_component__WEBPACK_IMPORTED_MODULE_11__["ServerComponent"], _sections_landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"]],
        exports: [_sections_landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _sections_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], _sections_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"], _sections_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"], _sections_landing_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"], src_app_directives_mouse_move_directive__WEBPACK_IMPORTED_MODULE_7__["MouseMoveDirective"], _sections_landing_meet_phoenix_meet_phoenix_component__WEBPACK_IMPORTED_MODULE_8__["MeetPhoenixComponent"], _sections_landing_features_features_component__WEBPACK_IMPORTED_MODULE_9__["FeaturesComponent"], _sections_landing_workspaces_workspaces_component__WEBPACK_IMPORTED_MODULE_10__["WorkspacesComponent"], _sections_landing_server_server_component__WEBPACK_IMPORTED_MODULE_11__["ServerComponent"], _sections_landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"]],
          exports: [_sections_landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _sections_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main/sections/landing/banner/banner.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/main/sections/landing/banner/banner.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: BannerComponent */

  /***/
  function srcAppComponentsMainSectionsLandingBannerBannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannerComponent", function () {
      return BannerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_directives_mouse_move_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/directives/mouse.move.directive */
    "./src/app/directives/mouse.move.directive.ts");

    var BannerComponent = /*#__PURE__*/function () {
      function BannerComponent() {
        _classCallCheck(this, BannerComponent);
      }

      _createClass(BannerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BannerComponent;
    }();

    BannerComponent.ɵfac = function BannerComponent_Factory(t) {
      return new (t || BannerComponent)();
    };

    BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BannerComponent,
      selectors: [["px-banner"]],
      decls: 28,
      vars: 7,
      consts: [[1, "main"], ["parent", ""], ["src", "../../../../../../assets/images/vector-top-left.png", "alt", "topl", 1, "vtl", "z1"], ["src", "../../../../../../assets/images/vector-bottom-right.png", "alt", "bottoml", 1, "vbr", "z1"], ["pxMouseMove", "", "src", "../../../../../../assets/images/stars-left.svg", "alt", "bottoml", 1, "stars-left", "z2", 3, "parent"], ["pxMouseMove", "", "src", "../../../../../../assets/images/stars-right.svg", "alt", "bottoml", 1, "stars-right", "z2", 3, "parent"], [1, "container", "content-container", "d-flex", "flex-column", "justify-center", "align-center", "z8"], ["pxMouseMove", "", "xMovement", "3", "yMovement", "3", "src", "../../../../../../assets/images/phoenix-logo.svg", "alt", "logo", 1, "brand-logo", 3, "parent"], [1, "brand-text", "text-center", "z2"], [1, "primary-button"], ["pxMouseMove", "", "xMovement", "0", "yMovement", "10", "src", "../../../../../../assets/images/cloud1.svg", "alt", "cloud1", 1, "cloud", "cloud-1", "z3", 3, "parent"], ["pxMouseMove", "", "xMovement", "0", "yMovement", "15", "src", "../../../../../../assets/images/cloud2.svg", "alt", "cloud2", 1, "cloud", "cloud-2", "z6", 3, "parent"], ["pxMouseMove", "", "xMovement", "0", "yMovement", "25", "src", "../../../../../../assets/images/cloud3.svg", "alt", "cloud3", 1, "cloud", "cloud-3", "z5", 3, "parent"], ["pxMouseMove", "", "xMovement", "0", "yMovement", "5", "src", "../../../../../../assets/images/cloud4.svg", "alt", "cloud4", 1, "cloud", "cloud-4", "z6", 3, "parent"], [1, "sky"], ["id", "star-1", 1, "star"], ["id", "star-2", 1, "star"], ["id", "star-3", 1, "star"], ["id", "star-4", 1, "star"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "phoenix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Modern. Open-source cloud based IDE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Runs anywhere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Start Coding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 18);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", _r0);
        }
      },
      directives: [src_app_directives_mouse_move_directive__WEBPACK_IMPORTED_MODULE_1__["MouseMoveDirective"]],
      styles: [".main[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  position: relative;\n  overflow: hidden;\n  background: linear-gradient(#000A2E 80%, white);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.main[_ngcontent-%COMP%]   .vtl[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10%;\n  left: -20px;\n}\n.main[_ngcontent-%COMP%]   .vbr[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10%;\n  right: -20px;\n}\n.main[_ngcontent-%COMP%]   .stars-left[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  top: 10%;\n  opacity: 0.7;\n}\n.main[_ngcontent-%COMP%]   .stars-right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  top: 5%;\n  opacity: 0.7;\n}\n.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n  color: var(--text-color-light);\n  top: 35%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  font-family: var(--font-montserrat-bold);\n}\n.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  height: 35vh;\n}\n.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  margin-top: -30px;\n}\n.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xxl);\n  margin-bottom: var(--space-lg);\n}\n.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat);\n}\n.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 45px;\n}\n.main[_ngcontent-%COMP%]   .cloud[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  -webkit-user-drag: none;\n  -khtml-user-drag: none;\n  -moz-user-drag: none;\n  -o-user-drag: none;\n  user-drag: none;\n}\n.sky[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: rotateZ(136deg);\n  top: -182px;\n  left: 472px;\n  z-index: 2;\n  opacity: 0.5;\n}\n.star[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  height: 2px;\n  border-radius: 885px;\n  background: linear-gradient(-45deg, #eef0f5, rgba(0, 0, 255, 0));\n  filter: drop-shadow(0 0 6px #d7dff0);\n  -webkit-animation: tail 5000ms ease-in-out infinite, shooting 5000ms ease-in-out infinite;\n  animation: tail 5000ms ease-in-out infinite, shooting 5000ms ease-in-out infinite;\n}\n\n.star[_ngcontent-%COMP%]::before, .star[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: calc(50% - 1px);\n  right: 0;\n  height: 2px;\n  background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #eaeef8, rgba(0, 0, 255, 0));\n  transform: translateX(50%) rotateZ(45deg);\n  border-radius: 100%;\n  -webkit-animation: shining 3000ms ease-in-out infinite;\n  animation: shining 3000ms ease-in-out infinite;\n}\n.star[_ngcontent-%COMP%]::after {\n  transform: translateX(50%) rotateZ(-45deg);\n}\n\n.star[_ngcontent-%COMP%]:nth-child(1) {\n  top: calc(50% - -119px);\n  left: calc(50% - 43px);\n}\n.star[_ngcontent-%COMP%]:nth-child(1)::before, .star[_ngcontent-%COMP%]:nth-child(1)::after {\n  -webkit-animation-delay: 12000ms;\n  animation-delay: 12000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(2) {\n  top: calc(50% - -100px);\n  left: calc(50% - 137px);\n  -webkit-animation-delay: 5000ms;\n  animation-delay: 5000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(2)::before, .star[_ngcontent-%COMP%]:nth-child(2)::after {\n  -webkit-animation-delay: 10000ms;\n  animation-delay: 10000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(3) {\n  top: calc(50% - -90px);\n  left: calc(50% - 222px);\n  -webkit-animation-delay: 7000ms;\n  animation-delay: 7000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(3)::before, .star[_ngcontent-%COMP%]:nth-child(3)::after {\n  -webkit-animation-delay: 7000ms;\n  animation-delay: 7000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(4) {\n  top: calc(50% - -129px);\n  left: calc(50% - 213px);\n  -webkit-animation-delay: 7000ms;\n  animation-delay: 7000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(4)::before, .star[_ngcontent-%COMP%]:nth-child(4)::after {\n  -webkit-animation-delay: 7000ms;\n  animation-delay: 7000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(5) {\n  top: calc(50% - 146px);\n  left: calc(50% - 112px);\n  -webkit-animation-delay: 3000ms;\n  animation-delay: 3000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(5)::before, .star[_ngcontent-%COMP%]:nth-child(5)::after {\n  -webkit-animation-delay: 3000ms;\n  animation-delay: 3000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(6) {\n  top: calc(50% - -108px);\n  left: calc(50% - 160px);\n  -webkit-animation-delay: 3000ms;\n  animation-delay: 3000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(6)::before, .star[_ngcontent-%COMP%]:nth-child(6)::after {\n  -webkit-animation-delay: 3000ms;\n  animation-delay: 3000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(7) {\n  top: calc(50% - 52px);\n  left: calc(50% - 72px);\n  -webkit-animation-delay: 7000ms;\n  animation-delay: 7000ms;\n}\n.star[_ngcontent-%COMP%]:nth-child(7)::before, .star[_ngcontent-%COMP%]:nth-child(7)::after {\n  -webkit-animation-delay: 7000ms;\n  animation-delay: 7000ms;\n}\n\n@keyframes tail {\n  0% {\n    width: 0;\n  }\n  30% {\n    width: 100px;\n  }\n  100% {\n    width: 0;\n  }\n}\n\n@keyframes shining {\n  0% {\n    width: 0;\n  }\n  50% {\n    width: 30px;\n  }\n  100% {\n    width: 0;\n  }\n}\n\n@-webkit-keyframes shining {\n  0% {\n    width: 0;\n  }\n  50% {\n    width: 30px;\n  }\n  100% {\n    width: 0;\n  }\n}\n\n@-webkit-keyframes tail {\n  0% {\n    width: 0;\n  }\n  30% {\n    width: 100px;\n  }\n  100% {\n    width: 0;\n  }\n}\n\n@-webkit-keyframes shooting {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(500px);\n  }\n}\n\n@keyframes shooting {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(500px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9waGNvZGUuaW8vc3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0NBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUNDRjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREo7QURJRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDRko7QURLRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FDSEo7QURNRTtFQUNFLDhCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUNKSjtBRE1JO0VBQ0UsWUFBQTtBQ0pOO0FETUk7RUFDRSxpQkFBQTtBQ0pOO0FES007RUFDRSwrQkFBQTtFQUNBLDhCQUFBO0FDSFI7QURLTTtFQUNFLG1DQUFBO0FDSFI7QURLTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDSFI7QURRRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNOSjtBRFdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ1JGO0FEVUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0VBQUE7RUFJQSxvQ0FBQTtFQUNBLHlGQUFBO0VBRUEsaUZBQUE7QUNWRjtBRGNBLGdEQUFBO0FBQ0E7O0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG9GQUFBO0VBT0EseUNBQUE7RUFDQSxtQkFBQTtFQUNBLHNEQUFBO0VBQ0EsOENBQUE7QUNoQkY7QURrQkE7RUFFRSwwQ0FBQTtBQ2ZGO0FEa0JBOzs7MkJBQUE7QUFJQTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7QUNmRjtBRG1CQTs7RUFFRSxnQ0FBQTtFQUNBLHdCQUFBO0FDaEJGO0FEa0JBO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7QUNmRjtBRGlCQTs7RUFFRSxnQ0FBQTtFQUNBLHdCQUFBO0FDZEY7QURnQkE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtBQ2JGO0FEZUE7O0VBRUUsK0JBQUE7RUFDQSx1QkFBQTtBQ1pGO0FEY0E7RUFDRSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtBQ1hGO0FEYUE7O0VBRUUsK0JBQUE7RUFDQSx1QkFBQTtBQ1ZGO0FEWUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtBQ1RGO0FEV0E7O0VBRUUsK0JBQUE7RUFDQSx1QkFBQTtBQ1JGO0FEVUE7RUFDRSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtBQ1BGO0FEU0E7O0VBRUUsK0JBQUE7RUFDQSx1QkFBQTtBQ05GO0FEUUE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtBQ0xGO0FET0E7O0VBRUUsK0JBQUE7RUFDQSx1QkFBQTtBQ0pGO0FET0E7d0JBQUE7QUFFQTtFQUNFO0lBQ0UsUUFBQTtFQ0pGO0VETUE7SUFDRSxZQUFBO0VDSkY7RURNQTtJQUNFLFFBQUE7RUNKRjtBQUNGO0FET0E7d0JBQUE7QUFFQTtFQUNFO0lBQ0UsUUFBQTtFQ0xGO0VET0E7SUFDRSxXQUFBO0VDTEY7RURPQTtJQUNFLFFBQUE7RUNMRjtBQUNGO0FEUUE7NkJBQUE7QUFFQTtFQUNFO0lBQ0UsUUFBQTtFQ05GO0VEUUE7SUFDRSxXQUFBO0VDTkY7RURRQTtJQUNFLFFBQUE7RUNORjtBQUNGO0FEU0E7aUJBQUE7QUFFQTtFQUNFO0lBQ0UsUUFBQTtFQ1BGO0VEU0E7SUFDRSxZQUFBO0VDUEY7RURTQTtJQUNFLFFBQUE7RUNQRjtBQUNGO0FEVUE7cUJBQUE7QUFFQTtFQUNFO0lBRUUsd0JBQUE7RUNSRjtFRFVBO0lBRUUsNEJBQUE7RUNSRjtBQUNGO0FEV0EsaUNBQUE7QUFDQTtFQUNFO0lBRUUsd0JBQUE7RUNURjtFRFdBO0lBRUUsNEJBQUE7RUNURjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL3NlY3Rpb25zL2xhbmRpbmcvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDAwQTJFIDgwJSwgd2hpdGUpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuXG4gIC52dGwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xMCU7XG4gICAgbGVmdDogLTIwcHg7XG4gIH1cblxuICAudmJyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMCU7XG4gICAgcmlnaHQ6IC0yMHB4O1xuICB9XG5cbiAgLnN0YXJzLWxlZnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAxMCU7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgLnN0YXJzLXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB0b3A6IDUlO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xuICAgIHRvcDogMzUlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdC1ib2xkKTtcblxuICAgIC5icmFuZC1sb2dvIHtcbiAgICAgIGhlaWdodDogMzV2aDtcbiAgICB9XG4gICAgLmJyYW5kLXRleHQge1xuICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4bCk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLWxnKTtcbiAgICAgIH1cbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb250c2VycmF0KTtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jbG91ZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgICAta2h0bWwtdXNlci1kcmFnOiBub25lO1xuICAgIC1tb3otdXNlci1kcmFnOiBub25lO1xuICAgIC1vLXVzZXItZHJhZzogbm9uZTtcbiAgICB1c2VyLWRyYWc6IG5vbmU7XG4gIH1cblxufVxuXG4uc2t5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooMTM2ZGVnKTtcbiAgdG9wOiAtMTgycHg7XG4gIGxlZnQ6IDQ3MnB4O1xuICB6LWluZGV4OiAyO1xuICBvcGFjaXR5OiAwLjU7XG59XG4uc3RhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDg4NXB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLFxuICAgICNlZWYwZjUsIHJnYmEoMCwgMCwgMjU1LCAwKSk7XG5cbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDAgMCA2cHggI2VlZjFmOCk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDZweCAjZDdkZmYwKTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHRhaWwgNTAwMG1zIGVhc2UtaW4tb3V0IGluZmluaXRlLFxuICAgIHNob290aW5nIDUwMDBtcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiB0YWlsIDUwMDBtcyBlYXNlLWluLW91dCBpbmZpbml0ZSxcbiAgICBzaG9vdGluZyA1MDAwbXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi8qIEhlcmUgd2UgYWRkIGJlZm9yZSBhbmQgYWZ0ZXIgZWZmZWN0IHRvIHN0YXIgKi9cbi5zdGFyOjpiZWZvcmUsXG4uc3Rhcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg1MCUgLSAxcHgpO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAtNDVkZWcsXG4gICAgcmdiYSgwLCAwLCAyNTUsIDApLFxuICAgICNlYWVlZjgsXG4gICAgcmdiYSgwLCAwLCAyNTUsIDApXG4gICk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgcm90YXRlWig0NWRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHJvdGF0ZVooNDVkZWcpO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2hpbmluZyAzMDAwbXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogc2hpbmluZyAzMDAwbXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG4uc3Rhcjo6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHJvdGF0ZVooLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgcm90YXRlWigtNDVkZWcpO1xufVxuXG4vKiBIZXJlIHdlIGFyZSBhZGRpbmcgbG9jYXRpb24gb2YgZWFjaFxuICAgbnRoLWNoaWxkLCBhbmltYXRpb25zLCBkZWxheXMsIGFuZFxuICAgYmVmb3JlIGFuZCBhZnRlciBlZmZlY3RzIHRvIGVhY2hcbiAgIGFuZCBldmVyeSBiYWxscyhzdGFycykgKi9cbi5zdGFyOm50aC1jaGlsZCgxKSB7XG4gIHRvcDogY2FsYyg1MCUgLSAtMTE5cHgpO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDQzcHgpO1xuICAvLyAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNDAwMG1zO1xuICAvLyBhbmltYXRpb24tZGVsYXk6IDQwMDBtcztcbn1cbi5zdGFyOm50aC1jaGlsZCgxKTo6YmVmb3JlLFxuLnN0YXI6bnRoLWNoaWxkKDEpOjphZnRlciB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxMjAwMG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDEyMDAwbXM7XG59XG4uc3RhcjpudGgtY2hpbGQoMikge1xuICB0b3A6IGNhbGMoNTAlIC0gLTEwMHB4KTtcbiAgbGVmdDogY2FsYyg1MCUgLSAxMzdweCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA1MDAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogNTAwMG1zO1xufVxuLnN0YXI6bnRoLWNoaWxkKDIpOjpiZWZvcmUsXG4uc3RhcjpudGgtY2hpbGQoMik6OmFmdGVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEwMDAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMTAwMDBtcztcbn1cbi5zdGFyOm50aC1jaGlsZCgzKSB7XG4gIHRvcDogY2FsYyg1MCUgLSAtOTBweCk7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjIycHgpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNzAwMG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDcwMDBtcztcbn1cbi5zdGFyOm50aC1jaGlsZCgzKTo6YmVmb3JlLFxuLnN0YXI6bnRoLWNoaWxkKDMpOjphZnRlciB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogNzAwMG1zO1xufVxuLnN0YXI6bnRoLWNoaWxkKDQpIHtcbiAgdG9wOiBjYWxjKDUwJSAtIC0xMjlweCk7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjEzcHgpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNzAwMG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDcwMDBtcztcbn1cbi5zdGFyOm50aC1jaGlsZCg0KTo6YmVmb3JlLFxuLnN0YXI6bnRoLWNoaWxkKDQpOjphZnRlciB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogNzAwMG1zO1xufVxuLnN0YXI6bnRoLWNoaWxkKDUpIHtcbiAgdG9wOiBjYWxjKDUwJSAtIDE0NnB4KTtcbiAgbGVmdDogY2FsYyg1MCUgLSAxMTJweCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzMDAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMzAwMG1zO1xufVxuLnN0YXI6bnRoLWNoaWxkKDUpOjpiZWZvcmUsXG4uc3RhcjpudGgtY2hpbGQoNSk6OmFmdGVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAzMDAwbXM7XG59XG4uc3RhcjpudGgtY2hpbGQoNikge1xuICB0b3A6IGNhbGMoNTAlIC0gLTEwOHB4KTtcbiAgbGVmdDogY2FsYyg1MCUgLSAxNjBweCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzMDAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMzAwMG1zO1xufVxuLnN0YXI6bnRoLWNoaWxkKDYpOjpiZWZvcmUsXG4uc3RhcjpudGgtY2hpbGQoNik6OmFmdGVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAzMDAwbXM7XG59XG4uc3RhcjpudGgtY2hpbGQoNykge1xuICB0b3A6IGNhbGMoNTAlIC0gNTJweCk7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNzJweCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogNzAwMG1zO1xufVxuLnN0YXI6bnRoLWNoaWxkKDcpOjpiZWZvcmUsXG4uc3RhcjpudGgtY2hpbGQoNyk6OmFmdGVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDcwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG59XG5cbi8qIFRoaXMgY29kZSB3aWxsIGhlbHAgdG8gZ2VuZXJhdGVcbmVmZmVjdCBpbiB0YWlsIG9mIHN0YXIgKi9cbkBrZXlmcmFtZXMgdGFpbCB7XG4gIDAlIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICAzMCUge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMDtcbiAgfVxufVxuXG4vKiBUaGlzIGNvZGUgd2lsbCBnZW5lcmF0ZSBzaGluaW5nXG5lZmZlY3QgaW4gaGVhZCBvZiBzdGFyICovXG5Aa2V5ZnJhbWVzIHNoaW5pbmcge1xuICAwJSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICB3aWR0aDogMzBweDtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMDtcbiAgfVxufVxuXG4vKiBIZXJlIHdlIGFyZSBhZGRpbmcgd2Via2l0LWFuaW1hdGlvblxudG8gaGVhZCBvZiBzdGFyIGZvciBzaGluaW5nICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hpbmluZyB7XG4gIDAlIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICA1MCUge1xuICAgIHdpZHRoOiAzMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG59XG5cbi8qIEhlcmUgd2UgYXJlIGFkZGluZyB3ZWJraXQtYW5pbWF0aW9uXG50byB0YWlsIG9mIHN0YXIgKi9cbkAtd2Via2l0LWtleWZyYW1lcyB0YWlsIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDMwJSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG59XG5cbi8qIEhlcmUgd2UgYXJlIGFkZGluZyB3ZWJraXQtYW5pbWF0aW9uXG5mb3Igc2hvb3RpbmcgZWZmZWN0ICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hvb3Rpbmcge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xuICB9XG59XG5cbi8qIEhlcmUgd2UgbWFrZSBzaG9vdGluZyBlZmZlY3QgKi9cbkBrZXlmcmFtZXMgc2hvb3Rpbmcge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xuICB9XG59XG4iLCIubWFpbiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwMEEyRSA4MCUsIHdoaXRlKTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ubWFpbiAudnRsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMCU7XG4gIGxlZnQ6IC0yMHB4O1xufVxuLm1haW4gLnZiciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMCU7XG4gIHJpZ2h0OiAtMjBweDtcbn1cbi5tYWluIC5zdGFycy1sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMTAlO1xuICBvcGFjaXR5OiAwLjc7XG59XG4ubWFpbiAuc3RhcnMtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogNSU7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5tYWluIC5jb250ZW50LWNvbnRhaW5lciB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcbiAgdG9wOiAzNSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdC1ib2xkKTtcbn1cbi5tYWluIC5jb250ZW50LWNvbnRhaW5lciAuYnJhbmQtbG9nbyB7XG4gIGhlaWdodDogMzV2aDtcbn1cbi5tYWluIC5jb250ZW50LWNvbnRhaW5lciAuYnJhbmQtdGV4dCB7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuLm1haW4gLmNvbnRlbnQtY29udGFpbmVyIC5icmFuZC10ZXh0IGgxIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHhsKTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtbGcpO1xufVxuLm1haW4gLmNvbnRlbnQtY29udGFpbmVyIC5icmFuZC10ZXh0IHNwYW4ge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb250c2VycmF0KTtcbn1cbi5tYWluIC5jb250ZW50LWNvbnRhaW5lciAuYnJhbmQtdGV4dCBidXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNDVweDtcbn1cbi5tYWluIC5jbG91ZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIC1raHRtbC11c2VyLWRyYWc6IG5vbmU7XG4gIC1tb3otdXNlci1kcmFnOiBub25lO1xuICAtby11c2VyLWRyYWc6IG5vbmU7XG4gIHVzZXItZHJhZzogbm9uZTtcbn1cblxuLnNreSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiByb3RhdGVaKDEzNmRlZyk7XG4gIHRvcDogLTE4MnB4O1xuICBsZWZ0OiA0NzJweDtcbiAgei1pbmRleDogMjtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uc3RhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDg4NXB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZWVmMGY1LCByZ2JhKDAsIDAsIDI1NSwgMCkpO1xuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDZweCAjZWVmMWY4KTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNnB4ICNkN2RmZjApO1xuICAtd2Via2l0LWFuaW1hdGlvbjogdGFpbCA1MDAwbXMgZWFzZS1pbi1vdXQgaW5maW5pdGUsIHNob290aW5nIDUwMDBtcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiB0YWlsIDUwMDBtcyBlYXNlLWluLW91dCBpbmZpbml0ZSwgc2hvb3RpbmcgNTAwMG1zIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4vKiBIZXJlIHdlIGFkZCBiZWZvcmUgYW5kIGFmdGVyIGVmZmVjdCB0byBzdGFyICovXG4uc3Rhcjo6YmVmb3JlLFxuLnN0YXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gMXB4KTtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDAsIDAsIDI1NSwgMCksICNlYWVlZjgsIHJnYmEoMCwgMCwgMjU1LCAwKSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgcm90YXRlWig0NWRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHJvdGF0ZVooNDVkZWcpO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2hpbmluZyAzMDAwbXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogc2hpbmluZyAzMDAwbXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi5zdGFyOjphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgcm90YXRlWigtNDVkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSByb3RhdGVaKC00NWRlZyk7XG59XG5cbi8qIEhlcmUgd2UgYXJlIGFkZGluZyBsb2NhdGlvbiBvZiBlYWNoXG4gICBudGgtY2hpbGQsIGFuaW1hdGlvbnMsIGRlbGF5cywgYW5kXG4gICBiZWZvcmUgYW5kIGFmdGVyIGVmZmVjdHMgdG8gZWFjaFxuICAgYW5kIGV2ZXJ5IGJhbGxzKHN0YXJzKSAqL1xuLnN0YXI6bnRoLWNoaWxkKDEpIHtcbiAgdG9wOiBjYWxjKDUwJSAtIC0xMTlweCk7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNDNweCk7XG59XG5cbi5zdGFyOm50aC1jaGlsZCgxKTo6YmVmb3JlLFxuLnN0YXI6bnRoLWNoaWxkKDEpOjphZnRlciB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxMjAwMG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDEyMDAwbXM7XG59XG5cbi5zdGFyOm50aC1jaGlsZCgyKSB7XG4gIHRvcDogY2FsYyg1MCUgLSAtMTAwcHgpO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDEzN3B4KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDUwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiA1MDAwbXM7XG59XG5cbi5zdGFyOm50aC1jaGlsZCgyKTo6YmVmb3JlLFxuLnN0YXI6bnRoLWNoaWxkKDIpOjphZnRlciB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxMDAwMG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDEwMDAwbXM7XG59XG5cbi5zdGFyOm50aC1jaGlsZCgzKSB7XG4gIHRvcDogY2FsYyg1MCUgLSAtOTBweCk7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjIycHgpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNzAwMG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDcwMDBtcztcbn1cblxuLnN0YXI6bnRoLWNoaWxkKDMpOjpiZWZvcmUsXG4uc3RhcjpudGgtY2hpbGQoMyk6OmFmdGVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDcwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG59XG5cbi5zdGFyOm50aC1jaGlsZCg0KSB7XG4gIHRvcDogY2FsYyg1MCUgLSAtMTI5cHgpO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDIxM3B4KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDcwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG59XG5cbi5zdGFyOm50aC1jaGlsZCg0KTo6YmVmb3JlLFxuLnN0YXI6bnRoLWNoaWxkKDQpOjphZnRlciB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogNzAwMG1zO1xufVxuXG4uc3RhcjpudGgtY2hpbGQoNSkge1xuICB0b3A6IGNhbGMoNTAlIC0gMTQ2cHgpO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDExMnB4KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAzMDAwbXM7XG59XG5cbi5zdGFyOm50aC1jaGlsZCg1KTo6YmVmb3JlLFxuLnN0YXI6bnRoLWNoaWxkKDUpOjphZnRlciB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzMDAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMzAwMG1zO1xufVxuXG4uc3RhcjpudGgtY2hpbGQoNikge1xuICB0b3A6IGNhbGMoNTAlIC0gLTEwOHB4KTtcbiAgbGVmdDogY2FsYyg1MCUgLSAxNjBweCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzMDAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMzAwMG1zO1xufVxuXG4uc3RhcjpudGgtY2hpbGQoNik6OmJlZm9yZSxcbi5zdGFyOm50aC1jaGlsZCg2KTo6YWZ0ZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMzAwMG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDMwMDBtcztcbn1cblxuLnN0YXI6bnRoLWNoaWxkKDcpIHtcbiAgdG9wOiBjYWxjKDUwJSAtIDUycHgpO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDcycHgpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNzAwMG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDcwMDBtcztcbn1cblxuLnN0YXI6bnRoLWNoaWxkKDcpOjpiZWZvcmUsXG4uc3RhcjpudGgtY2hpbGQoNyk6OmFmdGVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDcwMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiA3MDAwbXM7XG59XG5cbi8qIFRoaXMgY29kZSB3aWxsIGhlbHAgdG8gZ2VuZXJhdGVcbmVmZmVjdCBpbiB0YWlsIG9mIHN0YXIgKi9cbkBrZXlmcmFtZXMgdGFpbCB7XG4gIDAlIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICAzMCUge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMDtcbiAgfVxufVxuLyogVGhpcyBjb2RlIHdpbGwgZ2VuZXJhdGUgc2hpbmluZ1xuZWZmZWN0IGluIGhlYWQgb2Ygc3RhciAqL1xuQGtleWZyYW1lcyBzaGluaW5nIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDUwJSB7XG4gICAgd2lkdGg6IDMwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbn1cbi8qIEhlcmUgd2UgYXJlIGFkZGluZyB3ZWJraXQtYW5pbWF0aW9uXG50byBoZWFkIG9mIHN0YXIgZm9yIHNoaW5pbmcgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBzaGluaW5nIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDUwJSB7XG4gICAgd2lkdGg6IDMwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbn1cbi8qIEhlcmUgd2UgYXJlIGFkZGluZyB3ZWJraXQtYW5pbWF0aW9uXG50byB0YWlsIG9mIHN0YXIgKi9cbkAtd2Via2l0LWtleWZyYW1lcyB0YWlsIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDMwJSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG59XG4vKiBIZXJlIHdlIGFyZSBhZGRpbmcgd2Via2l0LWFuaW1hdGlvblxuZm9yIHNob290aW5nIGVmZmVjdCAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHNob290aW5nIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMHB4KTtcbiAgfVxufVxuLyogSGVyZSB3ZSBtYWtlIHNob290aW5nIGVmZmVjdCAqL1xuQGtleWZyYW1lcyBzaG9vdGluZyB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDBweCk7XG4gIH1cbn0iXX0= */"]
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
        return [];
      }, null);
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
      decls: 83,
      vars: 0,
      consts: [[1, "features", "container-fluid"], [1, "heading-container", "container", "text-center", "py-5"], [1, "row", "py-5"], [1, "heading", "col-md-12"], [1, "row", "preview"], [1, "col-md-6"], [1, "row", "text-left"], [1, "offset-md-1", "col-md-3", "pl-4"], ["src", "assets/images/flash.gif", "alt", "flash", 1, "flash-img"], [1, "col-md-6", "mt-4"], [1, "row"], [1, "heading", "col-md-12", "mb-4"], [1, "description", "col-md-12"], ["src", "assets/images/load.gif", "alt", "flash", 1, "sq-img"], [1, "row", "my-5", "py-5"], [1, "col-md-3", "d-flex-center"], [1, "col-md-6", "d-flex-space-around"], ["src", "assets/images/js.png", "alt", "icons"], ["src", "assets/images/ts.png", "alt", "icons"], ["src", "assets/images/html.png", "alt", "icons"], ["src", "assets/images/css.png", "alt", "icons"], [1, "container-fluid"], [1, "row", "md-12", "my-5", "py-5"], [1, "offset-md-1", "col-md-5", "row", "text-center"], [1, "col-md-12"], ["src", "assets/images/diff.png", "alt", "img"], [1, "col-md-1", "d-flex-center"], ["src", "assets/images/&.png", "alt", ""], [1, "col-md-5", "d-flex-center", "row", "text-center"], ["src", "assets/images/code.png", "alt", "img"], [1, "container-fluid", "pb-5", "preview"], [1, "row", "pb-5"], [1, "offset-md-1", "col-md-3"], ["src", "assets/images/extension.png", "alt", ""], [1, "col-md", "d-flex-center"], [1, "heading"], [1, "col-md-10"], [1, "illustration"], [1, "container", "pt-5", "d-flex-center"], ["src", "assets/images/Illustration.png", "alt", "people"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " LIVE APP PREVIEW ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Experience a new supercharged ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " live preview feature. Code and view ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " changes on the fly. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " LIVE MARKUP PREVIEW ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "View your markup and documentation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " changes on the fly using phoenix\u2019s ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " markup preview pane ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " phoenix is tailor made for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " and many more... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "with a fully feature git client inbuilt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " With intelligent code navigation, completion and refactor support ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "EXTENSION REGISTRY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Completely customizable with thousands of extensions available in the extension registry. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Phoenix\u2019s features out of the box are just a start. Extensions let you give wings to phoenix by adding new tools, languages, features, themes, and many more... Give it a try. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Millions of developers using phoenix contribute to phoenix\u2019s features and developer support. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "section", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 39);

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
      decls: 16,
      vars: 0,
      consts: [[1, "footer", "p-4"], [1, "row", "text-center", "mt-5", "px-2", "footer-items"], [1, "col-md-6", "px-4"], [1, "d-flex-center"], [1, "copyright"], ["href", "javascript:void(0)"], [1, "col-md-4", "offset-md-2", "text-right", "copyright"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA9 2022 copyright core.ai ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Terms of use");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "License");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Made in India");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
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


    var _workspaces_workspaces_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./workspaces/workspaces.component */
    "./src/app/components/main/sections/landing/workspaces/workspaces.component.ts");
    /* harmony import */


    var _server_server_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./server/server.component */
    "./src/app/components/main/sections/landing/server/server.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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
      decls: 7,
      vars: 0,
      consts: [[1, "w-100", "p-0"]],
      template: function LandingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "px-banner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "px-meet-phoenix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "px-features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "px-workspaces");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "px-server");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "px-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _meet_phoenix_meet_phoenix_component__WEBPACK_IMPORTED_MODULE_2__["MeetPhoenixComponent"], _features_features_component__WEBPACK_IMPORTED_MODULE_3__["FeaturesComponent"], _workspaces_workspaces_component__WEBPACK_IMPORTED_MODULE_4__["WorkspacesComponent"], _server_server_component__WEBPACK_IMPORTED_MODULE_5__["ServerComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
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
      decls: 42,
      vars: 0,
      consts: [[1, "container-fluid", "w-100"], [1, "heading-container", "container", "text-center", "pt-5"], [1, "row"], [1, "heading", "col-md-12"], [1, "description", "offset-md-4", "col-md-4", "mt-2"], [1, "row", "content-1"], [1, "col-md-6", "px-5"], ["src", "../../../../../../assets/images/meetPhoenixGraphics.png", "alt", "", 1, "meet-img"], [1, "col-md-6"], [1, "col-md-12"], [1, "row", "text-left", "mt-5"], [1, "col-md-6", "mt-4"], [1, "heading", "col-md-12", "mb-4"], [1, "description", "col-md-12"], [1, "col-md-4"], ["src", "../../../../../../assets/images/meetPhoenixG1.png", "alt", ""], [1, "col-md-12", "mt-5"], [1, "row", "text-left", "mt-4"], ["src", "../../../../../../assets/images/meetPhoenixG2.png", "alt", ""]],
      template: function MeetPhoenixComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Meet Phoenix ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Brand new modern and open source code editor for web development in cloud, packed with powerful features and extensions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Edit Code Locally ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Without installing any IDE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "No signup required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Code without conidtions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Multidevice Support ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Code from anywhere ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "anywhere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "any browser");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["section[_ngcontent-%COMP%]   .heading-container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat-bold);\n  color: var(--primary-color);\n  font-size: var(--font-size-xxl);\n  font-style: italic;\n}\nsection[_ngcontent-%COMP%]   .heading-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat);\n  width: 50%;\n}\nsection[_ngcontent-%COMP%]   .content-1[_ngcontent-%COMP%]   .meet-img[_ngcontent-%COMP%] {\n  margin-top: -100px;\n}\nsection[_ngcontent-%COMP%]   .content-1[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat-bold);\n  color: var(--primary-color);\n  font-size: var(--font-size-xl);\n}\nsection[_ngcontent-%COMP%]   .content-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9waGNvZGUuaW8vc3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9tZWV0LXBob2VuaXgvbWVldC1waG9lbml4LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbGFuZGluZy9tZWV0LXBob2VuaXgvbWVldC1waG9lbml4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdJO0VBVEYsd0NBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUhzQjtFQVlsQixrQkFBQTtBQ1JOO0FEVUk7RUFDRSxtQ0FBQTtFQUNBLFVBQUE7QUNSTjtBRGFJO0VBQ0Usa0JBQUE7QUNYTjtBRGFJO0VBdkJGLHdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFzQmtCO0FDVHBCO0FEV0k7RUFDRSxnQkFBQTtBQ1ROIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL3NlY3Rpb25zL2xhbmRpbmcvbWVldC1waG9lbml4L21lZXQtcGhvZW5peC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQG1peGluIGhlYWQoJGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4bCkpIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdC1ib2xkKTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG59XG5cblxuc2VjdGlvbiB7XG5cbiAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAuaGVhZGluZyB7XG4gICAgICBAaW5jbHVkZSBoZWFkO1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIH1cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdCk7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgfVxuXG4gIC5jb250ZW50LTEge1xuICAgIC5tZWV0LWltZyB7XG4gICAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gICAgfVxuICAgIC5oZWFkaW5nIHtcbiAgICAgIEBpbmNsdWRlIGhlYWQodmFyKC0tZm9udC1zaXplLXhsKSk7XG4gICAgfVxuICAgIHAge1xuICAgICAgbGluZS1oZWlnaHQ6IDAuODtcbiAgICB9XG4gIH1cbn1cbiIsInNlY3Rpb24gLmhlYWRpbmctY29udGFpbmVyIC5oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdC1ib2xkKTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14eGwpO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5zZWN0aW9uIC5oZWFkaW5nLWNvbnRhaW5lciAuZGVzY3JpcHRpb24ge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb250c2VycmF0KTtcbiAgd2lkdGg6IDUwJTtcbn1cbnNlY3Rpb24gLmNvbnRlbnQtMSAubWVldC1pbWcge1xuICBtYXJnaW4tdG9wOiAtMTAwcHg7XG59XG5zZWN0aW9uIC5jb250ZW50LTEgLmhlYWRpbmcge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb250c2VycmF0LWJvbGQpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhsKTtcbn1cbnNlY3Rpb24gLmNvbnRlbnQtMSBwIHtcbiAgbGluZS1oZWlnaHQ6IDAuODtcbn0iXX0= */"]
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavComponent = /*#__PURE__*/function () {
      function NavComponent() {
        _classCallCheck(this, NavComponent);
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavComponent;
    }();

    NavComponent.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)();
    };

    NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["px-nav"]],
      decls: 37,
      vars: 2,
      consts: [[1, "navbar", "navbar-expand-lg"], [1, "navbar-brand", 3, "routerLink"], ["src", "assets/images/nav-logo.svg", "alt", "logo"], [1, "sub-heading"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "div-inline", "my-2", "my-lg-0"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link", 3, "routerLink"], ["href", "#", 1, "nav-link"], ["href", "", "target", "_blank", "aria-label", "GitHub", 1, "nav-link", "icon"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 499.36", "focusable", "false", 1, "navbar-nav-svg"], ["d", "M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z", "fill-rule", "evenodd"], ["href", "", "target", "_blank", "aria-label", "Twitter", 1, "nav-link", "icon"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 416.32", "focusable", "false", 1, "navbar-nav-svg"], ["d", "M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "phoenix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contribute");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "API");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "GitHub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "svg", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/about");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\nnav[_ngcontent-%COMP%] {\n  height: var(--nav-height);\n  background-color: transparent;\n  z-index: 100;\n}\n\nnav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\nnav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: -5px;\n  font-family: var(--font-montserrat-bold);\n  font-size: var(--font-size-xl);\n}\n\nnav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover {\n  color: var(--text-color-light);\n}\n\nnav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  margin: 0 20px;\n}\n\nnav[_ngcontent-%COMP%]   .nav-link.icon[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nnav[_ngcontent-%COMP%]   .navbar-nav-svg[_ngcontent-%COMP%] {\n  fill: var(--text-color-light);\n  height: 20px;\n}\n\nnav[_ngcontent-%COMP%]   .navbar-nav-svg[_ngcontent-%COMP%]:hover {\n  fill: var(--accent-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9waGNvZGUuaW8vc3JjL2FwcC9jb21wb25lbnRzL21haW4vc2VjdGlvbnMvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluL3NlY3Rpb25zL25hdi9uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVJO0VBQ0UsV0FBQTtBQ0FOOztBREVJO0VBQ0UsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLDhCQUFBO0FDQU47O0FERUk7RUFDRSw4QkFBQTtBQ0FOOztBRElFO0VBQ0UsY0FBQTtBQ0ZKOztBRElJO0VBQ0UsU0FBQTtBQ0ZOOztBRE1FO0VBQ0UsNkJBQUE7RUFJQSxZQUFBO0FDUEo7O0FESUk7RUFDRSx5QkFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL3NlY3Rpb25zL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxubmF2IHtcbiAgaGVpZ2h0OiB2YXIoLS1uYXYtaGVpZ2h0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IDEwMDtcblxuICAubmF2YmFyLWJyYW5kIHtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDgwcHg7XG4gICAgfVxuICAgIHNwYW4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb250c2VycmF0LWJvbGQpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcbiAgICB9XG5cbiAgfVxuICAubmF2LWxpbmsge1xuICAgIG1hcmdpbjogMCAyMHB4O1xuXG4gICAgJi5pY29uIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cblxuICAubmF2YmFyLW5hdi1zdmcge1xuICAgIGZpbGw6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpIDtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGZpbGw6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgfVxuICAgIGhlaWdodDogMjBweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm5hdiB7XG4gIGhlaWdodDogdmFyKC0tbmF2LWhlaWdodCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB6LWluZGV4OiAxMDA7XG59XG5uYXYgLm5hdmJhci1icmFuZCBpbWcge1xuICB3aWR0aDogODBweDtcbn1cbm5hdiAubmF2YmFyLWJyYW5kIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdC1ib2xkKTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xufVxubmF2IC5uYXZiYXItYnJhbmQ6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG59XG5uYXYgLm5hdi1saW5rIHtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG5uYXYgLm5hdi1saW5rLmljb24ge1xuICBtYXJnaW46IDA7XG59XG5uYXYgLm5hdmJhci1uYXYtc3ZnIHtcbiAgZmlsbDogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG4gIGhlaWdodDogMjBweDtcbn1cbm5hdiAubmF2YmFyLW5hdi1zdmc6aG92ZXIge1xuICBmaWxsOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufSJdfQ== */"]
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
      }], function () {
        return [];
      }, null);
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
        var _this = this;

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
          var posX = (mousePercentX * 2 - 1) * _this.xMovement;
          var posY = (mousePercentY * 2 - 1) * _this.yMovement;
          _this.element.style.transform = "translate(".concat(posX, "px, ").concat(posY, "px)");
        };

        this.updateElPositionOnScroll = function (e) {
          console.log('scroll');

          if (_this.scroll) {
            // const mousePercentX = window.scrollY / document.body.clientWidth;
            var mousePercentY = window.scrollY / document.body.clientHeight; // const posX = (mousePercentX * 2 - 1) * this.xMovement;

            var posY = (mousePercentY * 2 - 1) * (_this.yMovement * 3);
            _this.element.style.transform = "translateY(".concat(posY, "px)");
          }
        };

        this.element = el.nativeElement;
      }

      _createClass(MouseMoveDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          if (this.parent) {
            this.parent.addEventListener('mouseenter', function () {
              document.addEventListener('mousemove', _this2.updateElPosition);
            });
            this.parent.addEventListener('mouseleave', function () {
              document.removeEventListener('mousemove', _this2.updateElPosition);
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

  }
}]);
//# sourceMappingURL=default~components-about-about-module~components-main-main-module-es5.js.map