import { CompanyStyle } from "./Company.styled";
import { CompanyText } from "./Company.styled";

export interface CompanyProps {
  key: string;
  title: string;
  img_src: string;
}

const CompanyBlock = (props: CompanyProps) => {
  return (
    <CompanyStyle>
      <img src={props.img_src} alt="logo" width="240" height="120" />
      <CompanyText>{props.title}</CompanyText>
    </CompanyStyle>
  );
};

export default CompanyBlock;
