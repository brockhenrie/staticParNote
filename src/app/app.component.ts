import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'staticParNote';
}

const firebaseConfig = {
  apiKey: "AIzaSyBEkBz4kytxb1nd448e2EeiuacYnfhbMc8",
  authDomain: "parnote-3d684.firebaseapp.com",
  projectId: "parnote-3d684",
  storageBucket: "parnote-3d684.appspot.com",
  messagingSenderId: "310692099791",
  appId: "1:310692099791:web:55d6b1b1880bcaf2f929ba",
  measurementId: "G-WCN5FLF132"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
