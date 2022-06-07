
const returnFirstTwoDrivers = (arr) => arr.slice(0, 2)

const returnLastTwoDrivers = (arr) => arr.slice(arr.length-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = (mult) => ((fare) => fare * mult)

let  fareDoubler = (fare) => createFareMultiplier(2)(fare);

let fareTripler = (fare) => createFareMultiplier(3)(fare);


function selectDifferentDrivers(arr, func){

    if (func === returnFirstTwoDrivers){

        return returnFirstTwoDrivers(arr)

    }else if(func === returnLastTwoDrivers){

        return returnLastTwoDrivers(arr)
    }
}