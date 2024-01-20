
import { HelperService } from '../services/helpers/helper-service';
import { BaseModel } from './BaseModel';
import { formatDate } from '@angular/common';
export class User  extends BaseModel{

    public Icon: string;
    public StatusIcon: string;
    public Status: string;
    public Account:BaseModel;
    public FirstName: string;
    public CompanyName: string;
    public LastName: string;
    public DisplayName:String;
    public Role:String;
    public PhoneNumber: string;
    public Gender: string;
    public DateOfBirth: any;
    public Uid: string;
    public Email: string;
    public ImageUrl: string;
    public UserName: string;
    public Password: string;
    public ConfirmPassword: string;
    public ResetRequired: boolean;
    constructor(requestJSON: JSON)  {
        super(requestJSON);

        this.FirstName = requestJSON["FirstName"];
        this.LastName =  requestJSON["LastName"];
        this.UserName =  requestJSON["UserName"];
        this.Email =   requestJSON["Email"];
        this.Gender =  requestJSON["Gender"];
        this.DateOfBirth =  requestJSON["dateofbirth"];
        this.Role = requestJSON["Role"];
        this.PhoneNumber = requestJSON["PhoneNumber"];
        this.Status = requestJSON["Status"];
        this.StatusIcon = "/assets/icon/"+ this.Status +".png";
        this.Icon = "/assets/icon/"+ this.Role +".png";
        if(requestJSON["ResetRequired"]=="1"){
            this.ResetRequired = true;
        }
    }
    public clear() {
        this.FirstName ="";
        this.LastName =  "";
        this.UserName =  "";
        this.Email =   "";
        this.Gender =  "";
        this.DateOfBirth =  "";
        this.Role = "";
        this.PhoneNumber ="";
        this.Status = "";
        this.StatusIcon = "/assets/icon/"+this.Status+".png";
    }
    public ToCredentialsJSON()
    {
        this.UpdatedOn = formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en-US', '+0530');
        return {
            "UserName": this.UserName,
            "Email": this.Email,
            "ResetRequired" : true,
            "UpdatedOn": this.UpdatedOn
          }
    }
    ToProfileJSON() {
        return {
          "UserName": this.UserName,
          "Password": this.Password,
          "Email": this.Email,
          "PhoneNumber": this.PhoneNumber,
          "FirstName": this.FirstName,
          "LastName": this.LastName,
          "Gender": this.Gender,
          "rowIndex": this.rowIndex
        }
      }
}
