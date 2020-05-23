import firebase from 'firebase';

function Authentication(config) {
  this.firebase = firebase.initializeApp(config);
};

Authentication.prototype.auth = function () {
  return this.firebase.auth();
};

Authentication.prototype.signIn = function(email, password) {
  return this.firebase.auth().signInWithEmailAndPassword(email, password);
};

Authentication.prototype.signOut = function() {
  return this.firebase.auth().signOut();
};

Authentication.prototype.createAccount = function(email, password) {
  return this.firebase.auth().createUserWithEmailAndPassword(email, password);
};

export { Authentication };
