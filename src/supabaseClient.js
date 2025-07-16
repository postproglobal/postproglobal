import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dqiqlwrrmmutuyhagerz.supabase.co'; // <-- your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxaXFsd3JybW11dHV5aGFnZXJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2ODIzOTMsImV4cCI6MjA2ODI1ODM5M30.4eNZgckvET55t_9kzHa-dBwKr3MVyfWpUm-DhdiooHc';       // <-- your anon public key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
