import {
  FormMessage,
  FormMessageUserInfo,
  FormMessageUserName,
  FormMessageUserEmail,
  FormMessageUserMessage,
  FormMessageButton,
} from './style';
import { useSendUserMessagesProps } from './hooks';
import { PopupSuccessComponent } from '../PopupSuccess/PopupSuccessComponent';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ShowPopupProps } from '../СontactsComponent';

const validationObj = Yup.object({
  email: Yup.string()
    .required('Поле обязательно для заполнения')
    .email('Ожидается email типа ivanov@mail.ru'),
  name: Yup.string()
    .required('Поле обязательно для заполнения')
    .min(2, 'Имя должно быть не менне ем из 2 букв'),
  text: Yup.string()
    .min(5, 'Комментарий должен состоять минимум из 5 букв')
    .required('Поле обязательно для заполнения'),
});

export const FormMessageComponent = ({ setIsShowPopup }: ShowPopupProps) => {
  const mutation = useSendUserMessagesProps();
  const formik = useFormik({
    initialValues: {
      name: '',
      text: '',
      email: '',
    },
    onSubmit: (values, { resetForm }) => {
      mutation.mutate(values);
      resetForm();
      setIsShowPopup(true);
    },

    validationSchema: validationObj,
  });

  return (
    <>
      <FormMessage
        noValidate
        action='http://localhost:3000/userMessages'
        onSubmit={formik.handleSubmit}
      >
        <FormMessageUserInfo>
          <label>
            Ваше имя
            <FormMessageUserName
              placeholder='Введите имя'
              required
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </label>
          <label>
            Ваша электронная почта
            <FormMessageUserEmail
              placeholder='Введите email'
              required
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </label>
        </FormMessageUserInfo>
        <label>
          Ваше сообщение
          <FormMessageUserMessage
            placeholder='Сообщение'
            required
            value={formik.values.text}
            onChange={formik.handleChange}
          />
        </label>
        <FormMessageButton>Отправить</FormMessageButton>
      </FormMessage>
    </>
  );
};
