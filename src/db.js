import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig  = {
  // API KEYS
  apiKey: "AIzaSyDVTVpF2_69JgTgvDsWiaVskM_ce7CA_A8",
  authDomain: "firevuechat-18118.firebaseapp.com",
  databaseURL: "https://firevuechat-18118-default-rtdb.firebaseio.com",
  projectId: "firevuechat-18118",
  storageBucket: "firevuechat-18118.appspot.com",
  messagingSenderId: "1037298709965",
  appId: "1:1037298709965:web:49e21bc6030e2d3613c084"
}

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db