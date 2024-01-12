import './index.css'

function TabItem(props) {
  const {tabDetails, isActive, activeTab} = props
  const {displayText, tabId} = tabDetails
  const activeTabClassName = isActive ? 'tab-item active-tab-item' : 'tab-item'
  function onClickTab() {
    activeTab(tabId)
  }
  return (
    <li>
      <button type="button" className={activeTabClassName} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
