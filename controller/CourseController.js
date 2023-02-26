import Course from "../models/Course.js";

const CourseController = {
  //GET ALL COURSE
  getAllCourse: async (req, res) => {
    try {
      const courses = await Course.find();
      res.status(200).json(courses);
    } catch (error) {
      res.status(200).json(error);
    }
  },
  //GET COURSE BY ID
  getCourseById: async (req, res) => {
    try {
      const course = await Course.find({ _id: req.params.id });
      res.status(200).json(course);
    } catch (error) {
      res.status(200).json(error);
    }
  },
  //ADD NEW COURSE
  addCourse: async (req, res) => {
    try {
      const newCourse = new Course(req.body);
      res.status(200).json(await newCourse.save());
    } catch (error) {
      res.status(200).json(error);
    }
  },
  //UPDATE COURSE
  updateCourse: async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);
      await course.updateOne({ $set: req.body });
      res.status(200).json("Update Successfully !");
    } catch (error) {
      res.status(200).json(error);
    }
  },
  //DELETE COURSE
  deleteCourse: async (req, res) => {
    try {
      await Course.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete Successfully !");
    } catch (error) {
      res.status(500).json(req.body);
    }
  },
  //SEARCH COURSE
  searchCourse: async (req, res) => {
    try {
      const courses = await Course.find({
        name: { $regex: ".*" + req.params.text + ".*", $options: "i" },
      });
      res.status(200).json(courses);
    } catch (error) {
      res.status(500).json(req.body);
    }
  },
};

export default CourseController;
