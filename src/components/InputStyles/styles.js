import styled, {css} from "styled-components"
import MaskedInput from "react-text-mask"
import { Field } from "formik"

export const baseStyleInputs = css`
  width: 100%;
  height: 30px;
  padding: 0 20px;
  border-radius: 8px;
  margin-top: 8px;
  border: 1px solid ${props => props.theme.colors.textGray};
  color: ${props => props.theme.colors.textGrayDark};
  background-color: ${props => props.theme.colors.backgroundInput};

  &::placeholder {
    color: ${props => props.theme.colors.textGray};
  }


`

const Input = styled.input`
  ${baseStyleInputs}
`

const MaskInput = styled(MaskedInput)`
  ${baseStyleInputs}
`

const InputField = styled(Field)`
  ${baseStyleInputs}

`

const SelectInput = styled.select`
  ${baseStyleInputs}
`

const Label = styled.label`
  font-size: 12px;
  font-weight: 400;
  color: ${props => props.theme.colors.textGrayDark};
`

const TextValidation = styled.span`
  color: ${props => props.theme.colors.error};
  font-size: 11px;
`

const DivTextValidation = styled.div`
  height: 10px;
  margin: 0 0 15px;
`

export {Label, Input, MaskInput, InputField, TextValidation, SelectInput, DivTextValidation}