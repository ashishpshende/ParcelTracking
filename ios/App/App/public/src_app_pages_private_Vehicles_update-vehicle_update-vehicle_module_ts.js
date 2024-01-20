"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_private_Vehicles_update-vehicle_update-vehicle_module_ts"],{

/***/ 5852:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/update-vehicle/update-vehicle-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateVehiclePageRoutingModule": () => (/* binding */ UpdateVehiclePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _update_vehicle_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-vehicle.page */ 424);




const routes = [
    {
        path: '',
        component: _update_vehicle_page__WEBPACK_IMPORTED_MODULE_0__.UpdateVehiclePage
    }
];
let UpdateVehiclePageRoutingModule = class UpdateVehiclePageRoutingModule {
};
UpdateVehiclePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdateVehiclePageRoutingModule);



/***/ }),

/***/ 3078:
/*!********************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/update-vehicle/update-vehicle.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateVehiclePageModule": () => (/* binding */ UpdateVehiclePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _update_vehicle_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-vehicle-routing.module */ 5852);
/* harmony import */ var _update_vehicle_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-vehicle.page */ 424);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);








let UpdateVehiclePageModule = class UpdateVehiclePageModule {
};
UpdateVehiclePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _update_vehicle_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateVehiclePageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_update_vehicle_page__WEBPACK_IMPORTED_MODULE_1__.UpdateVehiclePage]
    })
], UpdateVehiclePageModule);



/***/ }),

/***/ 424:
/*!******************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/update-vehicle/update-vehicle.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateVehiclePage": () => (/* binding */ UpdateVehiclePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _update_vehicle_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-vehicle.page.html?ngResource */ 4821);
/* harmony import */ var _update_vehicle_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-vehicle.page.scss?ngResource */ 5011);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_models_Vehicle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Vehicle */ 421);
/* harmony import */ var src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loader/loader.service */ 9744);
/* harmony import */ var src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/vehicle/vehicle.service */ 4093);








let UpdateVehiclePage = class UpdateVehiclePage {
    constructor(vehicleService, activatedRoute, router, loaderService) {
        this.vehicleService = vehicleService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loaderService = loaderService;
        this.vehicleTypes = [];
        this.vehicleTypes = this.vehicleService.vehicleTypes;
        this.vehicleCategories = this.vehicleService.vehicleCategories;
        this.vehicleCompanies = this.vehicleService.vehicleCompanies;
        this.AllCompanies = this.vehicleService.AllCompanies;
        this.TheftDay = this.vehicleService.TheftDay;
        this.TwoWheelerVehicleCompanies = this.vehicleService.TwoWheelerVehicleCompanies;
        this.ThreeWheelerVehicleCompanies = this.vehicleService.ThreeWheelerVehicleCompanies;
        this.FourWheelerVehicleCompanies = this.vehicleService.FourWheelerVehicleCompanies;
        this.BusVehicleCompanies = this.vehicleService.BusVehicleCompanies;
        this.TruckVehicleCompanies = this.vehicleService.TruckVehicleCompanies;
        this.vehicle = new src_app_models_Vehicle__WEBPACK_IMPORTED_MODULE_2__.Vehicle(JSON.parse("{}"));
    }
    ngAfterViewInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            var rowIndex = Number.parseInt(params["rowIndex"]);
            this.readVehicleDetails(rowIndex);
        });
    }
    ngOnInit() {
    }
    readVehicleDetails(rowIndex) {
        this.loaderService.customLoader("Loading Vehicle Details...", 10000);
        this.vehicleService.readByIndex(rowIndex, resp => {
            this.vehicle = new src_app_models_Vehicle__WEBPACK_IMPORTED_MODULE_2__.Vehicle(resp.result[0]);
            this.loaderService.dismissLoader();
        }, error => {
            this.loaderService.dismissLoader();
        });
    }
    GetIcon(vehicleType) {
        return this.vehicleService.GetIcon(vehicleType);
    }
    UpdateButtonClicked() {
        this.loaderService.customLoader('Updating Vehicle...', 10000);
        this.vehicleService.Update(this.vehicle, resp => {
            this.loaderService.dismissLoader();
            this.goToVehicleDetails();
        }, error => {
            this.loaderService.dismissLoader();
        });
    }
    goToVehicleDetails() {
        let navigationExtras = {
            queryParams: {
                rowIndex: this.vehicle.rowIndex,
                ts: new Date().getMilliseconds()
            }
        };
        this.router.navigate(['home/vehicle-details'], navigationExtras);
    }
    goToVehicleList() {
        let navigationExtras = {
            queryParams: {
                ts: new Date().getMilliseconds()
            }
        };
        this.router.navigate([this.vehicleService.source], navigationExtras);
    }
    vehicleTypeChanged() {
        switch (this.vehicle.Vehicle_Type) {
            case "Two Wheeler":
                this.AllCompanies = this.vehicleService.TwoWheelerVehicleCompanies;
                break;
            case "Three Wheeler":
                this.AllCompanies = this.vehicleService.ThreeWheelerVehicleCompanies;
                break;
            case "Four Wheeler":
                this.AllCompanies = this.vehicleService.FourWheelerVehicleCompanies;
                break;
            case "Bus":
                this.AllCompanies = this.vehicleService.BusVehicleCompanies;
                break;
            case "Truck":
                this.AllCompanies = this.vehicleService.TruckVehicleCompanies;
                break;
            case "Other":
                this.AllCompanies = ["Other"];
                break;
            default:
                this.AllCompanies = this.vehicleService.AllCompanies;
                break;
        }
    }
};
UpdateVehiclePage.ctorParameters = () => [
    { type: src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_4__.VehicleService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService }
];
UpdateVehiclePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-update-vehicle',
        template: _update_vehicle_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_update_vehicle_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UpdateVehiclePage);



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

/***/ 5011:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/update-vehicle/update-vehicle.page.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = ":host ion-content {\n  --background: url(\"/assets/bg20.JPG\") 0 0/100% 100% no-repeat ;\n  background-size: cover;\n  background-color: aliceblue;\n}\n\n.toolbar-backgorund {\n  background-color: aliceblue;\n  color: black;\n}\n\n.user-profile-pic {\n  width: 60px;\n  height: 60px;\n  display: block;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: aliceblue;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  background-color: aliceblue;\n  color: black;\n}\n\nion-select {\n  max-width: 100% !important;\n  width: 100% !important;\n  padding-left: 0 !important;\n}\n\nion-item.selected {\n  background-color: aliceblue;\n  color: black;\n}\n\nion-card {\n  color: rgb(44, 29, 29);\n  background-color: aliceblue;\n  padding: 0px;\n  margin: 0px;\n  border-radius: 10px;\n}\n\nion-card-content {\n  background-color: aliceblue;\n  color: rgb(19, 13, 13);\n}\n\n.vehicle-results {\n  background-color: aliceblue;\n}\n\n.vehicle-results-list-header {\n  background-color: aliceblue;\n}\n\n.vehicle-result-cell {\n  background-color: aquamarine;\n  margin-top: 10px;\n}\n\n.list-image {\n  font-size: 50px;\n  color: rgb(31, 7, 7);\n}\n\n.vehicle-icon {\n  font-size: 50px;\n  color: rgb(31, 7, 7);\n}\n\n.value {\n  font-size: larger;\n  font-weight: 600;\n}\n\n.text-center {\n  text-align: center;\n  align-items: center;\n}\n\n.bottom-area {\n  position: fixed;\n  left: 0;\n  bottom: 0px;\n  right: 0;\n  background-color: gray;\n  height: 45px;\n  margin-bottom: 0px;\n}\n\n.bottom-button {\n  border-width: 1px;\n  border-color: #3e2c2c;\n  color: white;\n  font-size: larger;\n  font-weight: 800;\n  border-style: solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS12ZWhpY2xlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNLLDhEQUFBO0VBR0Qsc0JBQUE7RUFDQSwyQkFBQTtBQUFOOztBQUlFO0VBRUUsMkJBQUE7RUFFQSxZQUFBO0FBSEo7O0FBS0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUZKOztBQU1FO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFFQSxZQUFBO0FBSko7O0FBT0U7RUFDRSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUFKSjs7QUFPRTtFQUNFLDJCQUFBO0VBRUEsWUFBQTtBQUxKOztBQU9FO0VBQ0Usc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFNRTtFQUNFLDJCQUFBO0VBRUEsc0JBQUE7QUFKSjs7QUFNRTtFQUVFLDJCQUFBO0FBSko7O0FBTUU7RUFFRSwyQkFBQTtBQUpKOztBQU1FO0VBRUUsNEJBQUE7RUFDQSxnQkFBQTtBQUpKOztBQU1BO0VBRUksZUFBQTtFQUNBLG9CQUFBO0FBSko7O0FBTUE7RUFFRSxlQUFBO0VBQ0Esb0JBQUE7QUFKRjs7QUFNQTtFQUVFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUhBOztBQUtBO0VBRUEsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFIQSIsImZpbGUiOiJ1cGRhdGUtdmVoaWNsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2JnMjAuSlBHXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0IDtcclxuICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuXHJcbiAgICB9XHJcbn1cclxuICAudG9vbGJhci1iYWNrZ29ydW5kICB7XHJcbiAgICAvLy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0taW9uLWNvbG9yLWRhcmspLCB2YXIoLS1pb24tY29sb3ItZGFyaykpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgLnVzZXItcHJvZmlsZS1waWN7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICB9XHJcblxyXG4gIGlvbi1ub3RlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICBpb24tc2VsZWN0IHtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgaW9uLWNhcmR7XHJcbiAgICBjb2xvcjogcmdiKDQ0LCAyOSwgMjkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICAgIGNvbG9yOiByZ2IoMTksIDEzLCAxMyk7XHJcbiAgfVxyXG4gIC52ZWhpY2xlLXJlc3VsdHN7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gIH1cclxuICAudmVoaWNsZS1yZXN1bHRzLWxpc3QtaGVhZGVyXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gIH1cclxuICAudmVoaWNsZS1yZXN1bHQtY2VsbFxyXG4gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuLmxpc3QtaW1hZ2Vcclxue1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3I6IHJnYigzMSwgNywgNyk7XHJcbn1cclxuLnZlaGljbGUtaWNvblxyXG57XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGNvbG9yOiByZ2IoMzEsIDcsIDcpO1xyXG59XHJcbi52YWx1ZVxyXG57XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3R0b20tYXJlYXtcclxucG9zaXRpb246IGZpeGVkO1xyXG5sZWZ0OiAwO1xyXG5ib3R0b206IDBweDtcclxucmlnaHQ6IDA7XHJcbmJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbmhlaWdodDogNDVweDtcclxubWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5ib3R0b20tYnV0dG9uXHJcbntcclxuYm9yZGVyLXdpZHRoOiAxcHg7XHJcbmJvcmRlci1jb2xvcjogIzNlMmMyYztcclxuY29sb3I6IHdoaXRlO1xyXG5mb250LXNpemU6IGxhcmdlcjtcclxuZm9udC13ZWlnaHQ6IDgwMDtcclxuYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 4821:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/update-vehicle/update-vehicle.page.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content  overflow-scroll=\"true\">\r\n  <ion-card>\r\n    <ion-card-header class=\"text-center\">\r\n      <img alt=\"Vehicle\" style=\"margin-left:100px;width: 70px; height: 70px;\" [src]=\"GetIcon(vehicle.Icon)\" />\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.REGISTRATION_NUMBER' | translate}} </ion-col>\r\n              <!-- <ion-col class=\"value\" size=\"6\"> {{vehicle.Registration_Number}} </ion-col> -->\r\n              <ion-col class=\"value\" size=\"6\">\r\n              <ion-input autocomplete=\"nope\" [(ngModel)]=\"vehicle.Registration_Number\"\r\n              placeholder=\" {{'PARCEL.REGISTRATION_NUMBER' | translate}}\">\r\n            </ion-input>\r\n            </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.PARCEL_TYPE' | translate}} </ion-col>\r\n              <ion-col class=\"value\">\r\n                <ion-select (ionChange)=\"vehicleTypeChanged()\" multiple=\"false\" cancelText=\"Cancel\" okText=\"Select\" [(ngModel)]=\"vehicle.Vehicle_Type\"\r\n                  placeholder=\" {{'PARCEL.PARCEL_TYPE' | translate}}\">\r\n                  <ion-select-option *ngFor=\"let vehicleType of vehicleTypes\" value=\"{{ vehicleType }}\">\r\n                    {{ vehicleType }}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.COMPANY' | translate}} </ion-col>\r\n              <ion-col class=\"value\">\r\n                <ion-select multiple=\"false\" cancelText=\"Cancel\" okText=\"Select\" [(ngModel)]=\"vehicle.Company\"\r\n                  placeholder=\" {{'PARCEL.COMPANY' | translate}}\">\r\n                  <ion-select-option *ngFor=\"let company of AllCompanies\" value=\"{{ company }}\">\r\n                    {{ company }}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.MAKE' | translate}} </ion-col>\r\n              <ion-col class=\"value\">\r\n                <ion-input autocomplete=\"nope\" [(ngModel)]=\"vehicle.Make\"\r\n                placeholder=\" {{'PARCEL.MAKE' | translate}}\">\r\n              </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.MODEL' | translate}} </ion-col>\r\n              <ion-col class=\"value\">\r\n                <ion-input autocomplete=\"nope\" [(ngModel)]=\"vehicle.Model\"\r\n                placeholder=\" {{'PARCEL.MODEL' | translate}}\">\r\n              </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.COLOR' | translate}} </ion-col>\r\n            <ion-col>\r\n              <ion-input autocomplete=\"nope\" [(ngModel)]=\"vehicle.Color\"\r\n              placeholder=\" {{'PARCEL.COLOR' | translate}}\">\r\n              </ion-input>\r\n          </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-item>\r\n        <ion-icon name='storefront-outline' slot=\"start\"></ion-icon>\r\n        {{'PARCEL.POLICE_STATION_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.NAME_OF_POLICE_STATION' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\">\r\n                <ion-input autocomplete=\"nope\" [(ngModel)]=\"vehicle.Name_Of_Police_Station\"\r\n                  placeholder=\" {{'PARCEL.NAME_OF_POLICE_STATION' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.INVESTIGATION_OFFICER_NAME' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\">\r\n                <ion-input autocomplete=\"nope\" [(ngModel)]=\"vehicle.Investigation_Officer_Name\"\r\n                  placeholder=\" {{'PARCEL.INVESTIGATION_OFFICER_NAME' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.INVESTIGATION_OFFICER_NUMBER' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\">\r\n                <ion-input autocomplete=\"nope\" [(ngModel)]=\"vehicle.Investigation_Officer_Number\"\r\n                  placeholder=\" {{'PARCEL.INVESTIGATION_OFFICER_NUMBER' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-item>\r\n        <ion-icon name='cog-outline' slot=\"start\"></ion-icon>\r\n        {{'PARCEL.ENGINE_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.ENGINE_NUMNER' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\">\r\n                <ion-input autocomplete=\"nope\" [(ngModel)]=\"vehicle.Engine_Number\"\r\n                  placeholder=\" {{'PARCEL.ENGINE_NUMNER' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.CHASSIS_NUMBER' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\">\r\n                <ion-input autocomplete=\"nope\" [(ngModel)]=\"vehicle.ChassisNumber\"\r\n                  placeholder=\" {{'PARCEL.CHASSIS_NUMBER' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-item>\r\n        <ion-icon name='options-outline' slot=\"start\"></ion-icon>\r\n        {{'PARCEL.THEFT_SEIZE_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.CR_NUMBER_SECTION' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\">\r\n                <ion-input autocomplete=\"nope\" [(ngModel)]=\"vehicle.CR_Number_Section\"\r\n                  placeholder=\" {{'PARCEL.CR_NUMBER_SECTION' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.DATE_TIME_OF_THEFT' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\">\r\n                <ion-select multiple=\"false\" cancelText=\"Cancel\" okText=\"Select\" [(ngModel)]=\"vehicle.Date_Time_of_Theft\"\r\n                  placeholder=\" {{'PARCEL.DATE_TIME_OF_THEFT' | translate}}\">\r\n                  <ion-select-option *ngFor=\"let dayString of TheftDay\" value=\"{{ dayString }}\">\r\n                    {{ dayString }}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <!-- <ion-input autocomplete=\"nope\" [(ngModel)]=\"vehicle.Date_Time_of_Theft\"\r\n                  placeholder=\" {{'PARCEL.DATE_TIME_OF_THEFT' | translate}}\">\r\n                </ion-input> -->\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.LOCATION_OF_THEFT_SEIZER' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\">\r\n                <ion-input autocomplete=\"nope\" [(ngModel)]=\"vehicle.Location_oF_Theft_Seizer\"\r\n                  placeholder=\" {{'PARCEL.LOCATION_OF_THEFT_SEIZER' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.CATEGORY' | translate}} </ion-col>\r\n              <ion-col class=\"value\">\r\n                <ion-select multiple=\"false\" cancelText=\"Cancel\" okText=\"Select\" [(ngModel)]=\"vehicle.Category\"\r\n                  placeholder=\" {{'PARCEL.CATEGORY' | translate}}\">\r\n                  <ion-select-option *ngFor=\"let category of vehicleCategories\" value=\"{{ category }}\">\r\n                    {{ category }}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-item>\r\n        <ion-icon name='options-outline' slot=\"start\"></ion-icon>\r\n        {{'PARCEL.OTHER_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.COMMENTS' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\">\r\n                <ion-input autocomplete=\"nope\" [(ngModel)]=\"vehicle.Comments\"\r\n                  placeholder=\" {{'PARCEL.COMMENTS' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.COMPLAINENT' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\">\r\n                <ion-input autocomplete=\"nope\" [(ngModel)]=\"vehicle.Vehicle_owner_complainant\"\r\n                  placeholder=\" {{'PARCEL.COMPLAINENT' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-item>\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button  expand=\"block\" (click)=\"goToVehicleList()\">\r\n    <ion-icon slot=\"start\" name=\"close\"></ion-icon>\r\n    {{'BUTTONS.CANCEL' | translate}}\r\n  </ion-button>\r\n  <ion-button expand=\"block\" (click)=\"UpdateButtonClicked()\">\r\n    <ion-icon slot=\"start\" name=\"create\"></ion-icon>\r\n    {{'BUTTONS.UPDATE' | translate}}\r\n  </ion-button>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_private_Vehicles_update-vehicle_update-vehicle_module_ts.js.map