
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);

INSERT INTO "item" ("description", "image_url")
VALUES ('flour', 'https://target.scene7.com/is/image/Target/GUEST_12820de3-24e3-4822-abf4-d823084d5c26?wid=488&hei=488&fmt=pjpeg'),
('sugar', 'https://images-na.ssl-images-amazon.com/images/I/71oM62bfyRL._SL1000_.jpg'),
('butter', 'https://storcpdkenticomedia.blob.core.windows.net/media/lolretail/media/lolr-media/article_images/2017_december_salted-vs-unsalted-sticks_jpg_2.jpg?ext=.jpg');