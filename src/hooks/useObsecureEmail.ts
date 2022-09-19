

const useObsecureEmail = () => {
  const obscureEmail = (email: string) => {
    const [name, domain] = email.split("@");
    return `${name.substring(0, 4)}${new Array(name.length).join(
      "*"
    )}@${domain}`;
  };

  return obscureEmail;
};

export default useObsecureEmail;
