function App() {

  const openIdentityModal = () => {
    const netlifyIdentity = window.netlifyIdentity;

    if(netlifyIdentity){
      netlifyIdentity.open('signup');
    }else{
      console.log('not working') 
    }
  }

  return (
    <div onClick={openIdentityModal} className="App">
      Test

      <button>LogOut</button>
    </div>
  );
}

export default App;
