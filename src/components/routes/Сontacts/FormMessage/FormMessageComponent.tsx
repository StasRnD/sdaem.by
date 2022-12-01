import {
  FormMessage,
  FormMessageUserInfo,
  FormMessageUserName,
  FormMessageUserEmail,
  FormMessageUserMessage,
  FormMessageButton,
} from './style';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const FormMessageComponent = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 1));
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .required('Поле обязательно для заполнения')
        .email('Ожидаемый формат email: Ivan@mail.ru'),
      password: Yup.string()
        .min(8, 'Пароль должен содержать не менее 8 символов')
        .required('Поле обязательно для заполнения'),
    }),
  });
  return (
    <FormMessage noValidate>
      <FormMessageUserInfo>
        <label>
          Ваше имя
          <FormMessageUserName placeholder='Введите имя' required />
        </label>
        <label>
          Ваша электронная почта
          <FormMessageUserEmail placeholder='Введите email' required />
        </label>
      </FormMessageUserInfo>
      <label>
        Ваше сообщение
        <FormMessageUserMessage placeholder='Сообщение' required />
      </label>
      <FormMessageButton>Отправить</FormMessageButton>
    </FormMessage>
  );
};
