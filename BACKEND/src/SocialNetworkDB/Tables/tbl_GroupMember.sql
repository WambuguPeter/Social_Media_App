CREATE TABLE tbl_GroupMembers (
    GroupID INT,
    MemberID INT,
    PRIMARY KEY (GroupID, MemberID),
    FOREIGN KEY (GroupID) REFERENCES tbl_Group(GroupID),
    FOREIGN KEY (MemberID) REFERENCES tbl_User(UserID)
);

INSERT INTO tbl_GroupMembers (GroupID, MemberID)
VALUES 
    (1, 1),
    (1, 2),
    (2, 2),
    (2, 3);

SELECT *
FROM tbl_GroupMembers;