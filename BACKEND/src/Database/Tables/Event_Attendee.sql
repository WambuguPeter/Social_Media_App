
CREATE TABLE Event_attendee(
    event_id INT,
    attendee_id INT,
    FOREIGN KEY (event_id) REFERENCES Events(event_id),
    FOREIGN KEY (attendee_id) REFERENCES Users(user_id)
);

INSERT INTO Event_attendee (event_id, attendee_id)
VALUES
    (1, 201), 
    (1, 202), 
    (2, 203), 
    (2, 204), 
    (3, 205), 
    (3, 206),
    (4, 201), 
    (4, 203), 
    (5, 205), 
    (5, 206); 

SELECT *
FROM Event_attendee;