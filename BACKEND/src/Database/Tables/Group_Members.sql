CREATE TABLE Group_members(
    group_id INT,
    member_id INT,
    FOREIGN KEY (member_id) REFERENCES Users(user_id),
    FOREIGN KEY (group_id) REFERENCES Groups(group_id)
);

INSERT INTO Group_members (group_id, member_id)
VALUES
    (1, 201),
    (1, 202),
    (1, 203),
    (2, 202),
    (2, 204),
    (3, 203),
    (3, 205),
    (4, 204),
    (4, 206),
    (5, 205),
    (5, 201),
    (6, 206),
    (6, 202);

SELECT *
FROM Group_members;
