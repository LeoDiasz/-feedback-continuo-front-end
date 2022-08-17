import styled, {css} from "styled-components"
import MaskedInput from "react-text-mask"
import { Field } from "formik"

const baseStyleInputs = css`
  width: 100%;
  min-height: 40px;
  padding: 0 20px;
  border-radius: 8px;
  margin-top: 8px;
  border: 1px solid ${props => props.theme.colors.textGray};
  color: ${props => props.theme.colors.textGrayDark};

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
  font-size: 14px;
`

const DivTextValidation = styled.div`
  height: 15px;
  margin: 5px 0 10px;
`

export {Label, Input, MaskInput, InputField, TextValidation, SelectInput, DivTextValidation}