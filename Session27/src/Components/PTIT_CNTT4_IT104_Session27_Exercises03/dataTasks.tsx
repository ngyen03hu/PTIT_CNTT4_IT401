// src/dataTasks.ts

export interface IDataTask {
    id: number;
    title: string;
    description: string;
}

export const tasks: IDataTask[] = [
    {
        id: 1,
        title: "Học React Router",
        description: "Tìm hiểu cách sử dụng Dynamic Routes"
    },
    {
        id: 2,
        title: "Làm bài tập useNavigate",
        description: "Thực hành quay lại trang trước bằng useNavigate"
    },
    {
        id: 3,
        title: "Ôn TypeScript cơ bản",
        description: "Hiểu cách dùng interface và typing trong React"
    }
];
