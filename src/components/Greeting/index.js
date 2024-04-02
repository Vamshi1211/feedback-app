import './index.css'

const Greeting = props => {
  const {resourcesList} = props
  const {loveEmojiUrl} = resourcesList

  return (
    <li className="list-container">
      <img src={loveEmojiUrl} alt="love emoji" className="love-img" />
      <p className="thank-you-des">
        We will use your feedback to improve our customer support experience
      </p>
    </li>
  )
}

export default Greeting
