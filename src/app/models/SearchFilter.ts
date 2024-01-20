
import { HelperService } from '../services/helpers/helper-service';
import { BaseModel } from './BaseModel';

export class SearchFilter  extends BaseModel{
    public skip: number = 0;
    public limit: number = 10;
    public type: String="List";
    public Start_Timestamp: String;
    public End_Timestamp: String;
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
    constructor(requestJSON: JSON)  {
        super(requestJSON);
    }
    public ToSearchParam()
    {
        var queryString ='';

        if(this.Registration_Number!="" && this.Registration_Number!=undefined && this.Registration_Number!=null)
                queryString +=  ',' + '"VehicleRegistrationNumber":"'+this.Registration_Number+'"';

        if(this.Vehicle_Type!="" && this.Vehicle_Type!=undefined && this.Vehicle_Type!=null)
        queryString +=  ',' + '"SelectVehicleType":"'+this.Vehicle_Type+'"';

        if(this.Make!="" && this.Make!=undefined && this.Make!=null)
        queryString +=  ',' + '"Make":"'+this.Make+'"';

        if(this.Model!="" && this.Model!=undefined && this.Model!=null)
        queryString += ',' + '"Model":"'+this.Model+'"';

        if(this.Company!="" && this.Company!=undefined && this.Company!=null)
        queryString +=  ',' + '"Company":"'+this.Company+'"';

        if(this.Color!="" && this.Color!=undefined && this.Color!=null)
        queryString +=  ',' + '"VehicleColor":"'+this.Color+'"';

        if(this.Category!="" && this.Category!=undefined && this.Category!=null)
        queryString += ',' + '"SelectVehicleCategory":"'+this.Category+'"';

        if(this.CR_Number_Section!="" && this.CR_Number_Section!=undefined && this.CR_Number_Section!=null)
        queryString +=  ',' + '"CRNumberSection":"'+this.CR_Number_Section+'"';

        if(this.Investigation_Officer_Name!="" && this.Investigation_Officer_Name!=undefined && this.Investigation_Officer_Name!=null)
        queryString += ',' + '"InvestigationOfficerName":"'+this.Investigation_Officer_Name+'"';

        if(this.Investigation_Officer_Number!="" && this.Investigation_Officer_Number!=undefined && this.Investigation_Officer_Number!=null)
        queryString +=   ',' + '"InvestigationOfficerNumber":"'+this.Investigation_Officer_Number+'"';

        if(this.ChassisNumber!="" && this.ChassisNumber!=undefined && this.ChassisNumber!=null)
        queryString +=   ',' + '"VehicleChassisNumber":"'+this.ChassisNumber+'"';

        if(this.Engine_Number!="" && this.Engine_Number!=undefined && this.Engine_Number!=null)
        queryString +=   ',' + '"VehicleEngineNumber":"'+this.Engine_Number+'"';

        if(this.Comments!="" && this.Comments!=undefined && this.Comments!=null)
        queryString +=   ',' + '"Comments":"'+this.Comments+'"';

        if(this.Vehicle_owner_complainant!="" && this.Vehicle_owner_complainant!=undefined && this.Vehicle_owner_complainant!=null)
        queryString +=   ',' + '"Vehicleownercomplainant":"'+this.Vehicle_owner_complainant+'"';


        if(this.Name_Of_Police_Station!="" && this.Name_Of_Police_Station!=undefined && this.Name_Of_Police_Station!=null)
        queryString +=   ',' + '"NameofPoliceStation":"'+this.Name_Of_Police_Station+'"';

        //  if(this.Registration_Number=="" || this.Registration_Number==undefined || this.Registration_Number==null)
        queryString = queryString.substring(1);

        return queryString;
    }
    public clear()
    {
        this.Registration_Number ="";
        this.Vehicle_Type  = "";
        this.ChassisNumber ="";
    }
}
