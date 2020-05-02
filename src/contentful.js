const contentful = require("contentful");

const client = contentful.createClient({
  space: "f12az9xv24gr",
  accessToken: "JmXWTtBzBQDzyKpWWtM6vxIa3nyabISRRDkYVbUOsL4",
});

export default client;
