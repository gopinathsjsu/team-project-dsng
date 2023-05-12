package com.ivanfranchin.bookapi;

import io.swagger.v3.oas.models.annotations.OpenAPI30;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
@OpenAPI30
public class BookApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(BookApiApplication.class, args);
    }
}
