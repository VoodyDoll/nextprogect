// import React from 'react'
'use client'
const head = () => {

    async function halt () {
        await fetch(`http://localhost:3000`,{
        method:'POST'
      })
  //     // let data = await response.json()
  //     // return data.id
  }
  

  return (
    <div>
      {/* <center><h3 style={{ marginTop: '32px', color: 'red' }}>Snooz Ink</h3> */}
{/* 
        <form method='POST' action="http://localhost:3000/api/data">
<input type='text' name='hog'></input>
          <button type="submit">kook</button>
        </form> */}

      {/* </center> */}
      <button onClick={halt}>foof</button>

    </div>
  )
}


export default head