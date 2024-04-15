import { useState } from "react"

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
export default function App() {


              const [bmi_output , set_bmi_output] = useState(0) ;
              const [bmi_msg , set_bmi_msg] = useState("Your BMI is good") ;


            //______________________________________________________________________________//
                    const [height , set_height] = useState("") ;
                    function handle_height_change(event_info_object) {
                      set_height( (event_info_object.target.value)) ;
                    }

              
            //______________________________________________________________________________//
                    const [weight , set_weight] = useState("") ;
                    function handle_weight_change(event_info_object) {
                      
                      set_weight(event_info_object.target.value)
                    }


            //______________________________________________________________________________//
                    function handle_calculate_btn_click(event_info_object) {

                      const bmi = (weight / (height * height)).toFixed(2) ;

                      if (bmi < 18.5) {
                        set_bmi_msg("Underweight")
                      } else if (bmi >= 18.5 && bmi <= 24.9) {
                        set_bmi_msg("Normal weight")
                      } else if (bmi >= 25 && bmi <= 29.9) {
                        set_bmi_msg("Overweight")                        
                      } else {
                        set_bmi_msg("Obesity")
                      }

                      set_bmi_output(bmi) ;
                    }


            //______________________________________________________________________________//
                    function handle_height_btn_click_function(event_info_object , type) {

                      if(type === "positive" )
                      set_height((height) => (Number(height)+0.01).toFixed(2) ) ;
                      
                      if(type === "negative")
                      set_height((height) => (Number(height)-0.01).toFixed(2) ) ;
                    }


            //______________________________________________________________________________//
                    function handle_weight_btn_click_function(event_info_object , type) {

                      if(type === "positive" )
                      set_weight((height) => (Number(weight)+1)) ;
                      
                      if(type === "negative")
                      set_weight((height) => (Number(weight)-1) ) ;
                    }




//---------------------------------------------------------------------------------------//
  return (

    <div className="div_app">

      <p className="text_BMI_calculator">BMI CALCULATOR</p>

      <div className="div_BMI_output">
        {bmi_output}
      </div>

      <p className="text_you_BMI_good_bad">{bmi_msg}</p>


      <div className="div_input_height"> 
        <input type="text" className="input_height" maxLength={4} placeholder="Enter height in m" value={height} onChange={(e) => handle_height_change(e)}/>
        <button className="project_btn button_height_positive">
          <p className="text_inside text_inside_positive" onClick={(e) => handle_height_btn_click_function(e , "positive" )}>+</p>
          </button>
        <button className="project_btn button_height_negative">
          <p className="text_inside text_inside_negative" onClick={(e) => handle_height_btn_click_function(e , "negative" )}>-</p>
        </button>
      </div>

      <div className="div_input_weight" > 
        <input type="text" className="input_weight" maxLength={3} placeholder="Enter weight in kg" value={weight} onChange={(e) => handle_weight_change(e)} />
        <button className="project_btn button_weight_positive">
          <p className="text_inside text_inside_positive"  onClick={(e) => handle_weight_btn_click_function(e , "positive" )} >+</p>
        </button>
        <button className="project_btn button_weight_negative">
          <p className="text_inside text_inside_negative"  onClick={(e) => handle_weight_btn_click_function(e , "negative" )} >-</p>
        </button>
      </div>

      <button className="project_btn btn_calculate" onClick={(e)=> handle_calculate_btn_click(e)}>CALCULATE</button>


    </div>
    
  )
//---------------------------------------------------------------------------------------//


}