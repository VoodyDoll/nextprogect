
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Forma from './components/forma/Forma'
import { GiSushis } from "react-icons/gi";
export default function Home() {

  return (
    <>
    
    <center style={{marginTop:'25px'}}><Image width={250} height={250} src="/img/Hvong.jpg"/></center>
   
      <center><ul style={{marginTop:'35px',color:'red',fontSize:'2rem'}}>
        <li><Link href={'abaut'}>Abaut</Link></li>
        <li><Link href={'/main/god'}>God</Link></li>
        <li><Link href={'/main/swing'}>Swing</Link></li>
        <li><Link href={'/Featch'}>Fetch</Link></li>

      </ul><GiSushis style={{fontSize:'4rem',marginTop:'25px'}}/></center>
      <Forma/>
    </>

  );
}
