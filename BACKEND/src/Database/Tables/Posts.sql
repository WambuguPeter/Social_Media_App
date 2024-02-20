
CREATE TABLE Posts(
    post_id INT PRIMARY KEY,
    user_id INT,
    post_content VARCHAR(300),
    post_date DATE,
    likes INT,
    comments VARCHAR(100)
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

INSERT INTO Posts (post_id, user_id, post_content, post_date, likes, comments)
VALUES
    (101, 201, 'Check out this new tech gadget!', '2024-02-09', 15, 'Great comments!'),
    (102, 202, 'Just had the best meal ever at a local restaurant!', '2024-02-08', 25, 'Sounds delicious!'),
    (103, 203, 'Reached level 50 in my favorite game!', '2024-02-07', 30, 'Congrats!'),
    (104, 204, 'Completed my first marathon today!', '2024-02-06', 40, 'Well done!'),
    (105, 205, 'Started reading a fascinating book!', '2024-02-05', 20, 'What book is it?'),
    (106, 206, 'Just booked a trip to Paris!', '2024-02-04', 35, 'Enjoy your trip!');

SELECT *
FROM Posts;