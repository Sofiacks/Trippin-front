import React, { useState } from 'react';
import '../Register.css';


export default function Register() {

    return (
        <div className="form" >

                <div className="form-title">
                    <label className="form__text-title" type="text" for="title" >Inscription </label>
                </div>

            <div className="form-body">

                <div class="inputfield">
                    <label className="form__label" for="firstName">Prénom </label>
                    <input className="form__input" type="text" id="firstName" />
                </div>
                    
                <div class="inputfield">
                    <label className="form__label" for="lastName">Nom </label>
                    <input type="text" name="" id="lastName" className="form__input" />
                </div>

                <div class="inputfield">
                    <label className="form__label" for="email">Email </label>
                    <input type="email" id="email" className="form__input" placeholder="Email" />
                </div>

                <div class="inputfield">
                    <label className="form__label" for="password">Mot de passe </label>
                    <input className="form__input" type="password" id="password" placeholder="********" />
                </div>

                <div class="inputfield">
                    <label className="form__label" for="confirmPassword">Confirmation </label>
                    <input className="form__input" type="password" id="confirmPassword" placeholder="Confirmation" />
                </div>
            </div>

                <div class="footer">
                    <button type="submit" class="btn">S'inscrire</button>
                </div>
        </div>
    )
}