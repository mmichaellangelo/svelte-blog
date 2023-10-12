CREATE TABLE post (
    id INT NOT NULL AUTO_INCREMENT,
    slug TEXT,
    title TEXT,
    body TEXT,
    author_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (author_id) REFERENCES user(id)
);

CREATE TABLE user (
    id int NOT NULL AUTO_INCREMENT,
    username VARCHAR(32),
    password VARCHAR(256),
    PRIMARY KEY (id)
)
