import {Schema,model} from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const taskSchema = new Schema({
    title: {
        type: String,
        require: true,
        trim: true //para quitar los espacios
    },
    description: {
        type: String,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    },
}, {
    versionKey: false,
    timestamps: true //agrega el createAtt y updateAtt
});

taskSchema.plugin(mongoosePaginate);
export default model('Task',taskSchema)