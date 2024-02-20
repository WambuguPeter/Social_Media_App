CREATE TABLE Message(
    message_id INT PRIMARY KEY,
    sender_id INT,
    receiver_id INT,
    message_date DATE,
    message_content VARCHAR(300),
    FOREIGN KEY (sender_id) REFERENCES Users(user_id),
    FOREIGN KEY (receiver_id) REFERENCES Users(user_id)
);

INSERT INTO Message (message_id, sender_id, receiver_id, message_date, message_content)
VALUES
    (1, 201, 202, '2024-02-09', 'Hey, how are you?'),
    (2, 202, 201, '2024-02-09', 'I am good, thanks! How about you?'),
    (3, 203, 201, '2024-02-08', 'Did you watch the game last night?'),
    (4, 201, 203, '2024-02-08', 'Yes, it was intense!'),
    (5, 204, 201, '2024-02-07', 'Are you going to the party tomorrow?'),
    (6, 201, 204, '2024-02-07', 'Yes, I will be there!'),
    (7, 205, 201, '2024-02-06', 'Hey, I have a question about the project.'),
    (8, 201, 205, '2024-02-06', 'Sure, what do you need help with?'),
    (9, 206, 201, '2024-02-05', 'Are you free for a coffee this afternoon?'),
    (10, 201, 206, '2024-02-05', 'Sorry, I have a meeting then');


SELECT * 
FROM Message;