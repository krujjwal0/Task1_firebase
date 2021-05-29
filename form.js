  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB6xKRc8Cq_6bxlqJLNNXo_q2vufZMKzLI",
    authDomain: "test-a9c11.firebaseapp.com",
    projectId: "test-a9c11",
    storageBucket: "test-a9c11.appspot.com",
    messagingSenderId: "875902670277",
    appId: "1:875902670277:web:b132ae87fa73306b8f27ac",
    measurementId: "G-VG6W2K6P95"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password")
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    alert("Signed in");
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })