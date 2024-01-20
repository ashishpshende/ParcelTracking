/* eslint-disable max-len */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, NavigationExtras, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { UserService } from 'src/app/services/user/user.service';
import { KeywordConstants } from 'src/assets/constants/constants';
import { AlertController, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { VehicleService } from 'src/app/services/vehicle/vehicle.service';
import { ScheduleSearch } from 'src/app/models/ScheduleSearch';
import { LanguageService } from 'src/app/services/language/language.service';
import { Vehicle } from 'src/app/models/Vehicle';

@Component({
  selector: 'app-lookup-list',
  templateUrl: './lookup-list.page.html',
  styleUrls: ['./lookup-list.page.scss'],
})
export class LookupListPage implements OnInit {
  public loggedInUser: User;
  public scheduleSearch: ScheduleSearch[];
  public selectedScheduleSearch: ScheduleSearch;
  public skip: number = 0;
  public totalRecords: number = -1;
  public totalPages: number = -1;
  public countPerPage: number = 10;
  public limit: number = this.countPerPage;
  public currentPage: number = 1;
  public pages: number[];
  public showPagination: boolean = false;
  public editUserIcon = '';
  public searchToggle: boolean = false;
  public searchText: string = '';
  public vehicle: Vehicle;
  public allowNext: boolean = false;
  public allowPrev: boolean = false;
  public allowFirst: boolean = false;
  public allowLast: boolean = false;

  constructor(private vehicleService: VehicleService,
    public loaderService: LoaderService,
    private router: Router,
    private localStorageService: LocalStorageService,
    private languageService: LanguageService,
    public alertController: AlertController) {
    this.scheduleSearch = new Array<ScheduleSearch>();
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
      }
    });
  }

  ngOnInit() {
    this.loggedInUser = this.localStorageService.StoredPreference.LoggedInUser;
    this.loadScheduleSearch();
  }

  DeleteSSearch(succes: (any), failure: (any)) {
    this.loaderService.customLoader('Deleting Schedule Search...', 10000);
    this.vehicleService.deleteScheduleSearch(this.selectedScheduleSearch, results => {
      this.loadScheduleSearch();
      this.loaderService.dismissLoader();
    }, error => {
      this.loaderService.dismissLoader();
    });
  }

  //Data loaders
  loadScheduleSearch() {

    this.loaderService.customLoader('Loading Schedule Search...', 50000);

    //if (this.searchText !== '') {
      this.vehicleService.listBykeyword(this.searchText, this.skip, this.limit, async results => {
        this.handleResponse(results);
        this.loaderService.dismissLoader();
      }, error => {

        this.loaderService.dismissLoader();
      });
  }

  deleteSchduleSearch(sSearch: ScheduleSearch){
    this.selectedScheduleSearch = sSearch;
    this.presentAlert(this.languageService.translate('LOOKUP_LIST_PAGE.DELETE_TITLE'), this.languageService.translate('LOOKUP_LIST_PAGE.DELETE_SCHEDULE_SEARCH_MESSAGE'));
  }

  editScheduleSearch(sSearch: ScheduleSearch){
    this.vehicleService.selectedSchduleSearch = sSearch;
    const navigationExtras: NavigationExtras = {
      queryParams: {
        rowIndex: sSearch.rowIndex,
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(['home/update-lookup'], navigationExtras);
  }

  async presentAlert(headerTitle = this.languageService.translate('LOGIN.ERROR_ALERT_TITLE'), message = this.languageService.translate('LOGIN.ERROR_INVALID_CREDENTIALS_MESSAGE')) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: headerTitle,
      subHeader: '',
      message: message,
      buttons: [
        {
          text: this.languageService.translate('BUTTONS.YES'),
          role: 'confirm',
          handler: () => {
            this.deleteScheduleSearch();
          }
        },
        {
          text: this.languageService.translate('BUTTONS.NO'),
          role: 'confirm',
          handler: () => {}
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
  deleteScheduleSearch() {
    this.loaderService.customLoader('Deleting Schedule Search...', 10000);
    this.vehicleService.deleteScheduleSearch(this.selectedScheduleSearch, results => {
      this.loadScheduleSearch();
      this.loaderService.dismissLoader();
    }, error => {
      this.loaderService.dismissLoader();
    });
  }

  handleResponse(response) {
    this.scheduleSearch = new Array<ScheduleSearch>();
    if (response.results.length > 10){
      this.showPagination = true;
    }
    response.results.forEach(element => {
        let vehi = new ScheduleSearch(element);
        this.scheduleSearch.push(vehi);
    });

    this.pages = new Array();

    if(response.totalRecords<10)
    {
      this.allowFirst = false;
      this.allowPrev = false;
      this.allowLast = false;
      this.allowNext = false;
      this.currentPage = 1;
      this.pages.push(1);
    }
    else
    {
      this.totalPages = Math.ceil(response.totalRecords / 10)

      if (this.totalPages > 5) {
        if (this.currentPage === this.totalPages) {
          this.allowFirst = true;
          this.allowPrev = true;
          this.allowLast = false;
          this.allowNext = false;

          this.pages.push(this.currentPage - 2);
          this.pages.push(this.currentPage - 1);
          this.pages.push(this.currentPage);
        }
        else
          if (this.currentPage === 1) {
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
  }

  handleRefresh(ev){
    this.loadScheduleSearch();
    ev.target.complete();
  }
  //Search
  ClearTextButtonClicked() {
    this.searchText = '';
    this.skip=0;
    this.currentPage = 1;
    this.loadScheduleSearch();
  }
  SearchToggleButtonClicked() {
    this.searchToggle = !this.searchToggle;
  }
  FilterButtonClicked() {

  }
  SearchTextButtonClicked() {
    this.skip = 0;
    this.currentPage = 1;
    if (this.searchText !== '')
      this.loadScheduleSearch();
  }




  //Event Handlers
  userSelected(selectedSchSearch: ScheduleSearch) {
    if(selectedSchSearch.Found){
      this.loaderService.customLoader('Loading Vehicle Details...', 10000);
      this.vehicleService.read(selectedSchSearch.VehicleRegistrationNumber.toString(), resp => {
        this.vehicle = new Vehicle(resp.result[0]);
        if(this.vehicle.Registration_Number.length > 0){
          this.vehicleService.selectedVehicle = this.vehicle;
          const navigationExtras: NavigationExtras = {
            queryParams: {
              rowIndex: this.vehicle.rowIndex,
              ts: new Date().getMilliseconds()
            }
          };
          this.router.navigate(['home/vehicle-details'], navigationExtras);
        }
        this.loaderService.dismissLoader();
      }, error => {
        this.loaderService.dismissLoader();
      });
    }

  }

  EditButtonClicked(selectedSchduleSearch) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        rowIndex: selectedSchduleSearch.rowIndex,
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(['home/update-user'], navigationExtras);
  }

  GetIcon(found) {
    if(found){
      return '/assets/icon/greendot.png';
    }
    return '/assets/icon/reddot.png';
  }

  //Click Events
  AddVehicleButtonClicked() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(['home/create-lookup'], navigationExtras);
  }


  //modal
  @ViewChild(IonModal) modal: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  //Pagination
  FirstClicked() {
    this.currentPage = 1;
    this.limit = this.countPerPage;
    this.skip = this.countPerPage * (this.currentPage-1);
    this.loadScheduleSearch();

  }
  PrevClicked() {
    this.currentPage--;
    this.limit = this.countPerPage;
    this.skip = this.countPerPage * (this.currentPage-1);
    this.loadScheduleSearch();
  }
  NextClicked() {
    this.currentPage++;
    this.limit = this.countPerPage;
    this.skip = this.countPerPage * (this.currentPage-1);
    this.loadScheduleSearch();
  }
  LastClicked() {
    this.currentPage = this.totalPages;
    this.limit = this.countPerPage;
    this.skip = this.countPerPage * (this.currentPage - 1);
    this.loadScheduleSearch();
  }
  PageClicked(page) {
    this.currentPage = page;
    this.limit = this.countPerPage;
    this.skip = this.countPerPage * (this.currentPage - 1);
    this.loadScheduleSearch();
  }

}
