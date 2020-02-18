import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBoKU3s5lXb2dbGkTcWeJeBMzCTWWwZR6M',
  authDomain: 'login152547.firebaseapp.com',
  databaseURL: 'https://login152547.firebaseio.com',
  projectId: 'login152547',
  storageBucket: 'login152547.appspot.com',
  messagingSenderId: '683914246799',
  appId: '1:683914246799:web:7e61cb4916372657cdcefa',
  measurementId: 'G-PBNTRSX1P0'
}
var fireApp = firebase.initializeApp(firebaseConfig)
export default fireApp
