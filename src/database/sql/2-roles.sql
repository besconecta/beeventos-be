CREATE TABLE roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ds_role VARCHAR(100) NOT NULL,
    dh_created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    dh_updated_at TIMESTAMP WITH TIME ZONE,
    dh_deleted_at TIMESTAMP WITH TIME ZONE
);
