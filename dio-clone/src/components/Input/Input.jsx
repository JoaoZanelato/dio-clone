import  {InputContainer, InputText, IconContainer} from './styles.js'

const Input = ({leftIcon, name, ...rest}) => {
  return <>
  <InputContainer>
    {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
    <InputText {...rest}/>
  </InputContainer>
  </>;
};

export { Input };
