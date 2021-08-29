
//ADD YOUR FIREBASE LINKS HERE

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
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name" + Room_names);
      row = "<div class='room_name' id="+Room_names+ " onclick = 'redirectToRoomName(this.id)'># "+Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html"
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html"
}