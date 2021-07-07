import React from 'react';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import '../styles/progress.css';



export const Progress = () => {

    return (
        <div className="progress" >
            <div className="icon-back">
                <ArrowBackIos style={{ color: '#E4E8F7', fontSize: '13px', fontWeight: '100', paddingLeft: '3px' }}></ArrowBackIos>
            </div>
            <div className="text-step-1">PASO 1 DE 2</div>
            <div className="linear">
                <div className="linear-hijo"></div>
            </div>

            <div className="ocultar">
                <div className="horizontal">
                    <div className="circulo">1</div>
                    <div className=" datos">Datos del auto</div>
                </div>
                <div className="borde_discontinuo">
                </div>
                <div className="horizontal">
                    <div className="circulo2">2</div>
                    <div className ="plan">Arma tu plan</div>
                </div>
            </div>

        </div>
    );
};