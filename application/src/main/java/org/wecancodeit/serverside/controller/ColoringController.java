package org.wecancodeit.serverside.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import javax.annotation.Resource;

import java.util.Collection;

import org.wecancodeit.serverside.exception.ResourceNotFoundException;
import org.wecancodeit.serverside.model.Coloring;
import org.wecancodeit.serverside.repository.ColoringRepository;

@RestController
@CrossOrigin("*")
public class ColoringController {

    @Resource
    private ColoringRepository coloringRepo;

    @GetMapping("/api/printables")
    public Collection<Coloring> getColoring() {
        return (Collection<Coloring>) coloringRepo.findAll();
    }

    @GetMapping("/api/printable/{id}")
    public ResponseEntity<Coloring> getColoringById(@PathVariable Long coloringId) {
        Coloring newColoring = coloringRepo.findById(coloringId).orElseThrow(() -> new ResourceNotFoundException("Page does not exist"));
        return ResponseEntity.ok(newColoring);
    }
}
