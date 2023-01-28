export interface IMail {
  subject: string;
  body: string;
  recipients: string[];
}

const Mail = () => {
  const create = (mail: IMail) => {
    return {
      from: '"noreply" <auxb.falhas@gmail.com>',
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