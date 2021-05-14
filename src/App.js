function App() {

  const netlifyIdentity = window.netlifyIdentity;

  const openIdentityModal = () => {
    
    if(netlifyIdentity){
      netlifyIdentity.open();
    }else{
      console.log('not working') 
    }
  }

  const logOut = () => {
    
  }

  return (
    <div className="App">
      <div onClick={openIdentityModal}>Test</div>
      <div>Window</div>
      <button>LogOut</button>
    </div>
  );
}

export default App;
