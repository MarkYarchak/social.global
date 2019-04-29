import followers from '../dataStore/followers';
import unfollowers from '../dataStore/unfollowers';
import likedMusic from '../dataStore/likedMusic';
import playlists from '../dataStore/playlists';
import myGroups from '../dataStore/myGroups';
import followedGroups from '../dataStore/followedGroups';
import dialogs from '../dataStore/dialogs';
import noteNews from '../dataStore/noteNews';
import notes from '../dataStore/notes';

export default {
  user: {
    signIn: false,
    id: 777,
    firstName: 'Mark',
    lastName: 'Yarchak',
    username: '@mark.yarchak',
    avatar: 'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    followers,
    unfollowers,
    music: {
      likedMusic,
      playlists,
    },
    groups: {
      myGroups,
      followedGroups,
    },
    dialogs,
    notes,
    noteNews,
  },
};
