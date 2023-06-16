import { useState } from 'react';
import Paragraph from './Paragraph';
import { styled, keyframes } from 'styled-components';
import { Info, X } from '@phosphor-icons/react';
import themes from '../../styles/Themes';

const FullDivision = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-height: 3.5rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  color: #0e0e0e;
  background-color: #f1f1f1;
`;

const LeftDivision = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 auto;
`;

const RightDivision = styled.div`
  :hover {
    background-color: #dfdfdf;
    border-radius: 0.4rem;
  }
`;

const StyledInfoIcon = styled(Info)`
  margin-top: 0.15rem;
`;

const StyledCloseButton = styled(X)`
  margin-top: 0.15rem;
  cursor: pointer;
  padding: 0.1rem;
`;

const AccountBanner = () => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setIsDeleted(true);
  };

  if (isDeleted) {
    return null;
  }

  return (
    <FullDivision>
      <LeftDivision>
        <StyledInfoIcon size={20} />
        <Paragraph>-</Paragraph>
        <Paragraph>Compte par défaut</Paragraph>
        <Paragraph>-</Paragraph>
        <Paragraph>exemple@email.fr</Paragraph>
        <Paragraph>-</Paragraph>
        <Paragraph>123456</Paragraph>
      </LeftDivision>
      <RightDivision>
        <StyledCloseButton size={20} onClick={handleDelete} />
      </RightDivision>
    </FullDivision>
  );
};

export default AccountBanner;
