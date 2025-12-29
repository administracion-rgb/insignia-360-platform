import { createClient } from '@supabase/supabase-js';

// Reemplaza con tus credenciales reales de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Faltan las variables de entorno de Supabase. Revisa tu archivo .env.local");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);