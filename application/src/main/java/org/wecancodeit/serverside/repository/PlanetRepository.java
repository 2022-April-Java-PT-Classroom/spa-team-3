package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.serverside.model.Planet;

import java.util.Optional;

@Repository
public interface PlanetRepository extends CrudRepository<Planet, Long> {
    Optional<Planet> findByName(String planetName);

}
