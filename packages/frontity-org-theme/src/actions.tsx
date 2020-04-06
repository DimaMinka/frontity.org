export const sendNewsletter = ({ state, libraries }) => {
  state.theme.newsletter.sending.newsletterForm = true;
  //   libraries.dataLayer.push({
  //     event: "newsletter",
  //     ...state.newsletter,
  //   });
  state.theme.newsletter.sending.newsletterForm = false;
  state.theme.newsletter.sent.newsletterForm = true;
};

export const sendAfterNewsletter = ({ state, libraries }) => {
  const { name, answers } = state.theme.newsletter.afterNewsletter;
  state.theme.newsletter.sending.afterNewsletter = true;
  // libraries.dataLayer.push({
  //   event: "after-newsletter",
  //   name,
  //   answers,
  // });
  state.theme.newsletter.sending.afterNewsletter = false;
  state.theme.newsletter.sent.afterNewsletter = true;
};

export const setAnswer = ({ state }) => ({ name, answer }) => {
  state.theme.newsletter.afterNewsletter.answers[name] = answer;
};

export const setNewsletterProp = ({ state }) => ({ name, value }) => {
  state.theme.newsletter.newsletterForm[name] = value;
};

export const setAfterNewsletterProp = ({ state }) => ({ name, value }) => {
  state.theme.newsletter.afterNewsletter[name] = value;
};