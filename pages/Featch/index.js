import Link from "next/link"
import Image from 'next/image'

const page = ({stown}) => {

  return (
    <div>
    {stown.map((item) => {
        return (
            <center>
                <Link href={`Featch/${item.id}`}>
                    <div>
                        <Image src={`/img/${item.img}`} width={150} height={100} alt='not foto'  objectFit='cover' ></Image>
                    </div>
                    <p key={item.id} style={{ color: 'red' }}>{item.title} : {item.prise}</p>

                </Link>

            </center>
        )
    })}
</div>

  )
}

export async function getServerSideProps(){
    let resp= await fetch(`http://localhost:5000/1`)
        let data= await resp.json()
        return{
            props:{stown:data}
        }
}
export default page