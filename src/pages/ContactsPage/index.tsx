import { ConfigProvider, Input } from "antd";
import ContactCard from "../../components/cards/ContactCard";
import contactsList from "../../constants/contacts/sillyData";
import { useMemo, useState } from "react";
const { Search } = Input;

const ContactsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onSearch = (value: string) => {
    setSearchQuery(value);
  };

  const filteredContacts = useMemo(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();

    return contactsList.filter(({ name, phone, email, tags }) => {
      const lowerCaseName = name.toLowerCase();
      const lowerCaseEmail = email.toLowerCase();
      const matchingTags = tags.filter((tag) =>
        tag.toLowerCase().includes(lowerCaseQuery)
      );

      return (
        lowerCaseName.includes(lowerCaseQuery) ||
        phone.includes(searchQuery) ||
        lowerCaseEmail.includes(lowerCaseQuery) ||
        matchingTags.length > 0
      );
    });
  }, [searchQuery]);

  return (
    <div className="w-full py-8">
      <h3 className="text-center text-3xl font-sem mb-4">Contacts</h3>
      <div className="">
        <div className="mx-0 flex justify-center mb-6">
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#4FD1C5",
              },
            }}
          >
            <Search
              placeholder="Find the contact here"
              className="text-main-clr"
              allowClear
              onSearch={onSearch}
              style={{ width: 400 }}
              size="middle"
            />
          </ConfigProvider>
        </div>
        <div className="grid grid-cols-contacts-cards justify-center gap-8">
          {filteredContacts.map((contactItem) => {
            return (
              <ContactCard
                key={contactItem.phone}
                name={contactItem.name}
                phone={contactItem.phone}
                createdAt={contactItem.createdAt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
