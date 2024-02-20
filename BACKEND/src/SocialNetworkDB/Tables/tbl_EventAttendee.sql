CREATE TABLE tbl_EventAttendee (
    EventID INT,
    AttendeeID INT,
    PRIMARY KEY (EventID, AttendeeID),
    FOREIGN KEY (EventID) REFERENCES tbl_Event(EventID),
    FOREIGN KEY (AttendeeID) REFERENCES tbl_User(UserID)
);

INSERT INTO tbl_EventAttendee (EventID, AttendeeID)
VALUES 
    (1, 1),
    (1, 2),
    (2, 2),
    (2, 3);

SELECT * 
FROM tbl_EventAttendee;