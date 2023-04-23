import { useState, useRef } from 'react';
import { createFood } from '../../utilities/food-api'
import  PhotoUpload  from '../PhotoUpload/PhotoUpload'
import './HeroPostForm.css'

const FoodTypes = {
    CannedFood: "Canned Food",
    FreshProduce: "Fresh Produce",
    ShelfStable: "Shelf Stable",
    PreparedMeals: "Prepared Meals",
    Mixed: "Mixed"
  }

const conditions = [
  'Frozen',
  'Hot',
  'Perishable',
]

export default function HeroForm(props) {
  const { navigate } = props
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [formData, setFormData] = useState({
      name: FoodTypes.FreshProduce,
      quantity: '',
      description: '',
      conditions: [],
      availableTime: '',
      availableDate: '',
      location: '',
      photoUrl: '',
      error: ''
  })

  const renderBtn = (condition) => {
    if(condition === 'Frozen') {
      return (
        <div className='condition-input-container'>
          {/* <label className='condition-label' id={isActive ? 'clicked': null} htmlFor="Frozen"> */}
          <button
            key={condition}
            name='conditions'
            value={condition}
            type="button"
            className="condition-label"
            id={isActive ? 'clicked': 'notClicked'}
            // className={buttonClasses(isSelected)}
            onClick={(e) => handleToggle(e)}
          >
            <i className="fa-regular fa-snowflake"></i>
            {condition}
          </button>
          {/* </label> */}
        </div>
      )
    } else if(condition === 'Hot') {
      return (
        <div className='condition-input-container'>
          {/* <label className='condition-label' id={isActive ? 'clicked': null} htmlFor="Hot"> */}
          <button
            key={condition}
            name='conditions'
            value={condition}
            type="button"
            className="condition-label"
            id={isActive2 ? 'clicked': 'notClicked'}
            // className={buttonClasses(isSelected)}
            onClick={(e) => handleToggle(e)}
          >
            <i className="fa-solid fa-temperature-arrow-up"></i>
            {condition}
          </button>
          {/* </label> */}
        </div>
      )
    } else if(condition === 'Perishable') {
      return (
        <div className='condition-input-container'>
          {/* <label className='condition-label' id={isActive ? 'clicked': null} htmlFor="Perishable"> */}
          <button
            key={condition}
            name='conditions'
            value={condition}
            type="button"
            className="condition-label"
            id={isActive3 ? 'clicked' : 'notClicked' }
            // className={buttonClasses(isSelected)}
            onClick={(e) => handleToggle(e) }
          >
            <i className="fa-regular fa-trash-can"></i>
            {condition}
          </button>
          {/* </label> */}
        </div>
      )
    }
  }

const handleChange = (evt) => {
      setFormData({...formData,
        [evt.target.name]: evt.target.value,
        error: ''
      });
}

  const handleToggle = (e) => {
    // old code
      // console.log(evt.target, "this is the event target")
      // setFormData({...formData,
      //   [evt.target.name]: evt.target.value,
      //   error: ''
      // });
      // console.log(formData, "this is the formData")
      // e.preventDefault();
    // new code
      console.log(e.target)
      if(e.target.value === 'Frozen') {
        setIsActive(!isActive);
      } else if(e.target.value === 'Hot') {
        setIsActive2(!isActive2)
      } else if(e.target.value === 'Perishable') {
        setIsActive3(!isActive3)
      }
      const tmpData = {...formData};
      // conditional chaining
      const idx = tmpData?.conditions?.indexOf(e.target.value);
      if(idx != -1 || idx === null) {    // found at idx
          tmpData[e.target.name].splice(idx,1);
      } else {    // not found
          console.log({tmpData})
          tmpData[e.target.name].push(e.target.value);
      }
      console.log({tmpData}, e.target.name);
      setFormData(tmpData)
  };

  const handleSubmit = async (evt) => {
    console.log(formData, "THIS IS THE formData")
    evt.preventDefault();
    try {
      const {name, quantity, description, condition, location, availableDate, availableTime, photoUrl} = formData;
      const foodData = {name, quantity, description, condition, location, availableDate, availableTime, photoUrl};
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const food = await createFood(foodData);
      // this.props.setFood(food);
      navigate('/hero/posts')
    } catch {
      // An error occurred
      setFormData({ error: 'Food creation failed - Try Again' });
    }
};

  return (
      <div className='create-page'>
        <form className='form-container' 
        autoComplete="off" onSubmit={handleSubmit}>
          <div className='photo-upload-container'>
            <PhotoUpload formData={formData} setFormData={setFormData} />
          </div>
          <div className='form-inputs'>
            <label className='food-type-label label' htmlFor='name'>Food Type</label>
            <select className='food-type-select input' name="name" value={formData.name} onChange={handleChange} required >
              <option value={FoodTypes.FreshProduce}>Fresh Produce</option>
              <option value={FoodTypes.PreparedMeals}>Prepared Meals</option>
              <option value={FoodTypes.Mixed}>Mixed</option>
              <option value={FoodTypes.ShelfStable}>Shelf Stable</option>
              <option value={FoodTypes.CannedFood}>Canned Food</option>
            </select>
            <label className='description-label label' htmlFor='description' >Description</label>
            <textarea className='description-textarea input' name="description" value={formData.description} onChange={handleChange} required />
            <label className='quantity-label label' htmlFor='quantity'>Quantity</label>
            <input className='quantity-input input' type="text" name="quantity" value={formData.quantity} onChange={handleChange} required />
            <label htmlFor="">Select All That Apply</label>
            <div className='condition-container'>
              {conditions.map((condition) => 
                renderBtn(condition)
                      // <button
                      //   key={condition}
                      //   name='conditions'
                      //   value={condition}
                      //   type="button"
                      //   // className={buttonClasses(isSelected)}
                      //   onClick={(e) => handleChange(e)}
                      // >
                      //   {condition}
                      // </button>
                    )}
              {/* <button >
                <div className='condition-input-container'>
                    <input className='condition-input' id='Frozen' type="radio" name="condition" value="Frozen" onChange={handleChange} />
                  <label className='condition-label' htmlFor="Frozen">
                    <i className="fa-regular fa-snowflake"></i>
                    Frozen
                  </label>
                </div>
              </button>
              <div className='condition-input-container'>
                  <input className='condition-input' id='Hot' type="radio" name="condition" value="Hot" onChange={handleChange} />
                <label className='condition-label' htmlFor="Hot">
                  <i className="fa-solid fa-temperature-arrow-up"></i>
                  Hot
                </label>
              </div>
              <div className='condition-input-container'>
                  <input className='condition-input' id='Perishable' type="radio" name="condition" value="Perishable" onChange={handleChange} />
                <label className='condition-label' htmlFor="Perishable">
                  <i className="fa-regular fa-trash-can"></i>
                  Perishable
                </label>
              </div> */}
            </div>
            <label className='location-label label' htmlFor='location' >Pick-up Location</label>
            <input className='location-input input' type="text" name="location" value={formData.location} onChange={handleChange} required />
            <label className='availability-label label' htmlFor='availableDate'>Pick-up Date</label>
            {/* two inputs, availableTime and availableDate */}
            <div className="availability-container">
              <input className='availability-input input' type="date" name="availableDate" value={formData.availableDate} onChange={handleChange} required />
              <label className='availability-label label' htmlFor='availableTime' >Pick-up Time</label>
              <input className='availability-input input' type="time" name="availableTime" value={formData.availableTime} onChange={handleChange} required />
            </div>
            <button className='submit-button' type="submit">Add Food</button>
          </div>
        </form>
      </div>
  )
}

{/* <div className='parent'>
          <div className="child form-container">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className='mb-5'>
                  <label className='font-regular mb-1 text-gray-700 block'>What kind of food do you want to donate?</label>
                  <select className='w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium' name="name" value={state.name} onChange={handleChange} required >
                    <option value={FoodTypes.CannedFood}>Canned Food</option>
                    <option value={FoodTypes.Produce}>Fresh Produce</option>
                    <option value={FoodTypes.PreparedMeals}>Prepared Meals</option>
                    <option value={FoodTypes.ShelfStable}>Shelf Stable</option>
                    <option value={FoodTypes.Mixed}>Mixed</option>
                  </select>
                </div>
                
                <div className='mb-5'>
                  <label className='font-regular mb-1 text-gray-700 block'>When will this be available for pick up?</label>
                  <select className='w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium' name="availability" value={state.availability} onChange={handleChange} required >
                    <option value={Availability.Immediately}>Immediately</option>
                    <option value={Availability.Within24hours}>Within 24 hours</option>
                    <option value={Availability.WithinAWeek}>Within a week</option>
                  </select>
                </div>

                <div className='mb-5'>
                  <label className='font-regular mb-1 text-gray-700 block'>Description (Let us know the type of food you are donating) </label>
                  <textarea className='w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium' value={state.description} name="description" onChange={handleChange} required></textarea>
                </div>

                <div className='mb-5'>
                  <label className='font-regular mb-1 text-gray-700 block'>Quantity</label>
                  <input className='w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium' type="text" name="quantity" value={state.quantity} onChange={handleChange} required></input>
                </div>


                <div className='mb-5'>
                  <label className='font-regular mb-1 text-gray-700 block'>Location where this food is available for pickup</label>
                  <input className='w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium' type="text" name="location" value={state.location} onChange={handleChange} required></input>
                </div>
                <PhotoUpload formData={state} setFormData={setState}/>
              
              <button className='bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow' type="submit">Create Food</button>
            </form>
          </div>
        <p className="error-message">&nbsp;{state.error}</p>
      </div> */}