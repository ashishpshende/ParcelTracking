/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/quotes */
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { LanguageService } from 'src/app/services/language/language.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
})
export class UpdateUserPage implements OnInit,AfterViewInit {
  public user: User;
  public genders: Array<string>=[];
  public roles: Array<string>=[];
  public statuses: Array<string>=[];
  constructor(
    public loadingCtrl: LoadingController,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
    private languageService: LanguageService,
    private router: Router,
    private loaderService: LoaderService) {

      this.genders = ['Male',"Female","Others"];
      this.roles = ["SuperAdmin","Admin","User"];
      this.statuses = ["Active","InActive","Suspended"];
    if(this.userService.selectedUser!=null && this.userService.selectedUser != undefined  )
    {
      this.user = this.userService.selectedUser;
    }
    else
    {
      this.user = new User(JSON.parse("{}"));

    }
     }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      var rowIndex = Number.parseInt(params["rowIndex"]);
      this.loadUserDetails(rowIndex)
    });
  }
  loadUserDetails(rowIndex: number)
  {
    this.loaderService.customLoader("Loading User Details...", 10000);
    this.userService.readByIndex(rowIndex,resp => {
      this.user = new User(resp.result[0]);
      this.user.Icon ="person-sharp";
      //this.userService.selectedUser.clear();
      this.loaderService.dismissLoader();
    }, error => {
      this.loaderService.dismissLoader();
    });
  }
  goToUserList()
  {
    this.userService.selectedUser = this.user;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(["home/user-list"], navigationExtras);
  }
  UpdateButtonClicked()
  {
    if (this.Validate()) {
      this.checkEmailExistance(
        existinguser => {
          this.presentAlert(this.languageService.translate("SIGN_UP.ALREADY_REGISTERED"), this.languageService.translate("SIGN_UP.USER_WITH_EMAIL_ALREADY_EXISTS"))
        },

        absent => {


          this.checkUserNameExistance(existinguser => {
            this.presentAlert(this.languageService.translate("SIGN_UP.ALREADY_REGISTERED"), this.languageService.translate("SIGN_UP.USER_WITH_USERNAME_ALREADY_EXISTS"))

          }, absent => {

            this.UpdateUser(success => {
              this.goToUserList();
            }, failure => {
              this.presentAlert(this.languageService.translate("SIGN_UP.REGISTRATION_FAILED"), this.languageService.translate("SIGN_UP.REGISTRATION_FAILED_MESSAGE"))

            });

          });
        });

    }
    else {
      this.presentAlert(this.languageService.translate("SIGN_UP.EMPTY_DETAILS"), this.languageService.translate("SIGN_UP.EMPTY_DETAILS_MESSAGE"))
    }

  }
  checkEmailExistance(present: (any), absent: (any)) {
    this.loaderService.customLoader("Checking for Email...", 10000);
    this.userService.readByEmail(this.user.Email, results => {
      this.loaderService.dismissLoader();
      var occurance = 0;
      if(results.length>0)
      {
        results.forEach(user => {
          if(this.user.Email.toLowerCase() === user.Email.toLowerCase() && this.user.rowIndex !== user.rowIndex)
          {
            occurance++;
          }
        });
        if(occurance>0)
        {
          present(new User(results[0]));
        }
        else
        {
          absent();
        }
      }
      else
      {
        absent();
      }
    }, error => {
      this.loaderService.dismissLoader();
      absent();
    });
  }
  checkUserNameExistance(present: (any), absent: (any)) {
    this.loaderService.customLoader("Checking for User Name...", 10000);
    this.userService.readByUserName(this.user.UserName, results => {
      this.loaderService.dismissLoader();
      var occurance = 0;
      if(results.length>0)
      {
        results.forEach(user => {
          if(this.user.UserName === user.UserName && this.user.rowIndex !== user.rowIndex)
          {
            occurance++;
          }
        });
        if(occurance>0)
        {
          present(new User(results[0]));
        }
        else
        {
          absent();
        }
      }
      else
      {
        absent();
      }
    }, error => {
      this.loaderService.dismissLoader();
      absent();
    });
  }
  UpdateUser(succes: (any), failure: (any)) {
    this.loaderService.customLoader("Saving User...", 10000);
    this.user.UpdatedOn = formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en-US', '+0530');
    this.userService.UpdateUser(this.user, results => {
      this.loaderService.dismissLoader();
      this.goToUserList();
    }, error => {

      this.loaderService.dismissLoader();
    });
  }

  Validate(): boolean {
    if (this.user.FirstName == null || this.user.FirstName == undefined || this.user.FirstName == "") {
      return false;
    }
    if (this.user.LastName == null || this.user.LastName == undefined || this.user.LastName == "") {
      return false;
    }
    if (this.user.Gender == null || this.user.Gender == undefined || this.user.Gender == "") {
      return false;
    }
    if (this.user.Email == null || this.user.Email == undefined || this.user.Email == "") {
      return false;
    }
    if (this.user.PhoneNumber == null || this.user.PhoneNumber == undefined || this.user.PhoneNumber == "") {
      return false;
    }
    if (this.user.UserName == null || this.user.UserName == undefined || this.user.UserName == "") {
      return false;
    }
    return true;
  }

  //Alerts
  async presentAlert(headerTitle = this.languageService.translate('SIGN_UP.TITLE'), message = this.languageService.translate('SIGN_UP.REGISTRATION_FAILED')) {
    const alert = await this.alertController.create({
      cssClass: 'app-alert-class',
      header: headerTitle,
      subHeader: "",
      message: message,
      buttons: [this.languageService.translate('BUTTONS.OK')]
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
  }

}
