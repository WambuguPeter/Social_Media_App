CREATE TABLE Photo(
    photo_id INT PRIMARY KEY,
    photo_owner_id INT,
    photo_url VARCHAR(300),
    upload_date DATE,
    FOREIGN KEY (photo_owner_id) REFERENCES Users(user_id)
);

INSERT INTO Photo (photo_id, photo_owner_id, photo_url, upload_date)
VALUES
    (1, 201, 'https://example.com/photo1.jpg', '2024-02-09'),
    (2, 202, 'https://example.com/photo2.jpg', '2024-02-08'),
    (3, 203, 'https://example.com/photo3.jpg', '2024-02-07'),
    (4, 204, 'https://example.com/photo4.jpg', '2024-02-06'),
    (5, 205, 'https://example.com/photo5.jpg', '2024-02-05'),
    (6, 206, 'https://example.com/photo6.jpg', '2024-02-04');

SELECT *
FROM Photo;