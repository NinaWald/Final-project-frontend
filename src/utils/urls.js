const BASE_URL = 'https://final-backend-sl33jvdfkq-no.a.run.app';

export const API_URL = (slug) => `${BASE_URL}/${slug}`

/*
In this code I have defined a constant variable BASE_URL
which represents the base URL of my backend API.
The value of BASE_URL is 'https://final-backend-sl33jvdfkq-no.a.run.app',
which is the URL where my backend is deployed.

Next, I have created an API_URL function that takes a slug parameter.
The purpose of this function is to generate the complete URL for making API requests to my backend.
It appends the slug parameter to the BASE_URL using template literals (``)
and returns the concatenated URL.

For example, if you call API_URL('register'), it will return 'https://final-backend-sl33jvdfkq-no.a.run.app/register',
which is the complete URL for registering a user in your backend.

By using this approach, you can easily manage and update the base URL in one place
(the BASE_URL constant),
and generate the complete API URLs dynamically by passing
the appropriate slugs to the API_URL function.

Remember to import API_URL in your frontend code and use it to construct
 the URLs for making API requests to your backend.
*/