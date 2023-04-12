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
    const { success, error, user: data } = await response.json();

    if (success) {
      const { token, message } = data;
      const { success, error, user } = await myData(token);
      if (user) {
        localStorage.setItem("token", token);
        return { token, message, user };
      }
      return { token, message, error };
    }
    if (!success && !error) {
      const { name, message } = data;
      return { name, message };
    }
  } catch (err) {
    console.error(err);
  }
};

const fakePostResp = {
  success: true,
  error: null,
  data: {
    posts: [
      {
        location: "[On Request]",
        willDeliver: false,
        messages: [],
        active: true,
        _id: "642762a8cd3bfb001620064e",
        author: {
          _id: "642762a8cd3bfb0016200648",
          username: "joe1234",
        },
        cohort: "642762a8cd3bfb0016200646",
        title: "Practically new Stradivarius",
        description:
          "I've really only used this three or four times.  I thought it would be a good purchase, shows what I know.",
        price: "$14.3 million",
        createdAt: "2023-03-31T22:46:00.837Z",
        updatedAt: "2023-03-31T22:46:00.880Z",
        __v: 0,
        isAuthor: false,
      },
      {
        location: "[On Request]",
        willDeliver: true,
        messages: [],
        active: true,
        _id: "642762a8cd3bfb001620064f",
        author: {
          _id: "642762a8cd3bfb0016200649",
          username: "jane1234",
        },
        cohort: "642762a8cd3bfb0016200646",
        title: "Golden Retriever puppies",
        description:
          "Not looking for any money, just want to find a good home for these four beautiful pups.",
        price: "free",
        createdAt: "2023-03-31T22:46:00.837Z",
        updatedAt: "2023-03-31T22:46:00.886Z",
        __v: 0,
        isAuthor: false,
      },
      {
        location: "Ames, IA",
        willDeliver: true,
        messages: [],
        active: true,
        _id: "642762a8cd3bfb0016200650",
        author: {
          _id: "642762a8cd3bfb001620064a",
          username: "caesar1234",
        },
        cohort: "642762a8cd3bfb0016200646",
        title: "NordicTrack Freestrider Elliptical Trainer",
        description: "To be honest, it is more amazing than my resolve.",
        price: "$1400, OBO",
        createdAt: "2023-03-31T22:46:00.837Z",
        updatedAt: "2023-03-31T22:46:00.891Z",
        __v: 0,
        isAuthor: false,
      },
    ],
  },
};

export const fetchPosts = async () => {
  try {
    // const response = await fetch(`${BASE}/posts`)
    // const { data } = await response.json();
    const { data } = fakePostResp;
    console.log(data.posts);
    // return data.posts;
    return data;
  } catch (err) {
    console.error(err);
  }
};

const fakeUserData = {
  posts: [
    {
      location: "[On Request]",
      willDeliver: false,
      messages: [
        {
          _id: "5e8d1f2539e7a70017a7c968",
          fromUser: {
            _id: "5e8d1f2539e7a70017a7c962",
            username: "jane1234",
          },
          content: "I am very much in the market for a fine violin.",
        },
      ],
      active: true,
      _id: "5e8d1f2539e7a70017a7c964",
      author: "5e8d1f2539e7a70017a7c961",
      title: "Practically new Stradivarius",
      description:
        "I've really only used this three or four times.  I thought it would be a good purchase, shows what I know.",
      price: "$14.3 million",
      createdAt: "2020-04-08T00:47:33.794Z",
      updatedAt: "2020-04-08T00:47:33.865Z",
      __v: 0,
    },
    {
      location: "Bronx, NY",
      willDeliver: false,
      messages: [],
      active: true,
      _id: "5e8d1f8647b6ce0017600593",
      title: "Schwinn Bicycle",
      price: "3.88",
      description: "This is a 19 speed bicycle, barely used.",
      author: "5e8d1f2539e7a70017a7c961",
      createdAt: "2020-04-08T00:49:10.248Z",
      updatedAt: "2020-04-08T00:49:10.248Z",
      __v: 0,
    },
  ],
  messages: [
    {
      _id: "5e8d1f2539e7a70017a7c968",
      post: {
        _id: "5e8d1f2539e7a70017a7c964",
        title: "Practically new Stradivarius",
      },
      fromUser: {
        _id: "5e8d1f2539e7a70017a7c962",
        username: "jane1234",
      },
      content: "I am very much in the market for a fine violin.",
    },
    {
      _id: "5e8d1f2539e7a70017a7c969",
      post: {
        _id: "5e8d1f2539e7a70017a7c965",
        title: "Golden Retriever puppies",
      },
      fromUser: {
        _id: "5e8d1f2539e7a70017a7c961",
        username: "joe1234",
      },
      content: "OMG Puppies... I'll take them all!",
    },
    {
      _id: "5e8d1fd747b6ce0017600594",
      content: "I really love this item.  Can I have it?",
      post: {
        _id: "5e8d1f2539e7a70017a7c965",
        title: "Golden Retriever puppies",
      },
      fromUser: {
        _id: "5e8d1f2539e7a70017a7c961",
        username: "joe1234",
      },
    },
  ],
  _id: "5e8d1f2539e7a70017a7c961",
  username: "joe1234",
  __v: 0,
};

export const myData = async (token) => {
  try {
    // const response = await fetch(`${BASE}/users/me`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${token}`
    //   },
    // });
    // const { success, error, data } = await response.json();
    return fakeUserData;
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
    if (result.data.token) {
      localStorage.setItem("token", result.data.token);
      const userResult = await myData(result.data.token);
      result.userResult = userResult;
      return result;
    }
    // You can log ▲▲▲ the result
    // here ▼▼▼ to view the json object before returning it
    console.log(result);
    return result;
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

// export const updatePost = async () => {
//   try {
//     // You will need to insert a variable into the fetch template literal
//     // in order to make the POST_ID dynamic.
//     // 5e8d1bd48829fb0017d2233b is just for demonstration.
//     const response = await fetch(`${BASE_URL}/posts/5e8d1bd48829fb0017d2233b`, {
//       method: "PATCH",
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       },
//       body: JSON.stringify({
//         post: {
//           title: "My favorite stuffed animal",
//           description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
//           price: "$480.00",
//           location: "New York, NY",
//           willDeliver: true
//         }
//       })
//     });
//     const result = await response.json();
//     console.log(result);
//     return result
//   } catch (err) {
//     console.error(err);
//   }
// }

// export const deletePost = async (postId, token) => {
//   try {
//     //if user is NOT author, return
//     const response = await fetch(`${BASE_URL}/posts/5e8d1bd48829fb0017d2233b`, {
//       method: "DELETE",
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       }
//     });
//     const result = await response.json();
//     console.log(result);
//     return result
//   } catch (err) {
//     console.error(err);
//   }
// }

//   const postMessage = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/posts/5e8929ddd439160017553e06/messages`, {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${TOKEN_STRING_HERE}`
//         },
//         body: JSON.stringify({
//           message: {
//             content: "Do you still have this?  Would you take $10 less?"
//           }
//         })
//       });
//       const result = await response.json();
//       console.log(result);
//       return result
//     } catch (err) {
//       console.error(err);
//     }
//   }
