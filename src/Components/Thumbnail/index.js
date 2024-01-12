import './index.css'

function Thumbnail(props) {
  const {thumbnailDetails, clickThumbnail} = props
  const {thumbnailUrl, id} = thumbnailDetails
  function onClickThumbnail() {
    clickThumbnail(id)
  }
  return (
    <li className="thumbnail">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default Thumbnail
