import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationExtras, Router } from '@angular/router';
import { ViewDidEnter } from '@ionic/angular';
import { SearchFilter } from 'src/app/models/SearchFilter';
import { Vehicle } from 'src/app/models/Vehicle';
import { LanguageService } from 'src/app/services/language/language.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { VehicleService } from 'src/app/services/vehicle/vehicle.service';
import { UserService } from 'src/app/services/user/user.service';
import { formatDate } from '@angular/common';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { User } from 'src/app/models/user';
import { KeywordConstants } from 'src/assets/constants/constants';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.page.html',
  styleUrls: ['./vehicle-list.page.scss'],
})
export class VehicleListPage implements OnInit, ViewDidEnter,AfterViewInit {
  public vehicles: Vehicle[];

  public showEditButton: boolean = false;
  public loggedInUser:User;


  //Pagination

  public countPerPage: number = 10;
  public totalPages: number = 0;
  public skip: number = 0;
  public totalRecords: number = -1;
  public limit: number = 10;
  public currentPage: number = 1;
  public pages: number[];

  public allowNext: boolean = false;
  public allowPrev: boolean = false;
  public allowFirst: boolean = false;
  public allowLast: boolean = false;

  constructor(
    private router: Router,
    private vehicleService: VehicleService,
    private userService: UserService,
    private localStorageService:LocalStorageService,
    private languageService: LanguageService,
    public loaderService: LoaderService) {

      this.pages = new Array<number>();
      this.currentPage=1;
      this.pages.push(this.currentPage);
      this.vehicles = new Array<Vehicle>();
      if (this.vehicleService.searchFilter == null){
          this.vehicleService.searchFilter = new SearchFilter(JSON.parse('{}'));
      }

      this.router.events.forEach((event) => {
        if (event instanceof NavigationEnd) {


        }
      });
  }
  ngAfterViewInit(): void {
    this.loggedInUser =this.localStorageService.StoredPreference.LoggedInUser;
    this.showEditButton = this.loggedInUser.Role !== 'User' ? true : false;
  }

  ionViewDidEnter(): void {
    this.loadVehicles();
  }

  ngOnInit() {
    let v = new Vehicle(JSON.parse('{}'));
    v.Icon = 'car-sharp';
    v.Registration_Number = 'Loading Registraion Number...';
    v.Vehicle_Type = 'Loading Vehicle Type...';
    v.Color = 'Loading Color...';
    v.Company = 'Loading Details...';
    this.vehicles.push(v);
  }
  VehicleSelcted(selectedVehicle: Vehicle) {
    this.vehicleService.selectedVehicle = selectedVehicle;
    this.vehicleService.source = 'home/vehicle-list';
    let navigationExtras: NavigationExtras = {
      queryParams: {
        rowIndex: selectedVehicle.rowIndex,
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(['home/vehicle-details'], navigationExtras);
  }

  EditButtonClicked(selectedVehicle: Vehicle)
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        rowIndex: selectedVehicle.rowIndex,
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(["home/update-vehicle"],navigationExtras);
  }

  backToSearchPage()
  {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(['home'], navigationExtras);
  }
  loadVehicles() {
    this.loaderService.customLoader('Loading Vehicles...', 10000);
    this.vehicles = new Array<Vehicle>();
    this.vehicleService.list(this.skip, this.limit, resp => {
      this.handleResponse(resp);
      this.loaderService.dismissLoader();
    }, error => {
      this.loaderService.dismissLoader();
    });
  }

 //Data Loaders

  GetIcon(vehicleType)
  {
    switch(vehicleType)
        {
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
            default :
                return "/assets/icon/four-wheeler.png";
                break;
        }
  }

  handleResponse(response)
  {
    response.results.forEach(element => {
      var vehicle = new Vehicle(element);

      this.vehicles.push(vehicle);
    });
    this.totalRecords = response.totalRecords;
    this.pages = new Array();
    this.totalPages = Math.ceil(response.totalRecords / 10)

    if (this.totalPages > 5) {
      if(this.currentPage==this.totalPages)
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
      if(this.currentPage==1)
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
  //Pagination

  //Pagination
  FirstClicked() {
    this.currentPage = 1;
    this.limit = this.countPerPage;
    this.skip = this.countPerPage * (this.currentPage-1);
    this.loadVehicles();

  }
  PrevClicked() {
    this.currentPage--;
    this.limit = this.countPerPage;
    this.skip = this.countPerPage * (this.currentPage-1);
    this.loadVehicles();
  }
  NextClicked() {
    this.currentPage++;
    this.limit = this.countPerPage;
    this.skip = this.countPerPage * (this.currentPage-1);
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


}
