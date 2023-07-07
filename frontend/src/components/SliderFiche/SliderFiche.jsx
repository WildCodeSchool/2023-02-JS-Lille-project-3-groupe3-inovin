// import { useState } from "react";
// // import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// // import UserContext from "../../contexts/UserContext";
// import "./SliderFiche.scss";
// import FormVin1 from "./FormVin1";
// import FormVin2 from "./FormVin2";
// import FormVin3 from "./FormVin3";
// import FormVin4 from "./FormVin4";

// function SliderFiche() {
//   // useContext
//   // const [user] = useContext(UserContext); // account_id of current user from inscription page, you can use it for update database
//   // console.log(`slider fiche account_id: ${user} `);

//   // navigate
//   const navigate = useNavigate();

//   const handleClickNext = () => {
//     navigate("/AtelierCreation");
//   };
//   // Functions to handle the Tab Nav
//   // const [activeTabSlide1, setActiveTabSlide1] = useState("tab1");

//   // Functions to handle the checkbox choices

//   // Second Slide Choices

//   // Third Slide Choices

//   const [selectedOption11, setSelectedOption11] = useState();
//   const [selectedOption12, setSelectedOption12] = useState();
//   const [selectedOption13, setSelectedOption13] = useState();
//   const [selectedOption14, setSelectedOption14] = useState();
//   const [selectedOption15, setSelectedOption15] = useState();

//   const handleOptionChange11 = (event) => {
//     setSelectedOption11(event.target.value);
//   };

//   const handleOptionChange12 = (event) => {
//     setSelectedOption12(event.target.value);
//   };

//   const handleOptionChange13 = (event) => {
//     setSelectedOption13(event.target.value);
//   };

//   const handleOptionChange14 = (event) => {
//     setSelectedOption14(event.target.value);
//   };

//   const handleOptionChange15 = (event) => {
//     setSelectedOption15(event.target.value);
//   };

//   // Fourth Slide Choices

//   const [selectedOption16, setSelectedOption16] = useState();
//   const [selectedOption17, setSelectedOption17] = useState();
//   const [selectedOption18, setSelectedOption18] = useState();
//   const [selectedOption19, setSelectedOption19] = useState();
//   const [selectedOption20, setSelectedOption20] = useState();

//   const handleOptionChange16 = (event) => {
//     setSelectedOption16(event.target.value);
//   };

//   const handleOptionChange17 = (event) => {
//     setSelectedOption17(event.target.value);
//   };

//   const handleOptionChange18 = (event) => {
//     setSelectedOption18(event.target.value);
//   };

//   const handleOptionChange19 = (event) => {
//     setSelectedOption19(event.target.value);
//   };

//   const handleOptionChange20 = (event) => {
//     setSelectedOption20(event.target.value);
//   };

//   // Functions to handle the note/10
//   const [note, setNote] = useState(0);

//   const handleChangeNoteSlide1 = (event) => {
//     const value = parseInt(event.target.value, 10);
//     setNote(value);
//   };

//   return (
//     <div className="carouselWrapper">
//       <FormVin1 />
//       <FormVin2 />
//       <FormVin3 />
//       <FormVin4 />

//       <button type="button">Envoyer tous les formulaires</button>
//       <button type="button" onClick={handleClickNext}>
//         next page
//       </button>
//     </div>
//   );
// }

// export default SliderFiche;
