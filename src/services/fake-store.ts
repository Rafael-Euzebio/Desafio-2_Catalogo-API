import { api } from "@/lib/axios";

export class FakeStoreService {
  async getProducts() {
    const res = await api.get("/products");
    console.log(res.data);
    return res.data;
  }
}
