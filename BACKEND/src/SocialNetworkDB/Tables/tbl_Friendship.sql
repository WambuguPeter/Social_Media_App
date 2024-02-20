CREATE TABLE tbl_Friendship (
    FriendshipID INT PRIMARY KEY,
    User1ID INT,
    User2ID INT,
    FriendshipDate DATETIME,
    FOREIGN KEY (User1ID) REFERENCES tbl_User(UserID),
    FOREIGN KEY (User2ID) REFERENCES tbl_User(UserID)
);

INSERT INTO tbl_Friendship (FriendshipID, User1ID, User2ID, FriendshipDate)
VALUES 
    (1, 1, 2, GETDATE()),
    (2, 1, 3, GETDATE());

SELECT * 
FROM tbl_Friendship;