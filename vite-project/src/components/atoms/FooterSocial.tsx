interface FooterSocial {
  icon: string;
  link: string;
}

const FooterSocial = ({ icon, link }: FooterSocial) => {
  return (
    <a href={link}>
      <img src={icon} alt="" />
    </a>
  );
};

export default FooterSocial;
