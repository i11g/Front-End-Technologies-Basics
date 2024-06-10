function pascalTrinagle(rows) {
    
    let triangle =[] 

    for (let i = 0; i < rows; i++) {
        triangle[i]=[];
        triangle[i][0]=1
        for (let j = 0; j < i; j++) {
            triangle[i][i]=triangle[i-1][j-1]+triangle[i-1][j];
            
        }
        triangle[i][i]=1
    }

    return triangle
} 

function printPascalTriangle(rows) {
    const pascaltriangle=pascalTrinagle(rows); 
    for (let i = 0; i < pascaltriangle.length; i++) {
        console.log(pascaltriangle[i])        
    }

}
printPascalTriangle(5)