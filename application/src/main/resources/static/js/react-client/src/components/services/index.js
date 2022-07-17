import axios from "axios";


const URL_END_POINT = 'http://localhost:8080/api/planets';

class PlanetService {

    getAllPlanets(){
        return axios.get(URL_END_POINT);
    }
}
export default new PlanetService();