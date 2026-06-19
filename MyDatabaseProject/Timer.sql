
CREATE TABLE Timer (
    Id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Name NVARCHAR(128) NOT NULL,
    -- UTC_TIMESTAMP is not a standard function, and will only work 
    -- on MySql. If we were using Entity Framework instead of Dappper,
    -- it would solve this problem for us.
    StartTimeUtc DATETIME NOT NULL DEFAULT (UTC_TIMESTAMP()),
    EndTimeUtc DATETIME NOT NULL DEFAULT (UTC_TIMESTAMP())
)

