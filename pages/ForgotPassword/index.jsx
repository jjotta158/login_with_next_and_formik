import Head from 'next/head'
import FormikForm from '../../components/FormikForm'
import React, {useEffect, useState} from 'react';


export default function ForgotPassword() {
    
    
    const [selectedSection, nextSection] = useState(1)
    const inputEmailFields = [
        {
            name:'email',
            id:"forgotPasswordEmail",
            type:'email',
            placeholder:'Digite seu e-mail para a recuperação da senha',
            value:{
                email:''
            },

        }
    ]
    const inputNextSectionButton = {
        type:'button',
        title:'next',
        action:() => nextSection(2)
    }

    const inputNewPasswordInputFields = [
        {
            name:'password',
            type:'password',
            placeholder:'Digite a nova senha',
            value:{
                password:''
            }
        },
        {
            name:'re_type_password',
            type:'password',
            placeholder:'Digite a novamente a sua nova senha',
            value:{
                retype_password:''
            },
        }
    ];

    const section2Button = {
        type:'button',
        title:'Update Password',
        action:() => {
            alert('updated')
        }
    }

    if(selectedSection == 1) {
        var section = 
            <section id="inputEmailSection">
                    <FormikForm fields={inputEmailFields} button={inputNextSectionButton} showForgotPasswordLink={false}/>
            </section>
    } else {
        var section = 
            <section id="inputNewPasswordSection">
                <FormikForm fields={inputNewPasswordInputFields} button={section2Button} showForgotPasswordLink={false}/>
            </section>
    }

    return (
        <div id="forgotPasswordBox">
            <h1>
                GREEN WORD
            </h1>
            {section}
            
        </div>
    )

}
