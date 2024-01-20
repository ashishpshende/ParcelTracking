/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */

import { HelperService } from '../services/helpers/helper-service';
import { BaseModel } from './BaseModel';

export class Vehicle extends BaseModel {
      public rowIndex: number;
    public Icon: String;
    public Timestamp: String;
    public Name_Of_Police_Station: String;
    public Vehicle_Type: String;
    public Registration_Number: String;
    public Engine_Number: String;
    public ChassisNumber: String;
    public Company: String;
    public Make: String;
    public Model: String;
    public Color: String;
    public Category: String;
    public CR_Number_Section: String;
    public Date_Time_of_Theft: String;
    public Location_oF_Theft_Seizer: String;
    public Investigation_Officer_Name: String;
    public Investigation_Officer_Number: String;
    public Comments:string;
    public Vehicle_owner_complainant:string;
    public IsActive: string;
    constructor(requestJSON: JSON) {
        super(requestJSON);
        this.Timestamp = requestJSON["Timestamp"];
        this.Name_Of_Police_Station = requestJSON["NameofPoliceStation"];
        this.Vehicle_Type = requestJSON["SelectVehicleType"];
        this.Registration_Number = requestJSON["VehicleRegistrationNumber"];
        this.Engine_Number = requestJSON["VehicleEngineNumber"];
        this.ChassisNumber = requestJSON["VehicleChassisNumber"];
        this.Company = requestJSON["Company"];
        this.Make = requestJSON["Make"];
        this.Model = requestJSON["Model"];
        this.Color = requestJSON["VehicleColor"];
        this.Category = requestJSON["SelectVehicleCategory"];
        this.CR_Number_Section = requestJSON["CRNumberSection"];
        this.Date_Time_of_Theft = requestJSON["Dateoftheft"];
        this.Location_oF_Theft_Seizer = requestJSON["Locationoftheftseizer"];
        this.Investigation_Officer_Name = requestJSON["InvestigationOfficerName"];
        this.Investigation_Officer_Number = requestJSON["InvestigationOfficerNumber"];
        this.rowIndex = requestJSON["rowIndex"];
        this.Icon = this.Vehicle_Type;
        this.Comments = requestJSON["Comments"];
        this.Vehicle_owner_complainant = requestJSON["Vehicleownercomplainant"];
        this.IsActive = requestJSON["IsActive"];
    }
    toJSON()
    {
        return {
            "Name Of Police Station":this.Name_Of_Police_Station === "" ? "-" : this.Name_Of_Police_Station,
            "Select Vehicle Type":this.Vehicle_Type === "" ? "-" : this.Vehicle_Type,
            "Vehicle Registration Number":this.Registration_Number === "" ? "-" : this.Registration_Number,
            "Vehicle Engine Number":this.Engine_Number === "" ? "-" : this.Engine_Number,
            "Vehicle Chassis Number":this.ChassisNumber === "" ? "-" : this.ChassisNumber,
            "Company":this.Company === "" ? "-" : this.Company,
            "Vehicle Color":this.Color === "" ? "-" : this.Color,
            "Select Vehicle Category":this.Category === "" ? "-" : this.Category,
            "CR Number/Section":this.CR_Number_Section === "" ? "-" : this.CR_Number_Section,
            "Date & Time of theft":this.Date_Time_of_Theft === "" ? "-" : this.Date_Time_of_Theft,
            "Location of theft/seizer":this.Location_oF_Theft_Seizer === "" ? "-" : this.Location_oF_Theft_Seizer,
            "Investigation Officer Name":this.Investigation_Officer_Name === "" ? "-" : this.Investigation_Officer_Name,
            "Investigation Officer Number":this.Investigation_Officer_Number === "" ? "-" : this.Investigation_Officer_Number,
            "Make":this.Make === "" ? "-" : this.Make,
            "Model":this.Model === "" ? "-" : this.Model,
            "Comments":this.Comments === "" ? "-" : this.Comments,
            "Vehicle owner/complainant":this.Vehicle_owner_complainant === "" ? "-" : this.Vehicle_owner_complainant,
            "rowIndex":this.rowIndex
        };
    }
}
