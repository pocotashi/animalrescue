import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBZy34bFyhmctM2Hn_MwKeGGlOtH7Ao4Js",
  authDomain: "lasttry-c7d14.firebaseapp.com",
  projectId: "lasttry-c7d14",
  storageBucket: "lasttry-c7d14.appspot.com",
  messagingSenderId: "173538291415",
  appId: "1:173538291415:web:633340480c13f21f8a8a92",
  measurementId: "G-2NHB3Q42GK"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);


   

  

  // apiKey: "AIzaSyD0lbbUSnsjELBHJx2ElI8UXzvq0BExjkg",
  //   authDomain: "fir-tutorial-2fc01.firebaseapp.com",
  //   projectId: "fir-tutorial-2fc01",
  //   storageBucket: "fir-tutorial-2fc01.appspot.com",
  //   messagingSenderId: "614738657139",
  //   appId: "1:614738657139:web:cf9ee9f41a9b109fa5cf06",
  //   measurementId: "G-1Z42KX4YJ0"