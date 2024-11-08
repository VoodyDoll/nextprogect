
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Forma from './components/forma/Forma'

export default function Home() {

  return (
    <>
      <center><ul style={{marginTop:'35px',color:'red',fontSize:'2rem'}}>
        <li><Link href={'abaut'}>Abaut</Link></li>
        <li><Link href={'/main/god'}>God</Link></li>

      </ul></center>
      <Forma/>
    </>

  );
}
