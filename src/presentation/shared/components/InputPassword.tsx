import React, { useState } from 'react';

interface InputPasswordProps {
  name: string,
  value: string,
  placeholder: string,
  onSetValue?: ( e: React.ChangeEvent<HTMLInputElement> ) => void,
}

export const InputPassword: React.FC<InputPasswordProps> = ({ placeholder, onSetValue, value, name }) => {

  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false)

  return (
    <div className="form__field-password">
      <input 
        name={name}
        value={ value }
        onChange={ onSetValue }
        className="form__input" 
        type={`${ isPasswordShown ? 'text' : 'password'}`} 
        placeholder={ placeholder } 
      />
      {
        isPasswordShown 
        ? (<i onClick={ () => setIsPasswordShown(false) } className="form__icon bx bx-low-vision"></i>) 
        : (<i onClick={ () => setIsPasswordShown(true) } className="form__icon bx bx-show"></i>)
      }
    </div>
  );
};
