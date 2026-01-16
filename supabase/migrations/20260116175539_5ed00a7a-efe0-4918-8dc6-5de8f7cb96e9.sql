-- Create leads table to store form submissions
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  turnover TEXT NOT NULL,
  categories TEXT[] DEFAULT '{}',
  sub_products TEXT[] DEFAULT '{}',
  notes TEXT,
  page_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS but allow public inserts (leads can be submitted without auth)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to insert leads (public form)
CREATE POLICY "Anyone can submit leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Policy to prevent public reads (leads are private)
CREATE POLICY "Leads are private" 
ON public.leads 
FOR SELECT 
USING (false);