const COHORT_NAME = "2303-FTB-ET-WEB-FT";
const BASE = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export const loginUser = async (userObj) => {
  try {
    const response = await fetch(`${BASE}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    });
    const result = await response.json();
    console.log(result);
    return result;

      //localStorage.setItem("token", result.data.token);
      //const userResult = await myData(result.data.token);
  } catch (err) {
    console.error(err);
  }
};

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${BASE}/posts`);
    const { data } = await response.json();
    console.log(data.posts);
    return data.posts;
  } catch (err) {
    console.error(err);
  }
};

export const myData = async (token) => {
  try {
    const response = await fetch(`${BASE}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const registerUser = async (userAuth) => {
  try {
    const response = await fetch(`${BASE}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userAuth),
    });
    const result = await response.json();
    console.log(result);
    return result;

      //localStorage.setItem("token", result.data.token);
      //const userResult = await myData(result.data.token);
  } catch (err) {
    console.error(err);
  }
};

export const makePost = async (newPost, token) => {
  try {
    const response = await fetch(`${BASE}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newPost),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const deletePost = async (postId, token) => {
  try {
    //if user is NOT author, return
    
    const response = await fetch(`${BASE}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const result = await response.json();
   
    return result
  } catch (err) {
    console.error(err);
  }
}

// const postMessage = async () => {
//   try {
//     const response = await fetch(
//       `${BASE}/posts/5e8929ddd439160017553e06/messages`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${TOKEN_STRING_HERE}`,
//         },
//         body: JSON.stringify({
//           message: {
//             content: "Do you still have this?  Would you take $10 less?",
//           },
//         }),
//       }
//     );
//     const result = await response.json();
//     console.log(result);
//     return result;
//   } catch (err) {
//     console.error(err);
//   }
// };
