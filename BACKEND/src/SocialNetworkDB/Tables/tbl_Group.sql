CREATE TABLE tbl_Group (
    GroupID INT PRIMARY KEY,
    GroupName VARCHAR(255),
    Description TEXT,
    CreatedDate DATETIME
);

INSERT INTO tbl_Group(GroupID, GroupName, Description, CreatedDate)
VALUES 
    (1, 'Group 1', 'Description for Group 1', GETDATE()),
    (2, 'Group 2', 'Description for Group 2', GETDATE());

SELECT *
FROM tbl_Group;