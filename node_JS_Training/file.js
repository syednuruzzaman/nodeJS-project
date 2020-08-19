const fs = require('fs');



//reading files
// fs.readFile('./docs/blog.txt', (err, data) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

//writing files
// fs.writeFile('./docs/blog1.txt', 'I am writing', () =>{
//     console.log('file is written');
// });


//directories
// if(!fs.existsSync('./assets')){

//     fs.mkdir('./assets', (err) => {
//         if(err){
//          console.log(err);
//         } 
//       console.log('folder is created');
//      });
// }
// else{
//     fs.rmdir('./assets', (err) => {
//         if(err) {
//             console.log(err)
//         }
//         console.log('folder deleted');
//     });
// }
//delete file:
// if(fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt', (err) =>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log('file deleted')
//         }
//     })
// }

// creating new file:
// fs.open('./docs/blog4.txt', 'w', function(err, file) { //'w' for write mode is mandatory
//     if(err){
//         console.log(err);
//     }
//     console.log('Saved');
// });

//append txt in a new file: 
// fs.appendFile('./docs/blog5.txt', 'Append this', function(err, file){
//     if (err){
//         console.log(err)
//     }
//     console.log('txt appended');
// })

//opening new file with write: 
// fs.writeFile('./docs/blog6.txt', 'Write this', (err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log('file created and written');
// })