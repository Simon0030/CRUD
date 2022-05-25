import React from "react";
import logo from '../../../assets/logo.svg';
import { MainPanel, PanelCenter, PanelElement, PanelImageLeft, PanelImageRight } from "./Header.styled";
import './Header.styled.ts';
import Title from "../../UI/Title/Title";


const Header = () => {
  return (
    <MainPanel>
      
      <PanelElement>
        <PanelCenter>
        <PanelImageLeft src={logo}/>
        </PanelCenter>
      </PanelElement>

      <PanelElement>
        <PanelCenter>
            <Title title="REACT  PROJECT"/>
          </PanelCenter>
      </PanelElement>

      <PanelElement>
        <PanelCenter>
          <PanelImageRight src={logo}/>
        </PanelCenter>
      </PanelElement>

    </MainPanel>
  );
}


export default Header;