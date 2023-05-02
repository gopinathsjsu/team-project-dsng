id_series = {
    "club_id": 90,
    "admin": 1000,
    "customer": 2000,
    "instructor": 3000,
    "membership": 4000,
    "class_schedule": 5000,

}

############ POST ##############

create_admin = {
    "admin_id": 1001,
    "admin_name": "nimish",
    "club_id": "123",
    "address": "28 N Almaden Avenue",
    "age": 24,
    "gender": "male",
    "phone": "788-792-2978"
}

create_customer = {
    "customer_id": 2001,
    "customer_name": "Girish Bisane",
    "membership_id": None,
    "address": "1330 The Alameda",
    "age": 24,
    "gender": "male",
    "phone": "6696493871",
    "start_date": "2023-03-01",
    "end_dat": "2023-09-01",
}

# instructor series
create_instructor = {
    "instructor_id": 3001,
    "instructor_name": "<instructor_name>",
    "class_assigned": "",
    "details": "",
}

create_membership_plan = [{
    "membership_id": 4001,
    "plan": "Silver",
    "plan_description": "gym, yoga, Aerobics",
    "time_period": "3 months",
},
{
    "membership_id": 4002,
    "plan": "Gold",
    "plan_description": "gym, yoga, Aerobics",
    "time_period": "6 months",
},
{
    "membership_id": 4003,
    "plan": "Platinum",
    "plan_description": "gym, yoga, Aerobics",
    "time_period": "9 months",
}
]

create_class_schedule = {
    "schedule_id": 5001,
    "club_id": 91,
    "class_name": "gym",
    "class_timings": {
        "Mon 3pm-4pm": "<instructor name>",
        "Wed 3pm-4pm": "<instructor name",
    },
    "instructor_id": 3001,
}



############ GET ##############

login = {
    
}



############ DELETE ##############

del_admin = {
    "admin_id": 1001,
}

del_membership_plan = {
    "membership_id": 4001
}

del_customer = {
    "customer_id": 2001
}
