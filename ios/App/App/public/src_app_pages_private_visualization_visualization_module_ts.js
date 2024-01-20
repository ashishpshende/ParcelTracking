"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_private_visualization_visualization_module_ts"],{

/***/ 4184:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/private/visualization/visualization-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisualizationPageRoutingModule": () => (/* binding */ VisualizationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _visualization_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visualization.page */ 5620);




const routes = [
    {
        path: '',
        component: _visualization_page__WEBPACK_IMPORTED_MODULE_0__.VisualizationPage
    }
];
let VisualizationPageRoutingModule = class VisualizationPageRoutingModule {
};
VisualizationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VisualizationPageRoutingModule);



/***/ }),

/***/ 44:
/*!*********************************************************************!*\
  !*** ./src/app/pages/private/visualization/visualization.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisualizationPageModule": () => (/* binding */ VisualizationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _visualization_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visualization-routing.module */ 4184);
/* harmony import */ var _visualization_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visualization.page */ 5620);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-apexcharts */ 3239);









let VisualizationPageModule = class VisualizationPageModule {
};
VisualizationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _visualization_routing_module__WEBPACK_IMPORTED_MODULE_0__.VisualizationPageRoutingModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__.NgApexchartsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild()
        ],
        declarations: [_visualization_page__WEBPACK_IMPORTED_MODULE_1__.VisualizationPage]
    })
], VisualizationPageModule);



/***/ }),

/***/ 5620:
/*!*******************************************************************!*\
  !*** ./src/app/pages/private/visualization/visualization.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisualizationPage": () => (/* binding */ VisualizationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _visualization_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visualization.page.html?ngResource */ 3755);
/* harmony import */ var _visualization_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visualization.page.scss?ngResource */ 3208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loader/loader.service */ 9744);
/* harmony import */ var src_app_services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/localStorage/local-storage.service */ 8565);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_visualization_visualization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/visualization/visualization.service */ 8097);



/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable prefer-arrow/prefer-arrow-functions */







let VisualizationPage = class VisualizationPage {
    constructor(userService, visualizationService, loaderService, router, localStorageService) {
        this.userService = userService;
        this.visualizationService = visualizationService;
        this.loaderService = loaderService;
        this.router = router;
        this.localStorageService = localStorageService;
        this.message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
        this.users = new Array();
        this.router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd) {
            }
        });
        this.showChart = false;
        //this.pieChart();
    }
    ngOnInit() {
        this.loggedInUser = this.localStorageService.StoredPreference.LoggedInUser;
    }
    ngAfterViewInit() {
        this.showBy = this.visualizationService.showBy;
    }
    showByChanged() {
        this.loaderService.customLoader('Loading Visualization...', 90000);
        this.visualizationService.loadVisualization(this.selectedItem, resp => {
            this.showChart = true;
            this.label = resp.labels;
            this.series = resp.series;
            this.pieChart();
            this.loaderService.dismissLoader();
        }, error => {
            this.loaderService.dismissLoader();
        });
    }
    setShowByFields() {
        this.loaderService.customLoader('Loading Show by fields...', 10000);
        this.visualizationService.loadVisualization(this.selectedItem, resp => {
            this.showBy = this.visualizationService.showBy;
            this.loaderService.dismissLoader();
        }, error => {
            this.loaderService.dismissLoader();
        });
    }
    pieChart() {
        this.chartOptions = {
            series: this.series,
            chart: {
                width: 400,
                type: 'pie'
            },
            labels: this.label,
            title: {
                text: 'Vehicles Statistics',
                align: 'center'
            },
            fill: {
                type: 'gradient'
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '100%'
                    }
                }
            },
            responsive: [
                {
                    breakpoint: 500,
                    options: {
                        chart: {
                            width: 400
                        },
                        legend: {
                            position: 'bottom',
                            floating: false,
                            horizontalAlign: 'center'
                        }
                    }
                }
            ]
        };
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
    }
    handleRefresh(ev) {
        if (this.selectedItem !== undefined && this.selectedItem !== '') {
            this.visualizationService.loadVisualization(this.selectedItem, resp => {
                this.showChart = true;
                this.label = resp.labels;
                this.series = resp.series;
                this.pieChart();
                ev.target.complete();
            }, error => {
                ev.target.complete();
            });
        }
        else {
            ev.target.complete();
        }
    }
};
VisualizationPage.ctorParameters = () => [
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_services_visualization_visualization_service__WEBPACK_IMPORTED_MODULE_5__.VisualizationService },
    { type: src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService }
];
VisualizationPage.propDecorators = {
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['chart',] }],
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonModal,] }]
};
VisualizationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-visualization',
        template: _visualization_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_visualization_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VisualizationPage);



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

/***/ 3208:
/*!********************************************************************************!*\
  !*** ./src/app/pages/private/visualization/visualization.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: url(\"/assets/bg20.JPG\") 0 0/100% 100% no-repeat ;\n  background-size: cover;\n  background-color: aliceblue;\n}\n\n.bgWhite {\n  background-color: white;\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.box {\n  margin: 15px;\n  padding: 20px 15px;\n  box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.08);\n  background-color: #b7bdf3;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  text-shadow: 0 1px 1px 1px #666;\n  position: relative;\n  border-radius: 5px;\n}\n\n.box .details {\n  position: absolute;\n  color: #fff;\n  transform: scale(0.8) translate(-10px, 35px);\n}\n\n.box .details h1,\n.box .details h2 {\n  font-weight: 600;\n  margin: 5px;\n}\n\n.box1 {\n  background-image: linear-gradient(135deg, #ffd3a5 10%, #fd6585 100%);\n}\n\n.box3 {\n  padding: 0;\n  padding-top: 5px;\n}\n\nion-select {\n  max-width: 100% !important;\n  width: 100% !important;\n  padding-left: 0 !important;\n}\n\n:host ion-content {\n  --background: url(\"/assets/bg20.JPG\") 0 0/100% 100% no-repeat;\n  background-size: cover;\n}\n\n.toolbar-backgorund {\n  color: black;\n}\n\n.filter-search-buttons {\n  text-align: center;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: black;\n}\n\nion-item.selected {\n  color: black;\n}\n\nion-card {\n  color: rgb(44, 29, 29);\n  background-color: aquamarine;\n  padding: 0px;\n  margin: 0px;\n  border-radius: 10px;\n}\n\nion-card-content {\n  color: rgb(19, 13, 13);\n}\n\n.user-results {\n  background: transparent;\n}\n\n.user-results-list-header {\n  background-color: rgb(61, 167, 167);\n}\n\n.user-result-cell {\n  margin-top: 10px;\n  border-bottom-width: 1px;\n  border-bottom-color: black;\n  border-bottom-style: groove;\n}\n\n.list-image {\n  font-size: 50px;\n  color: black;\n}\n\n.status-icon {\n  width: 20px;\n  height: 20px;\n}\n\n.search-icon {\n  width: 25px;\n  height: 25px;\n}\n\n.search-text {\n  font-size: x-large;\n  color: gray;\n}\n\n.search-text-field {\n  font-size: larger;\n  color: gray;\n}\n\n.pagination-area {\n  position: fixed;\n  left: 0;\n  bottom: 0px;\n  right: 0;\n  background-color: gray;\n  height: 45px;\n  margin-bottom: 0px;\n}\n\n.pagination-button {\n  border-width: 1px;\n  border-color: #3e2c2c;\n  color: white;\n  font-size: larger;\n  font-weight: 800;\n  border-style: solid;\n  text-align: center;\n}\n\n.selected {\n  background-color: #e9c0c0;\n  color: #645858;\n}\n\n.open-space {\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc3VhbGl6YXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOERBQUE7RUFHTSxzQkFBQTtFQUNBLDJCQUFBO0FBQ1I7O0FBQ0E7RUFDRSx1QkFBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1EQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtBQUlKOztBQUZJOztFQUVFLGdCQUFBO0VBQ0EsV0FBQTtBQUlOOztBQUNBO0VBQ0Usb0VBQUE7QUFFRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBR0Y7O0FBQUU7RUFDRSw2REFBQTtFQUdBLHNCQUFBO0FBR0o7O0FBQ0E7RUFFRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsWUFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsbUNBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFBRjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBREY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFHRjs7QUFEQTtFQUNFLG1CQUFBO0FBSUYiLCJmaWxlIjoidmlzdWFsaXphdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2JnMjAuSlBHXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0IDtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG59XHJcbi5iZ1doaXRle1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4uYm94IHtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgcGFkZGluZzogMjBweCAxNXB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTVweCAxcHggcmdiYSg2OSwgNjUsIDc4LCAwLjA4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjdiZGYzO1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IDFweCAjNjY2O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gIC5kZXRhaWxzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpIHRyYW5zbGF0ZSgtMTBweCwgMzVweCk7XHJcblxyXG4gICAgaDEsXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJveDEge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmQzYTUgMTAlLCAjZmQ2NTg1IDEwMCUpO1xyXG59XHJcblxyXG4uYm94MyB7XHJcbiAgcGFkZGluZzogMDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbmlvbi1zZWxlY3Qge1xyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3Qge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9iZzIwLkpQR1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4udG9vbGJhci1iYWNrZ29ydW5kIHtcclxuICAvLy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0taW9uLWNvbG9yLWRhcmspLCB2YXIoLS1pb24tY29sb3ItZGFyaykpO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmZpbHRlci1zZWFyY2gtYnV0dG9ucyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tbm90ZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgY29sb3I6IHJnYig0NCwgMjksIDI5KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW46IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICBjb2xvcjogcmdiKDE5LCAxMywgMTMpO1xyXG59XHJcblxyXG4udXNlci1yZXN1bHRzIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnVzZXItcmVzdWx0cy1saXN0LWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYxLCAxNjcsIDE2Nyk7XHJcbn1cclxuXHJcbi51c2VyLXJlc3VsdC1jZWxsIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBncm9vdmU7XHJcbn1cclxuXHJcbi5saXN0LWltYWdlIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uc3RhdHVzLWljb24ge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuXHJcbn1cclxuXHJcbi5zZWFyY2gtaWNvbiB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcbi5zZWFyY2gtdGV4dCB7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcbi5zZWFyY2gtdGV4dC1maWVsZCB7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgY29sb3I6Z3JheTtcclxufVxyXG4ucGFnaW5hdGlvbi1hcmVhIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDBweDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIGhlaWdodDogNDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uLWJ1dHRvbiB7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjM2UyYzJjO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5YzBjMDtcclxuICBjb2xvcjogIzY0NTg1ODtcclxufVxyXG4ub3Blbi1zcGFjZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 3755:
/*!********************************************************************************!*\
  !*** ./src/app/pages/private/visualization/visualization.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\r\n  <ion-refresher slot=\"fixed\" [pullFactor]=\"0.5\" [pullMin]=\"100\" [pullMax]=\"200\" (ionRefresh)=\"handleRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n    <ion-item>\r\n      <ion-select  (ionChange)=\"showByChanged()\" multiple=\"false\" cancelText=\"Cancel\" okText=\"Select\"  [(ngModel)]=\"selectedItem\"  placeholder=\" {{'REPORTS.SHOW_BY' | translate}}\">\r\n        <ion-select-option *ngFor=\"let strItem of showBy\"\r\n        value=\"{{ strItem }}\">\r\n          {{ strItem }}\r\n          </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <div class=\"center\">\r\n      <apx-chart *ngIf=\"showChart\" class=\"box box3\"\r\n        [chart]=\"chartOptions.chart\"\r\n        [series]=\"chartOptions.series\"\r\n        [labels]=\"chartOptions.labels\"\r\n        [fill]=\"chartOptions.labels\"\r\n        [responsive]=\"chartOptions.responsive\"\r\n      ></apx-chart>\r\n    </div>\r\n\r\n    <div class=\"center\">\r\n      <ion-item>\r\n        <ion-label class=\"ion-text-wrap\">{{'REPORTS.NOTE' | translate}}</ion-label>\r\n      </ion-item>\r\n    </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_private_visualization_visualization_module_ts.js.map