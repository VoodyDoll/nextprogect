// import React from 'react'
// cashe:'forse-cashe'
// cashe:'non-store'


export default async function didal() {
    let response = await fetch(`http://localhost:5000/1`, { next: { revalidate: 10 } })
    let data = await response.json()

    console.log(data)

    return <div>{data.id}</div>
}




