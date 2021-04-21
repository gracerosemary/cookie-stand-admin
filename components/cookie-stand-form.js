import { useState } from 'react'
import { hours } from '../data';

export default function CookieStandForm({ onCreate }) {
    const initialValues = {
        location: " ",
        max: 0,
        min: 0,
        avg: 0,
    };

    const [values, setValues] = useState(initialValues);

    function submitHandler(event) {
        event.preventDefault();
        onCreate(values);
        setValues(initialValues)
    }

    function inputChangeHandler(event) {
        let {name, value, type} = event.target;
        if (type == "number") {
            value = parseFloat(value);
        }
        setValues({...values, [name]: value});
    }
    return (
        <form onSubmit={submitHandler} className="bg-green-200 rounded-md mt-3 mb-4 w-full border-2 border-green-400 text-xs">
            <div className="flex uppercase font-bold">
                <div className="flex-1 m-6 text-center">
                    <label htmlFor="location" className="">Add Location</label>
                    <input type="text" name="location" id="location" placeholder="Cookie Stand Location" value={values.location} onChange={inputChangeHandler} className="flex-1 w-full p-2 rounded-sm placeholder-gray-300 m-1"/>
                </div>
                <button type="submit" className="uppercase w-72 h-11 font-semibold bg-green-500 rounded-sm align-center m-8">Create Stand</button>
            </div>


            <div className="font-bold text-xs rounded-md flex uppercase space-x-12 text-center justify-between p-4">
                <FormInputSection>
                    <label htmlFor="min" className="">Minimum Customers per Hour</label>
                    <input type="number" name="min" id="min" value={values.min} onChange={inputChangeHandler} className="p-2 rounded-sm w-full m-1"/>
                </FormInputSection>

                <FormInputSection>
                    <label htmlFor="max" className="">Maximum Customers per Hour</label>
                    <input type="number" name="max" id="max" value={values.max} onChange={inputChangeHandler} className="p-2 rounded-sm w-full m-1"/>
                </FormInputSection>

                <FormInputSection>
                    <label htmlFor="avg" className="">Average Cookies per Sale</label>
                    <input type="number" name="avg" id="avg" value={values.avg} onChange={inputChangeHandler} className="p-2 rounded-sm w-full m-1"/>
                </FormInputSection>
            </div>
        </form>
    )
}

function FormInputSection({children}) {
    return (
        <div className="flex-1 rounded-sm">
            {children}
        </div>
    )
}