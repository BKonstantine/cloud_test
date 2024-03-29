import * as Yup from "yup";

export const schema = Yup.object()
  .shape({
    nickname: Yup.string()
      .max(30, "Максимальная длина 30 символов")
      .matches(/^[a-zA-Zа-яА-Я0-9]+$/, "Могут быть только буквы и цифры")
      .required("Обязательное поле"),

    name: Yup.string()
      .max(50, "Максимальная длина 50 символов")
      .matches(/^[a-zA-Zа-яА-Я]+$/, "Могут быть только буквы")
      .required("Обязательное поле"),

    sername: Yup.string()
      .max(50, "Максимальная длина 50 символов")
      .matches(/^[a-zA-Zа-яА-Я]+$/, "Могут быть только буквы")
      .required("Обязательное поле"),

    sex: Yup.object().required("Обязательное поле"),

    advantages: Yup.array()
      .of(Yup.string().trim().min(1, "Поле не может быть пустым"))
      .min(1, "Хотя бы одно преимущество должно быть указано")
      .required("Обязательное поле"),

    about: Yup.string()
      .max(200, "Максимальная длина 200 символов")
      .matches(/^\S*$/, "Пробелы не допускаются")
      .required("Обязательное поле"),
  })
  .required("Обязательное поле");
