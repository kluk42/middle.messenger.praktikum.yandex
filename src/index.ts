import { HomePage } from './pages/HomePage/HomePage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';

const routes = {
  home: HomePage,
  signUp: SignUpPage,
};

export function renderDOM(route: keyof typeof routes) {
  const root = document.getElementById('app')!;

  root.innerHTML = '';

  const Page = routes[route];
  const page = new Page();

  root.appendChild(page.getContent()!);

  page.dispatchComponentDidMount();
}

window.addEventListener('DOMContentLoaded', () => {
  renderDOM('home');
});
