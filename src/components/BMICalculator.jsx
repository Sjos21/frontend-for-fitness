import React, { useState } from 'react'
import { toast } from 'react-toastify';

const BMICalculator = () => {
    const [height, setHeight]= useState("");
    const [weight, setWeight] = useState("");
    const [gender, setGender] = useState("");
    const [bmi, setBmi] = useState("");

    const calculatebmi=(e)=>{
      e.preventDefault();
      if(!height || !weight || !gender){
        toast.error("Please enter valid height, weight and gender");
        return;
      }

      const heightinmetres=height/100;
      const bmivalue=(weight/(heightinmetres*heightinmetres)).toFixed(2);
      setBmi(bmivalue);

      if(bmivalue < 18.5){
        toast.warning("You are underweight");
      }
      else if(bmivalue >=18.5 && bmivalue<24.9){
        toast.success("You have a healthy weight!")
      }
      else if(bmivalue >=25 && bmivalue<29.9){
        toast.warning("You are overweight!");
      }
      else{
        toast.warning("You are obese! Kindly consult your health-care adviser");
      }



    
  };
  return (
    <section className='bmi'>
      <h1>BMI calculator</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculatebmi}>
            <div>
              <label>Height (cm)</label>
              <input type='number' value={height} onChange={(e)=>setHeight(e.target.value)} required/>
            </div>
            <div>
              <label>Weight (kg)</label>
              <input type='number' value={weight} onChange={(e)=>setWeight(e.target.value)} required/>
            </div>
            <div>
              <label>Gender</label>
              <select value={gender} onChange={(e)=> setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type='submit'>Calculate BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="/bmi.jpg" alt="bmiImage" />
        </div>
      </div>
    </section>
  )
    
  
};

export default BMICalculator