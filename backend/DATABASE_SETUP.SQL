CREATE TABLE post (
    id INT NOT NULL AUTO_INCREMENT,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    author_id INT NOT NULL,
    tags VARCHAR(64)[],
    date_created DATE NOT NULL,
    date_edited DATE,
    PRIMARY KEY (id),
    FOREIGN KEY (author_id) REFERENCES user(id)
);

CREATE INDEX idx_author_id ON post (author_id);
CREATE INDEX idx_tags ON post (tags);
CREATE INDEX idx_date_created ON post (date_created);

CREATE TABLE user (
    id int NOT NULL AUTO_INCREMENT,
    username VARCHAR(32) UNIQUE,
    password VARCHAR(256),
    permissions VARCHAR(64)[],
    PRIMARY KEY (id)
);


