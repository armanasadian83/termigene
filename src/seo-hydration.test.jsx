import { act } from 'react';
import { renderToString } from 'react-dom/server.node';
import { hydrateRoot } from 'react-dom/client';
import { StaticRouter } from 'react-router-dom';
import App, { AppContent } from './app';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

test.each(['/', '/service/web', '/contact?service=telegram'])('prerendered %s hydrates without replacing content or recoverable errors', async path => {
 window.history.replaceState({}, '', path);
 window.scrollTo = jest.fn();
 window.matchMedia = jest.fn(() => ({ matches: true }));
 const container = document.createElement('div');
 container.innerHTML = renderToString(<StaticRouter location={path.split('?')[0]}><AppContent/></StaticRouter>);
 document.body.append(container);
 const initialHeading = container.querySelector('h1');
 const errors = [];
 let root;
 await act(async () => { root = hydrateRoot(container, <App/>, { onRecoverableError: error => errors.push(error.message) }); });
 expect(errors).toEqual([]);
 expect(container.querySelector('h1')).toBe(initialHeading);
 if (path.includes('service=telegram')) expect(container.querySelector('#service').value).toBe('telegram');
 act(() => root.unmount());
 container.remove();
});
