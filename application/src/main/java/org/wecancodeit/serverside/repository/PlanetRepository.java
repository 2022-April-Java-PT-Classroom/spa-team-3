package org.wecancodeit.serverside.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.serverside.model.Planet;

@Repository
public interface PlanetRepository extends CrudRepository<Planet, Long> {

}
