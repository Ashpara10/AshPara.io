-- CreateTable
CREATE TABLE "Views" (
    "slug" TEXT NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "Views_slug_key" ON "Views"("slug");
