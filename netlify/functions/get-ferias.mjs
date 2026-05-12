import { getStore } from "@netlify/blobs";

export default async (req, context) => {
  const store = getStore("ferias");

  try {
    const data = await store.get("registros", { type: "json" });
    return Response.json(data || []);
  } catch (e) {
    return Response.json([]);
  }
};

export const config = { path: "/api/get-ferias" };
