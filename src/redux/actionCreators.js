import {createActions} from 'reduxsauce'

export const {
    Types,
    Creators
} = createActions({


    saveCategory: ['category'],
    
    receiveCategory: ['category'],

    getBrandsRequest: null,
    getBrandsSuccess: ['brands'],
    getBrandsFailure: null,

    saveBrandCodeSuccess: ['brandCode'],

    changeStep: ['step'],

    getVehiclesRequest: null,
    getVehiclesSuccess: ['vehicles'],
    getVehiclesFailure: null,
    
    receiveBrandCode: ['brandCode'],

    getYearsRequest: null,
    getYearsSuccess: ['years'],
    getYearsFailure: null,
    
    receiveVehicleCode: ['vehicleCode'],

    saveVehicleCode: ['vehicleCode'],

    getPriceRequest: null,
    getPriceSuccess: ['price'],
    getPriceFailure: null,

    receiveYearCode: ['yearCode'],

    saveYearCode: ['yearCode'],

})


export default Creators