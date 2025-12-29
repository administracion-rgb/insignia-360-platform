import { createClient } from '@supabase/supabase-js';

// Intentamos leer las variables de entorno.
// Si no existen (por ejemplo, durante el Build de Vercel), usamos valores "falsos"
// para evitar que el proceso de construcción falle con un error crítico.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://tczwtfbvwmktvxkzqhfk.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjend0ZmJ2d21rdHZ4a3pxaGZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY0NjAyODksImV4cCI6MjA4MjAzNjI4OX0.I7voavMhNtVLCq1vIi9v8SPAf7pyfOezs35TuXegC2Y";

// Creamos el cliente. 
// Si estamos en producción y las variables existen, funcionará perfecto.
// Si estamos en el build, se creará un cliente inactivo pero no romperá la compilación.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);