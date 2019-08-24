const mongoose=require('mongoose');
const TweetsSchema=mongoose.Schema({
  recentsearches:{}
    
})

module.exports=mongoose.model('Tweet',TweetsSchema);