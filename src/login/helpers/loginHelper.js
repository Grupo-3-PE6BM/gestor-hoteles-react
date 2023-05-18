export const isAdmin = () => {
  return authUser("ADMIN_ROLE");
};

export const isSuperAdmin = () => {
  return authUser("DEV_ROLE");
};

export const isUser = () => {
  return authUser("USER_ROLE");
};

export const authUser = (rol) => {
  const token = localStorage.getItem("token");
  if (token) {
    const [header, payload, signature] = token.split(".");
    const decodedPayload = JSON.parse(atob(payload));
    const userRole = decodedPayload.rol;

    if (userRole === rol) {
      return true;
    }
  }
  return false;
};

export const isUserAuthenticated = () => {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
};
