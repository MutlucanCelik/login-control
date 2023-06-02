import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz.")
    .required("Email alanı boş geçilemez."),

  password: yup
    .string()
    .min(5, "Şifreniz en az 5 karakterden oluşmalıdır.")
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf 1 küçük harf ve bir sayı giriniz.",
    })
    .required("Şifre alanı boş geçilemez."),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
    .required("Şifre tekrar alanı boş geçilemez"),
});
