// import TabNavItem from "../TabComponents/TabNavItem";
// import TabContent from "../TabComponents/TabContent";
// import { useState } from "react";

// function FormVin2() {
//   const [activeTabSlide2, setActiveTabSlide2] = useState("tab1");

//   const [selectedOption6, setSelectedOption6] = useState();
//   const [selectedOption7, setSelectedOption7] = useState();
//   const [selectedOption8, setSelectedOption8] = useState();
//   const [selectedOption9, setSelectedOption9] = useState();
//   const [selectedOption10, setSelectedOption10] = useState();

//   const handleOptionChange6 = (event) => {
//     setSelectedOption6(event.target.value);
//   };

//   const handleOptionChange7 = (event) => {
//     setSelectedOption7(event.target.value);
//   };

//   const handleOptionChange8 = (event) => {
//     setSelectedOption8(event.target.value);
//   };

//   const handleOptionChange9 = (event) => {
//     setSelectedOption9(event.target.value);
//   };

//   const handleOptionChange10 = (event) => {
//     setSelectedOption10(event.target.value);
//   };

//   return (
//     <div>
//       <h3>Formulaire du vin 2</h3>
//       <div className="slideWrapper">
//         <div className="secondSlide">
//           <h3>Vin numéro 2</h3>
//           <div className="tabs">
//             {/* Tab nav */}
//             <ul className="nav">
//               <TabNavItem
//                 title="Robe"
//                 id="tab1"
//                 activeTab={activeTabSlide2}
//                 setActiveTab={setActiveTabSlide2}
//               />
//               <TabNavItem
//                 title="Arôme"
//                 id="tab2"
//                 activeTab={activeTabSlide2}
//                 setActiveTab={setActiveTabSlide2}
//               />
//               <TabNavItem
//                 title="Saveur"
//                 id="tab3"
//                 activeTab={activeTabSlide2}
//                 setActiveTab={setActiveTabSlide2}
//               />
//             </ul>
//             {/* Content of the tabs */}
//             <div className="outlet">
//               <TabContent id="tab1" activeTab={activeTabSlide2}>
//                 <form>
//                   <h3>Robe</h3>
//                   {/* Option 6 */}
//                   <label>
//                     <input
//                       type="radio"
//                       value="jauneOr"
//                       checked={selectedOption6 === "jauneOr"}
//                       onChange={handleOptionChange6}
//                     />
//                     Jaune Or
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       value="roux"
//                       checked={selectedOption6 === "roux"}
//                       onChange={handleOptionChange6}
//                     />
//                     Roux
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       value="grenat"
//                       checked={selectedOption6 === "grenat"}
//                       onChange={handleOptionChange6}
//                     />
//                     Grenat
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       value="violet"
//                       checked={selectedOption6 === "violet"}
//                       onChange={handleOptionChange6}
//                     />
//                     Violet
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       value="jauneVert"
//                       checked={selectedOption6 === "jauneVert"}
//                       onChange={handleOptionChange6}
//                     />
//                     Jaune Vert
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       value="dore"
//                       checked={selectedOption6 === "dore"}
//                       onChange={handleOptionChange6}
//                     />
//                     Doré
//                   </label>
//                   <h3>Intensité des couleurs</h3>
//                   {/* Option 7 */}
//                   <label>
//                     <input
//                       type="radio"
//                       value="claire"
//                       checked={selectedOption7 === "claire"}
//                       onChange={handleOptionChange7}
//                     />
//                     Claire
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       value="moyenne"
//                       checked={selectedOption7 === "moyenne"}
//                       onChange={handleOptionChange7}
//                     />
//                     Moyenne
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       value="trouble"
//                       checked={selectedOption7 === "trouble"}
//                       onChange={handleOptionChange7}
//                     />
//                     Trouble
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       value="opaque"
//                       checked={selectedOption7 === "opaque"}
//                       onChange={handleOptionChange7}
//                     />
//                     Opaque
//                   </label>
//                 </form>
//               </TabContent>
//               <TabContent id="tab2" activeTab={activeTabSlide2}>
//                 <form>
//                   <h3>Arôme</h3>
//                   {/* Option 8 */}
//                   <label>
//                     <input
//                       type="radio"
//                       value="fruit"
//                       checked={selectedOption8 === "fruit"}
//                       onChange={handleOptionChange8}
//                     />
//                     Fruits
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       value="fleur"
//                       checked={selectedOption8 === "fleur"}
//                       onChange={handleOptionChange8}
//                     />
//                     Fleurs
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       value="vegetal"
//                       checked={selectedOption8 === "vegetal"}
//                       onChange={handleOptionChange8}
//                     />
//                     Végétal
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       value="epice"
//                       checked={selectedOption8 === "epice"}
//                       onChange={handleOptionChange8}
//                     />
//                     Epicé
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       value="animal"
//                       checked={selectedOption8 === "animal"}
//                       onChange={handleOptionChange8}
//                     />
//                     Animal
//                   </label>
//                   <h3>Intensité des arômes</h3>
//                   {/* Option 9 */}
//                   <label>
//                     <input
//                       type="radio"
//                       value="leger"
//                       checked={selectedOption9 === "leger"}
//                       onChange={handleOptionChange9}
//                     />
//                     Léger
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       value="moyen"
//                       checked={selectedOption9 === "moyen"}
//                       onChange={handleOptionChange9}
//                     />
//                     Moyen
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       value="fort"
//                       checked={selectedOption9 === "fort"}
//                       onChange={handleOptionChange9}
//                     />
//                     Fort
//                   </label>
//                 </form>
//               </TabContent>
//               <TabContent id="tab3" activeTab={activeTabSlide2}>
//                 <form>
//                   <h3>Saveur</h3>
//                   {/* Option 10 */}
//                   <label>
//                     <input
//                       type="radio"
//                       value="acide"
//                       checked={selectedOption10 === "acide"}
//                       onChange={handleOptionChange10}
//                     />
//                     Acide
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       value="amer"
//                       checked={selectedOption10 === "amer"}
//                       onChange={handleOptionChange10}
//                     />
//                     Amer
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       value="sucre"
//                       checked={selectedOption10 === "sucre"}
//                       onChange={handleOptionChange10}
//                     />
//                     Sucré
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       value="gras"
//                       checked={selectedOption10 === "gras"}
//                       onChange={handleOptionChange10}
//                     />
//                     Gras
//                   </label>
//                   <h3>Note</h3>
//                   <label htmlFor="note">Note (sur 10) :</label>
//                   <input
//                     type="number"
//                     id="note"
//                     min="0"
//                     max="10"
//                     value={note}
//                     onChange={handleChangeNoteSlide1}
//                   />
//                 </form>
//               </TabContent>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FormVin2;
