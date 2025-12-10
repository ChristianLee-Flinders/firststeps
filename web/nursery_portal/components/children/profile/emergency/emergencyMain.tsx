import EmergencyContactCard from "./emergencyContactCard";

const dummyEmergencyContacts = [
  {
    name: "John Doe",
    relationship: "Father",
    phone: "555-1234",
    email: "john.doe@example.com",
    address: "123 Main St, Anytown",
    priority: 1,
    authorised: true,
    collectionPassword: "abcd1234",
  },
  {
    name: "Jane Smith",
    relationship: "Mother",
    phone: "555-5678",
    email: "jane.smith@example.com",
    address: "456 Oak St, Othertown",
    priority: 2,
    authorised: false,
    collectionPassword: "efgh5678",
  }
];

interface EmergencyMainProps {
  childId: string;
}

function EmergencyMain({ childId }: EmergencyMainProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {dummyEmergencyContacts.map((contact, index) => (
            <EmergencyContactCard
                key={index}
                priority={contact.priority}
                name={contact.name}
                relation={contact.relationship}
                phone={contact.phone}
                email={contact.email}
                address={contact.address}
                authorised={contact.authorised}
                collectionPassword={contact.collectionPassword}
                isEmergency={contact.priority === 1}
            />
        ))}
    </div>
  )
}

export default EmergencyMain