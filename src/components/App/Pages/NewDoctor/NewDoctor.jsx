import React,{ useState,useEffect } from "react"
import { Card, Elevation, Label, Classes, Button, Alert, Toast, Toaster, Intent, Position } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import { container, title, formContainer } from './NewDoctor.module.scss'
import { DoctorSchema } from '../../../../ValidationSchemas/DoctorSchema'
import { useIdentityContext } from 'react-netlify-identity-widget'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { navigate } from 'gatsby'

const CREATE_DOCTOR = gql`
mutation newDoctor($name: String!, $lastname: String!, $sex: String!, $identity: String!) {
  createDoctor(data:{
    name: $name
    lastname: $lastname
    identity: $identity
    sex: $sex
  }){
    name
    lastname
    sex
  }
}
`

const NewDoctor = () => {
  const [name,setName] = useState('')
  const [lastname,setLastname] = useState('')
  const [sex,setSex] = useState('Male')
  const [openAlert,setOpenAlert] = useState(false)
  const [render,setRender] = useState(false)
  const [showToast,setShowToast] = useState(false)
  const { user, setUser, logoutUser } = useIdentityContext()
  const [createNewDoctor,{data,error: mutationError,loading}] = useMutation(CREATE_DOCTOR)
  useEffect(()=>{
    if(user && user.user_metadata.name){
      navigate('/app/patients')
    } else {
      setTimeout(()=>{
        if(user && !user.user_metadata.name){
          setRender(true)
        }
      },3000)
    }
  },[user])
  useEffect(()=>{
    if(!loading && data){
      const { name, lastname, sex } = data.createDoctor
      setUser({
        ...user,
        logoutUser,
        user_metadata:{
          ...user.user_metadata,
          name,
          lastname,
          sex
        }
      })
    }
  },[data,loading])
  useEffect(()=>{
    if(mutationError){
      setShowToast(true)
      setTimeout(()=>{
        setShowToast(false)
      },5000)
    }
  },[mutationError])
  const handleSubmit = evt => {
    evt.preventDefault()
    const { value, error } = DoctorSchema.validate({
      name,
      lastname,
      sex
    })
    if(error){
      setOpenAlert(true)
    } else if(value){
      console.log({
        name,
        lastname,
        sex,
        identity: user.id
      })
      createNewDoctor({ variables:{ name, lastname, sex, identity: user.id }})
    }
  }
  return render ? (
    <section>
      <h1 className={title}>Nuevo Pediatra</h1>
      <div className={container}>
        <Card elevation={Elevation.TWO} >
          <form className={formContainer} onSubmit={handleSubmit} >
            <Label>
              Nombre:
              <input type="text" id="" className={`${Classes.INPUT} ${Classes.FILL}`} onChange={evt => setName(evt.target.value)} required />
            </Label>
            <Label>
              Apellido:
              <input type="text" id="" className={`${Classes.INPUT} ${Classes.FILL}`} onChange={evt => setLastname(evt.target.value)} required />
            </Label>
            <Label>
              Sexo:
              <div className="bp3-select">
                <select onChange={evt => setSex(evt.target.value)}>
                  <option value="Male">Masculino</option>
                  <option value="Female">Femenino</option>
                </select>
              </div>
            </Label>
            <Button icon={IconNames.NEW_PERSON} text="Crear" style={{justifySelf: "flex-end"}} type="submit" loading={loading} />
          </form>
        </Card>
      </div>
      <Alert isOpen={openAlert} canOutsideClickCancel={true} onClose={() => setOpenAlert(false)} >
        <p>El <strong>Nombre</strong> debe ser una sola palabra de minimo 2 letras y que empiece por una letra MAYUSCULA.</p>
        <p>El <strong>Apellido</strong> debe ser una sola palabra de minimo 2 letras y que empiece por una letra MAYUSCULA</p>
      </Alert>
      {showToast && (<Toaster position={Position.TOP} >
                      <Toast intent={Intent.DANGER} icon="error" message="Hubo un error. Actualice la página." timeout={5000} onDismiss={()=> setShowToast(false)} />
                    </Toaster>)}
    </section>
  ) : null
}

export default NewDoctor
