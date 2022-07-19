package org.wecancodeit.serverside.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.exception.ResourceNotFoundException;
import org.wecancodeit.serverside.model.Planet;
import org.wecancodeit.serverside.repository.PlanetRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/planets")
public class PlanetController {


    @Resource
    private PlanetRepository planetRepo;

    @GetMapping
    public List<Planet> getAllPlanets() {
        return (List<Planet>) planetRepo.findAll();
    }

    @PostMapping
    public Collection<Planet> addPlanet(@RequestBody String body) throws JSONException {
        JSONObject newPlanet = new JSONObject(body);
        String planetName = newPlanet.getString("name");
        String planetDescription = newPlanet.getString("description");
        String planetRadius = newPlanet.getString("radius");


        Optional<Planet> planetToAdd = planetRepo.findByName(planetName);
        if (planetToAdd.isEmpty()) {
            Planet addedPlanet = new Planet(planetName, planetDescription, planetRadius);
            planetRepo.save(addedPlanet);


        }


        return (Collection<Planet>) planetRepo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Planet> getPlanetById(@PathVariable Long id) {
        Planet planet = planetRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Planet doesn't " +
                "exist " + id));
        return ResponseEntity.ok(planet);
    }
    @PutMapping("{id}")
    public ResponseEntity<Planet> updatePlanetList(@PathVariable Long id, @RequestBody Planet planet) {


        Planet planetToBeUpdated = planetRepo.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Planet do" +
                        "doesn't exist with id: " + id));

        planetToBeUpdated.setName(planet.getName());
        planetToBeUpdated.setDescription(planet.getDescription());
        planetToBeUpdated.setRadius(planet.getRadius());

        planetRepo.save(planetToBeUpdated);

        return ResponseEntity.ok(planetToBeUpdated);


    }
    //build delete planet Rest api
    @DeleteMapping("{id}")
    public Collection<Planet> deletePlanet(@PathVariable Long id, String body) throws JSONException {

        Optional<Planet> planetToBeDeleted = planetRepo.findById(id);
        if(planetToBeDeleted.isPresent()){
            planetRepo.delete(planetToBeDeleted.get());



        }
        return (Collection<Planet>) planetRepo.findAll();

    }

//    public ResponseEntity<HttpStatus> deletePlanet(@PathVariable Long id){
//        Planet planet  = planetRepo.findById(id).orElseThrow(() ->
//                new ResourceNotFoundException("Planet doesn't exist with id: " + id));
//        planetRepo.delete(planet);
//
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//
//
//    }


}
