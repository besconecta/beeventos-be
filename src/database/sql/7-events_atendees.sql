CREATE TABLE events_atendees (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    atendee_id UUID NOT NULL,
    event_id UUID NOT NULL,
    dh_created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    dh_updated_at TIMESTAMP WITH TIME ZONE,
    dh_deleted_at TIMESTAMP WITH TIME ZONE,
    FOREIGN KEY (atendee_id) REFERENCES atendees (id),
    FOREIGN KEY (event_id) REFERENCES events (id),
    UNIQUE (atendee_id, event_id)
);
