import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0;
  z-index: 1;
  transition: 0.25s ease-in-out;
`;

export const PostImage = styled.div`
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const PostMeta = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MetaIcon = styled.div`
  margin-right: 3px;

  svg {
    display: block;
  }
`;

export const MetaText = styled.div`
  font-size: 18px;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  padding: 0 10px;
  overflow: hidden;
  opacity: 0;
  margin-top: -30px;
  transition: 0.25s ease-in-out;
  &:last-child {
    transition-delay: 0.1s;
  }
`;

export const InstagramGridWrapper = styled.div`
  position: relative;
  overflow: hidden;
  &:hover {
    ${Overlay} {
      opacity: 0.35;
    }

    ${MetaItem} {
      margin-top: 0;
      opacity: 1;
    }
  }
`;
