import axios from "axios";

const authBaseUrl = "https://presens-backend.onrender.com/api/v1";

// Endpoints
const loginEndpoint = `${authBaseUrl}/auth/login`;
const registerEndpoint = `${authBaseUrl}/auth/register`;
const registerStudentEndpoint = `${authBaseUrl}/student/register`;
const registerAttendanceEndpoint =`${authBaseUrl}/attendance/register`
const getAllAttendanceEndpoint = `${authBaseUrl}/attendance/get-all-attendance`
const takeAttendanceEndpoint = (id) => `${authBaseUrl}/attendance/take-attendance/${id}`;
// API Call Function
const apiCall = async (endpoint, method, data = {}, token = null) => {
  const headers = {
    accept: "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

   const options = {
     method: method,
     url: endpoint,
     //params: params ? params : {},
     data: data,
     headers: headers,
   };

  // try {
  //   const response = await axios.request(options);
  //   return response.data;
  // } catch (error) {
  //   console.log("error", error);
  //   return {};
  // }
  try {
    const response = await axios.request(options);
    console.log("API Call Successful:", response.data);
    return response.data;
  } catch (error) {
    console.log(
      "API Call Error:",
      error.response ? error.response.data : error.message
    );
    throw error.response ? error.response.data : error;
  }
};


// Register User Function
export const loginUser = (userData) => {
  return apiCall(loginEndpoint, "POST", userData);
};

export const registerUser = (userData) => {
  return apiCall(registerEndpoint, "POST", userData);
}


export const registerStudent = (userData) => {
  return apiCall(registerStudentEndpoint, "POST", userData);
};

export const registerAttendance = (userData, token) => {
  return apiCall(registerAttendanceEndpoint, "POST", userData, token);
};

export const getAllAttendance = (token) => {
  return apiCall(getAllAttendanceEndpoint, "GET", {}, token)
}

export const takeAttendance = (token, id, userData) => {
  return apiCall(takeAttendanceEndpoint(id), "PATCH", userData, token)
}


// Example Usage
// const newUser = {
//   username: "testuser",
//   email: "testuser@example.com",
//   password: "password123",
// };

// registerUser(newUser)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
