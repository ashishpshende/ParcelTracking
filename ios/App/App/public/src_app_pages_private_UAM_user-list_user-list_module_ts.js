"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_private_UAM_user-list_user-list_module_ts"],{

/***/ 8705:
/*!*************************************************************************!*\
  !*** ./src/app/pages/private/UAM/user-list/user-list-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListPageRoutingModule": () => (/* binding */ UserListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _user_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list.page */ 255);




const routes = [
    {
        path: '',
        component: _user_list_page__WEBPACK_IMPORTED_MODULE_0__.UserListPage
    }
];
let UserListPageRoutingModule = class UserListPageRoutingModule {
};
UserListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserListPageRoutingModule);



/***/ }),

/***/ 2794:
/*!*****************************************************************!*\
  !*** ./src/app/pages/private/UAM/user-list/user-list.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListPageModule": () => (/* binding */ UserListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _user_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list-routing.module */ 8705);
/* harmony import */ var _user_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list.page */ 255);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);








let UserListPageModule = class UserListPageModule {
};
UserListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserListPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_user_list_page__WEBPACK_IMPORTED_MODULE_1__.UserListPage]
    })
], UserListPageModule);



/***/ }),

/***/ 255:
/*!***************************************************************!*\
  !*** ./src/app/pages/private/UAM/user-list/user-list.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListPage": () => (/* binding */ UserListPage)
/* harmony export */ });
/* harmony import */ var C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _user_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list.page.html?ngResource */ 5462);
/* harmony import */ var _user_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-list.page.scss?ngResource */ 9311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ 5783);
/* harmony import */ var src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loader/loader.service */ 9744);
/* harmony import */ var src_app_services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/localStorage/local-storage.service */ 8565);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);




/* eslint-disable prefer-arrow/prefer-arrow-functions */








let UserListPage = class UserListPage {
  constructor(userService, loaderService, router, localStorageService) {
    this.userService = userService;
    this.loaderService = loaderService;
    this.router = router;
    this.localStorageService = localStorageService;
    this.skip = 0;
    this.totalRecords = -1;
    this.totalPages = -1;
    this.countPerPage = 10;
    this.limit = this.countPerPage;
    this.currentPage = 1;
    this.showPagination = false;
    this.editUserIcon = '';
    this.searchToggle = false;
    this.searchText = "";
    this.allowNext = false;
    this.allowPrev = false;
    this.allowFirst = false;
    this.allowLast = false;
    this.message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
    this.users = new Array();
    this.router.events.forEach(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd) {}
    });
  }

  ngOnInit() {
    this.loggedInUser = this.localStorageService.StoredPreference.LoggedInUser;
    this.loadusers();
  } //Data loaders


  loadusers() {
    var _this = this;

    this.loaderService.customLoader("Loading Users...", 5000);

    if (this.searchText !== "") {
      this.userService.listBykeyword(this.searchText, this.skip, this.limit, /*#__PURE__*/function () {
        var _ref = (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (results) {
          _this.handleResponse(results);

          _this.loaderService.dismissLoader();
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), error => {
        this.loaderService.dismissLoader();
      });
    } else {
      this.userService.list(this.skip, this.limit, /*#__PURE__*/function () {
        var _ref2 = (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (results) {
          _this.handleResponse(results);

          _this.loaderService.dismissLoader();
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }(), error => {
        this.loaderService.dismissLoader();
      });
    }
  }

  handleResponse(response) {
    this.users = new Array();
    if (response.results.length > 10) this.showPagination = true;
    response.results.forEach(element => {
      let user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__.User(element);

      if (user.UserName !== this.loggedInUser.UserName || user.Email !== this.loggedInUser.Email) {
        user.Icon = "/assets/icon/" + element.Role + ".png";
        this.users.push(user);
      }
    });
    this.pages = new Array();

    if (response.totalRecords < 10) {
      this.allowFirst = false;
      this.allowPrev = false;
      this.allowLast = false;
      this.allowNext = false;
      this.currentPage = 1;
      this.pages.push(1);
    } else {
      this.totalPages = Math.ceil(response.totalRecords / 10);

      if (this.totalPages > 5) {
        if (this.currentPage == this.totalPages) {
          this.allowFirst = true;
          this.allowPrev = true;
          this.allowLast = false;
          this.allowNext = false;
          this.pages.push(this.currentPage - 2);
          this.pages.push(this.currentPage - 1);
          this.pages.push(this.currentPage);
        } else if (this.currentPage == 1) {
          this.allowFirst = false;
          this.allowPrev = false;
          this.allowLast = true;
          this.allowNext = true;
          this.pages.push(this.currentPage);
          this.pages.push(this.currentPage + 1);
          this.pages.push(this.currentPage + 2);
        } else {
          this.allowFirst = true;
          this.allowPrev = true;
          this.allowLast = true;
          this.allowNext = true;
          this.pages.push(this.currentPage - 1);
          this.pages.push(this.currentPage);
          this.pages.push(this.currentPage + 1);
        }
      } else {
        for (let index = 1; index <= this.totalPages; index++) {
          this.pages.push(index);
        }
      }
    }
  }

  handleRefresh(ev) {
    var _this2 = this;

    if (this.searchText !== '') {
      this.userService.listBykeyword(this.searchText, this.skip, this.limit, /*#__PURE__*/function () {
        var _ref3 = (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (results) {
          _this2.handleResponse(results);

          ev.target.complete();
        });

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }(), error => {
        ev.target.complete();
      });
    } else {
      this.userService.list(this.skip, this.limit, /*#__PURE__*/function () {
        var _ref4 = (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (results) {
          _this2.handleResponse(results);

          ev.target.complete();
        });

        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }(), error => {
        ev.target.complete();
      });
    }
  } //Search


  ClearTextButtonClicked() {
    this.searchText = "";
    this.skip = 0;
    this.currentPage = 1;
    this.loadusers();
  }

  SearchToggleButtonClicked() {
    this.searchToggle = !this.searchToggle;
  }

  FilterButtonClicked() {}

  SearchTextButtonClicked() {
    this.skip = 0;
    this.currentPage = 1;
    if (this.searchText != "") this.loadusers();
  } //Event Handlers


  userSelected(selectedUser) {
    this.userService.selectedUser = selectedUser;
    let navigationExtras = {
      queryParams: {
        rowIndex: selectedUser.rowIndex,
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(["home/user-details"], navigationExtras);
  }

  EditButtonClicked(selectedUser) {
    const navigationExtras = {
      queryParams: {
        rowIndex: selectedUser.rowIndex,
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(['home/update-user'], navigationExtras);
  } //Click Events


  AddUserButtonClicked() {
    const navigationExtras = {
      queryParams: {
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(["home/create-user"], navigationExtras);
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event) {
    const ev = event;

    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  } //Pagination


  FirstClicked() {
    this.currentPage = 1;
    this.limit = this.countPerPage;
    this.skip = this.countPerPage * (this.currentPage - 1);
    this.loadusers();
  }

  PrevClicked() {
    this.currentPage--;
    this.limit = this.countPerPage;
    this.skip = this.countPerPage * (this.currentPage - 1);
    this.loadusers();
  }

  NextClicked() {
    this.currentPage++;
    this.limit = this.countPerPage;
    this.skip = this.countPerPage * (this.currentPage - 1);
    this.loadusers();
  }

  LastClicked() {
    this.currentPage = this.totalPages;
    this.limit = this.countPerPage;
    this.skip = this.countPerPage * (this.currentPage - 1);
    this.loadusers();
  }

  PageClicked(page) {
    this.currentPage = page;
    this.limit = this.countPerPage;
    this.skip = this.countPerPage * (this.currentPage - 1);
    this.loadusers();
  }

};

UserListPage.ctorParameters = () => [{
  type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService
}, {
  type: src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: src_app_services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__.LocalStorageService
}];

UserListPage.propDecorators = {
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonModal]
  }]
};
UserListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-user-list',
  template: _user_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_user_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], UserListPage);


/***/ }),

/***/ 9744:
/*!***************************************************!*\
  !*** ./src/app/services/loader/loader.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 3819);



let LoaderService = class LoaderService {
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    // Simple loader
    simpleLoader() {
        this.loadingController.create({
            message: 'Loading...'
        }).then((response) => {
            response.present();
        });
    }
    // Dismiss loader
    dismissLoader() {
        this.loadingController.dismiss().then((response) => {
            console.log('Loader closed!', response);
        }).catch((err) => {
            console.log('Error occured : ', err);
        });
    }
    autoLoader(message, time) {
        this.loadingController.create({
            message: message,
            duration: time
        }).then((response) => {
            response.present();
            response.onDidDismiss().then((response) => {
                console.log('Loader dismissed', response);
            });
        });
    }
    // Custom style + hide on tap loader
    customLoader(message, time) {
        this.loadingController.create({
            message: message,
            duration: time,
            cssClass: 'loader-css-class',
            backdropDismiss: true
        }).then((res) => {
            res.present();
        });
    }
};
LoaderService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.LoadingController }
];
LoaderService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoaderService);



/***/ }),

/***/ 9311:
/*!****************************************************************************!*\
  !*** ./src/app/pages/private/UAM/user-list/user-list.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ":host ion-content {\n  --background: url(\"/assets/bg20.JPG\") 0 0/100% 100% no-repeat;\n  background-size: cover;\n}\n\n.toolbar-backgorund {\n  color: black;\n}\n\n.filter-search-buttons {\n  text-align: center;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: black;\n}\n\nion-item.selected {\n  color: black;\n}\n\nion-card {\n  color: rgb(44, 29, 29);\n  background-color: aquamarine;\n  padding: 0px;\n  margin: 0px;\n  border-radius: 10px;\n}\n\nion-card-content {\n  color: rgb(19, 13, 13);\n}\n\n.user-results {\n  background: transparent;\n}\n\n.user-results-list-header {\n  background-color: rgb(61, 167, 167);\n}\n\n.user-result-cell {\n  margin-top: 10px;\n  border-bottom-width: 1px;\n  border-bottom-color: black;\n  border-bottom-style: groove;\n}\n\n.list-image {\n  font-size: 50px;\n  color: black;\n}\n\n.status-icon {\n  width: 20px;\n  height: 20px;\n}\n\n.search-icon {\n  width: 25px;\n  height: 25px;\n}\n\n.search-text {\n  font-size: x-large;\n  color: gray;\n}\n\n.search-text-field {\n  font-size: larger;\n  color: gray;\n}\n\n.pagination-area {\n  position: fixed;\n  left: 0;\n  bottom: 0px;\n  right: 0;\n  background-color: gray;\n  height: 45px;\n  margin-bottom: 0px;\n}\n\n.pagination-button {\n  border-width: 1px;\n  border-color: #3e2c2c;\n  color: white;\n  font-size: larger;\n  font-weight: 800;\n  border-style: solid;\n  text-align: center;\n}\n\n.selected {\n  background-color: #e9c0c0;\n  color: #645858;\n}\n\n.open-space {\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSw2REFBQTtFQUdBLHNCQUFBO0FBQUo7O0FBSUE7RUFFRSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsWUFBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHNCQUFBO0FBSEY7O0FBTUE7RUFDRSx1QkFBQTtBQUhGOztBQU1BO0VBQ0UsbUNBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFIRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBSkY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFIRjs7QUFLQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQUZGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0YiLCJmaWxlIjoidXNlci1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYmcyMC5KUEdcIikgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuLnRvb2xiYXItYmFja2dvcnVuZCB7XHJcbiAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWlvbi1jb2xvci1kYXJrKSwgdmFyKC0taW9uLWNvbG9yLWRhcmspKTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5maWx0ZXItc2VhcmNoLWJ1dHRvbnMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLW5vdGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIGNvbG9yOiByZ2IoNDQsIDI5LCAyOSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgY29sb3I6IHJnYigxOSwgMTMsIDEzKTtcclxufVxyXG5cclxuLnVzZXItcmVzdWx0cyB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi51c2VyLXJlc3VsdHMtbGlzdC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgMTY3LCAxNjcpO1xyXG59XHJcblxyXG4udXNlci1yZXN1bHQtY2VsbCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZ3Jvb3ZlO1xyXG59XHJcblxyXG4ubGlzdC1pbWFnZSB7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnN0YXR1cy1pY29uIHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcblxyXG59XHJcblxyXG4uc2VhcmNoLWljb24ge1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxufVxyXG4uc2VhcmNoLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG4uc2VhcmNoLXRleHQtZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIGNvbG9yOmdyYXk7XHJcbn1cclxuLnBhZ2luYXRpb24tYXJlYSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbi1idXR0b24ge1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGJvcmRlci1jb2xvcjogIzNlMmMyYztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWMwYzA7XHJcbiAgY29sb3I6ICM2NDU4NTg7XHJcbn1cclxuLm9wZW4tc3BhY2Uge1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 5462:
/*!****************************************************************************!*\
  !*** ./src/app/pages/private/UAM/user-list/user-list.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <ion-refresher slot=\"fixed\" [pullFactor]=\"0.5\" [pullMin]=\"100\" [pullMax]=\"200\" (ionRefresh)=\"handleRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-list class=\"user-results\">\r\n    <ion-item>\r\n      <ion-thumbnail slot=\"start\" (click)=\"AddUserButtonClicked()\">\r\n        <img alt=\"Add User\" src=\"/assets/icon/add_user_icon.png\" />\r\n      </ion-thumbnail>\r\n      <ion-thumbnail slot=\"end\" (click)=\"SearchToggleButtonClicked()\">\r\n        <img alt=\"Search User\" src=\"/assets/icon/search.png\" />\r\n      </ion-thumbnail>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"searchToggle\">\r\n      <ion-input slot=\"start\" type=\"search\" class=\"search-text-field\"  [(ngModel)]=\"searchText\" autocomplete=\"nope\" placeholder=\" {{'USERS_PAGE.SEARCH_BY_NAME' | translate}}\"></ion-input>\r\n      <img slot=\"end\" *ngIf=\"searchText.length!==0\" class=\"search-icon\" src=\"/assets/icon/ClearIcon.png\" (click)=\"ClearTextButtonClicked()\">\r\n      <img slot=\"end\" class=\"search-icon\" src=\"/assets/icon/SearchAction.png\" (click)=\"SearchTextButtonClicked()\">\r\n    </ion-item>\r\n    <ion-list-header class=\"user-results-list-header\"> Showing Results skipping {{skip}} records </ion-list-header>\r\n\r\n    <ion-item class=\"user-result-cell\" *ngFor=\"let user of users\">\r\n      <ion-avatar slot=\"start\" (click)=\"userSelected(user)\">\r\n        <img alt=\"User\" [src]=\"user.Icon\" />\r\n      </ion-avatar>\r\n      <ion-label (click)=\"userSelected(user)\">\r\n        <h2>{{user.FirstName}} {{user.LastName}}</h2>\r\n        <h3>{{user.Uid}} {{user.Role}}</h3>\r\n        <p>{{user.Email}} - {{user.PhoneNumber}}</p>\r\n      </ion-label>\r\n      <img slot=\"end\" class=\"status-icon\" [src]=\"user.StatusIcon\">\r\n      <ion-icon name=\"create-sharp\" slot=\"end\" (click)=\"EditButtonClicked(user)\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"open-space\">\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer>\r\n  <div  class=\"text-center pagination-area\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col *ngIf=\"allowFirst\" class=\"pagination-button\" (click)=\"FirstClicked()\">\r\n          <<\r\n        </ion-col>\r\n        <ion-col *ngIf=\"allowPrev\" class=\"pagination-button\" (click)=\"PrevClicked()\">\r\n          <\r\n        </ion-col>\r\n        <ion-col *ngFor=\"let page of pages\" class=\"pagination-button\">\r\n          <ion-button  [disabled]=\"page==currentPage \"  (click)=\"PageClicked(page)\">\r\n            {{page}}\r\n          </ion-button>\r\n\r\n        </ion-col>\r\n        <ion-col  *ngIf=\"allowNext\" class=\"pagination-button\" (click)=\"NextClicked()\">\r\n          >\r\n        </ion-col>\r\n        <ion-col  *ngIf=\"allowLast\" class=\"pagination-button\" (click)=\"LastClicked()\">\r\n          >>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_private_UAM_user-list_user-list_module_ts.js.map