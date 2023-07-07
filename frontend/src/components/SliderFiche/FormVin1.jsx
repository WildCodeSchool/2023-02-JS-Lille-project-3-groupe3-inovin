// import TabNavItem from "../TabComponents/TabNavItem";
// import TabContent from "../TabComponents/TabContent";
// import { useState } from "react";

// function FormVin1() {
//   const [activeTabSlide1, setActiveTabSlide1] = useState("tab1");

//   const [selectedOption1, setSelectedOption1] = useState();
//   const [selectedOption2, setSelectedOption2] = useState();
//   const [selectedOption3, setSelectedOption3] = useState();
//   const [selectedOption4, setSelectedOption4] = useState();
//   const [selectedOption5, setSelectedOption5] = useState();

//   const handleOptionChange1 = (event) => {
//     setSelectedOption1(event.target.value);
//   };

//   const handleOptionChange2 = (event) => {
//     setSelectedOption2(event.target.value);
//   };

//   const handleOptionChange3 = (event) => {
//     setSelectedOption3(event.target.value);
//   };

//   const handleOptionChange4 = (event) => {
//     setSelectedOption4(event.target.value);
//   };

//   const handleOptionChange5 = (event) => {
//     setSelectedOption5(event.target.value);
//   };

//   return (
//     <div>
//       <div className="tabs">
//         <h3>Formulaire du vin 1</h3>
//         {/* Tab nav */}
//         <ul className="nav">
//           <TabNavItem
//             title="Robe"
//             id="tab1"
//             activeTab={activeTabSlide1}
//             setActiveTab={setActiveTabSlide1}
//           />
//           <TabNavItem
//             title="Arôme"
//             id="tab2"
//             activeTab={activeTabSlide1}
//             setActiveTab={setActiveTabSlide1}
//           />
//           <TabNavItem
//             title="Saveur"
//             id="tab3"
//             activeTab={activeTabSlide1}
//             setActiveTab={setActiveTabSlide1}
//           />
//         </ul>
//         {/* Content of the tabs */}
//         <div className="outlet">
//           <TabContent id="tab1" activeTab={activeTabSlide1}>
//             <form>
//               <h3>Robe</h3>
//               {/* Option 1 */}
//               <label>
//                 <input
//                   type="radio"
//                   value="jauneOr"
//                   checked={selectedOption1 === "jauneOr"}
//                   onChange={handleOptionChange1}
//                 />
//                 Jaune Or
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   value="roux"
//                   checked={selectedOption1 === "roux"}
//                   onChange={handleOptionChange1}
//                 />
//                 Roux
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   value="grenat"
//                   checked={selectedOption1 === "grenat"}
//                   onChange={handleOptionChange1}
//                 />
//                 Grenat
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   value="violet"
//                   checked={selectedOption1 === "violet"}
//                   onChange={handleOptionChange1}
//                 />
//                 Violet
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   value="jauneVert"
//                   checked={selectedOption1 === "jauneVert"}
//                   onChange={handleOptionChange1}
//                 />
//                 Jaune Vert
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   value="dore"
//                   checked={selectedOption1 === "dore"}
//                   onChange={handleOptionChange1}
//                 />
//                 Doré
//               </label>
//               <h3>Intensité des couleurs</h3>
//               {/* Option 2 */}
//               <label>
//                 <input
//                   type="radio"
//                   value="claire"
//                   checked={selectedOption2 === "claire"}
//                   onChange={handleOptionChange2}
//                 />
//                 Claire
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   value="moyenne"
//                   checked={selectedOption2 === "moyenne"}
//                   onChange={handleOptionChange2}
//                 />
//                 Moyenne
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   value="trouble"
//                   checked={selectedOption2 === "trouble"}
//                   onChange={handleOptionChange2}
//                 />
//                 Trouble
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   value="opaque"
//                   checked={selectedOption2 === "opaque"}
//                   onChange={handleOptionChange2}
//                 />
//                 Opaque
//               </label>
//             </form>
//           </TabContent>
//           <TabContent id="tab2" activeTab={activeTabSlide1}>
//             <form>
//               <h3>Arôme</h3>
//               {/* Option 3 */}
//               <label>
//                 <input
//                   type="radio"
//                   value="fruit"
//                   checked={selectedOption3 === "fruit"}
//                   onChange={handleOptionChange3}
//                 />
//                 Fruits
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   value="fleur"
//                   checked={selectedOption3 === "fleur"}
//                   onChange={handleOptionChange3}
//                 />
//                 Fleurs
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   value="vegetal"
//                   checked={selectedOption3 === "vegetal"}
//                   onChange={handleOptionChange3}
//                 />
//                 Végétal
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   value="epice"
//                   checked={selectedOption3 === "epice"}
//                   onChange={handleOptionChange3}
//                 />
//                 Epicé
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   value="animal"
//                   checked={selectedOption3 === "animal"}
//                   onChange={handleOptionChange3}
//                 />
//                 Animal
//               </label>
//               <h3>Intensité des arômes</h3>
//               {/* Option 4 */}
//               <label>
//                 <input
//                   type="radio"
//                   value="leger"
//                   checked={selectedOption4 === "leger"}
//                   onChange={handleOptionChange4}
//                 />
//                 Léger
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   value="moyen"
//                   checked={selectedOption4 === "moyen"}
//                   onChange={handleOptionChange4}
//                 />
//                 Moyen
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   value="fort"
//                   checked={selectedOption4 === "fort"}
//                   onChange={handleOptionChange4}
//                 />
//                 Fort
//               </label>
//             </form>
//           </TabContent>
//           <TabContent id="tab3" activeTab={activeTabSlide1}>
//             <form>
//               <h3>Saveur</h3>
//               {/* Option 5 */}
//               <label>
//                 <input
//                   type="radio"
//                   value="acide"
//                   checked={selectedOption5 === "acide"}
//                   onChange={handleOptionChange5}
//                 />
//                 Acide
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   value="amer"
//                   checked={selectedOption5 === "amer"}
//                   onChange={handleOptionChange5}
//                 />
//                 Amer
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   value="sucre"
//                   checked={selectedOption5 === "sucre"}
//                   onChange={handleOptionChange5}
//                 />
//                 Sucré
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   value="gras"
//                   checked={selectedOption5 === "gras"}
//                   onChange={handleOptionChange5}
//                 />
//                 Gras
//               </label>
//               {/* <h3>Note</h3>
//               <label htmlFor="note">Note (sur 10) :</label>
//               <input
//                 type="number"
//                 id="note"
//                 min="0"
//                 max="10"
//                 value={note}
//                 onChange={handleChangeNoteSlide1}
//               /> */}
//             </form>
//           </TabContent>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FormVin1;
