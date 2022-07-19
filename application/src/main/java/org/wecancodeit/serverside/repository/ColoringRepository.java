package org.wecancodeit.serverside.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.model.Coloring;

@Repository

public interface ColoringRepository extends CrudRepository<Coloring, Long> {

}
