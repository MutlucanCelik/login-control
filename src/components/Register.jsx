import { useFormik } from "formik";
import { loginSchema } from "../schemas/index";
import { useAddUserMutation } from "../store";

export default function Register() {
  const [addUser, results] = useAddUserMutation();
  const onSubmit = (values, actions) => {
    addUser(values);
    actions.resetForm();
    alert("Başarıyla kayıt olundu.");
  };
  const { values, handleChange, handleSubmit, errors, isSubmitting } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      validateOnChange: false,
      validationSchema: loginSchema,
      onSubmit,
    });

  return (
    <>
      <form className="p-5" onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label className="fs-5 mb-2">Email Adresi</label>
          <input
            type="email"
            className={"form-control" + (errors.email ? " input-error" : "")}
            id="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter Adresi"
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group mb-4">
          <label className="fs-5 mb-2">Şifre</label>
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            className={"form-control" + (errors.password ? " input-error" : "")}
            id="password"
            placeholder="Şifre"
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
        </div>
        <div className="form-group mb-4">
          <label className="fs-5 mb-2">Şifre Tekrar</label>
          <input
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            className={
              "form-control" + (errors.confirmPassword ? " input-error" : "")
            }
            id="confirmPassword"
            placeholder="Şifre Tekrar"
          />
          {errors.confirmPassword && (
            <p className="error-message">{errors.confirmPassword}</p>
          )}
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className="btn btn-primary  w-100"
        >
          Kayıt Ol
        </button>
      </form>
    </>
  );
}
