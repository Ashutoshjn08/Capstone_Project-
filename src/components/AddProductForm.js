import { withFormik, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const AddProductForm = (props) => {
  const { errors, touched} = props;

  const addProductSubmit = () => {
    const product = {};
    product.title = props.values.title;
    product.price = props.values.price;
    product.description = props.values.description;
    product.manufacturer = props.values.manufacturer;
    product.quantity = props.values.quantity;
    product.category = props.values.category;
    product.image = props.values.image;
    props.addProductProp(product);
  }

  return (
    <Form>
      <h4>Fill the form:</h4>
      <br />
      <span className="field-title">Title: </span>
      <Field type="text" name="title" placeholder="Enter Title" />
      {touched.title && errors.title && (
        <span className="form-err">{errors.title}</span>
      )}
      <br />
      <br />

      <span className="field-title">Price: </span>
      <Field type="number" name="price" placeholder="Enter Price" />
      {touched.price && errors.price && (
        <span className="form-err">{errors.price}</span>
      )}
      <br />
      <br />

      <span className="field-title">Description: </span>
      <Field type="textarea" name="description" placeholder="Enter Description" />
      {touched.description && errors.description && (
        <span className="form-err">{errors.description}</span>
      )}
      <br />
      <br />

      <span className="field-title">Brand: </span>
      <Field type="text" name="manufacturer" placeholder="Enter Brand Name" />
      {touched.manufacturer && errors.manufacturer && (
        <span className="form-err">{errors.manufacturer}</span>
      )}
      <br />
      <br />

      <span className="field-title">Quantity: </span>
      <Field type="number" name="quantity" placeholder="Enter Quantity" />
      {touched.quantity && errors.quantity && (
        <span className="form-err">{errors.quantity}</span>
      )}
      <br />
      <br />

      <span className="field-title">Category: </span>
      <Field type="text" name="category" placeholder="Enter Category" />
      {touched.category && errors.category && (
        <span className="form-err">{errors.category}</span>
      )}
      <br />
      <br />

      <span className="field-title">Image Link: </span>
      <Field type="url" name="image" placeholder="Enter url" />
      {touched.image && errors.image && (
        <span className="form-err">{errors.image}</span>
      )}
      <br />
      <br />
      <button onClick = {addProductSubmit} className = "btn-add-product-sub" type="submit">Submit Form</button>
    </Form>
  );
};

const formikForm = withFormik({
  mapPropsToValues({ ttl, prc, desc, brand, qnty, cat, img }) {
    return {
      title: ttl || "",
      price: prc || "",
      description: desc || "",
      manufacturer: brand || "",
      quantity: qnty || "",
      category: cat || "",
      image: img || "",
    };
  },
  validationSchema: Yup.object().shape({
    title: Yup.string().min(3, "At least 3 characters are required")
    .required("Title is required"),
    price: Yup.number()
      .positive("Enter Only Numbers")
      .required("Price is required"),
    description: Yup.string()
      .min(20, "At least 20 characters are required")
      .required("Description is required"),
    manufacturer: Yup.string()
      .min(3, "At least 3 characters are required")
      .required("Title is required"),
    quantity: Yup.number()
      .positive("Enter Only Numbers")
      .required("Quantity is required"),
    category: Yup.string()
      .min(3, "At least 3 characters are required")
      .required("Category is required"),
    image: Yup.string().url("Please enter the valid url link"),
  }),
})(AddProductForm);

export default formikForm;
