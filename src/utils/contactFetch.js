import contactAPI  from '../config/configuration'

const validationFetch = (form) => {
    fetch(`${contactAPI}`, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
            "Content-Type": "application/json"
        }
    })
}
export default validationFetch;
