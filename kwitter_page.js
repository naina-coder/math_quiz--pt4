//YOUR FIREBASE LINKS

var firebaseConfig = {
      apiKey: "AIzaSyC7eHC7klOpHDBZrJeGwCocnX2TRpVj5pI",
      authDomain: "kwitter-app----social--app.firebaseapp.com",
      databaseURL: "https://kwitter-app----social--app-default-rtdb.firebaseio.com",
      projectId: "kwitter-app----social--app",
      storageBucket: "kwitter-app----social--app.appspot.com",
      messagingSenderId: "69899542444",
      appId: "1:69899542444:web:37440ba9a1dbed3ff8a409"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name: user_name,
                message: msg,
                like: 0

          });
          document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
