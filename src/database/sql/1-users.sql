CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ds_firstname VARCHAR(100) NOT NULL,
    ds_lastname VARCHAR(100) NOT NULL,
    ds_email VARCHAR(100) UNIQUE NOT NULL,
    hs_password VARCHAR(255) NOT NULL,
    ds_role user_role,
    dh_created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    dh_updated_at TIMESTAMP WITH TIME ZONE,
    dh_deleted_at TIMESTAMP WITH TIME ZONE
);
