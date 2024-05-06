CREATE TABLE events_types (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ds_type VARCHAR(100) NOT NULL,
    dh_created_at TIMESTAMP DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'America/Sao_Paulo'),
    dh_updated_at TIMESTAMP DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'America/Sao_Paulo')
);

