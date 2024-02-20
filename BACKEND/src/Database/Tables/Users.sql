CREATE TABLE Users(
    user_id INT PRIMARY KEY,
    user_name VARCHAR(20),
    email VARCHAR(100),
    password VARCHAR(50),
    tag_name VARCHAR(50),
    location VARCHAR(50)
);

INSERT INTO Users (user_id, user_name, email, password, tag_name, location)
VALUES
    (201, 'alex_williams', 'alex.williams@example.com', 'password123', 'tech enthusiast', 'New York'),
    (202, 'laura_carter', 'laura.carter@example.com', 'letmein', 'foodie', 'Los Angeles'),
    (203, 'max_johnson', 'max.johnson@example.com', 'securepassword', 'gamer', 'Chicago'),
    (204, 'megan_clark', 'megan.clark@example.com', 'p@ssw0rd', 'fitness fanatic', 'Miami'),
    (205, 'jason_taylor', 'jason.taylor@example.com', 'qwerty123', 'bookworm', 'Seattle'),
    (206, 'olivia_moore', 'olivia.moore@example.com', 'password1234', 'traveler', 'London');


SELECT *
FROM Users;
 
DROP Users ;