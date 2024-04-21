import { NoteModel } from "../models/Note.js";

export const get = async (req, res) => {
    try {
        const notes = await NoteModel.find();
        res.status(200).json(notes);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Server error"});
    }
}
export const post = async (req, res) => {
    try {
        const {title, content, category} = req.body;
        const noteDoc = await NoteModel.create({title, content, category});

        res.status(200).json(
            noteDoc
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Server error"});
    }
}
export const put = async (req, res) => {
    try {
        const {id} = req.params;
        const {title, content, category} = req.body;

        const updatedDoc = await NoteModel.findByIdAndUpdate({_id: id}, {title, content, category}, {new: true});

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
        const deletedDoc = await NoteModel.findByIdAndDelete(id);

        res.status(200).json(
            deletedDoc
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Server error"});
    }
}