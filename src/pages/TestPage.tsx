// import { useState } from "react";
// import { Autocomplete, useLoadScript } from "@react-google-maps/api";

// const libraries = ["places"];

// const TestPage = () => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your API Key
//     libraries,
//   });

//   const [address, setAddress] = useState({
//     street: '',
//     city: '',
//     state: '',
//     zip: '',
//     country: 'Thailand'
//   });

//   const [autocomplete, setAutocomplete] = useState(null);

//   const handlePlaceChanged = () => {
//     const place = autocomplete.getPlace();
//     const addressComponents = place.address_components;

//     // Extract address components
//     const street = addressComponents.find((component) => component.types.includes('route'))?.long_name || '';
//     const city = addressComponents.find((component) => component.types.includes('locality'))?.long_name || '';
//     const state = addressComponents.find((component) => component.types.includes('administrative_area_level_1'))?.long_name || '';
//     const zip = addressComponents.find((component) => component.types.includes('postal_code'))?.long_name || '';

//     setAddress({
//       street,
//       city,
//       state,
//       zip,
//       country: 'Thailand',
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Send the address data to the backend
//     console.log("Selected Address:", address);
//   };

//   if (!isLoaded) return <div>Loading...</div>;

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded">
//       <Autocomplete
//         onLoad={(autocomplete) => setAutocomplete(autocomplete)}
//         onPlaceChanged={handlePlaceChanged}
//       >
//         <input
//           type="text"
//           placeholder="Start typing your address"
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//       </Autocomplete>

//       <div className="mt-4">
//         <p><strong>Street:</strong> {address.street}</p>
//         <p><strong>City:</strong> {address.city}</p>
//         <p><strong>State/Province:</strong> {address.state}</p>
//         <p><strong>Zip Code:</strong> {address.zip}</p>
//         <p><strong>Country:</strong> {address.country}</p>
//       </div>

//       <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default TestPage;
