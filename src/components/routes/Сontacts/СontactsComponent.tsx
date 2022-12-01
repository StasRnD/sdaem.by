import { Contacts } from './style';
import { ContactsInformationComponent } from './ContactsInformation/ContactsInformationComponent';
import { FormMessageComponent } from './FormMessage/FormMessageComponent';

export const ContactsComponent = () => {
  return (
    <Contacts>
      <ContactsInformationComponent />
      <FormMessageComponent />
    </Contacts>
  );
};
