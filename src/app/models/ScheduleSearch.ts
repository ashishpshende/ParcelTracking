/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */

import { HelperService } from '../services/helpers/helper-service';
import { BaseModel } from './BaseModel';
import { formatDate } from '@angular/common';
export class ScheduleSearch  extends BaseModel{

  public Timestamp: String;
    public rowIndex: number;
    public VehicleRegistrationNumber: String;
    public VehicleEngineNumber: String;
    public VehicleChassisNumber: String;
    public Comments: String;
    public Found = false;
    constructor(requestJSON: JSON) {
        super(requestJSON);
        this.rowIndex = requestJSON['rowIndex'];
        this.Timestamp = requestJSON['Timestamp'];
        this.VehicleRegistrationNumber = requestJSON['VehicleRegistrationNumber'];
        this.VehicleEngineNumber = requestJSON['VehicleEngineNumber'];
        this.VehicleChassisNumber = requestJSON['VehicleChassisNumber'];
        this.Comments = requestJSON['Comments'];
        if(requestJSON['Found'] === '1'){
          this.Found = true;
      }
    }
    public clear() {
      this.rowIndex = -1;
      this.Timestamp = '';
      this.VehicleRegistrationNumber ='';
      this.VehicleEngineNumber =  '';
      this.VehicleChassisNumber =  '';
      this.Comments = '';
      this.Found = false;
    }
    toJSON()
    {
        return {
            'Vehicle Registration Number':this.VehicleRegistrationNumber === '' ? '-' : this.VehicleRegistrationNumber,
            'Vehicle Engine Number':this.VehicleEngineNumber === '' ? '-' : this.VehicleEngineNumber,
            'Vehicle Chassis Number':this.VehicleChassisNumber === '' ? '-' : this.VehicleChassisNumber,
            'Comments': this.Comments === '' ? '-' : this.Comments,
            'Found':0
        };
    }

    toUpdateJSON()
    {
        return {
            'Vehicle Registration Number':this.VehicleRegistrationNumber === '' ? '-' : this.VehicleRegistrationNumber,
            'Vehicle Engine Number':this.VehicleEngineNumber === '' ? '-' : this.VehicleEngineNumber,
            'Vehicle Chassis Number':this.VehicleChassisNumber === '' ? '-' : this.VehicleChassisNumber,
            'Comments': this.Comments === '' ? '-' : this.Comments,
            'Found': this.Found ? 1 : 0,
            'rowIndex': this.rowIndex !== undefined ? this.rowIndex : -1
        };
    }

}
