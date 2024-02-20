CREATE TABLE tbl_User (
    UserID INT PRIMARY KEY,
    Username VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    TagName VARCHAR(50),
    Location VARCHAR(100)
);

INSERT INTO tbl_User (UserID, Username, Email, Password, TagName, Location)
VALUES 
    (1, 'user1', 'user1@example.com', 'password1', 'tag1', 'Location 1'),
    (2, 'user2', 'user2@example.com', 'password2', 'tag2', 'Location 2'),
    (3, 'user3', 'user3@example.com', 'password3', 'tag3', 'Location 3');

SELECT *
FROM tbl_User;

SELECT * 
FROM tbl_Post;