import styled from 'styled-components';
import CityMap from '../../../images/city-map.png';

const FormInput = `
  background-color: #f7f7f7;
  border:none;
  border-radius: 30px;
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #1E2123;
  padding: 16px 16px 16px 55px;
  box-sizing:border-box;
  cursor:default;

  &:focus {
    outline: 2px solid rgba(78, 100, 249, 0.8);
    color: #1E2123;
    background-color: #fff;
    cursor:text;
};
  &::placeholder {
    color: #686868;
    
}
&:hover {
    outline: 2px solid rgba(78, 100, 249, 0.8);
}
`;

export const Auth = styled.main`
  background-image: url(${CityMap}),
    linear-gradient(1.09deg, #7e6af3 0.86%, #6540cd 99.01%);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: scroll;
  height: 100vh;
`;

export const AuthContent = styled.section`
  width: 100%;
  max-width: 406px;
  box-sizing: border-box;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fffefe;
  box-shadow: 0px 20px 40px rgba(39, 95, 158, 0.2);
  border-radius: 10px;
`;

export const AuthTitle = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
`;

export const AuthSubtitle = styled.p`
  margin: 15px 0 0;
  font-size: 14px;
  line-height: 17px;
  color: #686868;
  text-align: center;
  width: 75%;
`;

export const AuthForm = styled.form.attrs({
  method: 'POST',
})`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const AuthFormName = styled.input.attrs({
  name: 'email',
  type: 'text',
  id: 'email',
})`
  ${FormInput}
`;

export const AuthFormPassword = styled.input.attrs({
  name: 'password',
  type: 'password',
  id: 'password',
})`
  ${FormInput}
`;

export const AuthFormCreateUser = styled.p`
  margin: 50px 0 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #686868;
  a {
    text-decoration: none;
    font-weight: 500;
    line-height: 26px;
    color: #664ef9;
  }
`;
