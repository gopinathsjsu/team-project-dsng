CREATE TABLE administrator (
    admin_id INT NOT NULL auto_increment,
    club_id INT REFERENCES club(club_id),    
    fname VARCHAR(50),
    lname VARCHAR(50),
    email VARCHAR(50),     
    pwd VARCHAR(50),
    address VARCHAR(100),
    age INT,
    gender VARCHAR(10),
    phone varchar(15),
    PRIMARY KEY (admin_id)
);

CREATE TABLE club (
   club_id INT NOT NULL auto_increment,
   city VARCHAR(50),
   area VARCHAR(50),
   country VARCHAR(50),
   PRIMARY KEY (club_id));
   
CREATE TABLE customer (
    customer_id INT NOT NULL auto_increment,
    membership_id INT REFERENCES membership(membership_id),
    fname VARCHAR(50),
    lname VARCHAR(50),
    email VARCHAR(50),     
    pwd VARCHAR(50), 
    address VARCHAR(100),
    age INT,
    gender VARCHAR(10),
    phone varchar(15),
    start_date DATE,
    end_date DATE,
    PRIMARY KEY (customer_id)
);

CREATE TABLE membership (
    membership_id INT NOT NULL auto_increment,
    plan VARCHAR(50),
    plan_description VARCHAR(255),
    time_period VARCHAR(50),
    PRIMARY KEY (membership_id)
);

CREATE TABLE instructor (  
    instructor_id INT NOT NULL auto_increment,     
    fname VARCHAR(50),    
    lname VARCHAR(50),  
    email VARCHAR(50),     
    pwd VARCHAR(50), 
    class_assigned VARCHAR(50),     
    details VARCHAR(50),      
    PRIMARY KEY (instructor_id)
);

CREATE TABLE class_schedule (  
    schedule_id INT NOT NULL auto_increment,     
    club_id INT REFERENCES club(club_id),     
    class_name VARCHAR(50),     
    class_day VARCHAR(50),     
    start_time VARCHAR(50), 
    end_time VARCHAR(50), 
    instructor_id INT REFERENCES instructor(instructor_id),      
    PRIMARY KEY (schedule_id)
);

CREATE TABLE log (
    log_id INT NOT NULL auto_increment,
    customer_id INT REFERENCES customer(customer_id),
    club_id INT REFERENCES club(club_id),
    schedule_id INT REFERENCES class_schedule(schedule_id), 
    fname VARCHAR(50),
    lname VARCHAR(50),
    timestamp DATETIME,
    checkin DATETIME,
    checkout DATETIME,
    total_time VARCHAR(50),
    week_day VARCHAR(50),
    PRIMARY KEY (log_id)
);

CREATE TABLE class_enrollment (  
    enrollment_id INT NOT NULL auto_increment,     
    customer_id INT REFERENCES customer(customer_id),     
    schedule_id INT REFERENCES class_schedule(schedule_id),
    PRIMARY KEY (enrollment_id)
);

CREATE TABLE log_activity (
   log_activity_id INT NOT NULL auto_increment,
   timestamp DATETIME,
   customer_id INT REFERENCES customer(customer_id),
   club_id INT REFERENCES club(club_id),
   activity VARCHAR(50),
   total_time INT,
   PRIMARY KEY (log_activity_id)
);
