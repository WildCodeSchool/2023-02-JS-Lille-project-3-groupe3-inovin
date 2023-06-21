import propTypes from "prop-types";

function TabNavItem({ id, title, activeTab, setActiveTab }) {
  const handleClickNav = () => {
    setActiveTab(id);
  };
  return (
    <div role="presentation">
      <li
        onClick={handleClickNav}
        onKeyDown={handleClickNav}
        role="presentation"
        // tabIndex={0}
        className={activeTab === id ? "active" : ""}
      >
        {title}
      </li>
    </div>
  );
}

export default TabNavItem;

TabNavItem.propTypes = {
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  activeTab: propTypes.string.isRequired,
  setActiveTab: propTypes.func.isRequired,
};
