import { useState } from 'react';
import { signUp } from '../../utilities/users-service';
import BusinessForm from '../BusinessForm/BusinessForm';
// import PhotoUpload from '../PhotoUpload/PhotoUpload';
import Modal from '../Modal/Modal';
import './SignUpForm.css';

// const UserTypes = {
//   Hungry: "Hungry",
//   Hero: "Hero"
// }

export default function SignUpForm({ setUser, showSignUp, setShowSignUp }){
  const [showBusinessForm, setShowBusinessForm] = useState(true)
  const [hidden, setHidden] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    userType: 'Hero',
    photoUrl: '',
    businessName: '',
    businessType: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    error: ''
  });

  function handleShow() {
    setHidden(!hidden)
  }
    

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: ''
    });
    console.log("this is the form data: ", formData);
  };

  const handleNext = () => {
    setShowBusinessForm(!showBusinessForm);
  }

  // const hungryClick = async (evt) => {
  //   evt.preventDefault();
    // try {
    //   const {name, email, password, userType} = formData
    //   const data = {name, email, password, userType};
    //   const user = await signUp(data)
    //   setUser(user)
    //   setFormData({...formData, userType: 'Hungry'})
    // } catch {
    //   setFormData({...formData, error: 'Sign Up Failed'})
    // }
  //   setFormData({
  //     ...formData,
  //     userType: 'Hungry'
  //   });
  //   submitHungry()
  // };

  const submitHungry = async(evt) => {
    evt.preventDefault();
    try {
      const {name, email, password, userType} = formData
      const data = {name, email, password, userType: 'Hungry'};
      const user = await signUp(data)
      setUser(user)
      // setFormData({...formData, userType: 'Hungry'})
    } catch {
      setFormData({...formData, error: 'Sign Up Failed'})
    }
  }

  const handleSubmit = async (evt) => {
    console.log(formData, "THIS IS THE STATE")
    evt.preventDefault();
    try {
      const {name, email, password, userType, photoUrl, address, state, zipCode, city, phoneNumber, businessName, businessType} = formData;
      const data = {name, email, password, userType, photoUrl, address, state, zipCode, city, phoneNumber, businessName, businessType} ;
      const user = await signUp(data);
      setUser(user)
    } catch {
      setFormData({ ...formData, error: 'Sign Up Failed - Try Again' });
    }
  };

  const disable = formData.password !== formData.confirm;

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src="./images/logo.png" alt="Hunger-Hero" />
          <h2 className="mt-6 text-center text-lg font-bold tracking-tight text-gray-900">Sign Up with Us</h2>
        </div>
        <form className="mt-8 space-y-6" autoComplete="off" onSubmit={handleSubmit}>
          {showBusinessForm ?
          <div>
            <div className="-space-y-px- rounded-md shadow-sm">
              <div>
                <label for="name" className="sr-only">Name</label>
                <input id="name" name="name" type="text" className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm mb-4" placeholder="Name" value={formData.name} onChange={handleChange} />
              </div>
              <div>
                <label for="email" className="sr-only">Email</label>
                <input id="email" name="email" type="email" autocomplete="email" className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm mb-4" placeholder="Email" value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <label for="password" className="sr-only">Password</label>
                <input id="password" name="password" type="password" className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm mb-4" placeholder="Password" value={formData.password} onChange={handleChange} />
              </div>
              <div>
                <label for="confirm" className="sr-only">Confirm Password</label>
                <input id="confirm" name="confirm" type="password" className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm mb-4" placeholder="Confirm Password" value={formData.confirm} onChange={handleChange} />
              </div>
            </div>
            <h2 className="mt-6 text-center text-lg tracking-tight text-gray-900">I am a...</h2>
            <br/>
            <div className="flex justify-center text-sm space-x-4">
              <button className="w-1/2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700" onClick={handleNext} disabled={disable}>Distributor</button>
              <button type="submit" className="w-1/2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700" onClick={submitHungry} >Receiver</button>
            </div>
          </div>
          :
          <BusinessForm setUser={setUser} handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} setFormData={setFormData} setShowBusinessForm={setShowBusinessForm}/>
          }
        </form>
        <div className='flex justify-end text-sm'>
          <div className='font-medium text-grey-600 hover:text-indigo-50 underline mb-4' id='switchForm' onClick={handleShow}>What are these?</div>
          <div className='font-medium text-grey-600 hover:text-indigo-50 underline mb-4' id='switchForm' onClick={() => setShowSignUp(true)}>Already have an account?</div>
        </div>
        {hidden && (
          <Modal
            hidden={hidden}
            handleShow={handleShow}
          />
        )}
      </div>
    </div>
  )
}
  

  //   <div className='parent'>
  //     <div className="child">
  //       <div className='formCont'>
  //         <form autoComplete="off" onSubmit={handleSubmit}>
  //               { showBusinessForm === false ?
  //         <div className='w-5/5'>
  //           <div>
  //             <div className='mb-5'>
  //               <label className="font-regular mb-1 text-gray-700 block">Name</label>
  //               <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="name" value={formData.name} onChange={handleChange} required />
  //             </div>
  //             <div className='mb-5'>
  //               <label className="font-regular mb-1 text-gray-700 block">Email</label>
  //               <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium"  type="email" name="email" value={formData.email} onChange={handleChange} required />
  //             </div>
  //             <div className='mb-5'>
  //               <label className="font-regular mb-1 text-gray-700 block">Password</label>
  //               <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium"  type="password" name="password" value={formData.password} onChange={handleChange} required />
  //             </div>
  //             <div className='mb-5'>
  //               <label className="font-regular mb-1 text-gray-700 block">Confirm</label>
  //               <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium"  type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
  //             </div>
  //             <div className="selectDiv mb-5">
  //               <label className="font-regular mb-1 text-gray-700 block p-2">Type</label>
  //               <select className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium heroOrHungry" type="userType" name="userType" onChange={handleChange} required>
  //                 <option>Select either Hungry or Hero</option>
  //                 <option value={UserTypes.Hungry}>Hungry</option>
  //                 <option value={UserTypes.Hero}>Hero</option>
  //               </select>
  //             </div>
  //           </div>
  //           <div>
  //             <PhotoUpload formData={formData} setFormData={setFormData}/>
  //           </div>
  //           <button className='bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow' onClick={handleNext} disabled={disable}>Next</button>
  //         </div>
          // :
          // <BusinessForm setUser={setUser} handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} setFormData={setFormData}/>
  //         }
  //         </form> 
  //       </div>

  //     <div className='btnCont'><button className='btmBtn bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow' onClick={() => setShowSignUp(true)}>Already Have an Account?</button></div>
  //   </div>
  //     <p className="error-message">&nbsp;{formData.error}</p>
  // </div>

  //   <div className='parent'>
  //     <div className="child">
  //       <div className='formCont'>
  //         <form autoComplete="off" onSubmit={handleSubmit}>
  //               { showBusinessForm === false ?
  //         <div className='w-5/5'>
  //           <div>
  //             <div className='mb-5'>
  //               <label className="font-regular mb-1 text-gray-700 block">Name</label>
  //               <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="name" value={formData.name} onChange={handleChange} required />
  //             </div>
  //             <div className='mb-5'>
  //               <label className="font-regular mb-1 text-gray-700 block">Email</label>
  //               <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium"  type="email" name="email" value={formData.email} onChange={handleChange} required />
  //             </div>
  //             <div className='mb-5'>
  //               <label className="font-regular mb-1 text-gray-700 block">Password</label>
  //               <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium"  type="password" name="password" value={formData.password} onChange={handleChange} required />
  //             </div>
  //             <div className='mb-5'>
  //               <label className="font-regular mb-1 text-gray-700 block">Confirm</label>
  //               <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium"  type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
  //             </div>
  //             <div className="selectDiv mb-5">
  //               <label className="font-regular mb-1 text-gray-700 block p-2">Type</label>
  //               <select className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium heroOrHungry" type="userType" name="userType" onChange={handleChange} required>
  //                 <option>Select either Hungry or Hero</option>
  //                 <option value={UserTypes.Hungry}>Hungry</option>
  //                 <option value={UserTypes.Hero}>Hero</option>
  //               </select>
  //             </div>
  //           </div>
  //           <div>
  //             <PhotoUpload formData={formData} setFormData={setFormData}/>
  //           </div>
  //           <button className='bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow' onClick={handleNext} disabled={disable}>Next</button>
  //         </div>
          // :
          // <BusinessForm setUser={setUser} handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} setFormData={setFormData}/>
  //         }
  //         </form> 
  //       </div>

  //     <div className='btnCont'><button className='btmBtn bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow' onClick={() => setShowSignUp(true)}>Already Have an Account?</button></div>
  //   </div>
  //     <p className="error-message">&nbsp;{formData.error}</p>
  // </div>

