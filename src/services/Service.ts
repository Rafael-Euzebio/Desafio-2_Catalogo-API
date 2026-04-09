import axios from "axios";
import type { Product } from "../models/Product";

const api = axios.create({
    baseURL: "https://fakestoreapi.com",
});

export async function getProducts(): Promise<Product[]> {
    const { data } = await api.get("/products");
    return data;
}

export async function getCategories(): Promise<string[]> {
    const { data } = await api.get("/products/categories");
    return data;
}

export async function getByCategory(category: string): Promise<Product[]> {
    const { data } = await api.get(`/products/category/${category}`);
    return data;
}