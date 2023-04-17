import { EditProfileDto, UsersApi } from '../api/UsersApi';
import { AppLinks } from '../api/constants';
import store from '../utils/Store';

export class ProfileController {
  private usersApi: UsersApi;

  constructor() {
    this.usersApi = new UsersApi();
  }

  async editProfile(data: EditProfileDto) {
    const newUserData = await this.usersApi.update(data);

    newUserData.avatar = newUserData.avatar && AppLinks.BaseUrl + '/resources' + newUserData.avatar;

    store.set('user', newUserData);
  }

  editPassword(oldPassword: string, newPassword: string) {
    return this.usersApi.editPassword(oldPassword, newPassword);
  }

  async editAvatar(avatar: FormData) {
    const newUserData = await this.usersApi.editAvatar(avatar);
    newUserData.avatar = AppLinks.BaseUrl + '/resources' + newUserData.avatar;

    store.set('user', newUserData);
  }
}
