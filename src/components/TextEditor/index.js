import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  AppContainer,
  ContentContainer,
  ImageContainer,
  HeaderElement,
  ImageElement,
  TextContainer,
  TextFeatureContainer,
  ButtonElement,
  TextArea,
} from './StyledComponents'

class TextEditor extends Component {
  state = {activeText: '', isBold: false, isItalic: false, isUnderline: false}

  onToggleBoldFeature = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onToggleItalicFeature = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onToggleUnderlineFeature = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline, activeText} = this.state
    return (
      <AppContainer>
        <ContentContainer>
          <ImageContainer>
            <HeaderElement>Text Editor</HeaderElement>
            <ImageElement
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <TextContainer>
            <TextFeatureContainer>
              <ButtonElement
                data-testid="bold"
                onClick={this.onToggleBoldFeature}
              >
                <VscBold size={25} color={isBold ? '#faff00' : '#f1f5f9'} />
              </ButtonElement>
              <ButtonElement
                data-testid="italic"
                onClick={this.onToggleItalicFeature}
              >
                <GoItalic size={25} color={isItalic ? '#faff00' : '#f1f5f9'} />
              </ButtonElement>
              <ButtonElement
                data-testid="underline"
                onClick={this.onToggleUnderlineFeature}
              >
                <AiOutlineUnderline
                  size={25}
                  color={isUnderline ? '#faff00' : '#f1f5f9'}
                />
              </ButtonElement>
            </TextFeatureContainer>
            <TextArea
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
            >
              {activeText}
            </TextArea>
          </TextContainer>
        </ContentContainer>
      </AppContainer>
    )
  }
}
export default TextEditor
