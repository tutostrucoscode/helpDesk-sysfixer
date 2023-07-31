import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://epwjpxjxnxlmzsenpoel.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwd2pweGp4bnhsbXpzZW5wb2VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzNzM0MDMsImV4cCI6MjAwNDk0OTQwM30.6D7o4N8EbVLIlTBpVhuWNA9YTaOpR75E4exZswtUpPM"
);

const auth =  supabase.auth;

export { supabase, auth };
