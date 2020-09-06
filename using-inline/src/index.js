import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const flname = "zahin ekbal";
const img1="https://picsum.photos/id/1019/400/500";
const img2="https://picsum.photos/id/102/400/500";
const img3="https://picsum.photos/id/1018/400/500";

/*.heading {
   color: #fa9191;
   text-align: center;
   text-transform: capitalize;
   font-weight: bold;
   text-shadow: 0px 2px 4px #ffe9c5;
   margin: 70px;
   font-family: 'Josefin Sans', sans-serif;
}*/
const heading = {
   color: '#fa9191',
   textAlign: 'center',
   textTransform: 'capitalize',
   fontWeight: 'bold',
   textShadow: '0px 2px 4px #ffe9c5',
   margin: '70px',
   fontFamily: '"Josefin Sans", sans-serif'
};

ReactDOM.render( 
                  <>
                  <h1 style= {heading}>My name is {flname}</h1>
              <div className="img_div">
                  <img src={img1} alt ="naturepic" />
                  <img src={img2} alt ="naturepic" />
                  <img src={img3} alt ="naturepic" />
               </div>
                  </>,
                  document.getElementById('root')
               );