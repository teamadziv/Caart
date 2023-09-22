import mongoose from "mongoose";
const Session = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    shop: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    isOnline: {
        type: Boolean,
        required: true,
    },
    scope: {
        type: String,
        required: true,
    },
    accessToken: {
        type: String,
        required: true,
    },
});
const SessionModel = mongoose.model("Session", Session);
export default SessionModel;