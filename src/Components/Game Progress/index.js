import './index.css'
import TabItem from '../Tab Item'
import ThumbnailItem from '../ThumbNailItem'

const GameProgress = props => {
  const {
    allImagesList,
    tabs,
    thumbnailImages,
    activeTabId,
    currentImageId,
    onClickTab,
    onClickThumbnail,
  } = props

  // functions
  const getImage = () =>
    allImagesList.find(image => image.id === currentImageId)
  const renderTabs = () => (
    <ul className="tab-items-container">
      {tabs.map(tab => (
        <TabItem
          tabDetails={tab}
          active={tab.tabId === activeTabId}
          onClick={onClickTab}
          key={tab.tabId}
        />
      ))}
    </ul>
  )
  const renderThumbnails = () => (
    <ul className="thumbnails-container">
      {thumbnailImages.map(thumbnail => (
        <ThumbnailItem
          thumbnail={thumbnail}
          key={thumbnail.id}
          onClickThumbnail={onClickThumbnail}
        />
      ))}
    </ul>
  )

  // return code

  const {imageUrl} = getImage()
  return (
    <div className="game-container">
      <img className="match-image" src={imageUrl} alt="match" />
      {renderTabs()}
      {renderThumbnails()}
    </div>
  )
}

export default GameProgress
