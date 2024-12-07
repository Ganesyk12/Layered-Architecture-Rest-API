-- CreateTable
CREATE TABLE "a_user_role" (
    "role_id" TEXT NOT NULL PRIMARY KEY,
    "role_name" TEXT NOT NULL,
    "transaction_date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "a_user_system" (
    "id_user" TEXT NOT NULL PRIMARY KEY,
    "transaction_date" DATETIME,
    "nik" TEXT,
    "username" TEXT,
    "password" TEXT,
    "role_id" TEXT,
    "office_email" TEXT,
    "department_code" TEXT,
    "is_active" TEXT
);

-- CreateTable
CREATE TABLE "a_department" (
    "department_id" TEXT NOT NULL PRIMARY KEY,
    "department_code" TEXT,
    "department_name" TEXT,
    "created_at" DATETIME
);

-- CreateIndex
CREATE UNIQUE INDEX "a_department_department_code_key" ON "a_department"("department_code");
