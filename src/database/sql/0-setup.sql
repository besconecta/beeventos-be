CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TYPE event_status AS ENUM ('idle', 'started', 'finished');
CREATE TYPE user_role AS ENUM ('admin', 'user', 'atendee');