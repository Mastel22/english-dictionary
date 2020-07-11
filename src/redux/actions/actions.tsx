import axios from 'axios';
import store from '../store/index';
import * as types from './types';

const getDefinition = () => {
    axios({
      "method":"GET",
      "url":"https://wordsapiv1.p.rapidapi.com/words/food/definitions",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key":"4f176a7ac9msh236ef374f62850bp1dd0f2jsn38135b0dee61",
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
