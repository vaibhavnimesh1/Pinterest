const mongoose =require('mongoose')

const dataSchema= mongoose.Schema(

    {
        game:{
            default:"english",
            
        }
    }
)
