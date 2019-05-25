import axios from 'axios';

class Profile {
  constructor () {
    this.profile = axios.create({
      baseURL: 'http://localhost:5000/',
      withCredentials: true
    });
  }

  listGroups () {
    return this.profile
      .get('/profile/groups')
      .then(({ data }) => data);
  }

  listDecks () {
    return this.profile
      .get('/profile/decks')
      .then(({ data }) => data.groups);
  }

  edit (user) {
    const { password, firstName, lastName, email } = user;
    return this.profile
      .put('/profile/update', { firstName, lastName, email, password })
      .then(({ data }) => data);
  }

  showSingleDeck (deckId) {
    return this.profile
      .get(`/profile/${deckId}`)
      .then(({ data }) => data);
  }

  deleteCard (groupId, cardId) {
    return this.profile
      .delete(`/profile/${groupId}/${cardId}/delete`)
      .then(({ data }) => data);
  }
}

const profile = new Profile();

export default profile;
