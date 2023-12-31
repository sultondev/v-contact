import { Button, Form, Input, Select, ConfigProvider } from "antd";
import React, { useState } from "react";
import { Contact, ContactTagProps } from "../../typing/types/contact";
import { useEffect } from "react";

interface ContactFormProps {
  onSubmit: (contact: Contact) => Promise<void> | void;
  initialContact?: Contact;
  tagOptions: ContactTagProps[];
}

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

// const tailLayout = {
//   wrapperCol: { offset: 8, span: 12 },
// };

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  initialContact = { name: "", phone: "", email: "", tags: [] },
  tagOptions,
}) => {
  const [form] = Form.useForm();
  const [selectedTags, setSelectedTags] = useState<ContactTagProps[] | []>(
    initialContact.tags || []
  );
  useEffect(() => {
    form.setFieldsValue(initialContact); // Use setFieldsValue to set multiple fields at once
    setSelectedTags(initialContact.tags);
  }, [form, initialContact]);

  const handleSubmit = async (values: Contact) => {
    const contact: Contact = { ...values, id: initialContact.id }; // Use object destructuring to copy values
    await onSubmit(contact);
    form.resetFields();
  };

  const handleTagChange = (value: ContactTagProps[]) => {
    setSelectedTags((prevState: ContactTagProps[]) => ({
      ...prevState,
      ...value,
    }));
  };

  return (
    <Form
      {...layout}
      form={form}
      name="contact-form"
      onFinish={(values: Contact) => {
        void (async () => {
          await handleSubmit(values);
        })();
      }}
      initialValues={initialContact}
      style={{ maxWidth: 600 }}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: "Please enter a name" }]}
      >
        <Input placeholder="Name" />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone"
        rules={[{ required: true, message: "Please enter a phone number" }]}
      >
        <Input placeholder="Phone" />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: "Please enter an email address" },
          { type: "email", message: "Please enter a valid email address" },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="tags"
        label="Tags"
        rules={[{ required: false, message: "Please select at least one tag" }]}
      >
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Select tags"
          options={tagOptions}
          value={selectedTags}
          onChange={handleTagChange}
        />
      </Form.Item>

      {/* <Form.Item {...tailLayout}> */}
      <div className="flex justify-center">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#4FD1C5",
              colorBgTextHover: "#4FD1C5",
              colorBgContainer: "#4FD1C5",
              colorBgMask: "#4FD1C5",
              colorPrimaryBg: "#4FD1C5",
            },
          }}
        >
          <Button
            className="mr-1"
            size="large"
            htmlType="submit"
            loading={true}
          >
            {initialContact.name ? "Update Contact" : "Create Contact"}
          </Button>
          {initialContact.name === "" ? (
            <Button
              size="large"
              htmlType="button"
              type="dashed"
              onClick={() => form.resetFields()}
            >
              Reset
            </Button>
          ) : (
            <></>
          )}
        </ConfigProvider>
      </div>
      {/* </Form.Item> */}
    </Form>
  );
};

export default ContactForm;
