
import './App.css';
import ComponentBtn1 from './Component/ComponentBtn1'
import ComponentBtn2 from './Component/ComponenBtn2';
import ComponentBtn3 from './Component/ComponentBtn3';



function App() {
  return (
    <div className="App">
      <div className='btn'>
        <ComponentBtn1/>
      </div>
     <div className='btn'>
       <ComponentBtn2/>
     </div>
     <div className='btn'>
       <ComponentBtn3/>
     </div>
     
    </div>
  );
}

export default App;
