// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
    //console.log({ request: request.nextUrl }) // informacion detallada de las peticiones
    if (req.nextUrl.pathname.startsWith('/api/entries/')) {
        const id = req.nextUrl.pathname.replace('/api/entries/', '')
        const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");
        
        if (!checkMongoIDRegExp.test(id)) {
            const url = req.nextUrl.clone();
            url.pathname = '/api/bad-request'
            url.search=`?message=${id} is not a valid MongoID`
            return NextResponse.rewrite(url)
        }
    }

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