import Button from "../../UI/Button/Button";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import { APP_PAGE } from "../App";
import {
  MaintenanceAreaStyled,
  MaintenanceAreaHeader,
  MaintenanceAreaTitle,
  MaintenanceAreaContent,
} from "./MaintenanceArea.styled";
import Sidebar from "../../UI/Sidebar/Sidebar";
import {
  sidebarData,
  ROUTES,
  TITLES,
  CONTENT,
} from "./MaintenanceArea.sidebarData";

const MaintenanceArea = () => {
  const sidebarSubpage = window.location.pathname.split("maintenance").pop();

  const changeTitles = () => {
    switch (sidebarSubpage) {
      case ROUTES.HOME:
        return TITLES.HOME;
      case ROUTES.PRODUCTS:
        return TITLES.PRODUCTS;
      case ROUTES.ORDERS:
        return TITLES.ORDERS;
      case ROUTES.CLIENTS:
        return TITLES.CLIENTS;
      case ROUTES.RETURNS:
        return TITLES.RETURNS;
      case ROUTES.DISCOUNTS:
        return TITLES.DISCOUNTS;
    }
  };

  const changeContent = () => {
    switch (sidebarSubpage) {
      case ROUTES.HOME:
        return CONTENT.HOME;
      case ROUTES.ORDERS:
        return CONTENT.ORDERS;
      case ROUTES.CLIENTS:
        return CONTENT.CLIENTS;
      case ROUTES.RETURNS:
        return CONTENT.RETURNS;
      case ROUTES.DISCOUNTS:
        return CONTENT.DISCOUNTS;
    }
  };

  const changeDiv = () => {
    switch (sidebarSubpage) {
      case ROUTES.PRODUCTS:
        return (
          <MaintenanceAreaContent>
            <Button title="Lista produktów"></Button>
            <RouteLink to={APP_PAGE.PRODUCT}>
              <Button title="Dodaj produkt"></Button>
            </RouteLink>
          </MaintenanceAreaContent>
        );
      default:
        return (
          <MaintenanceAreaContent>{changeContent()}</MaintenanceAreaContent>
        );
    }
  };

  const title = changeTitles();
  const sidebarSubpageContent = changeDiv();

  return (
    <MaintenanceAreaStyled>
      <MaintenanceAreaHeader>Panel administracyjny</MaintenanceAreaHeader>
      <MaintenanceAreaTitle>{title}</MaintenanceAreaTitle>
      {sidebarSubpageContent}
      <Sidebar data={sidebarData} />
      <RouteLink to={APP_PAGE.HOME}>
        <Button title="Powrót do strony głównej" />
      </RouteLink>
    </MaintenanceAreaStyled>
  );
};

export default MaintenanceArea;
