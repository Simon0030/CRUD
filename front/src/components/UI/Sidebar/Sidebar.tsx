import {
  SidebarStyled,
  SidebarList,
  SidebarListItem,
  SidebarListItemIcon,
  SidebarListItemTitle,
} from "./Sidebar.styled";
import { MaintenanceAreaSidebarInterface } from "../../App/MaintenanceArea/MaintenanceArea.sidebarData";
import { APP_PAGE } from "../../App/App";

interface SidebarProps {
  data: MaintenanceAreaSidebarInterface[];
  onClick?: React.MouseEventHandler<HTMLInputElement>;
}

const Sidebar = (props: SidebarProps) => {
  const changeRoute = (link: string) => {
    const sidebarSubpage = "/" + window.location.pathname.split("/").pop();
    const parentPage =
      "/" +
      window.location.pathname.split("/")[
        window.location.pathname.split("/").length - 2
      ];

    const listOfPaths = [sidebarSubpage, parentPage];

    const findPath = (item: string) => {
      switch (item) {
        case APP_PAGE.HOME:
          return (window.location.pathname = APP_PAGE.HOME + link);
        case APP_PAGE.HELP:
          return (window.location.pathname = APP_PAGE.HELP + link);
        case APP_PAGE.MAINTENANCE:
          return (window.location.pathname = APP_PAGE.MAINTENANCE + link);
        case APP_PAGE.STATISTICS:
          return (window.location.pathname = APP_PAGE.STATISTICS + link);
        case APP_PAGE.SALES:
          return (window.location.pathname = APP_PAGE.SALES + link);
        case APP_PAGE.EDIT:
          return (window.location.pathname = APP_PAGE.EDIT + link);
        case APP_PAGE.PRODUCT:
          return (window.location.pathname = APP_PAGE.PRODUCT + link);
      }
    };
    return listOfPaths.find((link) => findPath(link));
  };

  const renderSidebarElements = props.data.map((val, key) => {
    return (
      <SidebarListItem key={key} onClick={() => changeRoute(val.link)}>
        <SidebarListItemIcon>{val.icon}</SidebarListItemIcon>
        <SidebarListItemTitle>{val.title}</SidebarListItemTitle>
      </SidebarListItem>
    );
  });

  return (
    <SidebarStyled>
      <SidebarList>{renderSidebarElements}</SidebarList>
    </SidebarStyled>
  );
};

export default Sidebar;
