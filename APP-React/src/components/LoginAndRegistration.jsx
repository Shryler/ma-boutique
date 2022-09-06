import React from 'react';

const LoginAndRegistration = () => {

    function toggleForm(e) {
        e.preventDefault();
        let container = document.querySelector(".LoginAndRegistration");
        container = container.firstChild;
        container.classList.toggle('active');
    }

    const handleFormSignInSubmit = (e) => {
        e.preventDefault();
        const jsonDataSignIn = Object.fromEntries(new FormData(e.target));
        console.log(jsonDataSignIn);
    }

    const handleFormSignUpSubmit = (e) => {
        e.preventDefault();
        const jsonDataSignUp = Object.fromEntries(new FormData(e.target));
        console.log(jsonDataSignUp);
    }

    return (
        <section className='LoginAndRegistration'>
            <div className='container'>
                <div className="user signinBx">
                    <div className="imgBx">
                        <img src="/img/signIn.jpg" alt="" />
                    </div>
                    <div className="formBx">
                        <form onSubmit={handleFormSignInSubmit}>
                            <h2>Se connecter</h2>
                            <input name="login" type="text" placeholder="Login" />
                            <input name="password" type="password" placeholder="Password" />
                            <input type="submit" value="S'identifier" />
                            <p className="signup">Vous n'avez pas de compte ? <a href="/" onClick={(e) => toggleForm(e)}>Créer mon compte</a></p>
                        </form>
                    </div>
                </div>
                <div className="user signupBx">
                    <div className="formBx">
                        <form onSubmit={handleFormSignUpSubmit}>
                            <h2>Créer un nouveau compte</h2>
                            <input name="login" type="text" placeholder="Nom d'utilisateur" />
                            <input name="mail" type="text" placeholder="Adresse email" />
                            <input name="password" type="password" placeholder="Création du mot de passe" />
                            <input name="Confirm password" type="password" placeholder="Confirmation du mot de passe" />
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