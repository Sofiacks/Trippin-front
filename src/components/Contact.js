import Menu from './Menu';
import '../Profile.css';

export default function () {

    // prochainement handleclick pour envoyer les données en BDD 

    return (
            
        <>
                <Menu/>
            <div class="wrapper">

                <div class="title">
                    Contact
                </div>

            <div class="form">
               <div class="inputfield">
                  <label>Pseudo</label>
                  <input type="text"  class="input"required/>
               </div>  
                 
               <div class="inputfield">
                  <label>Email</label>
                  <input type="email" placeholder="" class="input"/>
               </div> 
               
              <div class="inputfield">
                  <label>N° Télephone</label>
                  <input type="text"  placeholder="Facultatif" class="input"/>
               </div> 

               <div class="inputfield">
                  <label>Message:</label>
                  <input type="text-area"  placeholder="Tapez votre message ici..." class="input"/>
               </div> 

              <div class="inputfield">
                <input type="submit" value="Envoyer" class="btn" /> 
              </div>
                </div>
            </div>
        </>
    )
}