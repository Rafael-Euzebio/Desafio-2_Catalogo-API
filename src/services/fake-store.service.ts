import { api } from "@/lib/axios";

export class FakeStoreService {
  async getProducts() {
    const res = await api.get("/products");
    return res.data;
  }
}
