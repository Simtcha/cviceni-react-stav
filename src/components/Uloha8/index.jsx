/*
Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.
*/

import { useState } from "react"

const zmenicka = (stav, setZmena) => {
  if (stav === 'možná') {
    setZmena('ano') } 
  else if (stav === 'ano') {
    setZmena('ne')
  }
  else {setZmena('možná')
  } }



export const Uloha8 = () => {
  const [zmena, setZmena] = useState('možná')
  return (
    <>
      <h3>Prší v Brně: {zmena}</h3>
      <button onClick={()=> zmenicka(zmena, setZmena)}>změnit</button>
    </>
  )
}
