import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Vehicle } from 'src/app/models/Vehicle';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { VehicleService } from 'src/app/services/vehicle/vehicle.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.page.html',
  styleUrls: ['./update-vehicle.page.scss'],
})
export class UpdateVehiclePage implements OnInit,AfterViewInit {
  public vehicle:Vehicle;
  public vehicleTypes: Array<string> = [];
  public vehicleCategories:string[];
  public vehicleCompanies:string[];
  public AllCompanies:string[];
  public TheftDay:string[];
  public TwoWheelerVehicleCompanies:string[];
  public ThreeWheelerVehicleCompanies:string[];
  public FourWheelerVehicleCompanies:string[];
  public BusVehicleCompanies:string[];
  public TruckVehicleCompanies:string[];
  constructor(private vehicleService:VehicleService,
    private activatedRoute:ActivatedRoute,
    private router: Router,
    private loaderService: LoaderService) {
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
      this.vehicle = new Vehicle(JSON.parse("{}"));
    }
  ngAfterViewInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      var rowIndex = Number.parseInt(params["rowIndex"]);
      this.readVehicleDetails(rowIndex)
    });
  }
  ngOnInit() {
  }
  readVehicleDetails(rowIndex:number)
  {
    this.loaderService.customLoader("Loading Vehicle Details...", 10000);
    this.vehicleService.readByIndex(rowIndex,resp => {
      this.vehicle = new Vehicle(resp.result[0]);
      this.loaderService.dismissLoader();
    }, error => {
      this.loaderService.dismissLoader();
    });
  }
  GetIcon(vehicleType)
  {
    return this.vehicleService.GetIcon(vehicleType);
  }
  UpdateButtonClicked()
  {
    this.loaderService.customLoader('Updating Vehicle...', 10000);
    this.vehicleService.Update(this.vehicle,resp => {
      this.loaderService.dismissLoader();
      this.goToVehicleDetails();
    }, error => {
      this.loaderService.dismissLoader();
    });
  }
  goToVehicleDetails()
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        rowIndex: this.vehicle.rowIndex,
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(['home/vehicle-details'], navigationExtras);
  }
  goToVehicleList()
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate([this.vehicleService.source],navigationExtras);
  }

  vehicleTypeChanged()
  {
    switch(this.vehicle.Vehicle_Type)
    {
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
          this.AllCompanies =this.vehicleService.AllCompanies;
          break;
    }
  }

}
