import CompanyBlock from "./CompanyBlock";
import { CompanyProps } from "./CompanyBlock";

interface CompanySectorProps {
  items: Array<CompanyProps>;
}

const Companies = (props: CompanySectorProps) => {
  return (
    <ul>
      {props.items.map((company: CompanyProps) => (
        <CompanyBlock
          key={company.key}
          title={company.title}
          img_src={company.img_src}
        />
      ))}
    </ul>
  );
};

export default Companies;
