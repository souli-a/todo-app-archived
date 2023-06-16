import styled from 'styled-components';
import themes from '../../styles/Themes';

const StyledLoadingIcon = styled.div`
  .bouncing-loader {
    display: flex;
    justify-content: center;
    margin: 0.15rem;
  }

  .bouncing-loader > div {
    width: 1rem;
    height: 1rem;
    margin: 0.3rem 0.6rem;
    border-radius: 50%;
    background-color: #fafafa;
    opacity: 1;
    animation: bouncing-loader 0.6s infinite alternate;
  }

  @keyframes bouncing-loader {
    to {
      opacity: 0.1;
    }
  }

  .bouncing-loader > div:nth-child(2) {
    animation-delay: 0.2s;
  }

  .bouncing-loader > div:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

const LoadingIcon = () => {
  return (
    <StyledLoadingIcon>
      <div className="bouncing-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledLoadingIcon>
  );
};

export default LoadingIcon;
