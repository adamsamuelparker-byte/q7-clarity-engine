
-- Create page_views table for visitor tracking
CREATE TABLE public.page_views (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_url text NOT NULL,
  visited_at timestamp with time zone NOT NULL DEFAULT now(),
  device_type text,
  screen_width integer,
  user_agent text,
  referrer text
);

-- Enable RLS
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;

-- Anyone can insert page views (anonymous tracking)
CREATE POLICY "Anyone can insert page views"
  ON public.page_views
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only authenticated users can read page views
CREATE POLICY "Authenticated users can read page views"
  ON public.page_views
  FOR SELECT
  TO authenticated
  USING (true);

-- Add SELECT policy on leads for authenticated users
CREATE POLICY "Authenticated users can read leads"
  ON public.leads
  FOR SELECT
  TO authenticated
  USING (true);
