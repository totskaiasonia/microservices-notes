import { CategoryModel } from "../models/Category.js";

export const get = async (req, res) => {
    try {
        const categories = await CategoryModel.find();
        res.status(200).json(categories);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Server error"});
    }
}
export const post = async (req, res) => {
    try {
        const {name} = req.body;
        const categoryDoc = await CategoryModel.create({name});

        res.status(200).json(
            categoryDoc
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Server error"});
    }
}
export const put = async (req, res) => {
    try {
        const {id} = req.params;
        const {name} = req.body;

        const updatedDoc = await CategoryModel.findByIdAndUpdate({_id: id}, {name}, {new: true});

        res.status(200).json(
            updatedDoc
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Server error"});
    }
}
export const remove = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedDoc = await CategoryModel.findByIdAndDelete(id);

        res.status(200).json(
            deletedDoc
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Server error"});
    }
}