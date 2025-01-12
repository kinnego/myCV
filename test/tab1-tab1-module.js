(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Only {{squaresCount}} Squares\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <!-- <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Please Select </ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <!-- <app-explore-container name=\"Tab 1 page\"></app-explore-container> -->\n\n  <div class=\"middle\">\n    <label *ngFor=\"let sq of squares.list\">\n      <input type=\"checkbox\" [checked]=\"sq.active\" (change)=\"onItemChange(sq, $event)\"/>\n      <div [ngClass]=\"squares.list.length <= 20 ? 'box-large' : 'box-small'\" title=\"Is this a winner?\">\n        <!-- <span *ngIf=\"squares.list.length <= 20\">\n          <span *ngIf=\"!sq.active\">Select</span>\n          <span *ngIf=\"sq.active\">Yours</span>\n        </span> -->\n      </div>\n\n    </label>\n\n\n\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Tab1Page = class Tab1Page {
    constructor() {
        this.squaresCount = 300;
    }
    ngOnInit() {
        let sqCount = [];
        for (let i = 0; i <= this.squaresCount; i++) {
            const sample = !Math.round(Math.random());
            sqCount[i] = { id: i, active: sample };
        }
        this.squares = {
            "name": "Comp 1",
            "list": sqCount
        };
    }
    onItemChange(sq, $event) {
        $event.currentTarget.nextElementSibling.classList.remove("box-small");
        $event.currentTarget.nextElementSibling.classList.add("my-square");
        console.log($event.currentTarget.nextElementSibling);
        if (sq.active) {
            alert("Too late - Square already taken");
        }
        else {
            sq.active = true;
        }
    }
};
Tab1Page.ctorParameters = () => [];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Dax:400,900\");\nhtml {\n  background-color: #1a1a1a;\n  overflow: hidden;\n}\n.middle {\n  width: 100%;\n  text-align: center;\n  /* Made by */\n}\n.middle h1 {\n  font-family: \"Dax\", sans-serif;\n  color: #fff;\n}\n.middle input[type=checkbox] {\n  display: none;\n}\n.middle input[type=checkbox]:checked + .box-small, .middle input[type=checkbox]:checked + .box-medium, .middle input[type=checkbox]:checked + .box-large {\n  background-color: #f1ba3d;\n}\n.middle input[type=checkbox]:checked + .box-small span, .middle input[type=checkbox]:checked + .box-medium span, .middle input[type=checkbox]:checked + .box-large span {\n  color: white;\n}\n.middle input[type=checkbox]:checked + .my-square {\n  background-color: green;\n}\n.middle input[type=checkbox]:checked + .my-square span {\n  color: white;\n}\n.middle .box-large {\n  margin: 5px;\n  width: 100px;\n  height: 100px;\n  background-color: #fff;\n  transition: all 250ms ease;\n  will-change: transition;\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n  position: relative;\n  font-family: \"Dax\", sans-serif;\n  font-weight: 900;\n}\n.middle .box-large:active {\n  transform: translateY(5px);\n}\n.middle .box-large:hover {\n  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);\n}\n.middle .box-large span {\n  position: absolute;\n  left: 0;\n  right: 0;\n  transition: all 300ms ease;\n  font-size: 16px;\n  -webkit-user-select: none;\n          user-select: none;\n  color: #f1ba3d;\n}\n.middle .box-medium {\n  margin: 5px;\n  width: 50px;\n  height: 50px;\n  background-color: #fff;\n  transition: all 250ms ease;\n  will-change: transition;\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n  position: relative;\n  font-family: \"Dax\", sans-serif;\n  font-weight: 900;\n}\n.middle .box-medium:active {\n  transform: translateY(5px);\n}\n.middle .box-medium:hover {\n  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);\n}\n.middle .box-medium span {\n  position: absolute;\n  left: 0;\n  right: 0;\n  transition: all 300ms ease;\n  font-size: 16px;\n  -webkit-user-select: none;\n          user-select: none;\n  color: #f1ba3d;\n}\n.middle .box-small, .middle .my-square {\n  margin: 2px 4px;\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  transition: all 250ms ease;\n  will-change: transition;\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n  position: relative;\n  font-family: \"Dax\", sans-serif;\n  font-weight: 900;\n}\n.middle .box-small:active, .middle .my-square:active {\n  transform: translateY(5px);\n}\n.middle .box-small span, .middle .my-square span {\n  position: absolute;\n  transform: translate(0, 35px);\n  left: 0;\n  right: 0;\n  transition: all 300ms ease;\n  font-size: 1.5em;\n  -webkit-user-select: none;\n          user-select: none;\n  color: #f1ba3d;\n}\n.middle p {\n  color: #fff;\n  font-family: \"Dax\", sans-serif;\n  font-weight: 400;\n}\n.middle p a {\n  text-decoration: underline;\n  font-weight: bold;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGtFQUFBO0FBS1I7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FBSEY7QUFNQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQXlLQSxZQUFBO0FBM0tGO0FBR0U7RUFDRSw4QkFiRztFQWNILFdBYkk7QUFZUjtBQUdFO0VBQ0UsYUFBQTtBQURKO0FBR007RUFDRSx5QkFsQkc7QUFpQlg7QUFFUTtFQUNFLFlBQUE7QUFBVjtBQVFNO0VBQ0UsdUJBNUJNO0FBc0JkO0FBT1E7RUFDRSxZQUFBO0FBTFY7QUFpQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFoREk7RUFpREosMEJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkF4REc7RUF5REgsZ0JBQUE7QUFmSjtBQWdCSTtFQUNFLDBCQUFBO0FBZE47QUFnQkk7RUFDRSwwQ0FBQTtBQWROO0FBZ0JJO0VBQ0Usa0JBQUE7RUFFQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxjQXRFSztBQXVEWDtBQTZCRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQXpGSTtFQTBGSiwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQWpHRztFQWtHSCxnQkFBQTtBQTNCSjtBQTRCSTtFQUNFLDBCQUFBO0FBMUJOO0FBNEJJO0VBQ0UsMENBQUE7QUExQk47QUE0Qkk7RUFDRSxrQkFBQTtFQUVBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGNBL0dLO0FBb0ZYO0FBeUNFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBbElJO0VBbUlKLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBMUlHO0VBMklILGdCQUFBO0FBdkNKO0FBd0NJO0VBQ0UsMEJBQUE7QUF0Q047QUF5Q0k7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGNBdEpLO0FBK0dYO0FBb0VFO0VBQ0UsV0FyTEk7RUFzTEosOEJBdkxHO0VBd0xILGdCQUFBO0FBbEVKO0FBbUVJO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFqRU4iLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1EYXg6NDAwLDkwMFwiKTtcbiRmb250OiBcIkRheFwiLCBzYW5zLXNlcmlmO1xuJHdoaXRlOiAjZmZmO1xuJHNlbGVjdGVkOiAjZjFiYTNkO1xuJG15U2VsZWN0aW9uOiBncmVlbjtcbmh0bWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubWlkZGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcbiAgICBjb2xvcjogJHdoaXRlO1xuICB9XG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICAmOmNoZWNrZWQge1xuICAgICAgKyAuYm94LXNtYWxsLCArIC5ib3gtbWVkaXVtLCArIC5ib3gtbGFyZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VsZWN0ZWQ7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzVweCk7XG4gICAgICAgICAgLy8gJjpiZWZvcmUge1xuICAgICAgICAgIC8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgLy8gICBvcGFjaXR5OiAxO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgKyAubXktc3F1YXJlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG15U2VsZWN0aW9uO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDM1cHgpO1xuICAgICAgICAgIC8vICY6YmVmb3JlIHtcbiAgICAgICAgICAvLyAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgIC8vICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIC5ib3gtbGFyZ2Uge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZTtcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNpdGlvbjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1mYW1pbHk6ICRmb250O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgJjphY3RpdmUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDExcHggcmdiYSgzMywzMywzMywuMik7XG4gICAgfVxuICAgIHNwYW4ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMzVweCk7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgY29sb3I6ICRzZWxlY3RlZDtcbiAgICAgIC8vICY6YmVmb3JlIHtcbiAgICAgIC8vICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgIC8vICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgICAgLy8gICBkaXNwbGF5OiBibG9jaztcbiAgICAgIC8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04MHB4KTtcbiAgICAgIC8vICAgb3BhY2l0eTogMDtcbiAgICAgIC8vICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xuICAgICAgLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgLy8gICBjb2xvcjogd2hpdGU7XG4gICAgICAvLyB9XG4gICAgfVxuICB9XG5cbiAgLmJveC1tZWRpdW0ge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zaXRpb247XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgICY6YWN0aXZlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMXB4IHJnYmEoMzMsMzMsMzMsLjIpO1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDM1cHgpO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIGNvbG9yOiAkc2VsZWN0ZWQ7XG4gICAgICAvLyAmOmJlZm9yZSB7XG4gICAgICAvLyAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAvLyAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgICAgIC8vICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAvLyAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtODBweCk7XG4gICAgICAvLyAgIG9wYWNpdHk6IDA7XG4gICAgICAvLyAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcbiAgICAgIC8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIC8vICAgY29sb3I6IHdoaXRlO1xuICAgICAgLy8gfVxuICAgIH1cbiAgfVxuXG4gIC5ib3gtc21hbGwsIC5teS1zcXVhcmUge1xuICAgIG1hcmdpbjogMnB4IDRweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlO1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2l0aW9uO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LWZhbWlseTogJGZvbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAmOmFjdGl2ZSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDM1cHgpO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XG4gICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICBjb2xvcjogJHNlbGVjdGVkO1xuICAgICAgLy8gJjpiZWZvcmUge1xuICAgICAgLy8gICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgLy8gICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gICAgICAvLyAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTgwcHgpO1xuICAgICAgLy8gICBvcGFjaXR5OiAwO1xuICAgICAgLy8gICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAvLyAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAvLyAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIC8vIH1cbiAgICB9XG4gIH1cbiAgLy8gLmZyb250LWVuZCB7XG4gIC8vICAgc3BhbiB7XG4gIC8vICAgICAmOmJlZm9yZSB7XG4gIC8vICAgICAgIGNvbnRlbnQ6IFwiXFxmMTIxXCI7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vIC5iYWNrLWVuZCB7XG4gIC8vICAgc3BhbiB7XG4gIC8vICAgICAmOmJlZm9yZSB7XG4gIC8vICAgICAgIGNvbnRlbnQ6IFwiXFxmMGY0XCI7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLyogTWFkZSBieSAqL1xuICBwIHtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAvLyBzcGFuIHtcbiAgICAvLyAgICY6YWZ0ZXIge1xuICAgIC8vICAgICBjb250ZW50OiBcIlxcZjBlN1wiO1xuICAgIC8vICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gICAgLy8gICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map