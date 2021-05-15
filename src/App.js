import React from 'react';
import netlifyIdentity from 'netlify-identity-widget';

function App() {
  const [user,setUser] = React.useState(null);
  React.useEffect(() => {
    netlifyIdentity.on('login',(user) => {
      setUser(user)
      netlifyIdentity.close();
    });
    netlifyIdentity.on('logout',() => setUser(null));

    netlifyIdentity.init();
    
    return () => {
      netlifyIdentity.off('login');
      netlifyIdentity.off('logout')
    }
    },[]);
  console.log(user);

  const login = () => {
    if(netlifyIdentity){
      netlifyIdentity.open();
    }
  }

  const logout = () => {
    netlifyIdentity.logout();
  }

  return (
    <div className="app">
      <div style={{height:'3rem',background:'aquamarine',display:'flex',justifyContent:'center',alignItems:'center'}}>
        {!user
            ?
            <button onClick={login}>Login</button>
            :
            (
                <div>
                  <button onClick={logout}>Logout</button>
                  <span style={{marginLeft:'2rem'}}>{user.user_metadata.full_name}</span>
                </div>
            )}
      </div>
    </div>
  );
}

export default App;
