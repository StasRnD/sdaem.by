import {
  Registration,
  RegistrationContent,
  RegistrationFormSection,
  RegistrationFormTitle,
  RegistrationForm,
  RegistrationFormName,
  RegistrationFormEmail,
  RegistrationFormPassword,
  RegistrationFormConfrimPassword,
  RegistrationRules,
  RegistrationRulesHeading,
  RegistrationRulesList,
  RegistrationRulesItem,
  RegistrationAuthRedirect,
} from './style';
import { useRegistrationProps } from './hooks';
import { Link, useNavigate } from 'react-router-dom';
import { FormButtonComponent } from '../../Common/FormButton/FormButtonComponent';
import { PopupSuccessComponent } from '../../Common/PopupSuccess/PopupSuccessComponent';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';

const validationObj = Yup.object({
  login: Yup.string()
    .required('Поле обязательно для заполнения')
    .min(2, 'Имя должно содержать не менее 2 букв'),
  email: Yup.string()
    .required('Поле обязательно для заполнения')
    .email('Ожидается email типа ivanov@mail.ru'),
  password: Yup.string()
    .min(5, 'Пароль должен содержать не менне 5 символов')
    .required('Поле обязательно для заполнения'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Пароли не совпадают')
    .required('Поле обязательно для заполнения'),
});

export const RegistrationComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('authUser')) {
      navigate('/');
    }
  }, [navigate]);

  const [isShowPopup, setIsShowPopup] = useState(false);

  const mutation = useRegistrationProps();
  const formik = useFormik({
    initialValues: {
      login: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values, { resetForm }) => {
      const { confirmPassword, ...userData } = { ...values };
      mutation.mutate(userData, {
        onSuccess: (res) => {
          resetForm();
          setIsShowPopup(true);
          return localStorage.setItem('authUser', JSON.stringify(res.data));
        },

        onError: (err) => {
          console.log(err);
        },
      });
    },

    validationSchema: validationObj,
  });

  return (
    <Registration>
      <RegistrationContent>
        <RegistrationFormSection>
          <RegistrationFormTitle>Регистрация</RegistrationFormTitle>
          <RegistrationForm
            noValidate
            action='http://localhost:3001/users'
            onSubmit={formik.handleSubmit}
          >
            <RegistrationFormName
              placeholder='Логин'
              value={formik.values.login}
              onChange={formik.handleChange}
            />
            {formik.touched.login && formik.errors.login ? (
              <div>{formik.errors.login}</div>
            ) : null}
            <RegistrationFormEmail
              placeholder='Email'
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
            <RegistrationFormPassword
              placeholder='Пароль'
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            <RegistrationFormConfrimPassword
              placeholder='Повторите пароль'
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div>{formik.errors.confirmPassword}</div>
            ) : null}
            <FormButtonComponent value='Зарегестрироваться' />
          </RegistrationForm>
        </RegistrationFormSection>
        <RegistrationRules>
          <RegistrationRulesHeading>
            Пользователь обязуется:
          </RegistrationRulesHeading>
          <RegistrationRulesList>
            <RegistrationRulesItem>
              предоставлять достоверную и актуальную информацию при регистрации
              и добавлении объекта;
            </RegistrationRulesItem>
            <RegistrationRulesItem>
              добавлять фотографии объектов соответствующие действительности.
              Администрация сайта sdaem.by оставляет за собой право удалять
              любую информацию, размещенную пользователем, если сочтет, что
              информация не соответствует действительности, носит оскорбительный
              характер, нарушает права и законные интересы других граждан либо
              действующее законодательство Республики Беларусь.
            </RegistrationRulesItem>
          </RegistrationRulesList>
          <RegistrationAuthRedirect>
            Уже есть аккаунта? <Link to='/auth'>Войдите</Link>
          </RegistrationAuthRedirect>
        </RegistrationRules>
      </RegistrationContent>
      {isShowPopup && (
        <PopupSuccessComponent
          setIsShowPopup={setIsShowPopup}
          title='Вы успешно зарегистрировались!'
          text='Благодарим за регстрацию на sdaem.by. Теперь Вы можете размещать объявление о продаже или аренде!'
          buttonText='Понятно'
          register={true}
        />
      )}
    </Registration>
  );
};
