import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'

function App() {
  const [valorTela,setValorTela] = useState("")
  const [resultado,setResultado] = useState("")
  const insert=(e)=>{
    setValorTela(valorTela+e)
  }
  const calcula=(res)=>{
    setValorTela(eval(res))
  }

  return (
    <div>
      <h1>Calculadora matemática</h1>
      <input value={valorTela} className='mostrador'/>
      <table className='botoes'>
        <tr>
          <td><button className='botao' onClick={()=>{setValorTela("")}} >AC</button></td>
          <td><button className='botao' onClick={()=>{insert("(")}}>(</button></td>
          <td><button className='botao' onClick={()=>{insert(")")}}>)</button></td>
          <td><button className='botao' onClick={()=>{insert("/")}}>/</button></td>
        </tr>
        <tr>
          <td><button className='botao' onClick={()=>{insert("7")}}>7</button></td>
          <td><button className='botao' onClick={()=>{insert("8")}}>8</button></td>
          <td><button className='botao' onClick={()=>{insert("9")}}>9</button></td>
          <td><button className='botao' onClick={()=>{insert("*")}}>*</button></td>
        </tr><tr>
          <td><button className='botao' onClick={()=>{insert("4")}}>4</button></td>
          <td><button className='botao' onClick={()=>{insert("5")}}>5</button></td>
          <td><button className='botao' onClick={()=>{insert("6")}}>6</button></td>
          <td><button className='botao' onClick={()=>{insert("-")}}>-</button></td>
        </tr><tr>
          <td><button className='botao' onClick={()=>{insert("1")}}>1</button></td>
          <td><button className='botao' onClick={()=>{insert("2")}}>2</button></td>
          <td><button className='botao' onClick={()=>{insert("3")}}>3</button></td>
          <td><button className='botao' onClick={()=>{insert("+")}}>+</button></td>
        </tr><tr>
          <td><button className='botao' onClick={()=>{insert("0")}}>0</button></td>
          <td><button className='botao' onClick={()=>{insert(".")}}>1</button></td>
          <td><button className='botao' onClick={()=>{setValorTela(String(valorTela).substring(0,valorTela.length-1))}}>C</button></td>
          <td><button className='botao' onClick={()=>{calcula(valorTela)}}>=</button></td>
        </tr>
      </table>
     
    </div>
  );
}

export default App;
