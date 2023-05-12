package com.ivanfranchin.bookapi.service;


import com.ivanfranchin.bookapi.model.Clock;
import com.ivanfranchin.bookapi.model.Location;

import java.util.Optional;

public interface LocationService {

    Optional<Location> findByLocationId(long locationId);

}
