import api from "../../service/api.js";
import { Post } from "./postTypes";

// GET all
export const getPosts = () => api.get<Post[]>("/posts");

// GET by ID
export const getPost = (id: number) => api.get<Post>(`/posts/${id}`);

// POST
export const createPost = (post: Omit<Post, "id">) =>
  api.post<Post>("/posts", post);

// PUT
export const updatePost = (id: number, post: Partial<Post>) =>
  api.put<Post>(`/posts/${id}`, post);

// DELETE
export const deletePost = (id: number) => api.delete(`/posts/${id}`);
