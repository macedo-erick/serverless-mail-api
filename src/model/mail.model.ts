export type IMail = {
  from: string;
  sender: string;
  subject: string;
  body: string;
  recipients: string[];
}

const Mail = () => {
  const create = (mail: IMail) => {
    return {
      from: mail.from,
      sender: mail.sender,
      to: mail.recipients,
      subject: mail.subject,
      html: mail.body,
    };
  };



  return {
    create,
  };
};

export default Mail;