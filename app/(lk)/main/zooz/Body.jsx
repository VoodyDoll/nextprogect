import React, { useState } from 'react'

const Body = () => {
    let [snow, setsnow] = useState(0)
    return (
        <>
            <div>Body</div>
            <button onClick={() => setsnow(snow += 1)}>ol</button>
            {snow}

        </>
    )
}

export default Body