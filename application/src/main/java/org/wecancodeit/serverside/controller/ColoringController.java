package org.wecancodeit.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import javax.annotation.Resource;

import java.util.Collection;
import org.wecancodeit.model.Coloring;
import org.wecancodeit.repository.ColoringRepository;

@RestController
public class ColoringController {

    @Resource
    private ColoringRepository coloringRepo;

    @GetMapping("/coloring")
    public Collection<Coloring> getColoring() {
        return (Collection<Coloring>) coloringRepo.findAll();
    }
}
