import { useParams } from "react-router-dom";
import TermsConditions from "./TermsConditions";
import KeyRisks from "./KeyRisks";
import PrivacyPolicy from "./PrivacyPolicy";

const FooterReservedRights = () => {
  const { param } = useParams();
  console.log(param);
  return (
    <>
      {param === "terms-&-conditions" && <TermsConditions />}
      {param === "key-risks" && <KeyRisks />}
      {param === "privacy-policy" && <PrivacyPolicy />}
    </>
  );
};

export default FooterReservedRights;
