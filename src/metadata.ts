/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/swagger": { "models": [[import("./task/dto/create-task.dto"), { "CreateTaskDto": { title: { required: true, type: () => String }, description: { required: true, type: () => String } } }]], "controllers": [[import("./task/task.controller"), { "TaskController": { "create": {} } }]] } };
};