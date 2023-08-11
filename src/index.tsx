import { createRoot } from 'react-dom/client';
import App from './app/App';

const container = document.getElementById('root');
if (!container) {
  throw new Error('No root container found. Failed to mount the react application');
}

const root = createRoot(container);

root.render(
  <>
    <App />
  </>
);
