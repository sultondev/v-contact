import { ConfigProvider, Input, Select as DropdownSelect } from "antd";
import ContactCard from "../../components/cards/ContactCard";
import contactsList from "../../constants/contacts/sillyData";
import { useMemo, useState } from "react";
const { Search: InputSeach } = Input;

const ContactsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tagSearchQuery, setTagSearchQuery] = useState("");
  const onSearch = (value: string) => {
    setSearchQuery(value);
  };

  const filteredContacts = useMemo(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();

    return contactsList.filter(({ name, phone, email, tags }) => {
      const lowerCaseName = name.toLowerCase();
      const lowerCaseEmail = email.toLowerCase();
      const matchingTags = tags.some(
        (tag) => tag.includes(tagSearchQuery) || !tagSearchQuery
      );

      return (
        (lowerCaseName.includes(lowerCaseQuery) ||
          phone.includes(searchQuery) ||
          lowerCaseEmail.includes(lowerCaseQuery)) &&
        matchingTags
      );
    });
  }, [tagSearchQuery, searchQuery]);

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
            <InputSeach
              placeholder="Find the contact here"
              className="text-main-clr mr-2"
              allowClear
              onSearch={onSearch}
              style={{ width: 400 }}
              size="middle"
            />
            <DropdownSelect
              defaultValue=""
              style={{ width: 180 }}
              allowClear
              options={[
                { value: "job", label: "job" },
                { value: "family", label: "family" },
              ]}
              onChange={(value: string) => {
                console.log(value);
                setTagSearchQuery(value);
              }}
              placeholder="Select hashtag"
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
