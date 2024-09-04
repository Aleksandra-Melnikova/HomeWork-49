    let row1:string = '';
    let row2:string = '';
    for (let i:number = 1; i <= 8; i++) {
        if (i % 2 === 1) {
            row1 += '#';
        } else {
            row1 += ' ';
        }
    }
    for (let i:number = 1; i <= 8; i++) {
        if (i % 2 === 1) {
            row2 += ' ';
        } else {
             row2 += '#';
        }
     }
    let picture:string = '';
    for (let j:number = 1; j <= 8; j++) {
         if (j % 2 === 1) {
             picture += `${row1}` + `\n`;
        } else {
             picture += `${row2}` + `\n`;
         }
     }
    console.log(picture);

