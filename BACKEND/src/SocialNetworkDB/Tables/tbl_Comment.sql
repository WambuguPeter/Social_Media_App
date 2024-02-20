CREATE TABLE tbl_Comment (
    CommentID INT PRIMARY KEY,
    PostID INT,
    UserID INT,
    CommentDate DATETIME,
    Content TEXT,
    FOREIGN KEY (PostID) REFERENCES tbl_Post(PostID),
    FOREIGN KEY (UserID) REFERENCES tbl_User(UserID)
);

INSERT INTO tbl_Comment (CommentID, PostID, UserID, CommentDate, Content)
VALUES 
    (1, 1, 2, GETDATE(), 'Comment on post 1 by user 2'),
    (2, 2, 3, GETDATE(), 'Comment on post 2 by user 3'),
    (3, 3, 1, GETDATE(), 'Comment on post 3 by user 1');

SELECT *
FROM tbl_Comment;