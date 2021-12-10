CREATE TABLE "examples" (
	"id" serial NOT NULL,
	"username" TEXT NOT NULL,
	CONSTRAINT "examples_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);