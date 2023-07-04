import propTypes from "prop-types";

function TabContent({ id, activeTab, children }) {
  return activeTab === id ? <div className="TabContent">{children}</div> : null;
}

export default TabContent;

TabContent.propTypes = {
  id: propTypes.string.isRequired,
  activeTab: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
