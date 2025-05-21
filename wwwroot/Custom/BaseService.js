export class BaseService {
  constructor(baseUrl, token = null) {
    this.baseUrl = baseUrl;
    this.token = token;
  }

  getHeaders() {
    const headers = {
      "Content-Type": "application/json",
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    return headers;
  }

  setToken(newToken) {
    this.token = newToken;
  }

  getAll() {
    return this.fetchApi("", "GET");
  }

  getById(id) {
    return this.fetchApi(`/${id}`, "GET");
  }

  create(data, isFormData = false) {
    return this.fetchApi("", "POST", data, isFormData);
  }

  update(id, data, isFormData = false) {
    return this.fetchApi(`/${id}`, "PUT", data, isFormData);
  }

  delete(id) {
    return this.fetchApi(`/${id}`, "DELETE");
  }

  find(data) {
    return this.fetchApi("/filter", "POST", data);
  }

  async query(keyword) {
    try {
      const response = await fetch(`${this.baseUrl}/query?query=${keyword}`, {
        method: "GET",
        headers: this.getHeaders(),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error searching items:", error);
      throw error;
    }
  }

  fetchApi(url, method, data = null, isFormData = false) {
    const headers = {
      Authorization: `Bearer ${this.token}`,
    };

    if (data && !isFormData) {
      headers["Content-Type"] = "application/json";
    }

    const options = {
      method: method,
      headers: headers,
    };

    if (data) {
      options.body = isFormData ? data : JSON.stringify(data);
    }

    return fetch(`${this.baseUrl}${url}`, options)
      .then(async (response) => {
        const contentType = response.headers.get("content-type");
        const isJson = contentType && contentType.includes("application/json");

        const responseData = isJson
          ? await response.json()
          : await response.text();

        if (!response.ok) {
          throw isJson ? responseData : { message: responseData };
        }

        return responseData;
      })
      .catch((error) => {
        console.error(
          `Error in ${method} request to ${this.baseUrl}${url}:`,
          error
        );
        throw error;
      });
  }

  fetchImage(fileName, folderName) {
    const headers = {};

    const options = {
      method: "GET",
      headers: headers,
    };

    let urlFetch = `http://localhost:5172/api/Resource/get-image?fileName=${fileName}&folderName=${folderName}`;
    return fetch(urlFetch, options)
      .then((response) => {
        console.log("Response", response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.blob().then((blob) => {
          return URL.createObjectURL(blob);
        });
      })
      .catch((error) => {
        console.error(`Error in GET request to ${urlFetch}:`, error);
        throw error;
      });
  }
}
