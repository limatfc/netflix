export function loginNavigation(account) {
  let link = "";

  if (account?.role === "admin") link = "/admin-dashboard";
  if (account?.role === "client") link = "/client-dashboard";

  return link;
}
