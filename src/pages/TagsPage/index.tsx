import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../components/firebase";
import TagCard from "../../components/cards/TagCard";
import RoundedBox from "../../components/UI/RoundedBox";
import { Icon } from "@iconify/react";
import ContactForm from "../../components/forms/ContactForm";
import { Modal } from "antd";
import { TagTypes } from "../../typing/types/contact";

const TagsPage = () => {
  const [tags, setTags] = useState<TagTypes[]>([]);
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
    const q = query(collection(db, "tags"));

    onSnapshot(q, (QuerySnapshot) => {
      const tagsArr: TagTypes[] = [];
      QuerySnapshot.forEach((doc) => {
        // @ts-ignore
        tagsArr.push({ ...doc.data(), id: doc.id });
      });
      setTags(tagsArr);
    });
  }, []);
  return (
    <div className="w-full py-8">
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <ContactForm
          onSubmit={(value) => {
            console.log(value);
          }}
          tagOptions={[{ value: "dwadwa", label: "dwadw" }]}
        />
      </Modal>
      <div className="mb-8">
        <h3 className="text-center text-3xl font-sem mb-4">Hash Tags</h3>
        <div className="w-full flex justify-center">
          <RoundedBox
            boxType="button"
            handleClick={() => {
              showModal();
            }}
            classes="w-fit group hover:bg-main-clr shadow-regularBox"
          >
            <div className="flex items-center">
              <h6 className="mr-2 text-xl text-main-clr transition-all duration-500 group-hover:text-white">
                Create a hashtag
              </h6>
              <Icon
                icon="mdi:hashtag"
                className="group-hover:text-white mx-0 text-main-clr text-xl transition-all duration-500"
              />
            </div>
          </RoundedBox>
        </div>
      </div>

      <div className="grid grid-cols-tags-cards">
        {tags &&
          tags.map((tag) => {
            return (
              <TagCard
                id={tag.id}
                key={tag.id}
                value={`${tag.value} wdadawdwad`}
                classes="shadow-regularBox"
              />
            );
          })}
      </div>
    </div>
  );
};

export default TagsPage;
