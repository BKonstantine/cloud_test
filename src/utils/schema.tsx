import * as Yup from "yup";

export const schema = Yup.object().shape({
  nickname: Yup.string()
    .max(30, "Максимальная длина 30 символов")
    .matches(/^[a-zA-Z0-9]+$/, "Могут быть только буквы и цифры")
    .required("Обязательное поле"),

  name: Yup.string()
    .max(50, "Максимальная длина 50 символов")
    .matches(/^[a-zA-Z]+$/, "Могут быть только буквы")
    .required("Обязательное поле"),

  sername: Yup.string()
    .max(50, "Максимальная длина 50 символов")
    .matches(/^[a-zA-Z]+$/, "Могут быть только буквы")
    .required("Обязательное поле"),

  /* sex: Yup.object()
      .oneOf(["man", "woman"], "Выберите один из вариантов")
      .required("Обязательное поле"), */

  /* email: Yup.string().email("Некорректный email").required("Обязательное поле"),
  
    advantages: Yup.array().of(Yup.string()),
  
    radio: Yup.number().required("Обязательное поле"),
  
    checkbox: Yup.array().of(Yup.number()),
  
    about: Yup.string()
      .max(200, "Максимальная длина 200 символов без пробелов")
      .test("no-spaces", "Пробелы не допускаются", (value) => {
        return /^\S*$/.test(value);
      }), */
});
