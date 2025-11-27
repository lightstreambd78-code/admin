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
    
    
    
    var alluser = firebase.database().ref().child("admin").child('super_asdmin');
    
    
    
    
    var admin = '';
    var pass = '';
    
  
  
  
  
  alluser.on("value", function (snapshot4) {
      if (snapshot4.exists()) {
  
  
  
  
        admin = snapshot4.val().username;
         pass = snapshot4.val().password ;
  
  
  
  
  
      }
  
      console.log('admin :'+admin);

  
      $('#bkas').val(admin);
      $('#nog').val(pass);
    
  
  
    });
  
  
    function validate() {
  
      var bkas  = document.getElementById("bkas").value;
      var nog = document.getElementById("nog").value;
   
      
    
    
      var ref10 = firebase.database().ref().child("admin");
    
      var didConfirm = confirm("Are you sure You want to submit??");
      if (didConfirm == true) {
    
        ref10.child('super_asdmin').set({
          "username": bkas,
          "password": nog,

        
          
    
        });
    
    
        location.reload();
        
    
    
      } else {
        return false;
      }
    
    
    
    
    
    }
    
    
    
    
    
  
  
    
    
    
    
  
  
    
    
  
    
  
    
  
  