import { withFormik, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const UpdateProductForm = (props) => {
  const { errors, touched } = props;

  const isTransition = () => {
    props.tran();
  };

  const updateProductSubmit = () => {
    debugger;
    if (
      !props.values.price ||
      !props.values.quantity ||
      !props.values.category ||
      !props.values.image
    ) {
      let flag = window.confirm("Are you sure to leave this page without submitting?");
      if (flag) {
        props.history.push("/products");
      }
    } else {
      debugger;
      const product = {};
      product.price = props.values.price;
      product.quantity = props.values.quantity;
      product.category = props.values.category;
      product.image = props.values.image;
      props.updateProductProp(product);
      props.history.push("/products");
    }
  };

  return (
    <Form>
      <h4>Fill the form to update the product's details:</h4>
      <br />

      <span className="field-title">Price: </span>
      <Field
        onInput={() => {
          isTransition();
        }}
        type="number"
        name="price"
        placeholder={props.price}
      />
      {touched.price && errors.price && (
        <span className="form-err">{errors.price}</span>
      )}
      <br />
      <br />

      <span className="field-title">Quantity: </span>
      <Field
        onInput={() => {
          isTransition();
        }}
        type="number"
        name="quantity"
        placeholder={props.quantity}
      />
      {touched.quantity && errors.quantity && (
        <span className="form-err">{errors.quantity}</span>
      )}
      <br />
      <br />

      <span className="field-title">Category: </span>
      <Field
        onInput={() => {
          isTransition();
        }}
        type="text"
        name="category"
        placeholder={props.category}
      />
      {touched.category && errors.category && (
        <span className="form-err">{errors.category}</span>
      )}
      <br />
      <br />

      <span className="field-title">Image Link: </span>
      <Field
        onInput={() => {
          isTransition();
        }}
        type="url"
        name="image"
        placeholder={props.image}
      />
      {touched.image && errors.image && (
        <span className="form-err">{errors.image}</span>
      )}
      <br />
      <br />
      <button
        onClick={updateProductSubmit}
        className="btn-add-product-sub"
        type="submit"
      >
        Submit Form
      </button>
    </Form>
  );
};

const formikForm = withFormik({
  mapPropsToValues({ prc, qnty, cat, img }) {
    return {
      price: prc || "",
      quantity: qnty || "",
      category: cat || "",
      image: img || "",
    };
  },
  validationSchema: Yup.object().shape({
    price: Yup.number()
      .positive("Enter Only Numbers")
      .required("Price is required"),
    quantity: Yup.number()
      .positive("Enter Only Numbers")
      .required("Quantity is required"),
    category: Yup.string()
      .min(3, "At least 3 characters are required")
      .required("Category is required"),
    image: Yup.string().url("Please enter the valid url link"),
  }),
})(UpdateProductForm);

export default formikForm;
