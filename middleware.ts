// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    //console.log({ request: request.nextUrl }) // informacion detallada de las peticiones

    return NextResponse.next() // el .next() indica que no haga nada solo siga
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }
export const config = {
    matcher: [
        // '/api/:path', 
        '/api/entries/:path',
    ],
}