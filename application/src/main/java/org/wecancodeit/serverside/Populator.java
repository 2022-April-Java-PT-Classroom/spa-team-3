package org.wecancodeit.serverside;


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

        // Planets ================================================================================

        Planet planet00 = new Planet("Zibadrameda ", "A bright star over 943 light years away", "1516 mi", "http://localhost:8080/images/planet5.png");
        Planet planet01 = new Planet("Planet Cliff", "The thunder and lightning planet", "1234 mi", "http://localhost:8080/images/planet1.png");
        Planet planet02 = new Planet("Alan M17", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "1234 mi", "http://localhost:8080/images/planet2.png");
        Planet planet03 = new Planet("Jordanopolis", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "1234 mi", "http://localhost:8080/images/planet3.png");
        Planet planet04 = new Planet("Rings Of Anu", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "1234 mi", "http://localhost:8080/images/planet4.png");

        Planet planet05 = new Planet("Chad II", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "1234 mi", "http://localhost:8080/images/planet5.png");
        Planet planet06 = new Planet("Ursa Penny", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "1234 mi", "http://localhost:8080/images/planet6.png");
        Planet planet07 = new Planet("Hakan Delta", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "1234 mi", "http://localhost:8080/images/planet7.png");
        Planet planet08 = new Planet("Noellorian", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "1234 mi", "http://localhost:8080/images/planet3.png");

        planetRepo.save(planet00);
        planetRepo.save(planet01);
        planetRepo.save(planet02);
        planetRepo.save(planet03);
        planetRepo.save(planet04);

        planetRepo.save(planet05);
        planetRepo.save(planet06);
        planetRepo.save(planet07);
        planetRepo.save(planet08);

        // Coloring Pages =========================================================================

        Coloring colorPage01 = new Coloring("Color Mercury", "http://localhost:8080/images/color-merc.png");
        Coloring colorPage02 = new Coloring("Color Venus", "http://localhost:8080/images/color-venus.png");
        Coloring colorPage03 = new Coloring("Color Earth", "http://localhost:8080/images/color-earth.png");
        Coloring colorPage04 = new Coloring("Color Moon", "http://localhost:8080/images/color-moon.png");
        Coloring colorPage05 = new Coloring("Color Mars", "http://localhost:8080/images/color-mars.png");

        Coloring colorPage06 = new Coloring("Color Jupiter", "http://localhost:8080/images/color-jup.png");
        Coloring colorPage07 = new Coloring("Color Saturn", "http://localhost:8080/images/color-sat.png");
        Coloring colorPage08 = new Coloring("Color Uranus", "http://localhost:8080/images/color-uran.png");
        Coloring colorPage09 = new Coloring("Color Neptune", "http://localhost:8080/images/color-nep.png");
        Coloring colorPage10 = new Coloring("Color Pluto", "http://localhost:8080/images/color-pluto.png");
        Coloring colorPage11 = new Coloring("Color A Galaxy", "http://localhost:8080/images/color-galaxy.png");
        Coloring colorPage12 = new Coloring("Color Your Planet", "http://localhost:8080/images/color-planet.png");

        Coloring colorPage13 = new Coloring("Mandala 01", "http://localhost:8080/images/color-man1.png");
        Coloring colorPage14 = new Coloring("Mandala 02", "http://localhost:8080/images/color-man2.png");
        Coloring colorPage15 = new Coloring("Mandala 03", "http://localhost:8080/images/color-man3.png");
        Coloring colorPage16 = new Coloring("Mandala 04", "http://localhost:8080/images/color-man4.png");
        Coloring colorPage17 = new Coloring("Mandala 05", "http://localhost:8080/images/color-man5.png");

        coloringStorage.save(colorPage01);
        coloringStorage.save(colorPage02);
        coloringStorage.save(colorPage03);
        coloringStorage.save(colorPage04);
        coloringStorage.save(colorPage05);

        coloringStorage.save(colorPage06);
        coloringStorage.save(colorPage07);
        coloringStorage.save(colorPage08);
        coloringStorage.save(colorPage09);
        coloringStorage.save(colorPage10);
        coloringStorage.save(colorPage11);
        coloringStorage.save(colorPage12);

        coloringStorage.save(colorPage13);
        coloringStorage.save(colorPage14);
        coloringStorage.save(colorPage15);
        coloringStorage.save(colorPage16);
        coloringStorage.save(colorPage17);
    }
}
