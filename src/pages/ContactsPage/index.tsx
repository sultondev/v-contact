import { ConfigProvider, Input, Select as DropdownSelect, Modal } from "antd";
import ContactCard from "../../components/cards/ContactCard";
import { useEffect, useMemo, useState } from "react";
import RoundedBox from "../../components/UI/RoundedBox";
import { Icon } from "@iconify/react/dist/iconify.js";
import ContactForm from "../../components/forms/ContactForm";
import { addDoc, collection, onSnapshot, query } from "@firebase/firestore";
import { Contact } from "../../typing/types/contact";
import { db } from "../../components/firebase";
import { DatabaseCollections } from "../../constants/DatabaseCollections";
// import { useSelector } from "react-redux";
const { Search: InputSeach } = Input;

const ContactsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [, setTagSearchQuery] = useState("");
  // const tags = useSelector(
  //   (state: { tags: { tags: TagTypes[] } }) => state.tags.tags
  // ); // Access the tags array from the Redux store
  // console.log(tags);

  const onSearch = (value: string) => {
    setSearchQuery(value);
  };

  const [contacts, setContacts] = useState<Contact[] | []>([]);
  const [, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  useEffect(() => {
    fetchContacts();
  }, []);

  function fetchContacts() {
    const q = query(collection(db, "contacts"));

    onSnapshot(q, (QuerySnapshot) => {
      const contactsArr: Contact[] = [];
      QuerySnapshot.forEach((doc) => {
        // @ts-ignore
        contactsArr.push({ ...doc.data(), id: doc.id });
      });
      setContacts(contactsArr);
    });
  }

  async function addContact(data: Contact) {
    await addDoc(collection(db, DatabaseCollections.contacts), {
      ...data,
    }).then(() => {
      fetchContacts();
    });
  }

  const filteredContacts = useMemo(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();

    return contacts.filter(({ name, phone, email }) => {
      const lowerCaseName = name.toLowerCase();
      const lowerCaseEmail = email.toLowerCase();
      // const matchingTags = tags.some(
      //   (tag) => tag.includes(tagSearchQuery) || !tagSearchQuery
      // );

      return (
        lowerCaseName.includes(lowerCaseQuery) ||
        phone.includes(searchQuery) ||
        lowerCaseEmail.includes(lowerCaseQuery)
      );
    });
  }, [contacts, searchQuery]);

  return (
    <>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <ContactForm
          onSubmit={addContact}
          tagOptions={[{ value: "dwadwa", label: "dwadw" }]}
        />
      </Modal>
      <div className="w-full py-8">
        <h3 className="text-center text-3xl font-sem mb-4">Contacts</h3>
        <div className="">
          <div className="mx-0 grid grid-cols-3 mb-6">
            <div className="col-span-2 justify-self-end">
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#4FD1C5",
                  },
                }}
              >
                <InputSeach
                  placeholder="Find the contact here"
                  className="text-main-clr mr-2 "
                  allowClear
                  onSearch={onSearch}
                  style={{ width: 400 }}
                  size="large"
                />
                <DropdownSelect
                  defaultValue=""
                  style={{ width: 120 }}
                  allowClear
                  options={[
                    { value: "job", label: "job" },
                    { value: "family", label: "family" },
                  ]}
                  onChange={(value: string) => {
                    setTagSearchQuery(value);
                  }}
                  size="large"
                  placeholder="Select hashtag"
                />
              </ConfigProvider>
            </div>
            <div className="flex justify-end">
              <RoundedBox
                boxType="button"
                classes="w-fit group hover:bg-main-clr shadow-regularBox"
                handleClick={showModal}
              >
                <Icon
                  icon="mingcute:user-add-2-fill"
                  className="group-hover:text-white text-main-clr text-xl transition-all duration-500"
                />
              </RoundedBox>
            </div>
          </div>
          <div className="grid grid-cols-contacts-cards justify-center gap-8">
            {filteredContacts.map((contactItem) => {
              return (
                <ContactCard
                  key={contactItem.id || crypto.randomUUID()}
                  name={contactItem.name}
                  classes={`!shadow-regular-box`}
                  phone={contactItem.phone}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
