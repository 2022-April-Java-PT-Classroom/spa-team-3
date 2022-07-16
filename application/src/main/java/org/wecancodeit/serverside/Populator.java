package org.wecancodeit.serverside;

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
