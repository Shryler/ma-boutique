import React from 'react';

const LoginAndRegistration = () => {

    function toggleForm(e) {
        e.preventDefault();
        let container = document.querySelector(".LoginAndRegistration");
        container = container.firstChild;
        container.classList.toggle('active');
    }

    return (
        <section className='LoginAndRegistration'>
            <div className='container'>
                <div className="user signinBx">
                    <div className="imgBx">
                        <img src="/img/signIn.jpg" alt="" />
                    </div>
                    <div className="formBx">
                        <form>
                            <h2>Se connecter</h2>
                            <input type="text" placeholder="Login" />
                            <input type="password" placeholder="Password" />
                            <input type="submit" value="S'identifier" />
                            <p className="signup">Vous n'avez pas de compte ? <a href="/" onClick={(e) => toggleForm(e)}>Créer mon compte</a></p>
                        </form>
                    </div>
                </div>
                <div className="user signupBx">
                    <div className="formBx">
                        <form>
                            <h2>Créer un nouveau compte</h2>
                            <input type="text" placeholder="Nom d'utilisateur" />
                            <input type="text" placeholder="Adresse email" />
                            <input type="password" placeholder="Création du mot de passe" />
                            <input type="password" placeholder="Confirmation du mot de passe" />
                            <input type="submit" value="S'enregistrer" />
                            <p className="signup">Vous avez déjà un compte ? <a href="/" onClick={(e) => toggleForm(e)}>S'identifier</a></p>
                        </form>
                    </div>
                    <div className="imgBx">
                        <img src="/img/signUp.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginAndRegistration;