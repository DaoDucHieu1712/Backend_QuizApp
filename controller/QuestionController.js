import Question from "../models/Question.js";

const QuestionController = {
  getAllQuestion: async (req, res) => {
    try {
      const questions = await Question.find();
      res.status(200).json(questions);
    } catch (error) {
      res.status(200).json(error);
    }
  },
  //GET QUESTION BY ID
  getQuestionById: async (req, res) => {
    try {
      const course = await Question.find({ _id: req.params.id });
      res.status(200).json(course);
    } catch (error) {
      res.status(200).json(error);
    }
  },
  //ADD NEW QUESTION
  addQuestion: async (req, res) => {
    try {
      const newQuestion = new Question(req.body);
      res.status(200).json(await newQuestion.save());
    } catch (error) {
      res.status(200).json(error);
    }
  },
  //UPDATE QUESTION
  updateQuestion: async (req, res) => {
    try {
      const question = await Question.findById(req.params.id);
      await question.updateOne({ $set: req.body });
      res.status(200).json("Update Successfully !");
    } catch (error) {
      res.status(200).json(error);
    }
  },
  //DELETE QUESTION
  deleteQuestion: async (req, res) => {
    try {
      await Question.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete Successfully !");
    } catch (error) {
      res.status(500).json(req.body);
    }
  },
};

export default QuestionController;
