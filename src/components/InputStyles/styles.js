import styled, {css} from "styled-components"
import MaskedInput from "react-text-mask"
import { Field } from "formik"

const baseStyleInputs = css`
  width: 100%;
  min-height: 40px;
  padding: 0 20px;
  border-radius: 8px;
  margin: 8px 0 10px 0;
  border: 1px solid ${props => props.theme.colors.textGray};
  color: ${props => props.theme.colors.textGray};

  &::placeholder {
    color: var(--color-text-gray-dark);
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
  color: ${props => props.theme.colors.textGray};
`

const TextValidation = styled.span`
  margin-top: 10px;
  color: var(--color-text-error);
`

export {Label, Input, MaskInput, InputField, TextValidation, SelectInput}