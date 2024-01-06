import fs from 'fs';
import pdf from 'pdf-parse';
import { purpose } from '../src/JS/about';

let dataBuffer;

export function getResume() {
    let id;
    if (id = purpose.getElementById('#DA')) {
        dataBuffer = fs.readFileSync('../private/DA/Aaditya_Singh_Resume.pdf');

        pdf(dataBuffer).then(function(data){
            console.log(data.info);

        }).catch(function(error){
            console.log(error);
        });
    } else if(id = purpose.getElementById('#SDE')){
        dataBuffer = fs.readFileSync('../private/SDE/Aaditya_Singh_Resume.pdf');

        pdf(dataBuffer).then(function(data){
            console.log(data.info);

        }).catch(function(error){
            console.log(error);
        });
    } else{
        dataBuffer = fs.readFileSync('../private/WebD/Aaditya_Singh_Resume.pdf');

        pdf(dataBuffer).then(function(data){
            console.log(data.info);

        }).catch(function(error){
            console.log(error);
        });
    }
}
