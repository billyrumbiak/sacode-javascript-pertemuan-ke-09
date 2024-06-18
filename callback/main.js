// Callback

function fungsi1(callback){

    setTimeout(() => {
        console.log("Mulai");
        callback();
    }, 3000);

}

function fungsi2(){
    console.log("Tugas 1");
    console.log("Tugas 2");
    console.log("Selesai");
}

fungsi1(fungsi2);