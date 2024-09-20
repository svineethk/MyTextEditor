import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #25262c;
`
export const HeaderElement = styled.h1`
  font-family: Roboto;
  color: #ffffff;
  margin-bottom: 35px;
  margin-top: 50px;
`
export const ContentContainer = styled.div`
  height: 800px;
  width: 1100px;
  background-color: #1b1c22;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
export const ImageContainer = styled.div`
  height: 800px;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 25px;
`
export const ImageElement = styled.img`
  height: 400px;
  width: 410px;
  margin-top: 75px;
`
export const TextContainer = styled.div`
  height: 750px;
  width: 500px;
  background-color: #25262c;
  border-radius: 10px;
`
export const TextFeatureContainer = styled.div`
  height: 55px;
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  padding: 13px;
  border: 2px solid #353b45;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ButtonElement = styled.button`
  height: 38px;
  width: 45px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
`
export const TextArea = styled.textarea`
  height: 690px;
  width: 500px;
  border-radius: 10px;
  padding: 20px;
  background-color: transparent;
  font-family: Roboto;
  color: #f1f5f9;
  font-size: 21px;
  border: 1px solid #353b45;
  outline: none;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
`
