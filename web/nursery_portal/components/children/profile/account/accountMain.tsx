import AccountInvoices from "./accountInvoices";
import AccountOverview from "./accountOverview";
import AccountPayment from "./accountPayment";
import AccountSummary from "./accountSummary"

interface AccountMainProps {
    child: {
        id: string;
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
        <AccountInvoices child={{ id: child.id }} />
        <AccountPayment />
    </>
  )
}

export default AccountMain