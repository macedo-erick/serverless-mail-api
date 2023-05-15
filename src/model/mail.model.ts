export type Mail = {
  from: string;
  subject: string;
  body: string;
  recipients: string[];
}

const mail = () => {
  const create = (mail: Mail) => {
    return {
      from: mail.from,
      to: mail.recipients,
      subject: mail.subject,
      html: mail.body,
    };
  };

  return {
    create,
  };
};

export default mail;