import { useState } from "react";
import TabNavItem from "../TabComponents/TabNavItem";
import TabContent from "../TabComponents/TabContent";

import "./SliderFiche.scss";

function SliderFiche() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div>
      <h3>Vin numéro 1</h3>
      <div className="tabs">
        {/* Tab nav */}
        <ul className="nav">
          <TabNavItem
            title="Robe"
            id="tab1"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="Arôme"
            id="tab2"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="Saveur"
            id="tab3"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ul>
        {/* Content of the tabs */}
        <div className="outlet">
          <TabContent id="tab1" activeTab={activeTab}>
            <p>Ici c'est la robe !</p>
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab}>
            <p>Et là les arômes !</p>
          </TabContent>
          <TabContent id="tab3" activeTab={activeTab}>
            <p>Moi je suis les saveurs !</p>
          </TabContent>
        </div>
      </div>
    </div>
  );
}

export default SliderFiche;
