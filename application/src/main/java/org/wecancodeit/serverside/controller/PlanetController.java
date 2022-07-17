package org.wecancodeit.serverside.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.model.Planet;
import org.wecancodeit.serverside.repository.PlanetRepository;

import javax.annotation.Resource;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/planets")
public class PlanetController {



    @Resource
    private PlanetRepository planetRepo;

    @GetMapping()
    public List<Planet> getAllPlanets(){
        return (List<Planet>) planetRepo.findAll();
    }
}
