package com.ivanfranchin.bookapi.rest.dto;

import java.util.Date;

public record RegisteredClassesDto (long id, long classes_id, long user_id, String title, String description, String image, Long month, Boolean isMember,
                                    Date startDate, Date endDate, int locationId) {

}

