import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/Vehicle';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { VehicleService } from 'src/app/services/vehicle/vehicle.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.page.html',
  styleUrls: ['./vehicle-details.page.scss'],
})
export class VehicleDetailsPage implements OnInit, AfterViewInit {
  public loggedInUser: User;
  public vehicle: Vehicle;
  public showEditButton: boolean = false;
  constructor(private vehicleService: VehicleService,
    private activatedRoute: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private router: Router,
    private loaderService: LoaderService) {
    this.showEditButton = false;
    this.loggedInUser = new User(JSON.parse("{}"));
    this.vehicle = new Vehicle(JSON.parse("{}"));
    this.loggedInUser = this.localStorageService.StoredPreference.LoggedInUser;
    this.showEditButton = this.loggedInUser.Role !== 'User' ? true : false;
  }
  ngAfterViewInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      var rowIndex = Number.parseInt(params["rowIndex"]);
      this.readVehicleDetails(rowIndex);
    });
  }
  ngOnInit() {
  }
  readVehicleDetails(rowIndex: number) {
    this.loaderService.customLoader("Loading Vehicle Details...", 10000);
    this.vehicleService.readByIndex(rowIndex, resp => {
      this.vehicle = new Vehicle(resp.result[0]);
      this.loaderService.dismissLoader();
    }, error => {
      this.loaderService.dismissLoader();
    });
  }
  EditButtonClicked() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        rowIndex: this.vehicle.rowIndex,
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(["home/update-vehicle"], navigationExtras);
  }
  goToVehicleList() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate([this.vehicleService.source], navigationExtras);
  }
  GetIcon(vehicleType) {
    return this.vehicleService.GetIcon(vehicleType);
  }
}
