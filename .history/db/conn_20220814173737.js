const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://emperror:cpcppdsa@cluster0.zclhnt7.mongodb.net/Intermediate?retryWrites=true&w=majority';

const client = new MongoClient(uri);

function main(){
    client.connect((err, db) => {
        if(db){
            console.log('connected successfully')
        }
    })
}