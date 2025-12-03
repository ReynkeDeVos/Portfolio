// Obfuscated email to prevent spam bots
export const getEmail = () => {
  const user = 'renke.brixel';
  const domain = 'gmail.com';
  return `${user}@${domain}`;
};

export const handleEmailClick = (e: React.MouseEvent) => {
  e.preventDefault();
  window.open(`mailto:${getEmail()}`, '_blank');
};
