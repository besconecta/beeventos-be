-- first, create uuid extension on the database
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ds_firstname VARCHAR(100) NOT NULL,
    ds_lastname VARCHAR(100) NOT NULL,
    ds_email VARCHAR(100) UNIQUE NOT NULL,
    hs_password VARCHAR(255) NOT NULL,
    dh_created_at TIMESTAMP DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'America/Sao_Paulo'),
    dh_updated_at TIMESTAMP DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'America/Sao_Paulo')
);
