import { EditAvatarDto, EditProfileDto, UsersApi } from '../api/UsersApi';
import store from '../utils/Store';

export class ProfileController {
  private usersApi: UsersApi;

  constructor() {
    this.usersApi = new UsersApi();
  }

  async editProfile(data: EditProfileDto) {
    const newUserData = await this.usersApi.update(data);

    store.set('user', newUserData);
  }

  editPassword(oldPassword: string, newPassword: string) {
    return this.usersApi.editPassword(oldPassword, newPassword);
  }

  async editAvatar(data: EditAvatarDto) {
    const newUserData = await this.usersApi.editAvatar(data);

    store.set('user', newUserData);
  }
}
