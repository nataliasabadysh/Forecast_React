// Core
import React from 'react';
// Instruments
import { CELSIUM_INPUT_ID, FARENHEIT_INPUT_ID, DEGREE_TYPE, KELVIN_INPUT_ID} from '../utils/constants';


const DegreeToggle = ({ degreeType,  onUpdateForecastDegree }) => {
  return (
    <>
        <section role="group" className='labals_group'>

            <label htmlFor={CELSIUM_INPUT_ID} >
            <span>Celsius</span>
                <input
                type="radio"
                name="degreeType"
                value={DEGREE_TYPE.imperial}
                id={CELSIUM_INPUT_ID}
                checked={degreeType === DEGREE_TYPE.imperial}
                onChange={onUpdateForecastDegree}
                />
            </label>

            <label htmlFor={FARENHEIT_INPUT_ID}>
            <span>Fahrenheit</span>
                <input
                type="radio"
                name="degreeType"
                value={DEGREE_TYPE.metric}
                id={FARENHEIT_INPUT_ID}
                checked={degreeType === DEGREE_TYPE.metric}
                onChange={onUpdateForecastDegree}
                />
            </label>
       </section>
    </>
  )
}

export default DegreeToggle;