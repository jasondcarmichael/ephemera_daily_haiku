CREATE DATABASE ephemera_with_auth;
CREATE USER grandmaster WITH PASSWORD 'haiku';
GRANT ALL PRIVILEGES ON DATABASE ephemera_with_auth TO grandmaster;

-- CREATE DATABASE ephemera;
-- CREATE USER ephemerauser WITH PASSWORD 'ephemera';
-- GRANT ALL PRIVILEGES ON DATABASE ephemera TO ephemerauser;