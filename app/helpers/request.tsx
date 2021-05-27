interface postProps {
  url: string;
  body: object;
  headers?: object;
}

/**
 * POST request function
 * @param props You can pass header params in `header` key.
 * @returns Promise<Response>
 */

const post = async (props: postProps) => {
  const headers = Object.assign(
    {'Content-Type': 'application/json'},
    props.headers || {},
  );
  const response = await fetch(String(props.url), {
    method: 'POST',
    headers,
    body: JSON.stringify(props.body),
  });
  return response.json();
};

interface getProps {
  url: string;
  headers?: object;
}

/**
 * GET request function
 * @param props `url` key is required, you can pass header params in `header` key
 * @returns Promise<Response>
 */

const get = async (props: getProps) => {
  const headers = Object.assign(
    {'Content-Type': 'application/json'},
    props.headers || {},
  );
  const response = await fetch(String(props.url), {
    method: 'GET',
    headers,
  });
  return response.json();
};

export default {get, post};
