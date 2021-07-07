import React, { useState} from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import phone from '../assets/img/phone.png';
import girlMobile from '../assets/img/mobile-girl.png';
import girl from '../assets/img/girl-desktop.png';
import '../styles/index.css';
import { withStyles } from '@material-ui/core/styles';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#FFFFFF',
        width: '80px',
        height: '40px',
        border: '1px solid #ced4da',
        borderRight: '1px solid #FFFFFF',
        fontSize: 16,
        marginBottom: '15px',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
    },
}))(InputBase);


const GreenCheckbox = withStyles({
    root: {
        color: '#43B748',
        '&$checked': {
            color: '#43B748',
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);



export const Login = () => {
    const history = useHistory();
    const [placa, setPlaca] = useState('');
    const [doc, setDoc] = useState('');
    const [celular, setCelular] = useState('');
    const [error, setError] = useState(false);
    const [errorDoc, setDocError] = useState(false);
    const [errorCliente, setErrorCliente] = useState(false);
    const [labelInput, setLabelInput] = useState("");
    const [labelDoc, setLabelDoc] = useState("");
    const [labelCelular, setLabelCelular] = useState("");
    const [id, setId] = useState('DNI');
    const [checked, setChecked] = useState(true);

    const handleCheck = (event) => {
        setChecked(event.target.checked);
    };
    const handleChange = (event) => {
        setId(event.target.value);
    };

    const Cotizar = () => {
        if (/^[0-9]{8,}$/.test(doc) && doc !== "") {
            if (/\d{9,}/.test(celular)) {
                if (/^([A-Za-z]{3}\d{3})$/.test(placa)) {
                    setError(false);
                    history.push(`home/`);
                } else {
                    setError(true);
                    setLabelInput("El número de  Placa es invalido.")
                }
            } else {
                setLabelCelular("Por favor ingresa un número de celular valido ")
                setErrorCliente(true);
            }

        } else {
            setLabelDoc('El número de documento es invalido.');
            setDocError(true)
        }

    };

    return (
        <section className="content">
            <article className="content__header">
                <div className="content__header__logo" >
                    <div>
                        <img className="logo" src={logo} alt="logo" />
                    </div>
                    <div class="imagenPhone" > <img className="phone" src={phone} alt="phone" /> <p className="Roboto mobile-login">Llámanos</p> </div>
                </div>
                <div className="viewMobileOcult">
                    <div className="viewMobileOcult--margin">
                        <p className="nuevoFont">!NUEVO¡</p>
                        <p className="seguroFont">Seguro Vehicular</p>
                        <p className="textRed">Tracking</p>
                        <p className="cuentanosFont">Cuentanos donde le haras seguimiento a tu seguro</p>
                    </div>
                    <img src={girlMobile} alt="girl" />
                </div>
                <div className="viewDesktop">
                    <div className="loginDesktop">
                        <div className='divImgGirl'> <img className="girl" src={girl} alt="girl" />
                        </div>
                        <div className="viewDesktop__lateral">
                            <p className="nuevoFont">!NUEVO¡</p>
                            <div className="div_p_viewDesktop">
                                <p className="seguroDesktopfont">Seguro </p>
                                <p className="textRed">Vehicular</p>
                            </div>
                            <p className="textRed">Tracking</p>
                            <p className="cuentanosFont">Cuentanos donde le haras seguimiento a tu seguro</p>

                        </div>
                    </div>
                    <p className="footer"> © 2020 RIMAC Seguros y Reaseguros.</p>
                </div>
            </article>
            <article className="login  white calibri" id="login" >
                <div class="phoneDesktop" >
                    <p className="Roboto">¿Tienes alguna duda?</p>
                    <img className="phone" src={phone} alt="phone" />
                    <p className="Roboto fontPhone" >(01) 411 6001</p>
                </div>
                <form className="column form-login" >
                    <div className="center-text" > Déjanos tus datos </div>
                    <div className="divForm" >
                        <FormControl className="margin">
                            <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                value={id}
                                onChange={handleChange}
                                input={<BootstrapInput />}
                            >
                                <MenuItem value={'DNI'}>DNI</MenuItem>
                                <MenuItem value={'CE'}>CE</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField className="input-form2"
                            id="doc"
                            type="text"
                            label="Nro. de doc"
                            variant="outlined"
                            helperText={labelDoc}
                            error={errorDoc}
                            onChange={(e) => setDoc((e.target.value).replace(/ /g, ""))}
                        />
                    </div>
                    <div style={{ marginBottom: '2px' }}>
                        <TextField className="input-form"
                            id="celular"
                            type="text"
                            variant="outlined"
                            label="Celular"
                            helperText={labelCelular}
                            error={errorCliente}
                            onChange={(e) => setCelular((e.target.value).replace(/ /g, ""))}
                        />
                    </div>
                    <TextField className="input-form"
                        id="placas"
                        type="text"
                        label="Placa"
                        variant="outlined"
                        helperText={labelInput}
                        error={error}
                        onChange={(e) => setPlaca((e.target.value).replace(/ /g, ""))}
                    />
                    <div style={{ display: 'flex', paddingLeft: '1rem' }}>
                        <GreenCheckbox checked={checked} onChange={handleCheck} name="checkedG" />
                        <p className="terms">Acepto la  <span className="span"> política de Protección de Datos Personales</span> y los  <span className="span">Términos y Condiciones.</span></p>
                    </div>
                    <button className="btn-login"
                        type="button"
                        onClick={Cotizar} >
                        Cotízalo </button>
                </form>
            </article>
        </section>
    )
};