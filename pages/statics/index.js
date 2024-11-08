import React from 'react'

export let getStaticProps = async () => {
    let resp = await fetch(`http://localhost:5000/1`)
    let data = await resp.json()
    console.log(data)
    return {
        props: { revande: data }
    }
}

const index = ({ revande }) => {
    return (
        <div>
{revande.map((item)=>{
    return(
        <center><p style={{color:'red'}}>{item.prise}</p></center>
    )
})}
        </div>
    )

}

export default index