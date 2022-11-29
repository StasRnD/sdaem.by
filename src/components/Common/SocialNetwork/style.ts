import styled from 'styled-components';
import { ReactComponent as VK } from '../../../images/vk.svg';
import { ReactComponent as Facebook } from '../../../images/facebook.svg';
import { ReactComponent as Whatsapp } from '../../../images/whatsapp.svg';
import { ReactComponent as Viber } from '../../../images/viber.svg';
import { ReactComponent as Telegram } from '../../../images/telegramm.svg';

const SocialNetworkItem = `
  width: 19px;
  height: 19px;
  display: block;
`;

export const SocialNetwork = styled.div`
  display: flex;
  column-gap: 15px;
  align-items: center;
`;

export const SocialNetworkShare = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 17px;
  color: #1e2123;
`;

export const SocialNetworkList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  column-gap: 19px;
  align-items: center;
  a {
    padding: 7px;
    border-radius: 19px;
    background: rgba(102, 78, 249, 0.1);
  }
`;

export const SocialNetworkVK = styled(VK)`
  ${SocialNetworkItem}
`;
export const SocialNetworkFacebook = styled(Facebook)`
  ${SocialNetworkItem}
`;
export const SocialNetworkWhatsapp = styled(Whatsapp)`
  ${SocialNetworkItem}
`;
export const SocialNetworkViber = styled(Viber)`
  ${SocialNetworkItem}
`;
export const SocialNetworkTelegram = styled(Telegram)`
  ${SocialNetworkItem}
`;
