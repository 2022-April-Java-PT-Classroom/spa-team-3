package org.wecancodeit;


import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.model.Coloring;
import org.wecancodeit.serverside.repository.ColoringRepository;
import org.wecancodeit.serverside.model.Planet;
import org.wecancodeit.serverside.repository.PlanetRepository;

import javax.annotation.Resource;


@Component
public class Populator implements CommandLineRunner {


    @Resource
    private PlanetRepository planetRepo;
    @Resource
    private ColoringRepository coloringStorage;
    @Override
    public void run(String... args) throws Exception {

        Planet mercury = new Planet("Mercury", "the smallest planet", "1516 mi");
        planetRepo.save(mercury);
        Coloring colorPage01 = new Coloring("Test", "Test");

        coloringStorage.save(colorPage01);


    }
}
