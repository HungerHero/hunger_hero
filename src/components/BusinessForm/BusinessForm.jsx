import { updateUser } from '../../utilities/users-api'
import PhotoUpload from '../PhotoUpload/PhotoUpload';

export default function BusinessForm(props) {
    const { setUser, handleChange, handleSubmit, formData, setFormData } = props 

  
    // handleSubmit = async (evt) => {
    //   evt.preventDefault();
    //   try {
    //     const {photoUrl, address, city, state, zipCode} = formState;
    //     const formData = {photoUrl, address, city, state, zipCode};
    //     // The promise returned by the signUp service
    //     // method will resolve to the user object included
    //     // in the payload of the JSON Web Token (JWT)
    //     const user = await updateUser(formData);
    //     props.setUser(user);
    //   } catch {
    //     // An error occurred
    //     // Probably due to a duplicate email
    //     setFormState({ error: 'Sign Up Failed - Try Again' });
    //   }
    // };
    //   const disable = formState.password !== formState.confirm;
      return (
        <>
          <div className='mb-5'>
            <label className="font-bold mb-1 text-gray-700 block">Business Name</label>
            <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="businessName" value={formData.businessName} onChange={handleChange} required />
          </div>
          <div className='mb-5'>
            <label className="font-bold mb-1 text-gray-700 block">Type of Business</label>
            <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="businessType" value={formData.businessType} onChange={handleChange} required />
          </div>
          <div className='mb-5'>
            <label className="font-bold mb-1 text-gray-700 block">Address</label>
            <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="address" value={formData.address} onChange={handleChange} required />
          </div>
            <label className="font-bold mb-1 text-gray-700 block">City</label>
            <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="city" value={formData.city} onChange={handleChange} required />
          <div className='mb-5'>
            <label className="font-bold mb-1 text-gray-700 block">State</label>
            <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="state" value={formData.state} onChange={handleChange} required />
          </div>
          <div className='mb-5'>
            <label className="font-bold mb-1 text-gray-700 block">Zip</label>
            <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="zipCode" value={formData.zip} onChange={handleChange} required />
          </div>
          <div className='mb-5'>
            <label className="font-bold mb-1 text-gray-700 block">Phone #</label>
            <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </div>
            <button type="submit">SIGN UP</button>
        </>
      );
    }