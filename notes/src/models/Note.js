import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            requiered: true,
        },
        content: {
            type: String,
            requiered: true,
        },
        category: {
            type: String,
            ref: 'Category'
        }
    },
    {
        timestamps: true,
    }
);

export const NoteModel = mongoose.model('Note', NoteSchema);