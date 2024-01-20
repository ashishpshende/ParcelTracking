"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_private_Vehicles_vehicle-list_vehicle-list_module_ts"],{

/***/ 6633:
/*!************************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/vehicle-list/vehicle-list-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleListPageRoutingModule": () => (/* binding */ VehicleListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _vehicle_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle-list.page */ 5216);




const routes = [
    {
        path: '',
        component: _vehicle_list_page__WEBPACK_IMPORTED_MODULE_0__.VehicleListPage
    }
];
let VehicleListPageRoutingModule = class VehicleListPageRoutingModule {
};
VehicleListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VehicleListPageRoutingModule);



/***/ }),

/***/ 5750:
/*!****************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/vehicle-list/vehicle-list.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleListPageModule": () => (/* binding */ VehicleListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _vehicle_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle-list-routing.module */ 6633);
/* harmony import */ var _vehicle_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicle-list.page */ 5216);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);








let VehicleListPageModule = class VehicleListPageModule {
};
VehicleListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _vehicle_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.VehicleListPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_vehicle_list_page__WEBPACK_IMPORTED_MODULE_1__.VehicleListPage]
    })
], VehicleListPageModule);



/***/ }),

/***/ 5216:
/*!**************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/vehicle-list/vehicle-list.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleListPage": () => (/* binding */ VehicleListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _vehicle_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle-list.page.html?ngResource */ 3780);
/* harmony import */ var _vehicle_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicle-list.page.scss?ngResource */ 9849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_models_SearchFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/SearchFilter */ 3249);
/* harmony import */ var src_app_models_Vehicle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/Vehicle */ 421);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/language/language.service */ 3469);
/* harmony import */ var src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loader/loader.service */ 9744);
/* harmony import */ var src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/vehicle/vehicle.service */ 4093);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/localStorage/local-storage.service */ 8565);













let VehicleListPage = class VehicleListPage {
    constructor(router, vehicleService, userService, localStorageService, languageService, loaderService) {
        this.router = router;
        this.vehicleService = vehicleService;
        this.userService = userService;
        this.localStorageService = localStorageService;
        this.languageService = languageService;
        this.loaderService = loaderService;
        this.showEditButton = false;
        //Pagination
        this.countPerPage = 10;
        this.totalPages = 0;
        this.skip = 0;
        this.totalRecords = -1;
        this.limit = 10;
        this.currentPage = 1;
        this.allowNext = false;
        this.allowPrev = false;
        this.allowFirst = false;
        this.allowLast = false;
        this.pages = new Array();
        this.currentPage = 1;
        this.pages.push(this.currentPage);
        this.vehicles = new Array();
        if (this.vehicleService.searchFilter == null) {
            this.vehicleService.searchFilter = new src_app_models_SearchFilter__WEBPACK_IMPORTED_MODULE_2__.SearchFilter(JSON.parse('{}'));
        }
        this.router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd) {
            }
        });
    }
    ngAfterViewInit() {
        this.loggedInUser = this.localStorageService.StoredPreference.LoggedInUser;
        this.showEditButton = this.loggedInUser.Role !== 'User' ? true : false;
    }
    ionViewDidEnter() {
        this.loadVehicles();
    }
    ngOnInit() {
        let v = new src_app_models_Vehicle__WEBPACK_IMPORTED_MODULE_3__.Vehicle(JSON.parse('{}'));
        v.Icon = 'car-sharp';
        v.Registration_Number = 'Loading Registraion Number...';
        v.Vehicle_Type = 'Loading Vehicle Type...';
        v.Color = 'Loading Color...';
        v.Company = 'Loading Details...';
        this.vehicles.push(v);
    }
    VehicleSelcted(selectedVehicle) {
        this.vehicleService.selectedVehicle = selectedVehicle;
        this.vehicleService.source = 'home/vehicle-list';
        let navigationExtras = {
            queryParams: {
                rowIndex: selectedVehicle.rowIndex,
                ts: new Date().getMilliseconds()
            }
        };
        this.router.navigate(['home/vehicle-details'], navigationExtras);
    }
    EditButtonClicked(selectedVehicle) {
        let navigationExtras = {
            queryParams: {
                rowIndex: selectedVehicle.rowIndex,
                ts: new Date().getMilliseconds()
            }
        };
        this.router.navigate(["home/update-vehicle"], navigationExtras);
    }
    backToSearchPage() {
        let navigationExtras = {
            queryParams: {
                ts: new Date().getMilliseconds()
            }
        };
        this.router.navigate(['home'], navigationExtras);
    }
    loadVehicles() {
        this.loaderService.customLoader('Loading Vehicles...', 10000);
        this.vehicles = new Array();
        this.vehicleService.list(this.skip, this.limit, resp => {
            this.handleResponse(resp);
            this.loaderService.dismissLoader();
        }, error => {
            this.loaderService.dismissLoader();
        });
    }
    //Data Loaders
    GetIcon(vehicleType) {
        switch (vehicleType) {
            case "Two Wheeler":
                return "/assets/icon/two-wheeler.png";
                break;
            case "Three Wheeler":
                return "/assets/icon/three-wheeler.png";
                break;
            case "Four Wheeler":
                return "/assets/icon/four-wheeler.png";
                break;
            case "Bus":
                return "/assets/icon/bus.png";
                break;
            case "Truck":
                return "/assets/icon/truck.png";
                break;
            default:
                return "/assets/icon/four-wheeler.png";
                break;
        }
    }
    handleResponse(response) {
        response.results.forEach(element => {
            var vehicle = new src_app_models_Vehicle__WEBPACK_IMPORTED_MODULE_3__.Vehicle(element);
            try {
                vehicle.Timestamp = (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.formatDate)(vehicle.Timestamp?.toString(), 'dd/MM/yyyy HH:mm:ss', 'en-US', '+0530');
            }
            catch (ex) { }
            this.vehicles.push(vehicle);
        });
        this.totalRecords = response.totalRecords;
        this.pages = new Array();
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
            }
            else if (this.currentPage == 1) {
                this.allowFirst = false;
                this.allowPrev = false;
                this.allowLast = true;
                this.allowNext = true;
                this.pages.push(this.currentPage);
                this.pages.push(this.currentPage + 1);
                this.pages.push(this.currentPage + 2);
            }
            else {
                this.allowFirst = true;
                this.allowPrev = true;
                this.allowLast = true;
                this.allowNext = true;
                this.pages.push(this.currentPage - 1);
                this.pages.push(this.currentPage);
                this.pages.push(this.currentPage + 1);
            }
        }
        else {
            for (let index = 1; index <= this.totalPages; index++) {
                this.pages.push(index);
            }
        }
    }
    //Pagination
    //Pagination
    FirstClicked() {
        this.currentPage = 1;
        this.limit = this.countPerPage;
        this.skip = this.countPerPage * (this.currentPage - 1);
        this.loadVehicles();
    }
    PrevClicked() {
        this.currentPage--;
        this.limit = this.countPerPage;
        this.skip = this.countPerPage * (this.currentPage - 1);
        this.loadVehicles();
    }
    NextClicked() {
        this.currentPage++;
        this.limit = this.countPerPage;
        this.skip = this.countPerPage * (this.currentPage - 1);
        this.loadVehicles();
    }
    LastClicked() {
        this.currentPage = this.totalPages;
        this.limit = this.countPerPage;
        this.skip = this.countPerPage * (this.currentPage - 1);
        this.loadVehicles();
    }
    PageClicked(page) {
        this.currentPage = page;
        this.limit = this.countPerPage;
        this.skip = this.countPerPage * (this.currentPage - 1);
        this.loadVehicles();
    }
};
VehicleListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_6__.VehicleService },
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService },
    { type: src_app_services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_8__.LocalStorageService },
    { type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService },
    { type: src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService }
];
VehicleListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-vehicle-list',
        template: _vehicle_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_vehicle_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VehicleListPage);



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

/***/ 9849:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/vehicle-list/vehicle-list.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ":host ion-content {\n  --background: url(\"/assets/bg20.JPG\") 0 0/100% 100% no-repeat ;\n  background-size: cover;\n  background-color: aliceblue;\n}\n\n.toolbar-backgorund {\n  background-color: aliceblue;\n  color: black;\n}\n\n.user-profile-pic {\n  width: 60px;\n  height: 60px;\n  display: block;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: aliceblue;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  background-color: aliceblue;\n  color: black;\n}\n\nion-item.selected {\n  background-color: aliceblue;\n  color: black;\n}\n\nion-card {\n  color: rgb(44, 29, 29);\n  background-color: aliceblue;\n  padding: 0px;\n  margin: 0px;\n  border-radius: 10px;\n}\n\nion-card-content {\n  background-color: aliceblue;\n  color: rgb(19, 13, 13);\n}\n\n.vehicle-results {\n  background-color: aliceblue;\n}\n\n.vehicle-results-list-header {\n  background-color: aliceblue;\n}\n\n.vehicle-result-cell {\n  background-color: aquamarine;\n  margin-top: 10px;\n}\n\n.search-text-field-list {\n  background-color: transparent;\n}\n\n.list-image {\n  font-size: 50px;\n  color: rgb(31, 7, 7);\n}\n\n.text-center {\n  text-align: center;\n}\n\n.pagination-area {\n  position: fixed;\n  left: 0;\n  bottom: 0px;\n  right: 0;\n  background-color: gray;\n  height: 45px;\n  margin-bottom: 0px;\n}\n\n.pagination-button {\n  border-width: 1px;\n  border-color: #3e2c2c;\n  color: black;\n  font-size: larger;\n  font-weight: 800;\n  border-style: solid;\n}\n\n.selected {\n  background-color: #e9c0c0;\n  color: #645858;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGUtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSyw4REFBQTtFQUdELHNCQUFBO0VBQ0EsMkJBQUE7QUFBUjs7QUFJSTtFQUVFLDJCQUFBO0VBRUEsWUFBQTtBQUhOOztBQUtJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFGTjs7QUFNSTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBRUEsWUFBQTtBQUpOOztBQU9JO0VBQ0UsMkJBQUE7RUFFQSxZQUFBO0FBTE47O0FBT0k7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUpOOztBQU1JO0VBQ0UsMkJBQUE7RUFFQSxzQkFBQTtBQUpOOztBQU1JO0VBRUUsMkJBQUE7QUFKTjs7QUFNSTtFQUVFLDJCQUFBO0FBSk47O0FBTUk7RUFFRSw0QkFBQTtFQUNBLGdCQUFBO0FBSk47O0FBTUk7RUFFRSw2QkFBQTtBQUpOOztBQU1JO0VBRUUsZUFBQTtFQUNBLG9CQUFBO0FBSk47O0FBTUU7RUFDRSxrQkFBQTtBQUhKOztBQUtBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBSUE7RUFFRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUlBO0VBRUUseUJBQUE7RUFDQSxjQUFBO0FBRkYiLCJmaWxlIjoidmVoaWNsZS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGlvbi1jb250ZW50IHtcclxuICAgICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2JnMjAuSlBHXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0IDtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICAgICAgfVxyXG4gIH1cclxuICAgIC50b29sYmFyLWJhY2tnb3J1bmQgIHtcclxuICAgICAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWlvbi1jb2xvci1kYXJrKSwgdmFyKC0taW9uLWNvbG9yLWRhcmspKTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgLnVzZXItcHJvZmlsZS1waWN7XHJcbiAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1ub3RlIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuXHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuXHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICAgIGlvbi1jYXJke1xyXG4gICAgICBjb2xvcjogcmdiKDQ0LCAyOSwgMjkpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcblxyXG4gICAgICBjb2xvcjogcmdiKDE5LCAxMywgMTMpO1xyXG4gICAgfVxyXG4gICAgLnZlaGljbGUtcmVzdWx0c3tcclxuXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIH1cclxuICAgIC52ZWhpY2xlLXJlc3VsdHMtbGlzdC1oZWFkZXJcclxuICAgIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gICAgfVxyXG4gICAgLnZlaGljbGUtcmVzdWx0LWNlbGxcclxuICAgIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtdGV4dC1maWVsZC1saXN0XHJcbiAgICB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgLmxpc3QtaW1hZ2VcclxuICB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgY29sb3I6IHJnYigzMSwgNywgNyk7XHJcbiAgfVxyXG4gIC50ZXh0LWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucGFnaW5hdGlvbi1hcmVhe1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4ucGFnaW5hdGlvbi1idXR0b25cclxue1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGJvcmRlci1jb2xvcjogIzNlMmMyYztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcbi5zZWxlY3RlZFxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5YzBjMDtcclxuICBjb2xvcjogIzY0NTg1ODtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 3780:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/vehicle-list/vehicle-list.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <ion-card class=\"empty-record-card\" *ngIf=\"totalRecords === 0\">\r\n    <ion-card-header class=\"empty-record-card-header\">\r\n      <ion-icon name=\"sad-sharp\" class=\"empty-record-card-icon\"></ion-icon>\r\n    </ion-card-header>\r\n    <ion-card-content class=\"empty-record-card-content\">\r\n      {{'EMPTY_RECORDS.TITLE' | translate}}\r\n      <p>\r\n        {{'EMPTY_RECORDS.SUBTITLE' | translate}}\r\n      </p>\r\n      <p>\r\n\r\n      </p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-list class=\"vehicle-results\" *ngIf=\"totalRecords >= 1\">\r\n    <ion-list-header class=\"vehicle-results-list-header\"> Showing Results skipping {{skip}} records</ion-list-header>\r\n    <ion-item class=\"vehicle-result-cell\" *ngFor=\"let vehicle of vehicles\">\r\n      <ion-avatar slot=\"start\" (click)=\"VehicleSelcted(vehicle)\">\r\n        <!-- <ion-icon class=\"list-image\" [name]=\"vehicle.Icon\"></ion-icon> -->\r\n        <img alt=\"Vehicle\" [src]=\"GetIcon(vehicle.Icon)\" />\r\n      </ion-avatar>\r\n      <ion-label (click)=\"VehicleSelcted(vehicle)\">\r\n        <h2>{{vehicle.Registration_Number}}</h2>\r\n        <h3>{{vehicle.Vehicle_Type}}</h3>\r\n        <p>{{vehicle.Company}} - {{vehicle.Model}} - {{vehicle.Make}} - {{vehicle.Color}}</p>\r\n        <p>IO - {{vehicle.Investigation_Officer_Name}} ({{vehicle.Investigation_Officer_Number}})</p>\r\n        <p><span>TimeStamp: {{vehicle.Timestamp}} </span> </p>\r\n      </ion-label>\r\n      <ion-icon *ngIf=\"showEditButton\" name=\"create-sharp\" slot=\"end\" (click)=\"EditButtonClicked(vehicle)\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"open-space\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer>\r\n  <div  class=\"text-center pagination-area\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col *ngIf=\"allowFirst\" class=\"pagination-button\" (click)=\"FirstClicked()\">\r\n          <<\r\n        </ion-col>\r\n        <ion-col *ngIf=\"allowPrev\" class=\"pagination-button\" (click)=\"PrevClicked()\">\r\n          <\r\n        </ion-col>\r\n        <ion-col *ngFor=\"let page of pages\" class=\"pagination-button\">\r\n          <ion-button [disabled]=\"page===currentPage\" (click)=\"PageClicked(page)\">\r\n            {{page}}\r\n          </ion-button>\r\n\r\n        </ion-col>\r\n        <ion-col  *ngIf=\"allowNext\" class=\"pagination-button\" (click)=\"NextClicked()\">\r\n          >\r\n        </ion-col>\r\n        <ion-col  *ngIf=\"allowLast\" class=\"pagination-button\" (click)=\"LastClicked()\">\r\n          >>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_private_Vehicles_vehicle-list_vehicle-list_module_ts.js.map