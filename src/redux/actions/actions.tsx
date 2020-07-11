import axios from 'axios';
import store from '../store/index';
import * as types from './types';

const getDefinition = () => {
    axios({
      "method":"GET",
      "url":"",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"",
      "x-rapidapi-key":"",
      "useQueryString":true
      }
      })
        .then((response)=>{
          const definitions = response.data.list[0];
            store.dispatch({type:types.GET_DEFINITIONS, definitions});
        })
        .catch((error)=>{
          console.log(error)
        })
      
}


export { getDefinition};
