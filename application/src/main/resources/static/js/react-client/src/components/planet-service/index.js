import axios from "axios";


const URL_END_POINT = 'http://localhost:8080/api/planets';

class PlanetService {

    getAllPlanets(){
        return axios.get(URL_END_POINT);
    }
    createPlanet(planet){
        return axios.post(URL_END_POINT, planet);
    }
    getPlanetById(planetId){
        return axios.get(URL_END_POINT +'/' + planetId);
    }
    updatePlanet(planetId, planet){
        return axios.put(URL_END_POINT + '/' + planetId, planet);

    }
    
    deletePlanet(planetId){
        return axios.delete(URL_END_POINT +'/' + planetId);
    }
}
export default new PlanetService();