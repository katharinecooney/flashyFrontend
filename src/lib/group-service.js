import axios from 'axios';

class Group {
  constructor () {
    this.group = axios.create({
      baseURL: 'http://localhost:5000/',
      withCredentials: true
    });
  }

  joinGroup (user, groupId) {
    return this.group
      .post(`/group/${groupId}/join`)
      .then(({ data }) => data);
  }

  createGroup (newGroup) {
    const { school, subject, passcode } = newGroup;
    return this.group
      .post('/group/create', { school, subject, passcode })
      .then(({ data }) => data);
  }

  createCard (card) {
    const { frontText, backText } = card;
    return this.group
      .post('/group/:groupId/card/create', { frontText, backText })
      .then(({ data }) => data);
  }

  saveCard () {
    return this.group
      .put('/group/:groupId/card/:cardId/save')
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
