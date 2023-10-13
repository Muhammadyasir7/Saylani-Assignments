var mobiles= {
    apple:{
        iPhone_13_Pro:{
            name: "iPhone 13 Pro",
            memory: "128/256/512 GB",
            camera: "12MP (Triple camera system)",
            cpu: "A15 Bionic",
            battery: "3,240mAh",
            price: "Starting at 999 USD",
        },
        iPhone_13_Mini:{
            name: "iPhone 13 Mini",
            memory: "128/256 GB",
            camera: "12MP (Dual camera system)",
            cpu: "A15 Bionic",
            battery: "2,438mAh",
            price: "Starting at 699 USD",
        },
        iPhone_12_Pro_Max:{
            name: "iPhone 12 Pro Max",
            memory: "128/256/512 GB",
            camera: "12MP (Triple camera system)",
            cpu: "A14 Bionic",
            battery: "3,687mAh",
            price: "Starting at 1,099 USD",
        },        
        iphone11:{
            name: "iphone11",
            
        },
        iPhone_SE_2nd_Gen:{
            name: "iPhone SE (2nd Gen)",
            memory: "64/128/256 GB",
            camera: "12MP",
            cpu: "A13 Bionic",
            battery: "1,821mAh",
            price: "Starting at 399 USD",
        },

    },
    samsung:{
        Samsung_Galaxy_Z_Fol_5:{
            name: "Samsung Galaxy Z Fold 5",
            memory: "256/512 GB",
            camera:"50MP",
            cpu: "octa-core",
            battery: "440mAh",
            price: "599,999Rs",
            img : "images/SamsungGalaxyZFold5-b.jpg"
        },
        Samsung_Galaxy_S22_Ultra:{
            name: "Samsung Galaxy S22 Ultra",
            memory: "128/256/512 GB",
            camera: "108MP + 10MP + 12MP + 10MP",
            cpu: "Exynos 2200 (International) / Qualcomm Snapdragon 8 Gen 2 (USA)",
            battery: "5,000mAh",
            price: "Starting at 1,199 USD",
        },
        Samsung_Galaxy_S22:{
            name: "Samsung Galaxy S22",
            memory: "128/256 GB",
            camera: "50MP",
            cpu: "octa-core",
            battery: "4,000mAh",
            price: "Starting at 799 USD",
        },
        Samsung_Galaxy_Note20_Ultra:{
            name: "Samsung Galaxy Note 20 Ultra",
            memory: "128/512 GB",
            camera: "108MP",
            cpu: "Exynos 990 (International) / Qualcomm Snapdragon 865+ (USA)",
            battery: "4,500mAh",
            price: "Starting at 1,299 USD",
        },
        Samsung_Galaxy_A52:{
            name: "Samsung Galaxy A52",
            memory: "128/256 GB",
            camera: "64MP",
            cpu: "octa-core",
            battery: "4,500mAh",
            price: "Starting at 349 USD",
        },
        Samsung_Galaxy_ZFlip3:{
            name: "Samsung Galaxy Z Flip 3",
            memory: "128 GB",
            camera: "Dual 12MP",
            cpu: "Snapdragon 888",
            battery: "3,300mAh",
            price: "Starting at 999 USD",
        },
        Samsung_Galaxy_A12:{
            name: "Samsung Galaxy A12",
            memory: "32/64 GB",
            camera: "48MP",
            cpu: "octa-core",
            battery: "5,000mAh",
            price: "Starting at 179 USD",
        }
    },
    vivo:{
        Vivo_X60_Pro:{
            name: "Vivo X60 Pro",
            memory: "128/256 GB",
            camera: "48MP (Triple camera system)",
            cpu: "Qualcomm Snapdragon 870",
            battery: "4,200mAh",
            price: "Starting at 699 USD",
        },
        Vivo_V21:{
            name: "Vivo V21",
            memory: "128/256 GB",
            camera: "44MP (Front), 64MP (Rear)",
            cpu: "MediaTek Dimensity 800U",
            battery: "4,000mAh",
            price: "Starting at 299 USD",
        },
        Vivo_Y20:{
            name: "Vivo Y20",
            memory: "64/128 GB",
            camera: "13MP (Triple camera system)",
            cpu: "Qualcomm Snapdragon 460",
            battery: "5,000mAh",
            price: "Starting at 179 USD",
        },
        Vivo_S1_Pro:{
            name: "Vivo S1 Pro",
            memory: "128 GB",
            camera: "48MP (Quad camera system)",
            cpu: "Qualcomm Snapdragon 665",
            battery: "4,500mAh",
            price: "Starting at 299 USD",
        },
        Vivo_V15_Pro:{
            name: "Vivo V15 Pro",
            memory: "128 GB",
            camera: "32MP (Front), 48MP (Triple camera system)",
            cpu: "Qualcomm Snapdragon 675",
            battery: "3,700mAh",
            price: "Starting at 349 USD",
        }
    },
    oppo: {
        Oppo_Find_X3_Pro:{
            name: "Oppo Find X3 Pro",
            memory: "256 GB",
            camera: "50MP (Quad camera system)",
            cpu: "Qualcomm Snapdragon 888",
            battery: "4,500mAh",
            price: "Starting at 1,099 USD",
        },
        Oppo_Reno_5_Pro:{
            name: "Oppo Reno 5 Pro",
            memory: "128 GB",
            camera: "64MP (Quad camera system)",
            cpu: "MediaTek Dimensity 1000+",
            battery: "4,350mAh",
            price: "Starting at 549 USD",
        },
        Oppo_A74:{
            name: "Oppo A74",
            memory: "128 GB",
            camera: "48MP (Quad camera system)",
            cpu: "Qualcomm Snapdragon 662",
            battery: "5,000mAh",
            price: "Starting at 299 USD",
        },
        Oppo_F19_Pro:{
            name: "Oppo F19 Pro",
            memory: "128 GB",
            camera: "48MP (Quad camera system)",
            cpu: "MediaTek Helio P95",
            battery: "4,310mAh",
            price: "Starting at 349 USD",
        },
        Oppo_A53:{
            name: "Oppo A53",
            memory: "64/128 GB",
            camera: "13MP (Triple camera system)",
            cpu: "Qualcomm Snapdragon 460",
            battery: "5,000mAh",
            price: "Starting at 199 USD",
        },                                        
    }
}

var company = document.getElementById('company');
var model = document.getElementById('model');

company.innerHTML = "<option>Select option</option>";
model.innerHTML = "<option>Select option</option>"


for(var key in mobiles){
    company.innerHTML +=`
    <option value="${key}">${key.toUpperCase()}</option>
    `
}

function mobItem(){
    model.innerHTML = "";
    model.innerHTML = "<option>Select option</option>";

    for(var key1 in mobiles[company.value]){
    model.innerHTML +=`
    <option value="${key1}">${key1.toUpperCase()}</option>
    `}
}