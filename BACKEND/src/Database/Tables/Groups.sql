CREATE TABLE Groups(
    group_id INT PRIMARY KEY,
    group_name VARCHAR(50),
    group_description VARCHAR(150),
    group_created_date DATE
);

INSERT INTO Groups (group_id, group_name, group_description, group_created_date)
VALUES
    (1, 'Tech Enthusiasts', 'A group for discussing technology trends and innovations.', '2024-02-09'),
    (2, 'Food Lovers', 'A group for sharing recipes and restaurant recommendations.', '2024-02-08'),
    (3, 'Gaming Community', 'A group for gamers to connect and discuss their favorite games.', '2024-02-07'),
    (4, 'Fitness Fanatics', 'A group for fitness enthusiasts to share workout tips and progress.', '2024-02-06'),
    (5, 'Book Club', 'A group for discussing literature and sharing book recommendations.', '2024-02-05'),
    (6, 'Travel Enthusiasts', 'A group for sharing travel experiences and tips.', '2024-02-04');

SELECT * 
FROM Groups;