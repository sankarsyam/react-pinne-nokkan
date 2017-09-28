export async function setResponse(response) {
  let data = await response.json();

  if (null != data.isAdmin && data.isAdmin === false) {
    const error = new Error(`Permission Denied.`);
    throw error;
  } else if (response.ok) {
    return data;
  } else {
    const error = new Error();
    error.message = data.message;
    throw error;
  }
}
