import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Vehicle } from 'src/app/models/Vehicle';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit,AfterViewInit {
  public user:User
  constructor(private userService:UserService,
    private activatedRoute:ActivatedRoute,
    private router: Router,
    private loaderService: LoaderService) {

    if(this.userService.selectedUser!=null && this.userService.selectedUser!=undefined  )
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
  loadUserDetails(rowIndex:number)
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
  EditButtonClicked()
  {
    this.userService.selectedUser = this.user;

    let navigationExtras: NavigationExtras = {
      queryParams: {
        rowIndex: this.userService.selectedUser.rowIndex,
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(["home/update-user"], navigationExtras);
  }
}
