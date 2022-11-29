import { Link } from 'react-router-dom';
import {
  SocialNetwork,
  SocialNetworkShare,
  SocialNetworkList,
  SocialNetworkVK,
  SocialNetworkFacebook,
  SocialNetworkWhatsapp,
  SocialNetworkViber,
  SocialNetworkTelegram,
} from './style';

export const SocialNetworkComponent = () => {
  return (
    <SocialNetwork>
      <SocialNetworkShare>Поделиться</SocialNetworkShare>
      <SocialNetworkList>
        <Link to=''>
          <SocialNetworkVK />
        </Link>
        <Link to=''>
          <SocialNetworkFacebook />
        </Link>
        <Link to=''>
          <SocialNetworkViber />
        </Link>
        <Link to=''>
          <SocialNetworkTelegram />
        </Link>
        <Link to=''>
          <SocialNetworkWhatsapp />
        </Link>
      </SocialNetworkList>
    </SocialNetwork>
  );
};
