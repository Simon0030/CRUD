import GroupIcon from "@mui/icons-material/Group";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CategoryIcon from "@mui/icons-material/Category";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export enum ROUTES {
  HOME = "",
  PRODUCTS = "/products",
  ORDERS = "/orders",
  CLIENTS = "/clients",
  RETURNS = "/returns",
  DISCOUNTS = "/discounts",
}

export enum TITLES {
  HOME = "Witaj w panelu administracyjnym!",
  PRODUCTS = "Produkty",
  ORDERS = "Zam贸wienia",
  CLIENTS = "Klienci",
  RETURNS = "Zwroty",
  DISCOUNTS = "Rabaty",
}

export enum CONTENT {
  HOME = "Wybierz pozycj臋 z Sidebaru 馃コ",
  ORDERS = "Brak zam贸wie艅 馃槦",
  CLIENTS = "RODO MAMY BYCZQ 馃く",
  RETURNS = "Aktualnie nie mamy zwrot贸w! Hurra! 馃槂",
  DISCOUNTS = "Rabat贸w si臋 zachcia艂o hurr durr 馃が",
}

export interface MaintenanceAreaSidebarInterface {
  title: string;
  icon?: JSX.Element;
  link: string;
}

export const sidebarData: MaintenanceAreaSidebarInterface[] = [
  {
    title: "Produkty",
    icon: <CategoryIcon />,
    link: ROUTES.PRODUCTS,
  },
  {
    title: "Zam贸wienia",
    icon: <ShoppingBagIcon />,
    link: ROUTES.ORDERS,
  },
  {
    title: "Klienci",
    icon: <GroupIcon />,
    link: ROUTES.CLIENTS,
  },
  {
    title: "Zwroty",
    icon: <RemoveShoppingCartIcon />,
    link: ROUTES.RETURNS,
  },
  {
    title: "Rabaty",
    icon: <LocalOfferIcon />,
    link: ROUTES.DISCOUNTS,
  },
  {
    title: "Powr贸t",
    icon: <ExitToAppIcon />,
    link: ROUTES.HOME,
  },
];
