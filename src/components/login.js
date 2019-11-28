import React, {Components} from "react"

class Login extends Components{
    render(){
        const {
            user,
            signOut,
            signInWithGoogle,
          } = this.props;
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {
                  user 
                    ? <p>Hello, {user.displayName}</p>
                    : <p>Please sign in.</p>
                }
                {
                  user
                    ? <button onClick={signOut}>Sign out</button>
                    : <button onClick={signInWithGoogle}>Sign in with Google</button>
                }
              </header>
            </div>
          );
    }
}