import Button from "../../UI/Button/Button";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import { APP_PAGE } from "../App";
import allegro_image from "../../Images/allegro.jpg";
import olx_image from "../../Images/olx.jpg";
import ebay_image from "../../Images/ebay.jpg";
import CompaniesSector from "../../UI/CompanyView/CompaniesSector";
import { StatisticsAreaStyled } from "./StatisticsArea.styled";
import Header from "../../UI/Header/Header";

const EXAMPLES_COMPANIES = [
    {
      key: "1",
      title: "Allegro",
      img_src: allegro_image,
    },
    {
      key: "2",
      title: "OLX",
      img_src: olx_image,
    },
    {
      key: "3",
      title: "eBay",
      img_src: ebay_image,
    },
  ];

const StatisticsArea = () => {
    return (
        <StatisticsAreaStyled>
            <Header/>
            <CompaniesSector items={EXAMPLES_COMPANIES} />
            <RouteLink to={APP_PAGE.HOME}>
                <Button title="Powrót do strony głównej" />
            </RouteLink>
        
        </StatisticsAreaStyled>
    )
}

export default StatisticsArea;
