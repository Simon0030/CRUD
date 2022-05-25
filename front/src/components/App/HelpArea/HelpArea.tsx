import { v4 as uuid_v4 } from "uuid";
import Button from "../../UI/Button/Button";
import Header from "../../UI/Header/Header";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import Tabs from "../../UI/Tabs/Tabs";
import { APP_PAGE } from "../App";
import { HelpStyled } from "../HelpArea/Help.styled";

// ONLY FOR DEVELOPING PROCESS 
const SAMPLE_ELEMENTS : PackageData[] = [
    { id: uuid_v4(), name: "Allegro", content: "In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman." },
    { id: uuid_v4(), name: "Amazon", content: "Amazon is cool"},
];

export interface PackageData {
    id: string;
    name: string;
    content: string;
};

const HelpArea = () => {

    return (
        <HelpStyled>
            <Header />
            <Tabs packageData={SAMPLE_ELEMENTS}/>
            <RouteLink to={APP_PAGE.HOME}>
                <Button title="Powrót do strony głównej" />
            </RouteLink>
        </HelpStyled>
    )
}

export default HelpArea;