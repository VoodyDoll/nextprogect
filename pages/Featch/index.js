

const page = ({stown}) => {
    // let [stown,setstown]=useState([])
  
// useEffect(()=>{
    
//     let featcher= async()=>{
//         let resp= await fetch(`http://localhost:5000/1`)
//         let data=resp.json()
//         setstown(data)
        
//     }
//     featcher()

// },[])

// console.log(stown)
  return (
    <div>
        {stown.map((item)=>{
            return(
                <center><p style={{color:'blue'}}>{item.title}</p></center>
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