package org.wecancodeit.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.model.Planet;

import java.util.Optional;

@Repository
public interface PlanetRepository extends CrudRepository<Planet, Long> {
    Optional<Planet> findByName(String planetName);

}
