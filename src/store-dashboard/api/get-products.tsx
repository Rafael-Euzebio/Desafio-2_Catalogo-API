import { api } from "../../shared/axios";

export async function getProducts() {
    const { data } = await api.get("/products/category/jewelery");
    return data;
}