/* eslint-disable @typescript-eslint/no-unused-vars */
async function getAPI<ReturnType>(path: string, init?: RequestInit | undefined): Promise<ReturnType> {
  const res = await fetch(path, {
    method: 'GET',
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer',
    ...init,
  });

  let data;

  try {
    data = await res.json();
  } catch (error) {
    // pass
  }

  if (res.ok) {
    return data;
  }

  throw Error(data?.message || res.statusText);
  //pass error to calling function
}

async function postAPI<ReturnType>(path: string, init: RequestInit | undefined): Promise<ReturnType> {
  const res = await fetch(path, {
    method: 'POST',
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer',
    ...init,
  });

  let data;

  try {
    data = await res.json();
  } catch (error) {
    // pass
  }

  if (res.ok) {
    return data;
  }

  throw Error(data?.message || res.statusText);
  //pass error to calling function
}

async function putAPI<ReturnType>(path: string, init: RequestInit | undefined): Promise<ReturnType> {
  const res = await fetch(path, {
    method: 'PUT',
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer',
    ...init,
  });

  let data;

  try {
    data = await res.json();
  } catch (error) {
    // pass
  }

  if (res.ok) {
    return data;
  }

  throw Error(data?.message || res.statusText);
  //pass error to calling function
}

async function deleteAPI<ReturnType>(path: string, init: RequestInit | undefined): Promise<ReturnType> {
  const res = await fetch(path, {
    method: 'DELETE',
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer',
    ...init,
  });

  let data;

  try {
    data = await res.json();
  } catch (error) {
    // pass
  }

  if (res.ok) {
    return data;
  }

  throw Error(data?.message || res.statusText);
  //pass error to calling function
}

export const fetchAPI = {
  get: getAPI,
  post: postAPI,
  put: putAPI,
  delete: deleteAPI,
};
