CREATE TABLE tbl_Post (
    PostID INT PRIMARY KEY,
    UserID INT,
    Content TEXT,
    PostDate DATETIME,
    Likes INT,
    Comments INT,
    FOREIGN KEY (UserID) REFERENCES tbl_User(UserID)
);

INSERT INTO tbl_Post (PostID, UserID, Content, PostDate, Likes, Comments)
VALUES 
    (1, 1, 'Post content 1', GETDATE(), 10, 5),
    (2, 2, 'Post content 2', GETDATE(), 15, 8),
    (3, 3, 'Post content 3', GETDATE(), 20, 12);

SELECT *
FROM tbl_Post;