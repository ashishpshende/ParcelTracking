import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchFilter } from 'src/app/models/SearchFilter';
import { VehicleService } from 'src/app/services/vehicle/vehicle.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';

@Component({
  selector: 'app-search-vehicle',
  templateUrl: './search-vehicle.page.html',
  styleUrls: ['./search-vehicle.page.scss'],
})
export class SearchVehiclePage implements OnInit, AfterViewInit {
  public searchFilter: SearchFilter;
  public ValidateFlag: boolean = false;
  public enableFilter: boolean = false;
  public vehicleTypes:string[];
  public vehicleCategories:string[];
  public vehicleCompanies:string[];
  public ioOfficers:string[];
  public PoliceStationList:string[];
  public loggedInUser: User;
  public showRegistrationValidationMessage: boolean = false;
  public showEditButton: boolean = false;
  constructor(
    private router: Router,
    private vehicleService: VehicleService,
    private localStorageService: LocalStorageService,
  ) {
    this.showEditButton = false;
    this.vehicleCompanies = ["Select Vehicle Type"]
    this.loggedInUser = new User(JSON.parse("{}"));
    this.searchFilter = new SearchFilter(JSON.parse("{}"));


  }
  vehicleTypeChanged()
  {
    switch(this.searchFilter.Vehicle_Type)
    {
      case "Two Wheeler":
          this.vehicleCompanies = this.vehicleService.TwoWheelerVehicleCompanies;
          break;
      case "Three Wheeler":
          this.vehicleCompanies = this.vehicleService.ThreeWheelerVehicleCompanies;
            break;
      case "Four Wheeler":
          this.vehicleCompanies = this.vehicleService.FourWheelerVehicleCompanies;
            break;
      case "Bus":
          this.vehicleCompanies = this.vehicleService.BusVehicleCompanies;
            break;
      case "Truck":
          this.vehicleCompanies = this.vehicleService.TruckVehicleCompanies;
          break;
      case "Other":
          this.vehicleCompanies = ["Other"];
          break;
     default:
          this.vehicleCompanies =this.vehicleService.AllCompanies;
          break;
    }
  }
  ngAfterViewInit(): void {
    this.vehicleTypes = this.vehicleService.vehicleTypes;
    this.vehicleCategories = this.vehicleService.vehicleCategories;
    this.PoliceStationList = this.vehicleService.PoliceStationList;
    this.loggedInUser =this.localStorageService.StoredPreference.LoggedInUser;
    this.showEditButton = this.loggedInUser.Role !== 'User' ? true : false;
    if(this.vehicleService.searchFilter!=null && this.vehicleService.searchFilter !=undefined)
    this.searchFilter = this.vehicleService.searchFilter;
    else
    this.searchFilter = new SearchFilter(JSON.parse("{}"));
    this.resetFilter();
  }
  ngOnInit() {
    if(this.vehicleService.searchFilter!=null && this.vehicleService.searchFilter !=undefined)
    this.searchFilter = this.vehicleService.searchFilter;
    else
    this.searchFilter = new SearchFilter(JSON.parse("{}"));
  }
  vehicleCompanyChanged()
  {

  }
  vehicleCategoryChanged()
  {

  }
  PoliceStationChanged()
  {

  }
  validate() {

    if(this.enableFilter)
    {
      this.searchFilter.type ="SearchByFilter";
      if (this.searchFilter.Registration_Number != null || this.searchFilter.Registration_Number != '') {
          return true;
      }
      if (this.searchFilter.Vehicle_Type != null || this.searchFilter.Vehicle_Type != '') {
        return true;
      }
      if (this.searchFilter.Category != null || this.searchFilter.Category != '') {
        return true;
      }
      if (this.searchFilter.Engine_Number != null || this.searchFilter.Engine_Number != '') {
        return true;
      }
      if (this.searchFilter.Company != null || this.searchFilter.Company != '') {
        return true;
      }
      if (this.searchFilter.Make != null || this.searchFilter.Make != '') {
        return true;
      }
      if (this.searchFilter.Model != null || this.searchFilter.Model != '') {
        return true;
      }
      if (this.searchFilter.Color != null || this.searchFilter.Color != '') {
        return true;
      }
      if (this.searchFilter.Investigation_Officer_Name != null || this.searchFilter.Investigation_Officer_Name != '') {
        return true;
      }
      if (this.searchFilter.Comments != null || this.searchFilter.Comments != '') {
        return true;
      }
      if (this.searchFilter.Name_Of_Police_Station != null || this.searchFilter.Name_Of_Police_Station != '') {
        return true;
      }
      if (this.searchFilter.Vehicle_owner_complainant != null || this.searchFilter.Vehicle_owner_complainant != '') {
        return true;
      }
      return false;
    }
    else
    {
      this.searchFilter.type ="SearchByRegNo";
      if (this.searchFilter.Registration_Number == null || this.searchFilter.Registration_Number == '') {
        this.showRegistrationValidationMessage = true;
        return false;
      }
      else {
        this.showRegistrationValidationMessage = false;
        return true;
      }
    }

  }
  SearchButtonClicked() {
    this.ValidateFlag = true;
    this.searchFilter.skip = 0;
    if (this.validate()) {
      this.vehicleService.searchFilter = this.searchFilter;
      this.router.navigate(["home/search-results-vehicle-list"]);
    }
  }
  enableFilterButtonClicked() {
    this.showRegistrationValidationMessage = false;
    this.enableFilter = !this.enableFilter;
    this.resetFilter();
  }
  resetFilter(){
    this.searchFilter.Registration_Number = '';
    this.searchFilter.Vehicle_Type = '';
    this.searchFilter.Category = '';
    this.searchFilter.Engine_Number = '';
    this.searchFilter.Company = '';
    this.searchFilter.Make = '';
    this.searchFilter.Model = '';
    this.searchFilter.Color ='';
    this.searchFilter.Investigation_Officer_Name ='';
    this.searchFilter.ChassisNumber='';
    this.searchFilter.Comments='';
    this.searchFilter.Vehicle_owner_complainant='';
    this.searchFilter.Investigation_Officer_Number='';
    this.searchFilter.Name_Of_Police_Station = '';
  }
}
