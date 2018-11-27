cityList=[
          {"city": "Nashville, TN", "latitudes":36.17, "longitudes": -86.78},
          {"city": "New York, NY", "latitudes":40.71, "longitudes": -74.00},
          {"city": "Atlanta, GA", "latitudes":33.75, "longitudes": -84.39},
          {"city": "Denver, CO", "latitudes":39.74, "longitudes": -104.98},
          {"city": "Seattle, WA", "latitudes":47.61, "longitudes": -122.33},
          {"city": "Los Angeles, CA", "latitudes":34.05, "longitudes": -118.24},
          {"city": "Memphis, TN", "latitudes":35.15, "longitudes": -90.05}
];                                 //широта             долгота
let result;
let latitudesPoint;
let longitudesPoint

function inputValue() {
  let latitudesPoint=document.getElementById("inputLatitudes").value;
  let longitudesPoint=document.getElementById("inputLongitudes").value;
  if (Math.abs(latitudesPoint)<=90 && Math.abs(longitudesPoint)<=180) {
      newCity.closeCity(latitudesPoint, longitudesPoint)
    } else {
      let diVtaskResult1=document.getElementsByClassName("taskResult2")[0];
      diVtaskResult1.innerHTML = "Wrong data. Numeric values latitudes ​​from -90 to 90 and longitudes from -179,99 to 180 are allowed. Please correct.";
      };
};

function mapCity (list) {

  this.southCity=function () {
    // latitudes>0 south
    list.sort(function(a,b) { return a.latitudes-b.latitudes});
    result=list[list.length-1];
    showResult1(result);
  };

   this.northCity=function () {
    //latitudes<0 north
    list.sort(function(a,b) { return a.latitudes-b.latitudes})
    result=list[0];
    showResult1(result);
  };

  this.eastCity=function () {
    // longitudes>0 east
    list.sort(function(a,b) { return a.longitudes-b.longitudes})
    result=list[list.length-1];
    showResult1(result);
  };

  this.westCity=function  () {
    //longitudes<0 west
    list.sort(function(a,b) { return a.longitudes-b.longitudes});
    result=list[0];
    showResult1(result);
  };

  function showResult1 (value) {
    let diVtaskResult1=document.getElementsByClassName("taskResult1")[0]
    diVtaskResult1.innerHTML = value.city  +"  " +value.latitudes + " "+value.longitudes;
  };

  //Name of the city that is closest to that location
  this.closeCity=function(latitudesPoint, longitudesPoint) {
    let  closeLatitudesMin, closeLatitudesMin2;
    let  closeLongitudesMin, closeLongitudesMin2;
    let  indexLatitudesMin, indexLatitudesMin2;
    let  indexLongitudesMin, indexLongitudesMin2;
    let  distanceLatitudes, distance2;
    let  distanceLongitudes;

    let distanceToPointStraightMin, distanceToPointStraightMin2;
    let indexDistanceToPointStraightMin, indexDistanceToPointStraightMin2;

    list.forEach(function(item, index, arr) {
      item.distanceToPointLatitudes=latitudesPoint-item.latitudes;
      item.distanceToPointLongitudes=longitudesPoint-item.longitudes;
      item.distanceToPointStraight=Math.sqrt(Math.pow(item.distanceToPointLatitudes, 2)+Math.pow(item.distanceToPointLongitudes, 2));

//second solution

DistanceToPoint(lat1=latitudesPoint, long1=longitudesPoint, lat2=item.latitudes, long2=item.longitudes)

function DistanceToPoint (fA, lambdaA, fB, lambdaB)
 {
let radiusEarth= 6371000;
let  cosl1, cosl2,sinl1, sinl2, cosdelta, sindelta, coordY, coordX;

    cosl1 = Math.cos(fA * Math.PI/180);
    cosl2 = Math.cos(fB * Math.PI/180);
    sinl1 = Math.sin(fA * Math.PI/180);
    sinl2 = Math.sin(fB * Math.PI/180);
    cosdelta = Math.cos(lambdaB*Math.PI/180-lambdaA * Math.PI/180);
    sindelta = Math.sin(lambdaB*Math.PI/180-lambdaA * Math.PI/180);

    coordY = Math.sqrt(Math.pow(cosl2 * sindelta, 2) + Math.pow(cosl1 * sinl2 - sinl1 * cosl2 * cosdelta, 2));
    coordX = sinl1 * sinl2 + cosl1 * cosl2 * cosdelta;
    distance2 = Math.atan2(coordY, coordX)*radiusEarth/1000;
};

      if (index===0) {
        distanceToPointStraightMin=item.distanceToPointStraight;
        indexDistanceToPointStraightMin=index;

        // second solution
        distanceToPointStraightMin2=distance2;
        indexDistanceToPointStraightMin=index;

      } else {
      if (distanceToPointStraightMin>item.distanceToPointStraight) {
         distanceToPointStraightMin=item.distanceToPointStraight;
         indexDistanceToPointStraightMin=index;
       };

       //second solution
       if (distanceToPointStraightMin2>distance2) {
          distanceToPointStraightMin2=distance2;
          indexDistanceToPointStraightMin2=index;
        };
 };
});

showResult2(list[indexDistanceToPointStraightMin], distanceToPointStraightMin,
  list[indexDistanceToPointStraightMin2], distanceToPointStraightMin2);
};

  function showResult2 (state1, dist1, state2, dist2) {
    let diVtaskResult1=document.getElementsByClassName("taskResult2-1")[0];
    diVtaskResult1.innerHTML = "1. Exact way: "+state2.city+"  "+state2.latitudes+" "+state2.longitudes+", distatnce="+ Math.round(dist2)+" kilometer";

    let diVtaskResult2=document.getElementsByClassName("taskResult2-2")[0];
    diVtaskResult2.innerHTML = "2. Approximate method: "+state1.city+"  "+state1.latitudes+" "+state1.longitudes+", distatnce="+ Math.round(dist1)+"°";
  }

  //The state abbreviations from the list of cities
  this.stateAbbreviations=function () {
    let newStringAbbrev="";
    let abbreviation
    for (let fullNameState of list) {
      let index=fullNameState.city.indexOf(",")
      abbreviation=fullNameState.city.slice(index+1, index+4);
      fullNameState.abbreviation=abbreviation;
      if (newStringAbbrev.indexOf(abbreviation)===-1) {
        newStringAbbrev=newStringAbbrev+abbreviation
      };
     };
  showResult3(newStringAbbrev);
  };

  function showResult3 (value) {
    let diVtaskResult1=document.getElementsByClassName("taskResult3")[0];
    diVtaskResult1.innerHTML = value;
  };
};

 let newCity= new mapCity(cityList);

//List of cities
let ulElement=document.getElementsByClassName("ulListCity")[0];
let liElement;
cityList.map(function(element, index) {
  liElement = document.createElement('li');
  liElement.innerHTML = element.city+" : "+element.latitudes+" : "+element.longitudes;
  return ( ulElement.appendChild(liElement));
});
