/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ScheduleSearch } from 'src/app/models/ScheduleSearch';
import { LanguageService } from 'src/app/services/language/language.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { VehicleService } from 'src/app/services/vehicle/vehicle.service';

@Component({
  selector: 'app-update-lookup',
  templateUrl: './update-lookup.page.html',
  styleUrls: ['./update-lookup.page.scss'],
})
export class UpdateLookupPage implements OnInit {

  public scheduleSearch: ScheduleSearch;
  public showRegistrationValidationMessage = false;
  constructor(public loadingCtrl: LoadingController,
    private vehicleService: VehicleService,
    public alertController: AlertController,
    private languageService: LanguageService,
    private router: Router,
    private loaderService: LoaderService) {
    if(this.vehicleService.selectedSchduleSearch != null && this.vehicleService.selectedSchduleSearch !== undefined  )
    {
      this.scheduleSearch = this.vehicleService.selectedSchduleSearch;
    }
    else
    {
      this.scheduleSearch = new ScheduleSearch(JSON.parse('{}'));

    }
   }

  ngOnInit() {
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
      this.UpdateScheduleSearch(success => {
        this.goToScheduleSearchList();
        }, failure => {
          this.presentAlert(this.languageService.translate('CREATE_LOOKUP_PAGE.SAVE_FAILED'), this.languageService.translate('CREATE_LOOKUP_PAGE.SAVE_FAILED_MESSAGE'));
        });
      this.showRegistrationValidationMessage = false;
    }
  }
  UpdateScheduleSearch(succes: (any), failure: (any)) {
    this.loaderService.customLoader('Saving Schedule Search...', 10000);
    this.vehicleService.UpdateScheduleSearch(this.scheduleSearch, results => {
      this.goToScheduleSearchList();
      this.loaderService.dismissLoader();
    }, error => {
      this.loaderService.dismissLoader();
    });
  }

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

  foundChanged(ev){
    this.scheduleSearch.Found = ev.detail.checked;
  }
}
