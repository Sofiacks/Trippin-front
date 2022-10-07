import Confirmed from "../components/Confirmed";
import { useState } from "react";
import Menu from "../components/Menu";

export default function Participation() {

  const [show, setShow] = useState(false);
  const handleClick = () => { setShow(!show); }

  return (
<>
    <Menu/>

    <div class="wrapper">
      <div class="title">
        Formulaire d'inscription

        Merci de confirmer les informations ci-dessous afin de te faire parvenir le formulaire d'inscription au voyage.
      </div>

      <div class="form">

        <div class="inputfield">
          <label>Email</label>
          <input type="email" placeholder="Modifier l'email actuel" class="input" />
        </div>
        <div class="inputfield">
          <label>Password</label>
          <input type="password" placeholder="********" class="input" />
        </div>

        <label>N° Télephone</label>
        <input type="text" placeholder="Facultatif" class="input" />
      </div>
      <div class="inputfield terms">
        <label class="check">
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <p>J'accepte les termes et conditions</p>
      </div>
      <div class="inputfield">
        <input type="submit" value="Valider" onClick={handleClick} />
        {show ? <Confirmed /> : <></>}
      </div>
      <div class="inpusupp-compte">
        <a href="/" class="link-supp-profil" >Annulation </a>
      </div>
    </div>

    </>
  )
}