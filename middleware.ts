import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET || 'default-secret-key')

export async function middleware(request: NextRequest) {
  // const { pathname } = request.nextUrl
  // if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/setup')) {
  //   const token = request.cookies.get('token')?.value
  //   if (!token) {
  //     return NextResponse.redirect(new URL('/admin/login', request.url))
  //   }
  //   try {
  //     const { payload } = await jwtVerify(token, SECRET_KEY)
  //     if ((payload as any).role !== 'ADMIN') {
  //       return NextResponse.redirect(new URL('/403', request.url))
  //     }
  //   } catch {
  //     return NextResponse.redirect(new URL('/admin/login', request.url))
  //   }
  // }
  // if (pathname.startsWith('/client')) {
  //   const token = request.cookies.get('token')?.value
  //   if (!token) {
  //     return NextResponse.redirect(new URL('/login', request.url))
  //   }
  //   try {
  //     const { payload } = await jwtVerify(token, SECRET_KEY)
  //     if ((payload as any).role === 'ADMIN') {
  //       return NextResponse.redirect(new URL('/admin', request.url))
  //     }
  //   } catch {
  //     return NextResponse.redirect(new URL('/login', request.url))
  //   }
  // }
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/client/:path*'],
}
