import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  
  if (code) {
    // En Next.js 15/16, cookies() es asíncrono, por eso usamos 'await'
    const cookieStore = await cookies()

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            try {
              cookieStore.set({ name, value, ...options })
            } catch (error) {
              // Puede fallar en un Server Component, pero está bien en un Route Handler
            }
          },
          remove(name: string, options: CookieOptions) {
            try {
              cookieStore.delete({ name, ...options })
            } catch (error) {
              // Puede fallar en un Server Component
            }
          },
        },
      }
    )
    
    // Intercambiamos el código por la sesión del usuario
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error) {
      // Si todo sale bien, entramos al Dashboard
      return NextResponse.redirect(`${origin}/dashboard`)
    }
  }

  // Si algo falla, regresamos al login
  return NextResponse.redirect(`${origin}/login?error=auth`)
}