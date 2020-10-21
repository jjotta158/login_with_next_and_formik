import {useFormik} from 'formik'

import ForgotPassword from '../../pages/ForgotPassword';
import Link from 'next/link'

export default function FormikForm({fields, button, showForgotPasswordLink}) {   
    const forgotPassword = (showForgotPasswordLink) ? <Link href="./ForgotPassword">Esqueci a Senha</Link> : ''

    const formik = useFormik({
        initialValues:fields.map(field => field.value),
        onSubmit:values => {
        alert(JSON.stringify(values, null, 2));
        },
        onChange:values => {
        console.log(values)
        }
    })

    return (
        <div className="formikForm">
            <form onSubmit={formik.handleSubmit}>
                <div id="inputBox">
                    {fields.map(field => {
                        return (
                            <input type={field.type} name={field.name} id={field.id} placeholder={field.placeholder} onChange={formik.handleChange} value={formik.values[field.name]} />
                        )
                    })}
                </div>
                <div>
                    <button type={button.type} onClick={button.action}>{button.title}</button>
                    {forgotPassword}
                </div>
            </form>
        </div>
    )
}