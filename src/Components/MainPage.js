import React from 'react';
import '../styles/MainPage.scss';
import rocket from './rocket.png';


// import { Container } from './styles';

function MainPage() {
  return (
      <div className="mainPage">
          <div className="article">
              <p>
              <q1>Halo, Selamat Datang</q1>
              </p>
              <br></br>
              <p>
              <q2>Temukan Pekerjaan <br></br> Freelance Impianmu</q2>
              </p>
              <br></br>
              <p>
              <q3>Bekerjalan Ditempat Yang Membuatmu Nyaman <br></br> Daftar Sekarang Gratis</q3>
              </p>
              <p>
             <img src={rocket} />
              </p>
          </div>
          
          <div className="myButton">
              <q4>
              <button class="btn1">Sign in   </button>
              </q4>
              <q5>
              <button class="btn2">Sign up</button>
              </q5>
                  
          </div>


      </div>
  );
}

export default MainPage;