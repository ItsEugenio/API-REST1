import Task from "../models/Tasks";
import { getPagination } from "../libs/getPagination";
export const getAllTasks = async (req, res) => {
  try {
    const { size, page, title } = req.query;

    const condition = title
      ? {
          title: { $regex: new RegExp(title), $options: "i" },
        }
      : {};

    const { limit, offset } = getPagination(page, size);

    const data = await Task.paginate(condition, { offset, limit });
    res.json({
      totalItems: data.totalDocs,
      tasks: data.docs,
      totaslPages: data.totalPages,
      currentPage: data.page - 1,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Algo fallo al solicitar las tareas",
    });
  }
};

export const createTask = async (req, res) => {
  if (!req.body.title) {
    return res
      .status(400)
      .send({ message: "El contenido no puede estas vacio" });
  }
  try {
    console.log(req.body);
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
      done: req.body.done ? req.body.done : false,
    });
    const taskSaved = await newTask.save();
    res.json(taskSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Algo fallo al crear la tarea",
    });
  }
};

export const findOneTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);
    if (!task)
      return res
        .status(404)
        .json({ massage: `La tarea con este id ${id} no existe` });
    res.json(task);
  } catch (error) {
    res.status(500).json({
      message:
        error.message || `Algo fallo al solicitar la tarea con el id ${id}`,
    });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({
      message: "Tarea eliminida correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message:
        error.message || `Algo fallo al eliminar la tarea con el id ${id}`,
    });
  }
};

export const findAllDoneTask = async (req, res) => {
  try {
    const tasks = await Task.find({ done: true });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message:
        error.message || "Algo fallo al solicitar todas las tareas completadas",
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Tarea Actualizada correctamente" });
  } catch (error) {
    res.status(500).json({
      message:
        error.message || `Algo fallo al actualizar la tarea con el id ${id}`,
    });
  }
};
