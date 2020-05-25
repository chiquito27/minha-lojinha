export default async function customFetch(path, method = "GET", data = {}) {
  const headers = new Headers({
    Accept: "application/json",
  });

  const init = {
    method,
    headers,
  };

  if (data && Object.keys(data).length > 0) {
    init.body = JSON.stringify(data);
    headers.append("Content-Type", "application/json");
  }

  const token = localStorage.getItem("token");
  const queryParams = `?token=${token}`;

  const res = await fetch(path + queryParams, init);

  if (!res.ok) {
    if (res.status === 400) {
      const errors = await res.json();
      return Promise.reject(errors);
    }
    if (res.status === 401 || res.status === 403) {
      // window.location.href = '/';
      return Promise.reject();
    }
    if (res.status === 404) {
      // window.location.href = '/notfound';
      return Promise.reject(res.status);
    }
    if (res.status === 405) {
      return Promise.reject();
    }

    if (res.status === 500) {
      const errors = await res.json();
      return Promise.reject(errors);
    }
  }
  if (res.headers.get("content-disposition")) {
    // it's a file. Just return as is
    return res;
  }

  return res.text().then((text) => (text ? JSON.parse(text) : {}));
}