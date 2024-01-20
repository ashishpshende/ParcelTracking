"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_private_Vehicles_vehicle-details_vehicle-details_module_ts"],{

/***/ 1757:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/vehicle-details/vehicle-details-routing.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleDetailsPageRoutingModule": () => (/* binding */ VehicleDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _vehicle_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle-details.page */ 5886);




const routes = [
    {
        path: '',
        component: _vehicle_details_page__WEBPACK_IMPORTED_MODULE_0__.VehicleDetailsPage
    }
];
let VehicleDetailsPageRoutingModule = class VehicleDetailsPageRoutingModule {
};
VehicleDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VehicleDetailsPageRoutingModule);



/***/ }),

/***/ 5323:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/vehicle-details/vehicle-details.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleDetailsPageModule": () => (/* binding */ VehicleDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _vehicle_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle-details-routing.module */ 1757);
/* harmony import */ var _vehicle_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicle-details.page */ 5886);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);








let VehicleDetailsPageModule = class VehicleDetailsPageModule {
};
VehicleDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _vehicle_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.VehicleDetailsPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_vehicle_details_page__WEBPACK_IMPORTED_MODULE_1__.VehicleDetailsPage]
    })
], VehicleDetailsPageModule);



/***/ }),

/***/ 5886:
/*!********************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/vehicle-details/vehicle-details.page.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleDetailsPage": () => (/* binding */ VehicleDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _vehicle_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle-details.page.html?ngResource */ 8032);
/* harmony import */ var _vehicle_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicle-details.page.scss?ngResource */ 6129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_models_Vehicle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Vehicle */ 421);
/* harmony import */ var src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loader/loader.service */ 9744);
/* harmony import */ var src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/vehicle/vehicle.service */ 4093);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ 5783);
/* harmony import */ var src_app_services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/localStorage/local-storage.service */ 8565);










let VehicleDetailsPage = class VehicleDetailsPage {
    constructor(vehicleService, activatedRoute, localStorageService, router, loaderService) {
        this.vehicleService = vehicleService;
        this.activatedRoute = activatedRoute;
        this.localStorageService = localStorageService;
        this.router = router;
        this.loaderService = loaderService;
        this.showEditButton = false;
        this.showEditButton = false;
        this.loggedInUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__.User(JSON.parse("{}"));
        this.vehicle = new src_app_models_Vehicle__WEBPACK_IMPORTED_MODULE_2__.Vehicle(JSON.parse("{}"));
        this.loggedInUser = this.localStorageService.StoredPreference.LoggedInUser;
        this.showEditButton = this.loggedInUser.Role !== 'User' ? true : false;
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
    EditButtonClicked() {
        let navigationExtras = {
            queryParams: {
                rowIndex: this.vehicle.rowIndex,
                ts: new Date().getMilliseconds()
            }
        };
        this.router.navigate(["home/update-vehicle"], navigationExtras);
    }
    goToVehicleList() {
        let navigationExtras = {
            queryParams: {
                ts: new Date().getMilliseconds()
            }
        };
        this.router.navigate([this.vehicleService.source], navigationExtras);
    }
    GetIcon(vehicleType) {
        return this.vehicleService.GetIcon(vehicleType);
    }
};
VehicleDetailsPage.ctorParameters = () => [
    { type: src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_4__.VehicleService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__.LocalStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService }
];
VehicleDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-vehicle-details',
        template: _vehicle_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_vehicle_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VehicleDetailsPage);



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

/***/ 6129:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/vehicle-details/vehicle-details.page.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = ":host ion-content {\n  --background: url(\"/assets/bg20.JPG\") 0 0/100% 100% no-repeat ;\n  background-size: cover;\n  background-color: aliceblue;\n}\n\n.toolbar-backgorund {\n  background-color: aliceblue;\n  color: black;\n}\n\n.user-profile-pic {\n  width: 60px;\n  height: 60px;\n  display: block;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: aliceblue;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  background-color: aliceblue;\n  color: black;\n}\n\nion-item.selected {\n  background-color: aliceblue;\n  color: black;\n}\n\nion-card {\n  color: rgb(44, 29, 29);\n  background-color: aliceblue;\n  padding: 0px;\n  margin: 0px;\n  border-radius: 10px;\n}\n\nion-card-content {\n  background-color: aliceblue;\n  color: rgb(19, 13, 13);\n}\n\n.vehicle-results {\n  background-color: aliceblue;\n}\n\n.vehicle-results-list-header {\n  background-color: aliceblue;\n}\n\n.vehicle-result-cell {\n  background-color: aquamarine;\n  margin-top: 10px;\n}\n\n.list-image {\n  font-size: 50px;\n  color: rgb(31, 7, 7);\n}\n\n.vehicle-icon {\n  font-size: 50px;\n  color: rgb(31, 7, 7);\n}\n\n.value {\n  font-size: larger;\n  font-weight: 600;\n}\n\n.text-center {\n  text-align: center;\n  align-items: center;\n}\n\n.bottom-area {\n  position: fixed;\n  left: 0;\n  bottom: 0px;\n  right: 0;\n  background-color: gray;\n  height: 45px;\n  margin-bottom: 0px;\n}\n\n.bottom-button {\n  border-width: 1px;\n  border-color: #3e2c2c;\n  color: white;\n  font-size: larger;\n  font-weight: 800;\n  border-style: solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGUtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSyw4REFBQTtFQUdELHNCQUFBO0VBQ0EsMkJBQUE7QUFBUjs7QUFJSTtFQUVFLDJCQUFBO0VBRUEsWUFBQTtBQUhOOztBQUtJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFGTjs7QUFNSTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBRUEsWUFBQTtBQUpOOztBQU9JO0VBQ0UsMkJBQUE7RUFFQSxZQUFBO0FBTE47O0FBT0k7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUpOOztBQU1JO0VBQ0UsMkJBQUE7RUFFQSxzQkFBQTtBQUpOOztBQU1JO0VBRUUsMkJBQUE7QUFKTjs7QUFNSTtFQUVFLDJCQUFBO0FBSk47O0FBTUk7RUFFRSw0QkFBQTtFQUNBLGdCQUFBO0FBSk47O0FBTUU7RUFFSSxlQUFBO0VBQ0Esb0JBQUE7QUFKTjs7QUFNRTtFQUVFLGVBQUE7RUFDQSxvQkFBQTtBQUpKOztBQU1FO0VBRUUsaUJBQUE7RUFDQSxnQkFBQTtBQUpKOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBS0E7RUFFRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUhGIiwiZmlsZSI6InZlaGljbGUtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgICAgIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9iZzIwLkpQR1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCA7IFxyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBcclxuICAgICAgfVxyXG4gIH1cclxuICAgIC50b29sYmFyLWJhY2tnb3J1bmQgIHtcclxuICAgICAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWlvbi1jb2xvci1kYXJrKSwgdmFyKC0taW9uLWNvbG9yLWRhcmspKTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gICAgXHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICAgIC51c2VyLXByb2ZpbGUtcGlje1xyXG4gICAgICB3aWR0aDogNjBweDtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1ub3RlIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIFxyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gICAgXHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICAgIGlvbi1jYXJke1xyXG4gICAgICBjb2xvcjogcmdiKDQ0LCAyOSwgMjkpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcblxyXG4gICAgICBjb2xvcjogcmdiKDE5LCAxMywgMTMpO1xyXG4gICAgfVxyXG4gICAgLnZlaGljbGUtcmVzdWx0c3tcclxuXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIH1cclxuICAgIC52ZWhpY2xlLXJlc3VsdHMtbGlzdC1oZWFkZXJcclxuICAgIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gICAgfVxyXG4gICAgLnZlaGljbGUtcmVzdWx0LWNlbGxcclxuICAgIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAubGlzdC1pbWFnZVxyXG4gIHtcclxuICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICBjb2xvcjogcmdiKDMxLCA3LCA3KTtcclxuICB9XHJcbiAgLnZlaGljbGUtaWNvblxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGNvbG9yOiByZ2IoMzEsIDcsIDcpO1xyXG4gIH1cclxuICAudmFsdWVcclxuICB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIC50ZXh0LWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3R0b20tYXJlYXtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDBweDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIGhlaWdodDogNDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmJvdHRvbS1idXR0b25cclxue1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGJvcmRlci1jb2xvcjogIzNlMmMyYztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59Il19 */";

/***/ }),

/***/ 8032:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/vehicle-details/vehicle-details.page.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content> \r\n\r\n  <ion-card>\r\n    <ion-card-header class=\"text-center\">\r\n\r\n      <!-- <ion-icon class=\"vehicle-icon\" [name]=\"vehicle.Icon\"></ion-icon> -->\r\n      <img alt=\"Vehicle\" style=\"width: 70px; height: 70px;\" [src]=\"GetIcon(vehicle.Icon)\" />\r\n\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.REGISTRATION_NUMBER' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{vehicle.Registration_Number}}</ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.PARCEL_TYPE' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{vehicle.Vehicle_Type}}</ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.COMPANY' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{vehicle.Company}}</ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.MAKE' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{vehicle.Make}}</ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.MODEL' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{vehicle.Model}}</ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.COLOR' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{vehicle.Color}} </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-item>\r\n        <ion-icon name='storefront-outline' slot=\"start\"></ion-icon>\r\n\r\n        {{'PARCEL.POLICE_STATION_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.NAME_OF_POLICE_STATION' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{vehicle.Name_Of_Police_Station}} </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.INVESTIGATION_OFFICER_NAME' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{vehicle.Investigation_Officer_Name}} </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.INVESTIGATION_OFFICER_NUMBER' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{vehicle.Investigation_Officer_Number}}</ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-item>\r\n        <ion-icon name='cog-outline' slot=\"start\"></ion-icon>\r\n        {{'PARCEL.ENGINE_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.ENGINE_NUMNER' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{vehicle.Engine_Number}} </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.CHASSIS_NUMBER' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{vehicle.ChassisNumber}} </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-item>\r\n        <ion-icon name='options-outline' slot=\"start\"></ion-icon>\r\n        {{'PARCEL.THEFT_SEIZE_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.CR_NUMBER_SECTION' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{vehicle.CR_Number_Section}} </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.DATE_TIME_OF_THEFT' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{vehicle.Date_Time_of_Theft}} </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.LOCATION_OF_THEFT_SEIZER' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{vehicle.Location_oF_Theft_Seizer}}</ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.CATEGORY' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{vehicle.Category}} </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-item>\r\n        <ion-icon name='options-outline' slot=\"start\"></ion-icon>\r\n        {{'PARCEL.OTHER_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.COMMENTS' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{vehicle.Comments}} </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'PARCEL.COMPLAINENT' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{vehicle.Vehicle_owner_complainant}} </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-item>\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-button expand=\"block\" (click)=\"goToVehicleList()\">\r\n    <ion-icon slot=\"start\" name=\"close\"></ion-icon>\r\n    {{'BUTTONS.CANCEL' | translate}}\r\n  </ion-button>\r\n  <ion-button *ngIf=\"showEditButton\" expand=\"block\" (click)=\"EditButtonClicked()\" >\r\n    <ion-icon slot=\"start\" name=\"create\"></ion-icon>\r\n    {{'BUTTONS.EDIT' | translate}}\r\n  </ion-button>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_private_Vehicles_vehicle-details_vehicle-details_module_ts.js.map