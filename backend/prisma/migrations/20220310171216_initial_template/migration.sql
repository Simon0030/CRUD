-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "login" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuctionSite" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "published" BOOLEAN DEFAULT false,
    "userId" INTEGER,

    CONSTRAINT "AuctionSite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AuctionSiteToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");

-- CreateIndex
CREATE UNIQUE INDEX "_AuctionSiteToProduct_AB_unique" ON "_AuctionSiteToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_AuctionSiteToProduct_B_index" ON "_AuctionSiteToProduct"("B");

-- AddForeignKey
ALTER TABLE "AuctionSite" ADD CONSTRAINT "AuctionSite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuctionSiteToProduct" ADD FOREIGN KEY ("A") REFERENCES "AuctionSite"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuctionSiteToProduct" ADD FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
