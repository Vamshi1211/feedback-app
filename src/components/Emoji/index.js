import './index.css'

const EmojiItems = props => {
  const {emojiItem, isEmojiClicked} = props
  const {id, name, imageUrl} = emojiItem

  const buttonClicked = () => {
    isEmojiClicked(id)
  }

  return (
    <button type="button" className="emoji-container" onClick={buttonClicked}>
      <img src={imageUrl} alt={name} className="image" />
      <p className="emoji-description">{name}</p>
    </button>
  )
}

const Emoji = props => {
  const {resourcesList, emojiClicked} = props

  return (
    <li className="list-container">
      <EmojiItems emojiItem={resourcesList} isEmojiClicked={emojiClicked} />
    </li>
  )
}

export default Emoji
