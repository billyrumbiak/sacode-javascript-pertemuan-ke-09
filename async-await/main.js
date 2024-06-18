/*
Tiga fungsi
1. anjingJalan-jalan
2. dapurBersih
3. buangSampah
*/

function anjingJalan(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const JalanBersamaAnjing = true;

                if(JalanBersamaAnjing){
                resolve("Hari ini ko jalan sama anjing");
                }else{
                    reject("Hari ini ko tidak jalan sama anjing");
                }
            
        }, 2000);
    });

}

function dapurBersih(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

        const kasihBersihDapur = false;
            
            if(kasihBersihDapur){
                resolve("Hari ini ko sudah bersihkan dapur");
            }else{
                reject("Hari ini ko tidak bersihkan dapur")
            }
            
        }, 1500);
    });

}

function buangSampah(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const telahBuangSampah = true;

            if(telahBuangSampah){
                resolve("Hari ini ko sudah buang sampah");
            }else{
                reject("Hari ini ko tidak buang sampah")
            }

            
        }, 1000);
    });

}

async function lakukanTugas(){

    try{
        const hasilAnjingJalan = await anjingJalan();
        console.log(hasilAnjingJalan);

        const hasilBersihkanDapur = await dapurBersih();
        console.log(hasilBersihkanDapur);
        
        const hasilBuangSampah = await buangSampah();
        console.log(hasilBuangSampah);
    }
    catch(error){
        console.error(error);
    }

}

lakukanTugas();