import { AuthController } from './controllers/AuthController';
import { ChatPage } from './pages/ChatPage/ChatPage';
import { EditPasswordPage } from './pages/EditPasswordPage/EditPasswordPage';
import { EditProfilePage } from './pages/EditProfilePage/EditProfilePage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { HomePage } from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import { Router, Routes } from './Router/Router';

window.addEventListener('DOMContentLoaded', async () => {
  new Router('#app')
    .use(Routes.Home, HomePage, {})
    .use(Routes.SignInPage, SignInPage, {})
    .use(Routes.SignUpPage, SignUpPage, {})
    .use(Routes.Chat, ChatPage, {})
    .use(Routes.EditProfilePage, EditProfilePage, {})
    .use(Routes.EditPasswordPage, EditPasswordPage, {})
    .use(Routes.Profile, ProfilePage, {})
    .use(Routes.NotFoundPage, ErrorPage, { statusCode: 404, text: 'Не найдено' })
    .use(Routes.ServerError, ErrorPage, { statusCode: 500, text: 'Что-то пошло не так' })
    .start();

  const authController = new AuthController();

  await authController.getUser();
});
