import { useState } from "react"

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
export default function App() {


              const [bmi_output , set_bmi_output] = useState(0) ;
              const [bmi_msg , set_bmi_msg] = useState("Your BMI is good") ;


            //______________________________________________________________________________//
                    const [height , set_height] = useState("") ;
                    function handle_height_change(event_info_object) {
                      set_height(event_info_object.target.value) ;
                    }

              
            //______________________________________________________________________________//
                    const [weight , set_weight] = useState("") ;
                    function handle_weight_change(event_info_object) {
                      
                      console.log(`hello`)
                    }


            //______________________________________________________________________________//
                    function handle_calculate_btn_click(event_info_object) {

                      console.log(height , weight);

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
        <input type="text" className="input_height" placeholder="Enter height in m" value={height} onChange={(e) => handle_height_change(e)}/>
        <button className="project_btn button_height_positive">
          <p className="text_inside text_inside_positive">+</p>
          </button>
        <button className="project_btn button_height_negative">
          <p className="text_inside text_inside_negative">-</p>
        </button>
      </div>

      <div className="div_input_weight" > 
        <input type="text" className="input_weight" placeholder="Enter weight in kg" onChange={(e) => handle_weight_change(e)} />
        <button className="project_btn button_weight_positive">
          <p className="text_inside text_inside_positive">+</p>
        </button>
        <button className="project_btn button_weight_negative">
          <p className="text_inside text_inside_negative">-</p>
        </button>
      </div>

      <button className="project_btn btn_calculate" onClick={(e)=> handle_calculate_btn_click(e)}>CALCULATE</button>


    </div>
    
  )
//---------------------------------------------------------------------------------------//


}