import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export let getStaticProps = async () => {
    let resp = await fetch(process.env.API_HOST)
    let data = await resp.json()
    // console.log(data)
    return {
        props: { revande: data }
    }
}

const index = ({ revande }) => {

    return (
        <div>
            {revande.map((item) => {
                return (
                    <center>
                        <Link href={`/statics/${item.id}`}>
                            <div>
                                <Image src={`/img/${item.img}`} width={150} height={100} alt='not foto' objectFit='cover' ></Image>
                            </div>
                            <p key={item.id} style={{ color: 'red' }}>{item.title} : {item.prise} руб</p>

                        </Link>

                    </center>
                )
            })}
        </div>
    )

}

export default index