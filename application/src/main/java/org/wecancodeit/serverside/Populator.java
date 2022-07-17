package org.wecancodeit.serverside;


import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.model.Planet;
import org.wecancodeit.serverside.repository.PlanetRepository;

import javax.annotation.Resource;


@Component
public class Populator implements CommandLineRunner {


    @Resource
    private PlanetRepository planetRepo;
    @Override
    public void run(String... args) throws Exception {

        Planet mercury = new Planet("Mercury", "the smallest planet","1516 mi");
        planetRepo.save(mercury);








import org.springframework.stereotype.Component;
import org.springframework.boot.CommandLineRunner;
import org.wecancodeit.model.Coloring;
import org.wecancodeit.repository.ColoringRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private ColoringRepository coloringStorage;

    @Override
    public void run(String... args) throws Exception {

        Coloring colorPage01 = new Coloring("Test", "Test");

        coloringStorage.save(colorPage01);


    }
}
