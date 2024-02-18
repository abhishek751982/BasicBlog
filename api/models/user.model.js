import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        dafault: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw3eItajILiv1uYLU8CPNZpp&ust=1708379785888000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJimnePwtYQDFQAAAAAdAAAAABAE",
    },
}, {timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;