import { useState } from 'react';
import Paragraph from './Paragraph';
import { styled } from 'styled-components';
import { Info, X } from '@phosphor-icons/react';

const FullDivision = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  height: fit-content;
  padding: 1.5rem 1rem 1.5rem 1rem;
  color: #0e0e0e;
  background-color: #f1f1f1;
  white-space: nowrap;
  @media (max-width: 600px) {
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
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const RightDivision = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: #dfdfdf;
    border-radius: 0.4rem;
  }
`;

const StyledInfoIcon = styled(Info)`
  @media (max-width: 600px) {
    display: none;
  }
`;

const StyledCloseButton = styled(X)`
  cursor: pointer;
  padding: 0.1rem;
`;

const StyledParagraph = styled(Paragraph)``;

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
        <StyledParagraph className="normal-text">
          Compte par défaut
        </StyledParagraph>
        <StyledInfoIcon size={20} />
        <Paragraph className="normal-text">exemple@email.fr</Paragraph>
        <StyledParagraph className="slash-text">/</StyledParagraph>
        <Paragraph className="normal-text">123456</Paragraph>
      </LeftDivision>
      <RightDivision>
        <StyledCloseButton size={20} onClick={handleDelete} />
      </RightDivision>
    </FullDivision>
  );
};

export default AccountBanner;
