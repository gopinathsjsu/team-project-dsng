package com.ivanfranchin.bookapi.service;

import com.ivanfranchin.bookapi.model.Location;
import com.ivanfranchin.bookapi.model.LocationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class LocationServiceImpl implements LocationService {

    private final LocationRepository locationRepository;

    @Override
    public Optional<Location> findByLocationId(long locationId) {
        return locationRepository.findById(locationId);
    }
}
