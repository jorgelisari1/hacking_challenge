import React from 'react';
import { useHistory } from "react-router-dom";
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Header } from '../components/Header';
import { Progress } from '../components/Progress';
import { Selects } from '../components/Selects';
import { CardHelp } from '../components/CardHelp';
import { Gas } from '../components/Gas';
import { Suma } from '../components/Suma';
import '../styles/home.css';

export const Home = (props) => {
  const history = useHistory();

  return (
    <div className="home">
      <Header />
      <div className="medio">
        <Progress className="progress" />
        <div className="div-content">
          <div className="saludo">
            <div className="icon-back-father">
              <div className="icon-back1">
                <ArrowBackIos style={{ fontSize: '13px', fontWeight: '100', paddingLeft: '3px' }}></ArrowBackIos>
              </div>
              <p className="text-volver"> VOLVER</p>
            </div>
            <p className="text_saludo1"> ¡Hola,<span style={{ color: '#EF3340' }}> Juan! </span></p>
            <p className="text_saludo2"> Completa los datos de tu auto</p>
          </div>
          <div className="select-card">
            <div className="select">
              <Selects />
            </div>
            <div className="card-help">
              <CardHelp />
            </div>
          </div>
          <div className="gas">
            <Gas />
          </div>
          <div className="suma">
            <Suma />
          </div>

          <div className="continuar">
             <button className= "button-continuar"
              onClick={() => {
                history.push(`continuar/`);
              }}> CONTINUAR  <ArrowForwardIosIcon style={{ fontSize: '23px', fontWeight: '100', paddingLeft: '8px' }}></ArrowForwardIosIcon > </button>
          </div>
          <div className="footer">
             <div className= "Text-footer"> © 2020 RIMAC Seguros y Reaseguros. </div>
          </div>
        </div>
      </div>             
    </div>
  );
};
