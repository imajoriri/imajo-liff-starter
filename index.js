window.onload = function (e) {
  liff.init(function (data) {
    initializeApp(data);
  });

};

function initializeApp(data){
  // プロフィールを取得して、表示名（displayName)とトプ画を表示させる
  liff.getProfile().then(function (profile) {
    document.getElementById('displaynamefield').textContent = profile.displayName;

    var profilePictureDiv = document.getElementById('profilepicturediv');
    if (profilePictureDiv.firstElementChild) {
      profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
    }
    var img = document.createElement('img');
    console.log(profile.pictureUrl)
    img.src = profile.pictureUrl;
    img.alt = "Profile Picture";
    img.class = "rounded";
    profilePictureDiv.appendChild(img);

  }).catch(function (error) {
    window.alert("Error getting profile: " + error);
  });


  // ブラウザを開く
  document.getElementById('openwindowbutton').addEventListener('click', function () {
    liff.openWindow({
      url: 'https://line.me'
    });
  });

  // LIFFを閉じる
  document.getElementById('closewindowbutton').addEventListener('click', function () {
    liff.closeWindow();
  });

  // Botにメッセージを送信する
  document.getElementById('sendmessagebutton').addEventListener('click', function () {
    liff.sendMessages([
      {
        type: 'text',
        text: "これはLIFFから送られたメッセージだよ!!"
      }
    ]).then(function () {
      window.alert("Message sent");
    }).catch(function (error) {
      window.alert("Error sending message: " + error);
    });
  });

}

