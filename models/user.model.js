import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,    // Use the type String (without quotes)
        required: true   // It's "required", not "require"
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

userSchema.pre("save", async function(next){
     if (this.isModified('password')) {
const newpassword = await bcrypt.hash(this.password,10);
this.password=newpassword;
     }
     next();
})

userSchema.static("matchpasswordandsendtoekn",async function(req,res){
    const {email,password}= req.body;
    const usercheck= await this.findOne({email})
    if(!usercheck){{
        alert("User not found please signup");
        res.redirect("/signup");
    }
    //  1st one woudl be the 
    else{
        try{
    const ismatch= await bcrypt.compare(password,usercheck.password)
if(!ismatch) return null;
 const token=createtoken(user)

 return token;

    }
    catch(Err){
      console.log(Err.message)
    }
}
})
export const usermodel = mongoose.model('user', userSchema);

