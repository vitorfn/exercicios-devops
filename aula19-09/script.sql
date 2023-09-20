CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    done BOOLEAN DEFAULT false
);

INSERT INTO tasks (id, description, done) VALUES (1, 'Learn DevOps', false);