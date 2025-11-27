const firebaseConfig = {
  apiKey: "AIzaSyCiSfYtph5aFK2SMLO1gm528FDqAchgCXw",
  authDomain: "light-weight-86edb.firebaseapp.com",
  databaseURL: "https://light-weight-86edb-default-rtdb.firebaseio.com",
  projectId: "light-weight-86edb",
  storageBucket: "light-weight-86edb.firebasestorage.app",
  messagingSenderId: "1022827970790",
  appId: "1:1022827970790:web:959a7b53509eb4bbac3b27"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  
  var alluser = firebase.database().ref().child("agent_number").child('10');
  
  
  
  
  var total = '';
  var ploan = '';
  

var nogod = '';
var bkash = '';
var rocket = '';


alluser.on("value", function (snapshot4) {
    if (snapshot4.exists()) {




      bkash = snapshot4.val().bkash;
       nogod = snapshot4.val().nogod ;
       rocket = snapshot4.val().rocket;




    }



    console.log("bkash"+bkash);
    console.log("nogod"+nogod);

    $('#bkas').val(bkash);
    $('#nog').val(nogod);
    $('#roc').val(rocket);


  });


  function validate() {

    var bkas  = document.getElementById("bkas").value;
    var nog = document.getElementById("nog").value;
    var roc = document.getElementById("roc").value;
    
  
  
    var ref10 = firebase.database().ref().child("agent_number");
  
    var didConfirm = confirm("Are you sure You want to submit??");
    if (didConfirm == true) {
  
      ref10.child('10').set({
        "bkash": bkas,
        "nogod": nog,
        'rocket': roc,
      
        
  
      });
  
  
      location.reload();
      
  
  
    } else {
      return false;
    }
  
  
  
  
  
  }
  
  
  
  
  


  
  
  
  


  
  

  

  

