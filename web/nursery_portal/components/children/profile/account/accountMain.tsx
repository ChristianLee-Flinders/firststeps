import AccountOverview from "./accountOverview";
import AccountSummary from "./accountSummary"

interface AccountMainProps {
    child: {
        first_name: string;
        last_name: string;
        parent1_name?: string;
        date_of_birth: string;
        room: string;
    };
}

function AccountMain({ child }: AccountMainProps) {
  return (
    <>
        <AccountSummary /> 
        <AccountOverview child={child} />
    </>
  )
}

export default AccountMain