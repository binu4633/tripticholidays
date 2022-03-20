import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set} from "firebase/database";
    const form = document.querySelector('.form');
    const thank = document.querySelector('.thank-card');
    const userName = document.querySelector('.user-name')
    window.addEventListener('load',()=>{
      let formHeight = form.getBoundingClientRect().height;
     
      thank.style.height = formHeight+'px'
    })
    window.addEventListener('resize',()=>{
      let formHeight = form.getBoundingClientRect().height;
     
      thank.style.height = formHeight+'px'
    })

    const firebaseConfig = {
        apiKey: "AIzaSyAy9Pn_f8-V430ceMuDKJkLYRW-FVnesgs",
        authDomain: "triptic-contact-form.firebaseapp.com",
        databaseURL: "https://triptic-contact-form-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "triptic-contact-form",
        storageBucket: "triptic-contact-form.appspot.com",
        messagingSenderId: "82865129205",
        appId: "1:82865129205:web:a75c9b44eb600940ae67bc"
      };


      // initalize firebase
      const app = initializeApp(firebaseConfig);

      // reference database
      const database = getDatabase(app);
      

      // const contactFormDB=  database.ref('contactForm');

     const getFormValue = el=>document.querySelector(el).value;
     const formValueEmpty = el=>document.querySelector(el).value=''
      form.addEventListener('submit',(e)=>{
         e.preventDefault();
         const name = getFormValue('.input-name');
         const phone = getFormValue('.input-phone');
         const email = getFormValue('.input-email');
         const message = getFormValue('.input-message');


         console.log(name,phone,email,message);
         writeUserData(name, phone,email,message)
         userName.textContent=name;
         thank.style.clipPath='polygon(0 0, 100% 0, 100% 100%, 0 100%)';
         form.style.opacity=0

         setTimeout(closeThankCard,3000)
       
      })


    document.querySelector('.thank-close').addEventListener('click',closeThankCard)
    function closeThankCard(){
      thank.style.clipPath='polygon(50% 0, 50% 0, 50% 100%, 50% 100%)';
      form.style.opacity=1;
      formValueEmpty('.input-name');
    formValueEmpty('.input-phone');
      formValueEmpty('.input-email');
     formValueEmpty('.input-message');
    }


      function writeUserData( name, phone,email,message) {
        const db = getDatabase();
        const date = new Date().getDate();
        const year = new Date().getFullYear();
        const month = new Date().getMonth()
        const time = new Date().getTime()
        set(ref(db, 'contact-form/' +`${year}/`+`${month}/`+`${date}/`+time), {
          name:name,
          phone:phone,
          email: email,
          message:message
        });
       }



   const time = new Date().getDate()
   console.log(time);
   console.log(new Date().getFullYear());
   console.log(new Date().getMonth());



//     const firebaseConfig = {
//         apiKey: "AIzaSyADgTQvCIcZ7URVHV9UUYjAwWCoPPZGNS4",
//         authDomain: "triptic-holidays.firebaseapp.com",
//         projectId: "triptic-holidays",
//         storageBucket: "triptic-holidays.appspot.com",
//         messagingSenderId: "1066953035330",
//         appId: "1:1066953035330:web:cdcb6e7fc749a8f709a7db",
//         measurementId: "G-CES966EZ52"
//       };

//       const app = initializeApp(firebaseConfig);

//       // reference messages collections

//       let messageRef = app.database().ref('messages')

// function sendMsg(e){
//     e.preventDefault();


// const formName = document.querySelector('.input-name');
// const formPhone = document.querySelector('.input-phone');
// const formEmail = document.querySelector('.input-email');
// const formMessage = document.querySelector('.input-message');

// const name= formName.value;
// const phone= formPhone.value;
// const email = formEmail.value;
// const message = formMessage.value;


// // save message
// saveMsg(name,phone,email,message)

// }
// form.addEventListener('submit',sendMsg)

// function saveMsg(name,phone,email,message){
//     let newMessageRef = messageRef.push()
//     newMessageRef.set({
//         name:name,
//         phone:phone,
//         email:email,
//         message:message
//     })
// }


// Email.send({
//     SecureToken : "BABFBCD480945A3C9B1B98769FEDEF7077BC",
//     To : 'binu4633@gmail.com',
//     From : formEmail.value,
//     Subject : "contact form",
//     Body : formMessage.value,
// }).then(
//   message => alert(message)
// );