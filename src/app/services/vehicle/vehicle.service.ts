/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { ScheduleSearch } from 'src/app/models/ScheduleSearch';
import { SearchFilter } from 'src/app/models/SearchFilter';
import { Vehicle } from 'src/app/models/Vehicle';
import { environment } from 'src/environments/environment';
import { NetworkService } from '../network/network.service';
import { SecurityService } from '../security/security.service';


export class VehicleURLs
{
  public static LIST = environment.apiURL +  '/sheets/Vehicles?skip={SKIP}&limit={LIMIT}&timestamp='+ new Date().getTime();
  public static SEARCH = environment.apiURL +  '/sheets/Vehicles?where={"Vehicle Registration Number":"{REG_NO}"}&skip={SKIP}&limit={LIMIT}&timestamp='+ new Date().getTime();
  public static SEARCH_BY_FILTER = environment.apiURL +  '/sheets/Vehicles?where={{SEARCH}}&skip={SKIP}&limit={LIMIT}&timestamp='+ new Date().getTime();
  public static READ = environment.apiURL +  '/sheets/Vehicles?where={"Vehicle Registration Number":"{REG_NO}"}&skip={SKIP}&limit={LIMIT}&timestamp='+ new Date().getTime();
  public static UPDATE = environment.apiURL +  '/sheets/Vehicles/{ROW_INDEX}?timestamp='+ new Date().getTime();
  public static INSERT = environment.apiURL +  '/sheets/Vehicles/{ROW_INDEX}?timestamp='+ new Date().getTime();
  public static READ_BY_INDEX = environment.apiURL +  '/sheets/Vehicles/{INDEX}?timestamp='+ new Date().getTime();
  public static SAVE_SCHEDULE_SEARCH = environment.apiURL + '/sheets/Lookup?timestamp=' + new Date().getTime();
  public static DELETE_UPDATE_SCHEDULE_SEARCH = environment.apiURL + '/sheets/Lookup/{ROW_INDEX}?timestamp=' + new Date().getTime();
}

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  public searchFilter: SearchFilter;
  public selectedVehicle: Vehicle;
  public selectedSchduleSearch: ScheduleSearch;
  public vehicleTypes = new Array<string>();
  public vehicleCategories = new Array<string>();
  public vehicleCompanies: string[];
  public AllCompanies = new Array<string>();
  public TheftDay = new Array<string>();
  public TwoWheelerVehicleCompanies = new Array<string>();
  public ThreeWheelerVehicleCompanies = new Array<string>();
  public FourWheelerVehicleCompanies = new Array<string>();
  public BusVehicleCompanies = new Array<string>();
  public TruckVehicleCompanies = new Array<string>();
  public source = '';
  public IOOfficers: string[];
  public PoliceStationList = new Array<string>();

  constructor(private securityService: SecurityService,
    private networkService: NetworkService) {
      this.LoadMetaData(resp=>{
        resp.forEach(row => {
          switch(row.Type){
            case 'Theft':
              this.TheftDay.push(row.Value);
              break;
            case 'District':
              if(row.Name.toLowerCase() === 'thane'){
                this.PoliceStationList.push(row.Value);
              }
            break;
            case 'VehicleType':
              this.vehicleTypes.push(row.Value);
            break;
            case 'VehicleCategory':
              this.vehicleCategories.push(row.Value);
            break;
            case 'VehicleCompany':
              this.AllCompanies.push(row.Value);
              if(row.Name.toLowerCase() === 'two wheeler'){
                this.TwoWheelerVehicleCompanies.push(row.Value);
              }
              if(row.Name.toLowerCase() === 'three wheeler'){
                this.ThreeWheelerVehicleCompanies.push(row.Value);
              }
              if(row.Name.toLowerCase() === 'four wheeler'){
                this.FourWheelerVehicleCompanies.push(row.Value);
              }
              if(row.Name.toLowerCase() === 'bus'){
                this.BusVehicleCompanies.push(row.Value);
              }
              if(row.Name.toLowerCase() === 'truck'){
                this.TruckVehicleCompanies.push(row.Value);
              }
            break;
          }
        });
      },error=>{

      });
    }
    LoadMetaData(success: (any), failure: (any)){
      this.networkService.get(VehicleURLs.LIST, response=>{
        success(response);
      },error=>{
          console.log('Error:' + error);
          failure();
      });
    }

    list(skip: number=0, limit: number=10, success: (any), failure: (any))
  {
    this.networkService.get(VehicleURLs.LIST.replace('{SKIP}',skip.toString()).replace('{LIMIT}',limit.toString()),response=>{

      success(response) ;

    },error=>{
        console.log('Error:' + error);
        failure();
    })
  }
  GetIcon(vehicleType)
  {
    switch(vehicleType)
        {
          case 'Two Wheeler':
                return '/assets/icon/two-wheeler.png';
                break;
          case 'Three Wheeler':
                return '/assets/icon/three-wheeler.png';
                break;
          case 'Four Wheeler':
                return '/assets/icon/four-wheeler.png';
                break;
          case 'Bus':
              return '/assets/icon/bus.png';
                break;
           case 'Truck':
                return '/assets/icon/truck.png';
                break;
            default :
                return '/assets/icon/four-wheeler.png';
                break;
        }
  }
  search(success: (any), failure: (any))
  {
    this.networkService.get(VehicleURLs.SEARCH.replace('{SKIP}',this.searchFilter.skip.toString()).replace('{LIMIT}',this.searchFilter.limit.toString()).replace('{REG_NO}',this.searchFilter.Registration_Number.toString()),response=>{
      success(response);
    },error=>{
        console.log('Error:' + error);
        failure();
    });
  }
  searchByFilter( success: (any), failure: (any))
  {
    this.networkService.get(VehicleURLs.LIST.replace('{SKIP}',this.searchFilter.skip.toString()).replace('{LIMIT}',this.searchFilter.limit.toString()).replace('{SEARCH}',this.searchFilter.ToSearchParam()),response=>{
      success(response);
    },error=>{
        console.log('Error:' + error);
        failure();
    });
  }
  read(reg_no: string, success: (any), failure: (any))
  {
    this.networkService.get(VehicleURLs.READ_BY_INDEX.replace('{REG_NO}',reg_no),response=>{
      success(response);
    },error=>{
        console.log('Error:' + error);
        failure();
    });
  }
  readByIndex(index: number, success: (any), failure: (any))
  {
    this.networkService.get(VehicleURLs.READ_BY_INDEX.replace('{INDEX}',index.toString()),response=>{
      success(response);
    },error=>{
        console.log('Error:' + error);
        failure();
    });
  }
  Update(vehicle: Vehicle, success: (any), failure: (any)) {
    this.networkService.put(VehicleURLs.UPDATE.replace('{ROW_INDEX}', vehicle.rowIndex.toString()), vehicle.toJSON(), response => {
      success(response);
    }, error => {
      console.log('Error:' + error);
      failure();
    });
  }
  SaveScheduleSearch(scheduleSearch: ScheduleSearch, success: (any), failure: (any)) {
    this.networkService.post(VehicleURLs.SAVE_SCHEDULE_SEARCH, scheduleSearch.toJSON(), response => {
      success(response);
    }, error => {
      console.log('Error:' + error);
      failure();
    });
  }

  UpdateScheduleSearch(scheduleSearch: ScheduleSearch, success: (any), failure: (any)) {
    this.networkService.put(VehicleURLs.DELETE_UPDATE_SCHEDULE_SEARCH.replaceAll('{ROW_INDEX}', scheduleSearch.rowIndex.toString()), scheduleSearch.toUpdateJSON(), response => {
      success(response);
    }, error => {
      console.log('Error:' + error);
      failure();
    });
  }

  deleteScheduleSearch(selectedScheduleSearch: ScheduleSearch, success: (any), failure: (any)) {
    this.networkService.delete(VehicleURLs.DELETE_UPDATE_SCHEDULE_SEARCH.replaceAll('{ROW_INDEX}', selectedScheduleSearch.rowIndex.toString()),selectedScheduleSearch, response => {
      success(response);
    }, error => {
      console.log('Error:' + error);
      failure();
    });
  }

  listBykeyword(searchKeyword: string, skip: number = 0, limit: number = 10, success: (any), failure: (any)) {
    if(searchKeyword.length > 0){
      this.networkService.get(VehicleURLs.LIST.replace('{SKIP}', skip.toString()).replace('{LIMIT}', limit.toString()).replaceAll('{SEARCH_KEY}', searchKeyword), response => {
        success(response);
      }, error => {
        console.log('Error:' + error);
        failure();
      });
    }
    else{
      this.networkService.get(VehicleURLs.LIST.replace('{SKIP}', skip.toString()).replace('{LIMIT}', limit.toString()), response => {
        success(response);
      }, error => {
        console.log('Error:' + error);
        failure();
      });
    }
  }

  checkScheduleSearchForNotification(success: (any), failure: (any)) {
    this.networkService.get(VehicleURLs.LIST, response => {
      success(response);
    }, error => {
      console.log('Error:' + error);
      failure();
    });
  }
}
