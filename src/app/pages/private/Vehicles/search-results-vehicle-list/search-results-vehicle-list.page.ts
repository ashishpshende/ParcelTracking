/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-cond-assign */
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { AlertController, ViewDidEnter } from '@ionic/angular';
import { SearchFilter } from 'src/app/models/SearchFilter';
import { Vehicle } from 'src/app/models/Vehicle';
import { LanguageService } from 'src/app/services/language/language.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { VehicleService } from 'src/app/services/vehicle/vehicle.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';

@Component({
  selector: 'app-search-results-vehicle-list',
  templateUrl: './search-results-vehicle-list.page.html',
  styleUrls: ['./search-results-vehicle-list.page.scss'],
})


export class SearchResultsVehicleListPage implements OnInit, ViewDidEnter {
  public _limit= 10;
  public loggedInUser: User;
  public vehicles: Vehicle[];
  public totalRecords = -1;
  public currentPage = 1;
  public itemPerPage = 10;
  public _skip = 0;
  public pages: number[];
  public allowClose = false;
  public allowNext = false;
  public allowPrev = false;
  public allowFirst = false;
  public allowLast = false;
  public showEditButton = false;
  public countPerPage = 10;
  public totalPages = 0;

  constructor(
    private router: Router,
    private vehicleService: VehicleService,
    private localStorageService: LocalStorageService,
    public loaderService: LoaderService,
    private userService: UserService) {

    this.showEditButton = false;
    this.pages = new Array<number>();

    this.currentPage = 1;
    this.pages.push(this.currentPage);
    this.itemPerPage = 10;
    this.limit = 10;
    this.skip = 0;


    this.vehicleService.searchFilter.skip = this.skip;
    this.vehicleService.searchFilter.limit = this.limit;
    this.vehicles = new Array<Vehicle>();
    if (this.vehicleService.searchFilter == null) {
      this.vehicleService.searchFilter = new SearchFilter(JSON.parse('{}'));
    }
  }

  public get skip(){
    return this._skip;
  }

  public set skip(value: number){
    this._skip = value;
    this.vehicleService.searchFilter.skip = value;
  }

  public get limit(){
    return this._limit;
  }

  public set limit(value: number){
    this._limit = value;
    this.vehicleService.searchFilter.limit = value;
  }

  ionViewDidEnter(): void {
    this.loadData();
  }
  loadData() {

    this.searchByFilterVehicles();

  }
  ngOnInit() {
    this.vehicleService.source = 'home/search-results-vehicle-list';
    let v = new Vehicle(JSON.parse('{}'));
    v.Icon = 'car-sharp';
    v.Registration_Number = 'Loading Registraion Number...';
    v.Vehicle_Type = 'Loading Vehicle Type...';
    v.Color = 'Loading Color...';
    v.Company = 'Loading Details...';
    this.vehicles.push(v);


    this.loggedInUser = this.localStorageService.StoredPreference.LoggedInUser;
    this.showEditButton = this.loggedInUser.Role !== 'User' ? true : false;
  }
  VehicleSelcted(selectedVehicle: Vehicle) {
    this.vehicleService.selectedVehicle = selectedVehicle;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        rowIndex: selectedVehicle.rowIndex,
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(['home/vehicle-details'], navigationExtras);
  }

  EditButtonClicked(selectedVehicle: Vehicle) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        rowIndex: selectedVehicle.rowIndex,
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(["home/update-vehicle"], navigationExtras);
  }

  backToSearchPage() {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(['home/search-vehicle'], navigationExtras);
  }
  searchByFilterVehicles() {
    this.loaderService.customLoader('Loading Vehicles...', 10000);
    this.vehicles = new Array<Vehicle>();
    this.vehicleService.searchByFilter(results => {
      this.handleResponse(results);
      this.loaderService.dismissLoader();
    }, error => {
      this.allowClose = true;
      this.loaderService.dismissLoader();
    });
  }
  handleResponse(response)
  {
    this.totalRecords = response.totalRecords;
    this.pages = new Array();
    if(this.totalRecords===0)
    {
      this.allowClose = true;
      this.allowFirst = false;
      this.allowPrev = false;
      this.allowLast = false;
      this.allowNext = false;
    }
    else
    if(this.totalRecords<=10)
    {
      this.allowClose = false;
      this.allowFirst = false;
      this.allowPrev = false;
      this.allowLast = false;
      this.allowNext = false;
      this.pages.push(1);
      response.results.forEach(element => {
        this.addToVehicles(element);
      });
    }
    else
    {
      this.allowClose = false;
      this.allowNext = response.hasNextPage; //(this.skip+this.limit <= results.totalRecords);
      response.results.forEach(element => {
        this.addToVehicles(element);
      });


      this.totalPages = Math.ceil(response.totalRecords / 10);

    if (this.totalPages > 5) {
      if(this.currentPage===this.totalPages)
      {
        this.allowFirst = true;
        this.allowPrev = true;
        this.allowLast = false;
        this.allowNext = false;

        this.pages.push(this.currentPage-2);
        this.pages.push(this.currentPage-1);
        this.pages.push(this.currentPage);
      }
      else
        if(this.currentPage===1)
        {
          this.allowFirst = false;
          this.allowPrev = false;
          this.allowLast = true;
          this.allowNext = true;

          this.pages.push(this.currentPage);
          this.pages.push(this.currentPage+1);
          this.pages.push(this.currentPage+2);
        }
        else
        {
          this.allowFirst = true;
          this.allowPrev = true;
          this.allowLast = true;
          this.allowNext = true;

          this.pages.push(this.currentPage-1);
          this.pages.push(this.currentPage);
          this.pages.push(this.currentPage+1);
        }

      }
      else {
        for (let index = 1; index <= this.totalPages; index++) {
          this.pages.push(index);
        }

      }
    }
  }
  addToVehicles(element: any) {
    let vehicle = new Vehicle(element);
    try
    {
      vehicle.Timestamp = formatDate(vehicle.Timestamp?.toString(), 'dd/MM/yyyy HH:mm:ss', 'en-US', '+0530');
    }
    catch(ex)
    {}
    this.vehicles.push(vehicle);
  }
  CloseClicked() {
    this.backToSearchPage();
  }

  FirstClicked() {
    this.currentPage = 1;
    this.limit = this.countPerPage;
    this.skip = this.countPerPage * (this.currentPage-1);
    this.searchByFilterVehicles();

  }
  PrevClicked() {
    this.currentPage--;
    this.limit = this.countPerPage;
    this.skip = this.countPerPage * (this.currentPage-1);
    this.searchByFilterVehicles();
  }
  NextClicked() {
    this.currentPage++;
    this.limit = this.countPerPage;
    this.skip = this.countPerPage * (this.currentPage-1);
    this.searchByFilterVehicles();
  }
  LastClicked() {
    this.currentPage = this.totalPages;
    this.limit = this.countPerPage;
    this.skip = this.countPerPage * (this.currentPage - 1);
    this.searchByFilterVehicles();
  }
  PageClicked(page) {
    this.currentPage = page;
    this.limit = this.countPerPage;
    this.skip = this.countPerPage * (this.currentPage - 1);
    this.searchByFilterVehicles();
  }

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
}


