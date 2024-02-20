Wambugu Peter.


-- Create Database
CREATE DATABASE SocialNetworkDB;
USE SocialNetworkDB;

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


CREATE TABLE tbl_Photo (
    PhotoID INT PRIMARY KEY,
    UserID INT,
    PhotoURL VARCHAR(255),
    UploadDate DATETIME,
    FOREIGN KEY (UserID) REFERENCES tbl_User(UserID)
);

INSERT INTO tbl_Photo(PhotoID, UserID, PhotoURL, UploadDate)
VALUES 
    (1, 1, 'url1', GETDATE()),
    (2, 2, 'url2', GETDATE()),
    (3, 3, 'url3', GETDATE());
    
SELECT *
FROM tbl_Photo;

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

CREATE TABLE tbl_Event (
    EventID INT PRIMARY KEY,
    EventName VARCHAR(255),
    Description TEXT,
    EventDate DATETIME,
    Location VARCHAR(100),
    EventPosterURL VARCHAR(255)
);

INSERT INTO tbl_Event (EventID, EventName, Description, EventDate, Location, EventPosterURL)
VALUES 
    (1, 'Event 1', 'Description for Event 1', GETDATE(), 'Location 1', 'poster_url_1'),
    (2, 'Event 2', 'Description for Event 2', GETDATE(), 'Location 2', 'poster_url_2');

SELECT * 
FROM tbl_Event;

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


-- 1. Retrieve all posts with their comments and likes for a specific user

SELECT p.Content, p.Likes     
FROM 
    tbl_Post p
LEFT JOIN 
    tbl_Comment c ON p.PostID = c.PostID
WHERE 
    p.UserID = 3; 



-- 2. Retrieve all friends of a user

SELECT u.UserID, u.Username
FROM tbl_User u
INNER JOIN tbl_Friendship f ON u.UserID = f.User1ID OR u.UserID = f.User2ID
WHERE f.User1ID = [UserID] OR f.User2ID = [UserID];


-- 3. Retrieve all events attended by a specific user
SELECT *   
FROM tbl_Event 
INNER JOIN tbl_EventAttendee  ON tbl_Event.EventID = tbl_EventAttendee.EventID
WHERE tbl_EventAttendee.AttendeeID = 1;


-- 4. To display group members and their details for a certain group
SELECT u.UserID, u.Username, u.Email, u.TagName, u.Location
FROM tbl_User u
INNER JOIN tbl_GroupMembers gm ON u.UserID = gm.MemberID
WHERE gm.GroupID = 2;

-- 5. Retrieve all messages between two users
SELECT *
FROM tbl_Message
WHERE 
    (SenderID = 1 AND ReceiverID = 2)
    OR
    (SenderID = 2 AND ReceiverID = 1)
ORDER BY MessageDate;


-- 6. To display event details and the details of their attendees
SELECT 
     tbl_Event.EventID,
     tbl_Event.EventName,
     tbl_Event.Description ,
     tbl_Event.EventDate,
     tbl_Event.Location ,
     tbl_Event.EventPosterURL,
    u.UserID AS AttendeeID,
    u.Username AS AttendeeUsername,
    u.Email AS AttendeeEmail,
    u.TagName AS AttendeeTagName,
    u.Location AS AttendeeLocation
FROM tbl_Event 
INNER JOIN 
    tbl_EventAttendee ea ON tbl_Event.EventID = ea.EventID
INNER JOIN
    tbl_User u ON ea.AttendeeID = u.UserID;


-- 7. Retrieve all messages between two users
SELECT *
FROM tbl_Message
WHERE 
    (SenderID = 1 AND ReceiverID = 2)
    OR
    (SenderID = 2 AND ReceiverID = 1)
ORDER BY MessageDate;


-- QUESTION 2 THIS WEEK'S ASSIGNMENT
----------------

----------------
--User Table:
----------------
-- Retrieve all users

SELECT *
FROM tbl_User;


-- Retrieve user by UserID
SELECT *
FROM tbl_User
WHERE UserID = 1;

-- Retrieve users in a specific location
SELECT *
FROM tbl_User
WHERE Location = 'Location 1';

-- Update user information
UPDATE tbl_User
SET Username = 'Peter',
    Email = 'peter@gmail.com',
    TagName = 'Piento',
    Location = 'Nyeri'
WHERE 
    UserID = 2;

-- Delete a user
DELETE 
FROM tbl_User
WHERE  UserID = 3;
----------------
--Post Table:
----------------
-- Retrieve all posts
SELECT *
FROM tbl_Post;
-- Retrieve posts for a specific user
SELECT *
FROM tbl_Post
WHERE UserID = 1;

-- Retrieve posts with more than 10 likes
SELECT *
FROM tbl_Post
WHERE Likes > 10;

-- Update post content
UPDATE tbl_Post
SET Content = 'new_content'
WHERE PostID =2;

-- Delete a post
DELETE 
FROM tbl_Post
WHERE PostID=1;

----------------
--Comment Table:
----------------
-- Retrieve all comments
SELECT *
FROM tbl_Comment;

-- Retrieve comments for a specific post
SELECT *
FROM tbl_Comment
WHERE PostID=3;

-- Retrieve comments by a specific user
SELECT *
FROM tbl_Comment
WHERE UserID=3;

-- Update comment content
UPDATE tbl_Comment
SET Content = 'Yoooooooooh'
WHERE 
    CommentID =2;


-- Delete a comment
DELETE 
FROM tbl_Comment
WHERE CommentID=1;
-------------------
--Friendship Table:
-------------------
-- Retrieve all friendships
SELECT *
FROM tbl_Friendship;

-- Retrieve friendships for a specific user
SELECT *
FROM tbl_Friendship
WHERE User1ID=3;

-- Update friendship date
UPDATE tbl_Friendship
SET FriendshipDate = '2020-02-03'
WHERE 
    FriendshipID = 1;


-- Delete a friendship
DELETE
FROM tbl_Friendship
WHERE FriendshipID=3;

----------------
--Photo Table:
----------------
-- Retrieve all photos
SELECT *  
FROM tbl_Photo;

-- Retrieve photos for a specific user
SELECT *  
FROM tbl_Photo
WHERE UserID=3;

-- Update photo URL
UPDATE tbl_Photo
SET PhotoURL = 'photo-urrrl'
WHERE 
    PhotoID = 3;

-- Delete a photo
DELETE 
FROM tbl_Photo
WHERE PhotoID=3;

----------------
--Group Table:
----------------
-- Retrieve all groups
SELECT *
FROM tbl_Group;
-- Retrieve a group by GroupID
SELECT *
FROM tbl_Group
WHERE GroupID=1;

-- Update group information
UPDATE tbl_Group
SET GroupName = 'nEW GROUP',
    Description = 'new_description',
    CreatedDate = 'new_created_date'
WHERE 
    GroupID = [GroupID];


-- Delete a group
DELETE 
FROM tbl_Group
WHERE GroupID=3;

------------------------
--GroupMembers Table:
-------------------------
-- Retrieve all group members
SELECT *
FROM tbl_Group;

-- Retrieve members of a specific group
SELECT *
FROM tbl_Group
WHERE GroupID=3;


-- Remove a member from a group
DELETE FROM tbl_GroupMembers
WHERE GroupID = 1 AND MemberID = 2;


----------------
--Event Table:
----------------
-- Retrieve all events
SELECT * 
FROM tbl_Event;
-- Retrieve events with a specific location
SELECT * 
FROM tbl_Event
WHERE Location = 'Location 1';

-- Update event information
UPDATE 
    tbl_Event
SET 
    EventName = 'New Event',
    Description = 'New-Description',
    EventDate = '2024-02-09',
    Location = 'New Location',
    EventPosterURL = 'https://example.com/new_poster_url.jpg'
WHERE 
    EventID = 1;

-- Delete an event
DELETE FROM tbl_Event
WHERE EventID = 1;


-------------------------
--EventAttendee Table:
-------------------------
-- Retrieve all event attendees
SELECT *
FROM tbl_EventAttendee;

-- Retrieve attendees for a specific event
SELECT *
FROM tbl_EventAttendee
WHERE EventID =1;


-- Remove an attendee from an event
DELETE FROM tbl_EventAttendee
WHERE EventID = 1 AND AttendeeID = 1;

---------------------
--Message Table:
---------------------
-- Retrieve all messages
SELECT *
FROM tbl_Message;

-- Retrieve messages between two users
SELECT 
    *
FROM 
    tbl_Message
WHERE 
    (SenderID =1 AND ReceiverID = 2)
    OR
    (SenderID = 2 AND ReceiverID = 1)
ORDER BY  MessageDate;


-- Update message content
UPDATE tbl_Message
SET  message_content = 'Updated-message'
WHERE  message_id = 1;


-- Delete a message
DELETE FROM tbl_Message
WHERE message_id = 1;
