CREATE TABLE users_roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL,
    role_id UUID NOT NULL,
    dh_created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    dh_updated_at TIMESTAMP WITH TIME ZONE,
    dh_deleted_at TIMESTAMP WITH TIME ZONE,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (role_id) REFERENCES roles (id),
    UNIQUE (user_id, role_id)
);
