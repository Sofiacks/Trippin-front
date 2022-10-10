import Menu from "../components/Menu";

export default function Profile () {

    return (
        <>
        <Menu/>
    <div class="wrapper">
    <div class="title">
      Profil
    </div>
    <div class="form">
       <div class="inputfield">
          <label>Pseudo</label>
          <input type="text"  class="input"required/>
       </div>  
        <div class="inputfield">
          <label>Nom</label>
          <input type="text" class="input"required/>
       </div>  
       <div class="inputfield">
          <label>Prénom</label>
          <input type="text" class="input"/>
       </div>  
       <div class="inputfield">
          <label>Date de naissance</label>
          <input type="date" class="input"required/>
       </div>  
       <div class="inputfield">
          <label>Email</label>
          <input type="email" placeholder="Modifier l'email actuel" class="input"/>
       </div> 
       <div class="inputfield">
          <label>Password</label>
          <input type="password" placeholder="********" class="input"/>
       </div>  
        <div class="inputfield">
          <label>Genre</label>
          <div class="custom_select">
            <select>
              <option value="">Choisissez</option>
              <option value="male">Masculin</option>
              <option value="female">Feminin</option>
              <option value="nogender">Non Genré</option>
            </select>
          </div>
       </div> 
      <div class="inputfield">
          <label>N° Télephone</label>
          <input type="text"  placeholder="Facultatif" class="input"/>
       </div> 
      <div class="inputfield terms">
          <label class="check">
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <p>J'accepte les termes et conditions</p>
       </div> 
      <div class="inputfield">
        <input type="submit" value="Valider" class="btn" /> 
        
        <a href="/" class="criteres"> <input type="submit" value="+de critères" class="btn"/>
        </a>
      </div>
      <div class="inpusupp-compte">
      <a href="/" class="link-supp-profil" >Supprimer mon compte </a>
            </div>
        </div>
    </div>
</>
)}