import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language/language.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { KeywordConstants } from 'src/assets/constants/constants';
import { VehicleService } from 'src/app/services/vehicle/vehicle.service';
import { VisualizationService } from 'src/app/services/visualization/visualization.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit, AfterViewInit {
  public languageSelected: string='en';
  public languageSelectedLabel: string='English';
  loading: any;
  public loggedInUser: User;
  constructor(
    private router: Router,
    public loadingController: LoadingController,
    private vehicleService: VehicleService,
    private visualizationService: VisualizationService,
    private localStorageService: LocalStorageService,
    private languageService: LanguageService
  ) {
    this.loggedInUser = new User(JSON.parse('{}'));
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.serveBasedOnUserRole();
      }
    });
  }
  serveBasedOnUserRole() {
    //Role wise changes
    this.loggedInUser = this.localStorageService.StoredPreference.LoggedInUser;
  }
  loadLocalizationDetails()
  {
    this.languageSelected = this.localStorageService.StoredPreference.SelectedLanguage;
    this.updateSelectedLanguageLabel();
  }

  ngAfterViewInit(): void {
    this.loadLocalizationDetails();
    this.loggedInUser = this.localStorageService.StoredPreference.LoggedInUser;
  }

  ngOnInit() {
    this.loggedInUser = this.localStorageService.StoredPreference.LoggedInUser;
  }


  languageChangeButtonClicked() {
    this.languageService.presentLanguageSelctionMenu(changed=>{
      this.initializeLoader('SETTINGS_PAGE.CHANGING_LANGUAGE_MESSAGE');
      setTimeout(() => {
        this.updateSelectedLanguageLabel();
          }, 3000);
    });
  }

  reloadMetaDataButtonClicked(){
    this.resetMetaData();
    this.initializeLoader('SETTINGS_PAGE.REFRESHMETADATA_MESSAGE');
      setTimeout(() => {
        this.vehicleService.LoadMetaData(resp=>{
          resp.forEach(row => {
            switch(row.Type){
              case 'District':
                if(row.Name.toLowerCase() === 'thane'){
                  this.vehicleService.PoliceStationList.push(row.Value);
                }
              break;
              case 'VehicleType':
                this.vehicleService.vehicleTypes.push(row.Value);
              break;
              case 'VehicleCategory':
                this.vehicleService.vehicleCategories.push(row.Value);
              break;
              case 'VehicleCompany':
                this.vehicleService.AllCompanies.push(row.Value);
                if(row.Name.toLowerCase() === 'two wheeler'){
                  this.vehicleService.TwoWheelerVehicleCompanies.push(row.Value);
                }
                if(row.Name.toLowerCase() === 'three wheeler'){
                  this.vehicleService.ThreeWheelerVehicleCompanies.push(row.Value);
                }
                if(row.Name.toLowerCase() === 'four wheeler'){
                  this.vehicleService.FourWheelerVehicleCompanies.push(row.Value);
                }
                if(row.Name.toLowerCase() === 'bus'){
                  this.vehicleService.BusVehicleCompanies.push(row.Value);
                }
                if(row.Name.toLowerCase() === 'truck'){
                  this.vehicleService.TruckVehicleCompanies.push(row.Value);
                }
              break;
              case 'Visualization':
                this.visualizationService.showBy.push(row.Value);
              break;
            }
          });
        },error=>{
          console.log('Error occured while reloading metadata')
        });
          }, 2000);
  }
  resetMetaData() {
    this.vehicleService.PoliceStationList = new Array<string>();
    this.vehicleService.vehicleTypes = new Array<string>();
    this.vehicleService.vehicleCategories = new Array<string>();
    this.vehicleService.AllCompanies = new Array<string>();
    this.vehicleService.TwoWheelerVehicleCompanies = new Array<string>();
    this.vehicleService.ThreeWheelerVehicleCompanies = new Array<string>();
    this.vehicleService.FourWheelerVehicleCompanies = new Array<string>();
    this.vehicleService.BusVehicleCompanies = new Array<string>();
    this.vehicleService.TruckVehicleCompanies = new Array<string>();
    this.visualizationService.showBy = new Array<string>();
  }

  updateSelectedLanguageLabel()
  {
    this.languageSelected = this.localStorageService.StoredPreference.SelectedLanguage;
     this.languageService.getLanguageList().forEach(lang => {
      if(lang["value"] === this.languageSelected)
        this.languageSelectedLabel = lang["label"];
     });
  }
    //Loaders
    async initializeLoader(message) {
      this.loading = await this.loadingController.create({
        message: this.languageService.translate(message),
        duration: 4000,
      });
      this.loading.present();
    }
}
