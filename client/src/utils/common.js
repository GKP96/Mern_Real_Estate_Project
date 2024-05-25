export const header = {
  "Content-Type": "application/json",
  "Authorization":"",
};

export const setHeader = (token) =>{
  header.Authorization = `Bearer ${token}`
  return header;
}

export const url = "http://localhost:5050";
