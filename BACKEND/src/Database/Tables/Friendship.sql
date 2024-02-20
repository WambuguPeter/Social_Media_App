CREATE TABLE Friendship (
    friendship_id INT PRIMARY KEY,
    follower_id INT,
    following_id INT,    
    FOREIGN KEY (follower_id) REFERENCES Users(user_id),
    FOREIGN KEY (following_id) REFERENCES Users(user_id)    
);

INSERT INTO Friendship (friendship_id, follower_id, following_id)
VALUES
    (1, 201, 202),
    (2, 202, 203),
    (3, 203, 204),
    (4, 204, 205),
    (5, 205, 206),
    (6, 206, 201);

SELECT * 
FROM Friendship;
