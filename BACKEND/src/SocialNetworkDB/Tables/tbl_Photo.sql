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