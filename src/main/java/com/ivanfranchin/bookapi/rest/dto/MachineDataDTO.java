package com.ivanfranchin.bookapi.rest.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MachineDataDTO {
        private Long timeOnTreadmill;
        private Long timeOnStair;
        private Long timeOnCycling;


}
