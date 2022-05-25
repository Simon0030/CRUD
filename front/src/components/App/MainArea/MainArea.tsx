import Button from "../../UI/Button/Button"
import RouteLink from "../../UI/RouteLink/RouteLink.styled"
import Header from "../../UI/Header/Header";
import { APP_PAGE } from "../App"
import { MainAreaStyled } from "./MainArea.styled"

const MainArea = () => {

  return (
    <div>
      <MainAreaStyled>
        <Header/>
        <RouteLink to={APP_PAGE.SALES}>
          <Button title="Panel sprzedaży" />
        </RouteLink>
        <RouteLink to={APP_PAGE.MAINTENANCE} >
          <Button title="Panel administracyjny" />
        </RouteLink>
        <RouteLink to={APP_PAGE.STATISTICS}>
          <Button title="Statystyki" />
        </RouteLink>
        <RouteLink to={APP_PAGE.HELP}>
          <Button title="Pomoc" />
        </RouteLink>
      </MainAreaStyled >
    </div >
  )
}

export default MainArea
