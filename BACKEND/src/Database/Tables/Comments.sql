CREATE TABLE Commets(
    comment_id INT PRIMARY KEY,
    post_id INT,
    user_id INT,
    comment_date DATE,
    comment_content VARCHAR(300),
    FOREIGN KEY (post_id) REFERENCES Posts (post_id)
);

INSERT INTO Commets (comment_id, post_id, user_id, comment_date, comment_content)
VALUES
    (1, 101, 201, '2024-02-09', 'This is a great post!'),
    (2, 102, 202, '2024-02-09', 'I completely agree with the points made here.'),
    (3, 103, 203, '2024-02-08', 'Interesting perspective. Thanks for sharing.'),
    (4, 104, 204, '2024-02-07', 'I found this post very informative.'),
    (5, 105, 205, '2024-02-07', 'I have some questions regarding this topic.'),
    (6, 106, 206, '2024-02-06', 'This post needs more clarification.');


SELECT * 
FROM Commets;