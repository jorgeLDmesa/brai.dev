import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { Database } from '@/types';
import { NextRequest } from 'next/server';

export const createClient = async (request?: NextRequest) => {
    // Use cookies from request if provided, otherwise use cookies() from next/headers
    const cookieStore = request?.cookies ?? await cookies();
  
    return createServerClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value;
          },
          set(name: string, value: string, options: CookieOptions) {
            try {
              cookieStore.set({ name, value, ...options });
            } catch (error) {
              console.warn('Error al establecer la cookie:', error);
            }
          },
          remove(name: string, options: CookieOptions) {
            try {
              cookieStore.set({ name, value: '', ...options });
            } catch (error) {
              console.warn('Error al eliminar la cookie:', error);
            }
          }
        }
      }
    );
  };