module.exports.validateName = (value) => {
  if (value.length === 0) return 'You need to enter your name';
  return true;
};

module.exports.validateEmail = (value) => {
  if (value.length === 0) return 'You need to enter your email';
  return true;
};

module.exports.validateGitHub = (value) => {
  if (value.length === 0) return 'You need to enter your GitHub username';
  return true;
};

module.exports.validateTwitter = (value) => {
  if (value.length === 0) return 'You need to enter your Twitter username';
  return true;
};
