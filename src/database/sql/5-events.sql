CREATE TABLE events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_type_id UUID NOT NULL,
    user_id UUID NOT NULL,
    ds_title VARCHAR(100) NOT NULL,
    ds_about TEXT NOT NULL,
    ds_banner_url VARCHAR(255),
    ds_local VARCHAR(255) NOT NULL,
    dh_start_at TIMESTAMP,
    dh_end_at TIMESTAMP,
    ds_status event_status,
    dh_created_at TIMESTAMP DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'America/Sao_Paulo'),
    dh_updated_at TIMESTAMP DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'America/Sao_Paulo'),
    FOREIGN KEY (event_type_id) REFERENCES events_types (id),
    FOREIGN KEY (user_id) REFERENCES users (id),
    UNIQUE (event_type_id, user_id)
);