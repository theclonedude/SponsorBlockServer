BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS "votes" (
	"UUID"	TEXT NOT NULL,
	"userID"	TEXT NOT NULL,
	"hashedIP"	TEXT NOT NULL,
	"type"	INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS "categoryVotes" (
	"UUID"	TEXT NOT NULL,
	"userID"	TEXT NOT NULL,
	"hashedIP"	TEXT NOT NULL,
	"category"	TEXT NOT NULL,
	"timeSubmitted"	INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS "sponsorTimes" (
	"videoID"	TEXT NOT NULL,
	"hashedIP"	TEXT NOT NULL,
	"timeSubmitted"	INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS "config" (
	"key" TEXT NOT NULL,
	"value" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "titleVotes" (
	"id" SERIAL PRIMARY KEY,
	"videoID"	TEXT NOT NULL,
	"UUID"	TEXT NOT NULL,
	"userID"	TEXT NOT NULL,
	"hashedIP"	TEXT NOT NULL,
	"type"	INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS "thumbnailVotes" (
	"id" SERIAL PRIMARY KEY,
	"videoID"	TEXT NOT NULL,
	"UUID"	TEXT NOT NULL,
	"userID"	TEXT NOT NULL,
	"hashedIP"	TEXT NOT NULL,
	"type"	INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS "casualVotes" (
	"UUID" SERIAL PRIMARY KEY,
	"videoID"	TEXT NOT NULL,
	"service"	TEXT NOT NULL,
	"userID"	TEXT NOT NULL,
	"hashedIP"	TEXT NOT NULL,
	"category"	TEXT NOT NULL,
	"type"	INTEGER NOT NULL,
	"timeSubmitted"	INTEGER NOT NULL
);

COMMIT;
