import axios from 'axios';

class Group {
  constructor () {
    this.group = axios.create({
      // baseURL: 'http://localhost:5000/',
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }

  joinGroup (passcode) {
    return this.group
      .post('/group/join', passcode)
      .then(({ data }) => data);
  }

  createGroup (newGroup) {
    const { school, subject, passcode } = newGroup;
    return this.group
      .post('/group/create', { school, subject, passcode })
      .then(({ data }) => data);
  }

  createCard (card, groupId) {
    const { frontText, backText } = card;
    return this.group
      .post(`/group/${groupId}/card/create`, { frontText, backText })
      .then(({ data }) => data);
  }

  saveCard (groupId, cardId) {
    return this.group
      .put(`/group/${groupId}/card/${cardId}/save`)
      .then(({ data }) => data);
  }

  viewGroup (groupId) {
    return this.group
      .get(`/group/${groupId}`)
      .then(({ data }) => data);
  }
}

const group = new Group();

export default group;
