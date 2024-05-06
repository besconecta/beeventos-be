CREATE TABLE events_atendees (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    atendee_id UUID NOT NULL,
    event_id UUID NOT NULL,
    dh_created_at TIMESTAMP DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'America/Sao_Paulo'),
    dh_updated_at TIMESTAMP DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'America/Sao_Paulo'),
    FOREIGN KEY (atendee_id) REFERENCES atendees (id),
    FOREIGN KEY (event_id) REFERENCES events (id),
    UNIQUE (atendee_id, event_id)
);
