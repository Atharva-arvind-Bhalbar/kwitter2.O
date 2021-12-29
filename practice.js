const firebaseConfig = {
      apiKey: "AIzaSyDKtQYnEuEXRyt7o-B71LNfnryREJBHLQo",
      authDomain: "chat-with-us-15b2d.firebaseapp.com",
      databaseURL:"https://chat-with-us-15b2d-default-rtdb.firebaseio.com",
      projectId: "chat-with-us-15b2d",
      storageBucket: "chat-with-us-15b2d.appspot.com",
      messagingSenderId: "65774873051",
      appId: "1:65774873051:web:89c5ea3fd143593611dffe"
    };

firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
      purpose:"adding user"
    });
}