import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema=Yup.object().shape({
  name:Yup.string()
  .required("Name is required!")
  .min(2, "Name must be atleast characters")
  .max(50, "Allowed characters 50"),
  email:Yup.string()
  .email("Invalid email")
  .required("Please enter your email"),
  contact:Yup.string()
  .required("Please enter your contact")
  .min(10, "Length should be 10"),
  password:Yup.string()
  .required("Please enter your password")
  .min(2, "Length should be greater than 2"),
  confirmPassword:Yup.string()
  .required("Please enter confirm password")
  .oneOf([Yup.ref('password'), null], "Password not matched")
})

const Registration = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center' ,flexDirection:'column'}}>
    <h1>Please fill out the details</h1>
    <Formik
      initialValues={{
        contact:null,
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    }}
    validationSchema={validationSchema}
    onSubmit={(values,{ setSubmitting })=>{
      setTimeout(()=>{
        alert(JSON.stringify(values));
        setSubmitting(false);
      },400)
    }}
    >
      {({isSubmitting,errors, touched}) => 
        <Form style={{display:'flex', flexDirection:'column', gap:'20px'}}>
          <Field type="text" placeholder="Name" name="name" />
          {errors.name && touched.name && <div>{errors.name}</div>}
          <Field type="text" placeholder="Email" name="email"></Field>
          <ErrorMessage name="email" component="div" />
          <Field type="number" placeholder="Contact" name="contact"></Field>
          <ErrorMessage name="contact" component="div" />
          <Field type="password" placeholder="Password" name="password"></Field>
          <ErrorMessage name="password" component="div" />
          <Field type="password" placeholder="Confirm Password" name="confirmPassword"></Field>
          <ErrorMessage name="confirmPassword" component="div" />
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      }
    </Formik>
  </div>
  )
}


export {Registration};