for (var i = 1; i <= 100; i++) {
    if((i % 3 === 0) && (i % 5 === 0)) {
        document.write("<p style='color:blue'>" + i + " fizzbuzz </p>");
    }else if(i % 5 === 0) {
        document.write("<p style='color:red'>" + i + "  buzz </p>");
    }else if(i % 3 === 0){
        document.write("<p style='color:pink'>" + i + "  buzz </p>");
    }else{
        document.write("<p>" + i + "</p>");
    }
}