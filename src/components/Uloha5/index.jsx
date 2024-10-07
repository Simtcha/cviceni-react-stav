/*
Zadání 1: Přichystejte si stavovou proměnnou s výchozí hodnotou `false`, ve které bude uloženo,
  jestli je menu otevřené nebo nikoliv.
Zadání 2: Po kliknutí na tlačítko změňte stav z `true` na `false` nebo obráceně.
Zadání 3: Nerenderujte `ul`, pokud je stav `false`.
Zadání 4: Pokud je menu zavřené nechte mu jen třídu `hamburger`. Pro otevřené přidejte navíc
  `hamburger--otevrene`.
*/

import { useState } from 'react';
import './hamburger.css';

export const Uloha5 = () => {
  const [myMenu, setMenu] = useState(false)
  return (
    <div className='menu'>
      <button className={myMenu ? 'hamburger--otevrene' : 'hamburger'} aria-label="menu" onClick={()=> setMenu(!myMenu) }>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {myMenu ? (
        <ul>
        <li>
          <a href="#o-nas">O nás</a>
        </li>
        <li>
          <a href="#co-delame">Co děláme</a>
        </li>
        <li>
          <a href="#kontakty">Kontakty</a>
        </li>
        <li>
          <a href="#cenik">Ceník</a>
        </li>
      </ul>) : null}
    </div>
  );
};
