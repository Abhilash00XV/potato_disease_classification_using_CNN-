import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

test('renders the potato leaf upload screen', async () => {
  const container = document.createElement('div');
  ReactDOM.render(<App />, container);

  expect(container.textContent).toMatch(/potato disease classification/i);
  expect(container.textContent).toMatch(/drag and drop an image of a potato plant leaf/i);

  await new Promise((resolve) => window.setTimeout(resolve, 100));
  ReactDOM.unmountComponentAtNode(container);
});
