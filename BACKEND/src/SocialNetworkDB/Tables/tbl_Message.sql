CREATE TABLE tbl_Message (
    MessageID INT PRIMARY KEY,
    SenderID INT,
    ReceiverID INT,
    MessageDate DATETIME,
    Content TEXT,
    FOREIGN KEY (SenderID) REFERENCES tbl_User(UserID),
    FOREIGN KEY (ReceiverID) REFERENCES tbl_User(UserID)
);

INSERT INTO tbl_Message (MessageID, SenderID, ReceiverID, MessageDate, Content)
VALUES 
    (1, 1, 2, GETDATE(), 'Message from user 1 to user 2'),
    (2, 2, 1, GETDATE(), 'Reply from user 2 to user 1'),
    (3, 3, 1, GETDATE(), 'Message from user 3 to user 1');

SELECT *
FROM tbl_Message;