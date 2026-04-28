-- AETHER ACADEMY: POSTGRESQL SCHEMA v1.0
-- This schema manages the elite STEM ecosystem including students, games, and lesson plans.

-- 1. SCHOOLS / LOCATIONS (The Nexus or Mobile Units)
CREATE TABLE deployments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL, -- e.g., 'New Haven Nexus', 'Mobile Unit-01'
    type VARCHAR(50) CHECK (type IN ('fixed', 'mobile')),
    status VARCHAR(50) DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. ARCHITECTS (The Students)
CREATE TABLE architects (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    full_name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    xp INTEGER DEFAULT 0,
    level INTEGER DEFAULT 1,
    deployment_id INTEGER REFERENCES deployments(id),
    last_active TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. GAMES (The Catalog)
CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(100) UNIQUE NOT NULL, -- e.g., 'storm-chaser'
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100), -- e.g., 'Physics', 'Meteorology'
    difficulty_level INTEGER DEFAULT 1,
    is_active BOOLEAN DEFAULT TRUE
);

-- 4. CURRICULUM (Lesson Plans)
CREATE TABLE curriculum (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT, -- Markdown or HTML content
    game_id INTEGER REFERENCES games(id),
    grade_level VARCHAR(50),
    estimated_duration INTEGER, -- in minutes
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. THE ACTIVITY STREAM (XP Log & Game Progress)
CREATE TABLE activity_stream (
    id BIGSERIAL PRIMARY KEY,
    architect_id INTEGER REFERENCES architects(id),
    game_id INTEGER REFERENCES games(id),
    action_type VARCHAR(100), -- e.g., 'game_complete', 'xp_bonus', 'lesson_view'
    xp_gained INTEGER DEFAULT 0,
    metadata JSONB, -- For flexible data like high scores or specific achievements
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- INDEXES for Performance
CREATE INDEX idx_architects_xp ON architects(xp DESC);
CREATE INDEX idx_activity_stream_architect ON activity_stream(architect_id);
