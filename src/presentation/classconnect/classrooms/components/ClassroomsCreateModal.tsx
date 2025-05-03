import React, { useState } from 'react'
import { Modal } from '../../../shared/components'
import { useForm } from '../../../hooks'
import { formData, formValidations } from '../data/create-classroom'
import { useClassroom, useModal } from '../../../../application/hooks'
import { ClassroomsCategoriesInput } from '../../'

export const ClassroomsCreateModal: React.FC = () => {

  const {
    formState,
    isFormValid,
    onInputChange,
    onResetForm, 
    career,
    careerValid,
    group,
    groupValid,
    title,
    titleValid
  } = useForm( formData, formValidations as any )
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [categories, setCategories] = useState<string[]>([])
  const { onCloseModal } = useModal()
  const { postClassroom } = useClassroom()

  const onCreateClassroom = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted( true )

    if (!isFormValid || categories.length === 0) return

    postClassroom({
      title: formState.title!,
      career: formState.career!,
      group: formState.group!,
      categories,
    })
    onResetForm()
    onCloseModal()
  }

  return (
    <Modal>
      <form onSubmit={ onCreateClassroom } className="form">
        <div className="form__content u-mb-0">
          <div className="form__field">
            <input
              placeholder='Nombre de la clase'
              name='title' 
              value={title}
              onChange={onInputChange}
              type="text" 
              className="form__input" 
            />
            <span className={`form__span ${!isFormValid && formSubmitted ? 'u-text-wrong' : null}`}
            >{titleValid}</span>
          </div>
          <div className="form__field">
            <input
              placeholder='Carrera'
              name='career' 
              value={career}
              onChange={onInputChange}
              type="text" 
              className="form__input" 
            />
            <span className={`form__span ${!isFormValid && formSubmitted ? 'u-text-wrong' : null}`}
            >{careerValid}</span>
          </div>
          <div className="form__field">
            <input
              placeholder='Grupo'
              name='group' 
              value={group}
              onChange={onInputChange}
              type="text" 
              className="form__input" 
            />
            <span className={`form__span ${!isFormValid && formSubmitted ? 'u-text-wrong' : null}`}
            >{groupValid}</span>
          </div>
          <div className="form__field">
            <ClassroomsCategoriesInput 
              categoriesAdded={categories} 
              setCategories={setCategories} 
            />
            <span
              className={`form__span ${!isFormValid && formSubmitted ? 'u-text-wrong' : null}`}
            >{ categories.length === 0 && 'Debes seleccionar al menos una categoría'}</span>
          </div>
          <div className="form__buttons">
            <button className='btn btn--grad-3'>Crear</button>
            <button onClick={ onCloseModal } className='btn btn--white'>Cancelar</button>
          </div>
        </div>
      </form>
    </Modal>
  )
}
