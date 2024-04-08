import {useState} from 'react'
import {
  MainContainer,
  Heading,
  Details,
  Description,
  Image,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  // console.log(reactHooksDescription)
  const shortText = reactHooksDescription.slice(0, 170)
  const [buttonText, setButton] = useState(false)

  const onClickRead = () => {
    setButton(prevState => !prevState)
  }

  const readText = buttonText ? 'Read Less' : 'Read More'
  const descriptionText = buttonText ? reactHooksDescription : shortText

  return (
    <MainContainer>
      <Heading>React Hooks</Heading>
      <Details>Hooks are a new addition to React</Details>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>{descriptionText}</Description>
      <Button onClick={onClickRead}>{readText}</Button>
    </MainContainer>
  )
}

export default ReadMore
