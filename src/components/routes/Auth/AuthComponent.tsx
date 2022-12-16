import {
  Auth,
  AuthContent,
  AuthTitle,
  AuthSubtitle,
  AuthForm,
  AuthFormName,
  AuthFormPassword,
  AuthFormCreateUser,
} from './style';
import { Link, useNavigate } from 'react-router-dom';
import { FormButtonComponent } from '../../Common/FormButton/FormButtonComponent';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuthProps } from './hooks';

const validationObj = Yup.object({
  email: Yup.string()
    .required('Поле обязательно для заполнения')
    .min(2, 'Имя должно содержать не менее 2 букв'),
  password: Yup.string()
    .min(5, 'Пароль должен содержать не менне 5 символов')
    .required('Поле обязательно для заполнения'),
});

export const AuthComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('authUser')) {
      navigate('/');
    }
  }, [navigate]);

  const mutation = useAuthProps();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      mutation.mutate(values, {
        onSuccess: (res) => {
          resetForm();
          localStorage.setItem('authUser', JSON.stringify(res.data));
          setTimeout(() => navigate('/'), 0);
        },
        onError: () => {
          console.log('такой пользователь не существует');
        },
      });
    },

    validationSchema: validationObj,
  });

  return (
    <Auth>
      <AuthContent>
        <AuthTitle>Авторизация</AuthTitle>
        <AuthSubtitle>
          Авторизируйтесь, чтобы начать публиковать свои объявления
        </AuthSubtitle>
        <AuthForm
          noValidate
          action='http://localhost:3001/users'
          onSubmit={formik.handleSubmit}
        >
          <AuthFormName
            placeholder='Логин'
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <AuthFormPassword
            placeholder='Пароль'
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <FormButtonComponent value='Войти' />
        </AuthForm>
        <AuthFormCreateUser>
          Еще нет аккаунта? <Link to='/registration'>Создайте аккаунт</Link>
        </AuthFormCreateUser>
      </AuthContent>
    </Auth>
  );
};
