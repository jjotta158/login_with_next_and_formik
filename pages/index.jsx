import Head from 'next/head'
import Link from 'next/link'

import FormikForm from '../components/FormikForm'



export default function Home() {

  const fields = [
    {
      name:'email',
      type:'email',
      id:'email',
      placeholder:'Senha',
      value:{
        email:''
      }
    },
    {
      name:'password',
      type:'password',
      id:'password',
      placeholder:'Senha',
      value:{
        password:''
      }
    }

  ]

  const button = {
    type:'submit',
    title:'Enviar'
  }
  
  return (
    <div id="loginBox">
      <h1>GREEN WORLD</h1>
      <FormikForm  fields={fields} button={button} showForgotPasswordLink={true}/>
    </div>
  )
}
