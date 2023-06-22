import { useState } from 'react';
import Paragraph from './Paragraph';
import { styled } from 'styled-components';
import { Info, X } from '@phosphor-icons/react';
import { HorizontalSeparator } from '../radix/RadixSeparator';

const FullDivision = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  height: fit-content;
  padding: 1.5rem 1rem 1.5rem 1rem;
  color: ${({ theme }) => theme.bgColorIconAccountBanner};
  background-color: ${({ theme }) => theme.bgColorAccountBanner};
  white-space: nowrap;
  @media (max-width: 440px) {
    flex-direction: column-reverse;
    gap: 1rem;
  }
`;

const LeftDivision = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto;
  @media (max-width: 440px) {
    flex-direction: column;
  }
`;

const RightDivision = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  :hover {
    background-color: ${({ theme }) => theme.bgColorDivIconAccountBannerHover};
    border-radius: 0.4rem;
  }
  :active {
    background-color: ${({ theme }) => theme.bgColorDivIconAccountBannerActive};
    border-radius: 0.4rem;
  }
`;

const StyledInfoIcon = styled(Info)`
  @media (max-width: 440px) {
    display: none;
  }
`;

const StyledCloseButton = styled(X)`
  cursor: pointer;
  padding: 0.1rem;
`;

const CookieBanner = () => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setIsDeleted(true);
  };

  if (isDeleted) {
    return null;
  }

  return (
    <>
      <HorizontalSeparator />
      <FullDivision>
        <LeftDivision>
          <StyledInfoIcon size={20} />
          <Paragraph>
            L'option "Bloquer les cookies tiers" activée sur votre navigateur
            empêche l'authentification!
          </Paragraph>
        </LeftDivision>
        <RightDivision>
          <StyledCloseButton size={20} onClick={handleDelete} />
        </RightDivision>
      </FullDivision>
    </>
  );
};

export default CookieBanner;
