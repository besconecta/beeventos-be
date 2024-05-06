CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TYPE event_status AS ENUM ('idle', 'started', 'finished');