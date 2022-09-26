function myFunction() {
    let time = new Date();
    // let lineid = searchParams.get("uid");
    // let linename = searchParams.get("name");
    let name = document.querySelector('#name').value;
    let phone = document.querySelector('#phone').value;
    console.log(lineid);
    //let desk = document.querySelector('#desk').value;
    $.ajax({
        // 更新資料就要重新佈署一次，網址就會更改
        url: "https://script.google.com/macros/s/AKfycbymMgAzLykirOOKiSbtiEF41kNdVLWR8qnj-a7d2yaj_FQHD6liXCJImkp7xQS-En_yDw/exec",
        data: {
            "time": time,
            "lineid": lineid,
            "linename": linename,
            "name": name,
            "phone": phone,
            "desk": desk
        },

    });
    
                   $.ajax({
                        // 更新資料就要重新佈署一次，網址就會更改
                        url: "https://script.google.com/macros/s/AKfycbzxu2SizpiW9WlC_e_AeqwBKYr9_I-3TDH8A5nfLWpaVuy1OM_tbanOo5VCg85OfUDjcg/exec",
                        data: {
                            "time": time,
                            "lineid": lineid,
                            "desk": desk
                        },

                    });
                    var newhtml = '<h2>感謝您的配合，完成實聯制資料登錄</h2>';
                    var newhtml = newhtml + '<h2><a href="' + smsurl + '"> 發送 1922 中央指揮中心 簡訊實聯制</a></h2>'
                    var newhtml = newhtml + '<h4><br / >防疫期間，勤洗手、戴口罩，讓我們一起戰勝疫情！迎接美好生活</h4>';
                    var newhtml = newhtml +'<h6>本場所配合政府「COVID19（新冠肺炎）」防疫新生活運動，採行實聯制措施。依據「個人資料保護法之特定目的及個人資料之類別」代號012公共衛生或傳染病防治之特定目的，蒐集以上個人資料，且不得為目的外利用。所蒐集之資料僅保存 28 日，屆期銷毀。感謝您的配合。</h6>';
                    document.getElementById("app").innerHTML = newhtml;
                alert("填寫完成，謝謝有您！\r 邀您前往 1922 簡訊實聯制發送");
    window.location.href = smsurl;
};
