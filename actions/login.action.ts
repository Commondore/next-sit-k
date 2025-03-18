"use server";

export const loginAction = async (formData: FormData) => {
  const identifier = formData.get("identifier");
  const password = formData.get("password");

  console.log(identifier, password);
};
