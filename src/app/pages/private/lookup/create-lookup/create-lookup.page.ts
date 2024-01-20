/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language/language.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { VehicleService } from 'src/app/services/vehicle/vehicle.service';
import { HelperService } from 'src/app/services/helpers/helper-service';
import { ScheduleSearch } from 'src/app/models/ScheduleSearch';

@Component({
  selector: 'app-create-lookup',
  templateUrl: './create-lookup.page.html',
  styleUrls: ['./create-lookup.page.scss'],
})
export class CreateLookupPage implements OnInit {
  public enableSave=false;
  public emailValidationMessage='';
  public phoneNumberValidationMessage='';
  public scheduleSearch: ScheduleSearch;
  public genders: Array<string> = [];
  public roles: Array<string> = [];
  public statuses: Array<string> = [];
  public showRegistrationValidationMessage = false;
  constructor(
    public loadingCtrl: LoadingController,
    private vehicleService: VehicleService,
    public alertController: AlertController,
    private languageService: LanguageService,
    private router: Router,
    private loaderService: LoaderService
  ) {
    this.scheduleSearch = new ScheduleSearch(JSON.parse('{}'));

    this.scheduleSearch.VehicleRegistrationNumber = '';
    this.scheduleSearch.VehicleChassisNumber = '';
    this.scheduleSearch.VehicleEngineNumber = '';
    this.scheduleSearch.Found = false;
  }
  ngOnInit() {
    this.enableSave = false;
  }
  ionViewWillEnter() {
  }
  SaveScheduleSearch(succes: (any), failure: (any)) {
    this.loaderService.customLoader('Saving Schedule Search...', 10000);
    this.scheduleSearch.CreatedOn = formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en-US', '+0530');
    this.scheduleSearch.UpdatedOn = formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en-US', '+0530');
    this.vehicleService.SaveScheduleSearch(this.scheduleSearch, results => {
      this.goToScheduleSearchList();
      this.loaderService.dismissLoader();
    }, error => {
      this.loaderService.dismissLoader();
    });
  }
  goToScheduleSearchList()
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(['home/lookup-list'], navigationExtras);
  }

   SaveButtonClicked() {
    if (this.scheduleSearch.VehicleRegistrationNumber == null || this.scheduleSearch.VehicleRegistrationNumber === '') {
      this.showRegistrationValidationMessage = true;
    }
    else {
      this.SaveScheduleSearch(success => {
        this.goToScheduleSearchList();
        }, failure => {
          this.presentAlert(this.languageService.translate('CREATE_LOOKUP_PAGE.SAVE_FAILED'), this.languageService.translate('CREATE_LOOKUP_PAGE.SAVE_FAILED_MESSAGE'));
        });
      this.showRegistrationValidationMessage = false;
    }
  }

  //Alerts
  async presentAlert(headerTitle = this.languageService.translate('SIGN_UP.TITLE'), message = this.languageService.translate('SIGN_UP.REGISTRATION_FAILED')) {
    const alert = await this.alertController.create({
      cssClass: 'app-alert-class',
      header: headerTitle,
      subHeader: '',
      message: message,
      buttons: [this.languageService.translate('BUTTONS.OK')]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
}
