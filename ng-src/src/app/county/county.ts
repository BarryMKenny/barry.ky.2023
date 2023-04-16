export interface County {
  id: string,
  name: string
}
export enum CountyEnum {
Antrim = "Antrim",
Armagh = "Armagh",
Carlow = "Carlow",
Cavan = "Cavan",
Clare = "Clare",
Cork = "Cork",
Derry = "Derry",
Donegal = "Donegal",
Down = "Down",
Dublin = "Dublin",
Fermanagh = "Fermanagh",
Galway = "Galway",
Kerry = "Kerry",
Kildare = "Kildare",
Kilkenny = "Kilkenny",
Laois = "Laois",
Leitrim = "Leitrim",
Limerick = "Limerick",
Longford = "Longford",
Louth = "Louth",
Mayo = "Mayo",
Meath = "Meath",
Monaghan = "Monaghan",
Offaly = "Offaly",
Roscommon = "Roscommon",
Sligo = "Sligo",
Tipperary = "Tipperary",
Tyrone = "Tyrone",
Waterford = "Waterford",
Westmeath = "Westmeath",
Wexford = "Wexford",
Wicklow = "Wicklow"
}

export function getCounty(countyEnum: CountyEnum): County {
  switch(countyEnum) {
    case CountyEnum.Antrim:
      return {id:"1",name:CountyEnum.Antrim};
    case CountyEnum.Armagh:
      return {id:"2",name:CountyEnum.Armagh};
    case CountyEnum.Carlow:
      return {id:"3",name:CountyEnum.Carlow};
    case CountyEnum.Cavan:
      return {id:"4",name:CountyEnum.Cavan};
    case CountyEnum.Clare:
      return {id:"5",name:CountyEnum.Clare};
    case CountyEnum.Cork:
      return {id:"6",name:CountyEnum.Cork};
    case CountyEnum.Derry:
      return {id:"7",name:CountyEnum.Derry};
    case CountyEnum.Donegal:
      return {id:"8",name:CountyEnum.Donegal};
    case CountyEnum.Down:
      return {id:"9",name:CountyEnum.Down};
    case CountyEnum.Dublin:
      return {id:"10",name:CountyEnum.Dublin};
    case CountyEnum.Fermanagh:
      return {id:"11",name:CountyEnum.Fermanagh};
    case CountyEnum.Galway:
      return {id:"12",name:CountyEnum.Galway};
    case CountyEnum.Kerry:
      return {id:"13",name:CountyEnum.Kerry};
    case CountyEnum.Kildare:
      return {id:"14",name:CountyEnum.Kildare};
    case CountyEnum.Kilkenny:
      return {id:"15",name:CountyEnum.Kilkenny};
    case CountyEnum.Laois:
      return {id:"16",name:CountyEnum.Laois};
    case CountyEnum.Leitrim:
      return {id:"17",name:CountyEnum.Leitrim};
    case CountyEnum.Limerick:
      return {id:"18",name:CountyEnum.Limerick};
    case CountyEnum.Longford:
      return {id:"19",name:CountyEnum.Longford};
    case CountyEnum.Louth:
      return {id:"20",name:CountyEnum.Louth};
    case CountyEnum.Mayo:
      return {id:"21",name:CountyEnum.Mayo};
    case CountyEnum.Meath:
      return {id:"22",name:CountyEnum.Meath};
    case CountyEnum.Monaghan:
      return {id:"23",name:CountyEnum.Monaghan};
    case CountyEnum.Offaly:
      return {id:"24",name:CountyEnum.Offaly};
    case CountyEnum.Roscommon:
      return {id:"25",name:CountyEnum.Roscommon};
    case CountyEnum.Sligo:
      return {id:"26",name:CountyEnum.Sligo};
    case CountyEnum.Tipperary:
      return {id:"27",name:CountyEnum.Tipperary};
    case CountyEnum.Tyrone:
      return {id:"28",name:CountyEnum.Tyrone};
    case CountyEnum.Waterford:
      return {id:"29",name:CountyEnum.Waterford};
    case CountyEnum.Westmeath:
      return {id:"30",name:CountyEnum.Westmeath};
    case CountyEnum.Wexford:
      return {id:"31",name:CountyEnum.Wexford};
    case CountyEnum.Wicklow:
      return {id:"32",name:CountyEnum.Wicklow};
  }
}

// @ts-ignore
export function getCountyName(countyId: string): string {
  switch(countyId) {
    case "1":
      return CountyEnum.Antrim;
    case "2":
      return CountyEnum.Armagh;
    case "3":
      return CountyEnum.Carlow;
    case "4":
      return CountyEnum.Cavan;
    case "5":
      return CountyEnum.Clare;
    case "6":
      return CountyEnum.Cork;
    case "7":
      return CountyEnum.Derry;
    case "8":
      return CountyEnum.Donegal;
    case "9":
      return CountyEnum.Down;
    case "10":
      return CountyEnum.Dublin;
    case "11":
      return CountyEnum.Fermanagh;
    case "12":
      return CountyEnum.Galway;
    case "13":
      return CountyEnum.Kerry;
    case "14":
      return CountyEnum.Kildare;
    case "15":
      return CountyEnum.Kilkenny;
    case "16":
      return CountyEnum.Laois;
    case "17":
      return CountyEnum.Leitrim;
    case "18":
      return CountyEnum.Limerick;
    case "19":
      return CountyEnum.Longford;
    case "20":
      return CountyEnum.Louth;
    case "21":
      return CountyEnum.Mayo;
    case "22":
      return CountyEnum.Meath;
    case "23":
      return CountyEnum.Monaghan;
    case "24":
      return CountyEnum.Offaly;
    case "25":
      return CountyEnum.Roscommon;
    case "26":
      return CountyEnum.Sligo;
    case "27":
      return CountyEnum.Tipperary;
    case "28":
      return CountyEnum.Tyrone;
    case "29":
      return CountyEnum.Waterford;
    case "30":
      return CountyEnum.Westmeath;
    case "31":
      return CountyEnum.Wexford;
    case "32":
      return CountyEnum.Wicklow;
  }
}
