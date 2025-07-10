import{ Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'Email already exists'],
  },
    username: {
        type: String,
        required: [true, 'Username is required'],
        // match:[/^[a-zA-Z0-9_]+$/, ]
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
        required: [true, 'Image is required']
    }
});

// the "models" object is used to check if the model already exists in the application
// if it does, it will use the existing model, otherwise it will create a new one



const User = models.User || model('User', UserSchema);

export default User;