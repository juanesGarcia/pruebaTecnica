const urluser="https://jsonplaceholder.typicode.com/users";
const urlpost="https://jsonplaceholder.typicode.com/posts";

export async function getUser(){
    try {
        const response = await fetch(urluser);
        const responseJson = await response.json();
        return responseJson;
        } catch (error) {
          console.error(error);
        }
  }

  export async function getPost(){
    try {
        const response = await fetch(urlpost);
        const responseJson = await response.json();
        return responseJson;
        } catch (error) {
          console.error(error);
        }
  }
  
  