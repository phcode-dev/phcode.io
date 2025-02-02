function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-about-about-module"], {
  /***/
  "./src/app/components/about/about-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/about/about-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: AboutRoutingModule */

  /***/
  function srcAppComponentsAboutAboutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function () {
      return AboutRoutingModule;
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


    var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about.component */
    "./src/app/components/about/about.component.ts");

    var routes = [{
      path: '',
      component: _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    }];

    var AboutRoutingModule = /*#__PURE__*/_createClass(function AboutRoutingModule() {
      _classCallCheck(this, AboutRoutingModule);
    });

    AboutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AboutRoutingModule
    });
    AboutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AboutRoutingModule_Factory(t) {
        return new (t || AboutRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutRoutingModule, [{
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
  "./src/app/components/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _main_sections_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../main/sections/nav/nav.component */
    "./src/app/components/main/sections/nav/nav.component.ts");
    /* harmony import */


    var _main_sections_landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../main/sections/landing/footer/footer.component */
    "./src/app/components/main/sections/landing/footer/footer.component.ts");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["px-about"]],
      decls: 40,
      vars: 0,
      consts: [[1, "body"], [1, "p-5", "container"], [1, "main-heading"], [1, "row", "p-4"], [1, "col-md-6"], [1, "row"], [1, "col-md-2"], ["src", "assets/images/transparency_icon.svg", "alt", ""], [1, "col-md-10", "text-left", "mb-4"], [1, "sub-heading"], ["src", "assets/images/open_code_icon.svg", "alt", ""], [1, "d-flex-center", "row", "team"], [1, "col-md-12", "d-flex-center", "flex-column"], ["src", "assets/images/team.png", "alt", ""], [1, "main-heading", "my-2"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "px-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "We are a team of engineers making coding as easy and fun as gaming- to make coding an accessible and engaging experience. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Crafted by the same people behind the Brackets Code Editor and iconic design apps like Dreamweaver and Illustrator, Phoenix emerges from a legacy of over a decade in code editor development and a passion for UX design tools. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Our goal is to place the human aspect of coding at the heart of the user experience, transforming the routine task of coding in a text editor into something more engaging and enjoyable. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Game UX ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Approach code editing like a game that a school kid would play after skipping the tutorial.. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Light-Weight Editor ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Phoenix Code is designed to run anywhere, from mobile browsers to high-end workstations, maintaining a lightweight footprint. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Our Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "We are a team of engineers on a mission to make coding as easy and fun as gaming - to make coding an accessible and engaging experience.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "px-footer");
        }
      },
      directives: [_main_sections_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _main_sections_landing_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: [".body[_ngcontent-%COMP%] {\n  padding-top: var(--nav-height);\n  background-color: var(--background-color-dark);\n  color: var(--text-color-light);\n  min-height: 100vh;\n}\n.body[_ngcontent-%COMP%]   .main-heading[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat-bold);\n  font-style: italic;\n  font-size: var(--font-size-xl);\n}\n.body[_ngcontent-%COMP%]   .sub-heading[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat-bold);\n  font-size: var(--font-size-lg);\n}\n.body[_ngcontent-%COMP%]   .control-freak[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.body[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-family: var(--font-montserrat-bold);\n  font-style: italic;\n  font-size: var(--font-size-xl);\n}\n.body[_ngcontent-%COMP%]   .name.charly[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n}\n.body[_ngcontent-%COMP%]   .name.arun[_ngcontent-%COMP%] {\n  color: var(--link-color);\n}\n.align-top[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9waGNvZGUuaW8vc3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSw4Q0FBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUNDRjtBRENFO0VBQ0Usd0NBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FDQ0o7QURDRTtFQUNFLHdDQUFBO0VBQ0EsOEJBQUE7QUNDSjtBREVFO0VBQ0Usa0JBQUE7QUNBSjtBREdFO0VBQ0Usd0NBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FDREo7QURHSTtFQUNFLDBCQUFBO0FDRE47QURJSTtFQUNFLHdCQUFBO0FDRk47QURPQTtFQUNFLHVCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xuICBwYWRkaW5nLXRvcDogdmFyKC0tbmF2LWhlaWdodCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItZGFyayk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG5cbiAgLm1haW4taGVhZGluZyB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdC1ib2xkKTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xuICB9XG4gIC5zdWItaGVhZGluZyB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdC1ib2xkKTtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sZyk7XG4gIH1cblxuICAuY29udHJvbC1mcmVhayB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG5cbiAgLm5hbWUge1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbnRzZXJyYXQtYm9sZCk7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhsKTtcblxuICAgICYuY2hhcmx5IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgIH1cblxuICAgICYuYXJ1biB7XG4gICAgICBjb2xvcjogdmFyKC0tbGluay1jb2xvcik7XG4gICAgfVxuICB9XG59XG5cbi5hbGlnbi10b3Age1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbiIsIi5ib2R5IHtcbiAgcGFkZGluZy10b3A6IHZhcigtLW5hdi1oZWlnaHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWRhcmspO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLmJvZHkgLm1haW4taGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbnRzZXJyYXQtYm9sZCk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xufVxuLmJvZHkgLnN1Yi1oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9udHNlcnJhdC1ib2xkKTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpO1xufVxuLmJvZHkgLmNvbnRyb2wtZnJlYWsge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uYm9keSAubmFtZSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbnRzZXJyYXQtYm9sZCk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xufVxuLmJvZHkgLm5hbWUuY2hhcmx5IHtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG4uYm9keSAubmFtZS5hcnVuIHtcbiAgY29sb3I6IHZhcigtLWxpbmstY29sb3IpO1xufVxuXG4uYWxpZ24tdG9wIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'px-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/about/about.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/components/about/about.module.ts ***!
    \**************************************************/

  /*! exports provided: AboutModule */

  /***/
  function srcAppComponentsAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutModule", function () {
      return AboutModule;
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


    var _about_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about-routing.module */
    "./src/app/components/about/about-routing.module.ts");
    /* harmony import */


    var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _main_main_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../main/main.module */
    "./src/app/components/main/main.module.ts");
    /* harmony import */


    var src_app_shared_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/card/card.component */
    "./src/app/shared/card/card.component.ts");

    var AboutModule = /*#__PURE__*/_createClass(function AboutModule() {
      _classCallCheck(this, AboutModule);
    });

    AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AboutModule
    });
    AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AboutModule_Factory(t) {
        return new (t || AboutModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"], _main_main_module__WEBPACK_IMPORTED_MODULE_4__["MainModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutModule, {
        declarations: [_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], src_app_shared_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"], _main_main_module__WEBPACK_IMPORTED_MODULE_4__["MainModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], src_app_shared_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"], _main_main_module__WEBPACK_IMPORTED_MODULE_4__["MainModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/card/card.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/card/card.component.ts ***!
    \***********************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppSharedCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["*"];

    var CardComponent = /*#__PURE__*/function () {
      function CardComponent() {
        _classCallCheck(this, CardComponent);
      }

      _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardComponent;
    }();

    CardComponent.ɵfac = function CardComponent_Factory(t) {
      return new (t || CardComponent)();
    };

    CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardComponent,
      selectors: [["px-card"]],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [[1, "card"]],
      template: function CardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".card[_ngcontent-%COMP%] {\n  background: #2F2E2E;\n  border: 1px solid #1F1F1F;\n  box-sizing: border-box;\n  box-shadow: inset 2px 2px 5px 2px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9waGNvZGUuaW8vc3JjL2FwcC9zaGFyZWQvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscURBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgYmFja2dyb3VuZDogIzJGMkUyRTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFGMUYxRjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCA1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4iLCIuY2FyZCB7XG4gIGJhY2tncm91bmQ6ICMyRjJFMkU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxRjFGMUY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'px-card',
          templateUrl: './card.component.html',
          styleUrls: ['./card.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-about-about-module-es5.js.map