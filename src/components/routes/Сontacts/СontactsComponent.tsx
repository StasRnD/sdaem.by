import { useState } from 'react';
import { Contacts } from './style';
import { ContactsInformationComponent } from './ContactsInformation/ContactsInformationComponent';
import { FormMessageComponent } from './FormMessage/FormMessageComponent';
import { PopupSuccessComponent } from '../../Common/PopupSuccess/PopupSuccessComponent';

export const ContactsComponent = () => {
  const [isShowPopup, setIsShowPopup] = useState(false);

  return (
    <>
      <Contacts>
        <ContactsInformationComponent />
        <FormMessageComponent setIsShowPopup={setIsShowPopup} />
      </Contacts>
      {isShowPopup && (
        <PopupSuccessComponent
          setIsShowPopup={setIsShowPopup}
          title='Ваше письмо отправлено!'
          text='Какое-то сообщение о том, что письмо отправлено, какое-то сообщение, что письмо отправлено.'
          buttonText='Закрыть окно'
        />
      )}
    </>
  );
};
