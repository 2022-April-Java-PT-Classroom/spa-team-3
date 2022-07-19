package org.wecancodeit.serverside.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import javax.annotation.Resource;

import java.util.Collection;
import org.wecancodeit.serverside.model.Coloring;
import org.wecancodeit.serverside.repository.ColoringRepository;

@RestController
public class ColoringController {

    @Resource
    private ColoringRepository coloringRepo;

    @GetMapping("/coloring")
    public Collection<Coloring> getColoring() {
        return (Collection<Coloring>) coloringRepo.findAll();
    }
}
