import { contactAPI as API } from '../config/configuration';

const contactFetch = (form) => fetch(`${API}`, {
  method: 'POST',
  body: JSON.stringify(form),
  headers: { 'Content-Type': 'application/json' },
});
export default contactFetch;
