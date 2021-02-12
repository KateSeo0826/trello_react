//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBkyOjB_iX2wXbHBt_b5sxikfUCtcXA1Og",
    authDomain: "trello-react-75bca.firebaseapp.com",
    projectId: "trello-react-75bca",
    storageBucket: "trello-react-75bca.appspot.com",
    messagingSenderId: "769434791998",
    appId: "1:769434791998:web:1cb2499c18c731f4d9e16f",
    measurementId: "G-JYN1PN9QCX"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);
// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();
// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };