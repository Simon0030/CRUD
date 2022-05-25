import styled, {keyframes} from 'styled-components';

export const MainPanel = styled.div`
  color: white;
  width: 100%;
  height: 120px;
  margin: 10px;
`

export const PanelElement = styled.div`
  width: 33.333%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  position: relative;
  float:left;
`

export const PanelCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

/* Animation section */
const rotateLeft = keyframes`
  from{transform: rotate(0deg)};
  to{transform: rotate(360deg)};
`

const rotateRight = keyframes`
  from{transform: rotate(0deg)};
  to{transform: rotate(-360deg)};
`

export const PanelImageLeft = styled.img`
   width: 30%;
   animation: ${rotateLeft} 10s linear infinite;
`

export const PanelImageRight = styled.img`
   width: 30%;
   filter: grayscale(100%);
   animation: ${rotateRight} 10s linear infinite;
`