import { NextResponse } from 'next/server'
import { snow } from './massdata'

// export async function POST(req) {
//    if (snow) {
//       let params=await req.json()
//       console.log(params.age)
//    }
//    return NextResponse.json([{"name":"fill","age":"44"},{"name":"herr","age":"254"}])
// }

export async function POST(req) {   
   let params=await req.json()
         console.log(params.name)
         let fool=snow
let filin=fool.filter((item)=>item.name==params.name)
console.log(filin)
   return NextResponse.json(filin)
}







// работает (сортировка по данным из get запроса)
// export async function GET(req) {
// let {searchParams}=new URL(req.url)
// let query=searchParams.get('q')
// console.log(query)
// let snowboll=snow
// if (query) {
//    snowboll=snow.filter((item)=>item.age==query)
// }
//    return NextResponse.json(snowboll)
// }


export async function GET(req) {
let {searchParams}=new URL(req.url)
// let query=searchParams.get('q')
// console.log(query)
let snowboll=snow

   return NextResponse.json(snowboll)
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