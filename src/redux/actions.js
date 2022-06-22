import axios from 'axios';
import { response } from 'express';

const GET_BY_YEAR = 'vehicles-recipe/src/redux/GET_BY_YEAR';
const GET_BY_MODEL = 'vehicles-recipe/src/redux/GET_BY_MODEL';
const GET_BY_NAME = 'vehicles-recipe/src/redux/GET_BY_NAME';
const GET_BY_NAME_AND_YEAR = 'vehicles-recipe/src/redux/GET_BY_NAME_AND_YEAR';
const GET_BY_TYPES_FOR_MAKE = 'vehicles-recipe/src/redux/GET_BY_TYPES_FOR_MAKE';
const GET_BY_MODEL_FOR_MAKE = 'vehicles-recipe/src/redux/GET_BY_MODEL_FOR_MAKE';
const GET_BY_PARTS = 'vehicles-recipe/src/redux/GET_BY_PARTS';
const GET_BY_TYPES_BY_NAME = 'vehicles-recgetMakeByNameUrl;ipe/src/redux/GET_BY_TYPES_BY_NAME';
const GET_MAKES_BY_NAME = 'vehicles-recipe/src/redux/GET_MAKES_BY_NAME';
const GET_BY_VARIABLE_VALUES_LIST = 'vehicles-recipe/src/redux/GET_BY_VARIABLE_VALUES_LIST';
const GET_ALL_MANUFACTURERS = 'vehicles-recipe/src/redux/GET_ALL_MANUFACTURERS';
const GET_BY_MODEL_BY_MAKE_ID = 'vehicles-recipe/src/redux/GET_BY_MODEL_BY_MARK_ID';
const GET_BY_VARIABLES_LIST = 'vehicles-recipe/src/redux/GET_BY_VARIABLES_LIST';
const GET_CANADIAN = 'vehicles-recipe/src/redux/GET_CANADIAN';

const getByYearUrl = '/vehicles/GetMakesForManufacturerAndYear/mer?year=2013&format=json';
const getModelUrl = '/vehicles/GetModelsForMake/honda?format=json';
const getByNameUrl = '/vehicles/GetMakeForManufacturer/honda?format=json';
const getByParts = '/vehicles/GetParts?type=565&fromDate=1/1/2015&toDate=5/5/2015&format=xml&page=1&manufacturer=hon';
const getTypeByNameUrl = '/vehicles/GetMakesForVehicleType/car?format=json';
const getMakeByNameUrl = '/vehicles/GetVehicleTypesForMake/mercedes?format=json';
const getModelsForMakeUrl = '/vehicles/GetModelsForMakeId/440?format=json';
const getNameAndYearUrl = '/vehicles/GetMakesForManufacturerAndYear/mer?year=2013&format=json';
const getTypeForMakeUrl = '/vehicles/GetVehicleTypesForMake/mercedes?format=json';
const getAllManufacturersUrl = '/vehicles/GetAllManufacturers?format=json&page=2';
const getVariablesValuesUrl = '/vehicles/GetVehicleVariableValuesList/2';
const getModelByMakeId = '/vehicles/GetModelsForMakeIdYear/makeId/474/modelyear/2015?format=json';
const getByVariablesList = '/vehicles/GetVehicleVariableList?format=json';
const getCanadians = '/vehicles/GetCanadianVehicleSpecifications/?year=2011&make=Acura&format=json';

const GET_SEARCHED_MODEL = '/src/redux/GET_SEARCHED_MODEL';

export default function vehiclesReducer(state = [], action) {
  switch (action.type) {
    case GET_BY_MODEL:
      return action.data.Results;
    case GET_BY_YEAR:
      return action.data.Results;
    case GET_BY_NAME:
      return action.data.Results;
    case GET_BY_NAME_AND_YEAR:
      return action.data.Results;
    case GET_BY_TYPES_FOR_MAKE:
      return action.data.Results;
    case GET_BY_MODEL_FOR_MAKE:
      return action.data.Results;
    case GET_BY_PARTS:
      return action.data.Results;
    case GET_BY_TYPES_BY_NAME:
      return action.data.Results;
    case GET_MAKES_BY_NAME:
      return action.data.Results;
    case GET_ALL_MANUFACTURERS:
      return action.data.Results;
    case GET_BY_VARIABLE_VALUES_LIST:
      return action.data.Results;
    case GET_BY_MODEL_BY_MAKE_ID:
      return action.data.Results;
    case GET_BY_VARIABLES_LIST:
      return action.data.Results;
    case GET_CANADIAN:
      return action.data.Results;
    case GET_SEARCHED_MODEL: {
      let result = [];
      const url = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${action.model}?format=json`;
      axios.get(url).then((response) => {
        result = response.data.Results;
      });
      return result;
    }
    default:
      return state;
  }
}

export const VehicleByModel = () => (dispatch) => {
  axios.get(`https://vpic.nhtsa.dot.gov/api${getModelUrl}`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_BY_MODEL, data });
    });
};

export const VehicleByYear = () => (dispatch) => {
  axios.get(`https://vpic.nhtsa.dot.gov/api${getByYearUrl}`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_BY_YEAR, data });
    });
};

export const VehicleByName = () => (dispatch) => {
  axios.get(`https://vpic.nhtsa.dot.gov/api${getByNameUrl}`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_BY_NAME, data });
    });
};

export const VehicleByNameAndYear = () => (dispatch) => {
  axios.get(`https://vpic.nhtsa.dot.gov/api${getNameAndYearUrl}`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_BY_NAME_AND_YEAR, data });
    });
};

export const VehicleByTypesForMake = () => (dispatch) => {
  axios.get(`https://vpic.nhtsa.dot.gov/api${getTypeForMakeUrl}`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_BY_TYPES_FOR_MAKE, data });
    });
};

export const VehicleByModelForMake = () => (dispatch) => {
  axios.get(`https://vpic.nhtsa.dot.gov/api${getModelsForMakeUrl}`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_BY_MODEL_FOR_MAKE, data });
    });
};

export const VehicleByParts = () => (dispatch) => {
  axios.get(`https://vpic.nhtsa.dot.gov/api${getByParts}`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_BY_PARTS, data });
    });
};

export const VehicleTypeByName = () => (dispatch) => {
  axios.get(`https://vpic.nhtsa.dot.gov/api${getTypeByNameUrl}`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_BY_TYPES_BY_NAME, data });
    });
};

export const VehicleMakesByName = () => (dispatch) => {
  axios.get(`https://vpic.nhtsa.dot.gov/api${getMakeByNameUrl}`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_MAKES_BY_NAME, data });
    });
};

export function VehicleAllManufacturers() {
  return (dispatch) => {
    axios.get(`https://vpic.nhtsa.dot.gov/api${getAllManufacturersUrl}`)
      .then((response) => {
        const { data } = response;
        dispatch({ type: GET_ALL_MANUFACTURERS, data });
      });
  };
}

export const VehicleVariablesValues = () => (dispatch) => {
  axios.get(`https://vpic.nhtsa.dot.gov/api${getVariablesValuesUrl}`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_BY_VARIABLE_VALUES_LIST, data });
    });
};

export const VehicleModelByMakeId = () => (dispatch) => {
  axios.get(`https://vpic.nhtsa.dot.gov/api${getModelByMakeId}`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_BY_MODEL_BY_MAKE_ID, data });
    });
};

export const VehicleVariablesList = () => (dispatch) => {
  axios.get(`https://vpic.nhtsa.dot.gov/api${getByVariablesList}`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_BY_VARIABLES_LIST, data });
    });
};

export const VehicleCanadians = () => (dispatch) => {
  axios.get(`https://vpic.nhtsa.dot.gov/api${getCanadians}`)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GET_CANADIAN, data });
    });
};

export const getSearchedModel = (model) => ({ type: GET_SEARCHED_MODEL, model });
