CREATE TABLE Event(
    event_id INT PRIMARY KEY,
    event_name VARCHAR(100),
    event_description VARCHAR(150),
    event_date DATE,
    location VARCHAR(100),
    event_poster_url VARCHAR(300)
);

INSERT INTO Event (event_id, event_name, event_description, event_date, location, event_poster_url)
VALUES
    (1, 'Tech Conference 2024', 'Annual tech conference showcasing the latest innovations.', '2024-03-15', 'San Francisco', 'https://example.com/conference_poster.jpg'),
    (2, 'Food Festival', 'Celebration of local cuisines with food stalls and live music.', '2024-05-20', 'New York City', 'https://example.com/food_festival_poster.jpg'),
    (3, 'Gaming Expo', 'Largest gathering of gamers with tournaments and gaming showcases.', '2024-07-10', 'Los Angeles', 'https://example.com/gaming_expo_poster.jpg'),
    (4, 'Fitness Expo', 'Fitness event featuring workout sessions and fitness product demos.', '2024-09-05', 'Chicago', 'https://example.com/fitness_expo_poster.jpg'),
    (5, 'Book Fair', 'Book lovers paradise with book signings and author talks.', '2024-11-15', 'London', 'https://example.com/book_fair_poster.jpg');

SELECT *
FROM  Event