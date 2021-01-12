import {withFormik, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';


export default function AddProductForm (props) {
    const {error, touched, issubmitting} = props;

    return(
        <Formik
        initialValues={{ title: '', price: '', manufacturer: '', description:'', quantity:'', category:'', image:'' }}
        validationSchema = {Yup.object({
          title : Yup.string().required('Title is required'),
          price : Yup.number().positive('Enter Only Numbers'),
          description : Yup.string().min(20, 'At least 20 characters are required').required('Description is required'),
          manufacturer : Yup.string().min(3, 'At least 3 characters are required').required('Title is required'),
          quantity : Yup.number().positive('Enter Only Numbers'),
          category : Yup.string().min(3, 'At least 3 characters are required').required('Category is required'),
          image : Yup.string().url('Please enter the valid url link')
      })}>        
        <Form>
        <span className = "field-title">Title: </span>
            <Field type = "text" name = "title" placeholder = "Enter Title"/>
            {touched.title && error.title && <span className = "form-err">{error.title}</span>}<br/><br/>

            <span className = "field-title">Price: </span>
            <Field type = "number" name = "price" placeholder = "Enter Price"/>
            {touched.price && error.price && <span className = "form-err">{error.price}</span>}<br/><br/>

            <span className = "field-title">Description: </span>
            <Field type = "text" name = "description" placeholder = "Enter Description"/>
            {touched.description && error.description && <span className = "form-err">{error.description}</span>}<br/><br/>

            <span className = "field-title">Brand: </span>
            <Field type = "text" name = "manufacturer" placeholder = "Enter Brand Name"/>
            {touched.manufacturer && error.manufacturer && <span className = "form-err">{error.manufacturer}</span>}<br/><br/>

            <span className = "field-title">Quantity: </span>
            <Field type = "number" name = "quantity" placeholder = "Enter Quantity"/>
            {touched.quantity && error.quantity && <span className = "form-err">{error.quantity}</span>}<br/><br/>

            <span className = "field-title">Category: </span>
            <Field type = "text" name = "category" placeholder = "Enter Category"/>
            {touched.category && error.category && <span className = "form-err">{error.category}</span>}<br/><br/>

            <span className = "field-title">Image Link: </span>
            <Field type = "url" name = "image" placeholder = "Enter url"/>
            {touched.image && error.image && <span className = "form-err">{error.image}</span>}<br/><br/>
            <button type = "submit">Submit Form</button>
        </Form>
        </Formik>
    )
}

