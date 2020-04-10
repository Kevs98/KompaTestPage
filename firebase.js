// Initialize Firebase
var config = {
    apiKey: "AIzaSyDpm9qnEsjaccJ1OiDT04uMZ6qvMJxfh2I",
    authDomain: "testconn-ba2be.firebaseapp.com",
    databaseURL: "https://testconn-ba2be.firebaseio.com",
    projectId: "testconn-ba2be",
    storageBucket: "testconn-ba2be.appspot.com",
    messagingSenderId: "233688679905",
    appId: "1:233688679905:web:fce6700d14629c11b67ea0"
  };
  firebase.initializeApp(config);
  
  // Reference test collection
  var testref = firebase.database().ref('test');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    //Get value
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
    console.log(name);
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get form value
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = testref.push();
    newMessageRef.set({
      name: name,
      company: company,
      email: email,
      phone: phone,
      message: message
    });
  }
  