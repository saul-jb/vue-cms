import feathers from "@feathersjs/feathers";
import auth from "@feathersjs/authentication-client";
import rest from "@feathersjs/rest-client";

const client = feathers();
const restClient = rest("http://localhost:3030");

client.configure(auth({ storage: localStorage }));
client.configure(restClient.fetch(window.fetch));

export default client;
