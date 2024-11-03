import { NextResponse } from 'next/server'
import { snow } from './massdata'

export async function GET(req) {
   return NextResponse.json(snow)
}

// export async function POST(req) {
//    let sin=req.body
//    console.log(sin)
//    return NextResponse.json({name:sin})
// }





// export async function GET(req) {

//    let { searchParams } = new URL(req.url)
//    // console.log(searchParams)
//    let query = searchParams.get('q')
//    let pipa 
//    if (query) {
//       pipa=query
//    }
//    return NextResponse.json(pipa)
// }